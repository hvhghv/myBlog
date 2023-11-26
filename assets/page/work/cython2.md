# cython生成dll踩坑记（二）---打包篇

## 2023-10-14

上一期简单谈谈了cython生成dll的一些坑。  

这一期呢，就打算谈谈怎么打包了。   

假如你已经生成好dll了，然后写好exe调用这个dll，现在呢，你想这这些东西发布出去，结果发现在别人电脑里运行不了。。。。   

一看，发现这个cython生成的dll依赖python3x.dll，可每个人都不会全是程序猿呀，没有python的环境。。。

而且有时候，有python环境，反而会造成程序运行不了。。。  

不当谜语人了，直接开始吧   

* 通过embed包进行打包

python官网中除了标准包，还有一种embed包，里面集成了基本的python环境。下载才6m，解压后就10m。用来制作发布包十分合适。

* 坑点1，3.7.2embed包无法使用   
起初我是下了3.7.2embed包，发现居然用不了。后来下了3.8.1embed包。这个包就能直接用（不知道是什么问题。。）

下完后，会发现里面没有pip，没有tk库之类的（不过我还没有研究tk库，就只针对没有pip的情况）。   

所以，我们就把pip下回来，然后把第三方模块安装。当然，pip占用10m，还是比较大的。所以我们最后再把pip卸载掉。（直接uninstall pip，setuptools就好，而且这个卸载还也确实挺干净的）   

* 下面是我的方式  

首先，在embed包中，找到`python3x._pth`结尾的文件（x是版本号），修改里面内容，将site的#删去。

```
改成下面这样

python38.zip
.

# Uncomment to run site.main() automatically
import site
```  

之后，把pip装回来。你可以采用get-pip.py的方式或者将电脑上另一个python标准包中的pip，setuptools，easy_install.py,pkg_resources复制到Lib/site-packages里（当然这个文件夹需要你自己新建）

接着，下载需要的第三方模块
```
python -m pip install xxx
```

最后，将pip，setuptools卸载掉（只需卸载这两个就行啦）   

* 坑点二，先卸setuptools，再卸pip，不要问为什么。。。。。
~~~
python -m pip uninstall setuptools
python -m pip uninstall pip
~~~  

现在，基本的python打包环境就已经安装好了。直接把cython生成的dll拖进embed包里，然后exe加载这个dll就行了。     

这样就解决了依赖python3x.dll的问题。    


好了，接下来我们来谈另一个问题，上面的内容都走了一遍，结果发现运行后闪退。。。   

假如你电脑上还有另一个python环境，而且是相同版本的，那么，下面内容也许对你有帮助，假如不是，那就检查一下自己的代码，或者另寻他路。  

当时我遇到这个问题时，我也一直没想出个所以然。之后吃饭的时候，我突然意识到dll加载顺序问题。    
拿出调试器一看，果然,cython生成的dll需要python3x.dll，但是它并没有加载embed包下的python3x.dll，而是顺着系统环境变量直接找另一个标准包上的python3x.dll了。   
* 解决办法很简单，在加载cython的dll前提前加载embed包下的python3x.dll就行了   

~~~
    
// 之前的代码是这样的
// test.dll 是cython生成的dll
    
HMODULE moudle = LoadLibrary("test.dll");
 
~~~

~~~
 
// 修改后
 
LoadLibrary("python-3.8.1-embed-win32/python38.dll");
HMODULE moudle = LoadLibrary("test.dll");
 
~~~
 
test.dll依赖python38.dll，但我们提前加载好python38.dll，win装载器不会傻愣愣地顺着环境变量跑去另一个python环境，而且系统也不会重新装载，于是就解决问题了。   

打包的问题解决了，那exe也就能发布出去了    

下一期是关于cython变量共享踩坑记。


