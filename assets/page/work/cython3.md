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
