# cython生成dll踩坑记（三）---变量共享篇
## 2023-10-15   

前两期谈了谈cython的编译生成dll与打包的踩坑，现在来谈谈多线程。   

* 坑点一, cython里extern并不能共享变量     

先看下面一行代码  
~~~
// py_import.h

#pragma once
#include <Windows.h>
 
int a = 0x03;
int *pa = &a;
 
void print_test(int test_a,int *test_pa){
	printf("%x %x \n",test_a,test_pa);
}
~~~

~~~
# test.pyx
# 
# cython:language_level=3
#
cdef extern from "py_import.h":
    int a
    int *pa
    void print_test(int test_a,int *test_pa)

# 只是为了生成头文件才写了这个_函数，不是我们的重点
cdef public void _(): 
    pass

print("from py ")
print_test(a,pa)
~~~

~~~
// Dllmain.cpp

#include <Windows.h>
#include "py_import.h"
#define EDLL extern "C" _declspec(dllexport)
 
// 这个是py解释器初始化函数，不是我们的重点
EDLL int py_init() {
    
    PyObject* pmodule = NULL;
    PyImport_AppendInittab(PY_MOUDLE_NAME, PY_MOUDLE_INIT);
    Py_Initialize();
    pmodule = PyImport_ImportModule(PY_MOUDLE_NAME);
    if (pmodule == NULL) {
        return 0;
    }
    else
    {
        return 1;
    }
}
 
// 这个是py解释器清除函数，不是我们的重点
EDLL int py_exit() {
    return Py_FinalizeEx();
}
 
// 注意dllmain里调用了py_import.h里的print_test()
BOOL APIENTRY DllMain( HMODULE hModule,
                       DWORD  ul_reason_for_call,
                       LPVOID lpReserved
                     )
{
    switch (ul_reason_for_call)
    {
    case DLL_PROCESS_ATTACH:
        printf("cpp:\n");
        print_test(a, pa);
        break;
    case DLL_THREAD_ATTACH:
        break;
    case DLL_THREAD_DETACH:
        break;
    case DLL_PROCESS_DETACH:
        break;
    }
    return TRUE;
}
~~~

简单来说，就是*test.pyx*和*Dllmain.cpp*都调用了*py_import.h*里的*print_test()*，输出a的数值和a的地址。   
假如两个文件是cpp，他们的结果是一样的，但假如一个文件是*cython*，另一个是*cpp*呢？

来测试一下吧
~~~
// 用这个文件生成exe来进行测试
 
#include <Windows.h>
 
typedef int (*py_init)();
typedef void (*py_exit)();
 
int main(){
    HMODULE moudle = LoadLibrary("test.dll"); // test.dll 就是上面编译出来的dll文件
    py_init _init = (py_init)GetProcAddress(moudle,"py_init");
    py_exit _exit = (py_exit)GetProcAddress(moudle,"py_exit");
    _init();
    _exit();
    system("pause");
}
 
~~~



```
// 输出结果
 
cpp:
3 e4146040
from py
3 e4146044
请按任意键继续. . .
 
```


根据结果，我们发现，cpp中的a地址和pyx中的a地址是不一样了，换句话说，pyx对py_import.h里的变量做了深拷贝   

所以，cython里extern并没有与cpp共享变量  

* 要共享变量，请使用public，在cython里声明   

现在，我们稍微改动一下代码,
~~~
// py_import.h

// 注意，这两个变量声明地方换成了pyx
#pragma once
#include <Windows.h>
 
void print_test(int test_a,int *test_pa){
	printf("%x %x \n",test_a,test_pa);
}

~~~



~~~
# test.pyx
# cython: language_level=3
#
cdef extern from "py_import.h":
    void print_test(int test_a,int *test_pa)

# 注意，两个变量用public声明定义了
cdef public int a = 0x03
cdef public int *pa = &a

# 只是为了生成头文件才写了这个_函数，可忽略
cdef public void _(): 
    pass

print("from py ")
print_test(a,pa)
~~~

~~~
// Dllmain.cpp
 
#include <Windows.h>
#include "py_import.h"
#define EDLL extern "C" _declspec(dllexport)
 
// 注意，调用print_test()放在了这里
EDLL int py_init() {
    
    PyObject* pmodule = NULL;
    PyImport_AppendInittab(PY_MOUDLE_NAME, PY_MOUDLE_INIT);
    Py_Initialize();
    pmodule = PyImport_ImportModule(PY_MOUDLE_NAME);
    if (pmodule == NULL) {
        return 0;
    }
    else
    {
        printf("cpp:\n");
        print_test(a, pa);
        return 1;
    }
}
 
// 这个是py解释器清除函数，不是我们的重点
EDLL int py_exit() {
    return Py_FinalizeEx();
}
 
// 注意dllmain里print_test()放到了上面的初始化函数里
BOOL APIENTRY DllMain( HMODULE hModule,
                       DWORD  ul_reason_for_call,
                       LPVOID lpReserved
                     )
{
    switch (ul_reason_for_call)
    {
    case DLL_PROCESS_ATTACH:

        break;
    case DLL_THREAD_ATTACH:
        break;
    case DLL_THREAD_DETACH:
        break;
    case DLL_PROCESS_DETACH:
        break;
    }
    return TRUE;
}
~~~

就改动这三个地方。   
简单来说，原来是在*py_import.h*里声明，变成了在*test.pyx*里声明。  

重新编译运行，看看结果

~~~
from py
3 e41467d8
cpp:
3 e41467d8
请按任意键继续. . .
~~~

* 坑点二，当放在pyx声明时，必须先初始化py解释后再调用该变量，否则变量处于未初始化状态。   

这次两个地方的地址就是一样了   

因此，我们就知道，声明放在cython里，才能和cython共享变量   

cython三期的踩坑记就这样完成了。   
本来想说说多线程的，但可惜我能知道的东西也不多。      

