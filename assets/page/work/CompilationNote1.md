## 1. 中括号[]作取值符号时，只有用在寄存器上才是有效的。   
* mov ecx,[eax] （有效，相当于取地址为eax的值）
* mov ecx,[temp] (无效，不论加不加括号都是取temp的值)   

## 2. mov 右边为寄存器取值操作时，左边也为寄存器
* mov ecx,[eax] （正确）   
* mov temp,[eax] （错误）   

## 3. mov 与 取值符号搭配时，两者均为寄存器，左边的寄存器可以用低位
* mov al,[eax] （正确）  

## 4. 强制类型转换(* ptr)   
* mov byte ptr temp,eax （取eax的前1个字节，放到temp中）   
* mov word ptr temp,eax （取eax的前2个字节，放到temp中）
* mov word ptr [ecx + 2],eax （取eax的前2个字节，放到地址为ecx + 2中）