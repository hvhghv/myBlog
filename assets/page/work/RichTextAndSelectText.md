# 在flutter中关于多行SelectableText.rich下无法全选的问题    

## 2023-6-28

在使用markdown的时候，发现使用多行SelectableText.rich的组件时，文本选中体验非常不好，而且也难以全选。     

最后改成了SelectionArea(child:Text.rich())这种写法，就能达到比较满意的效果。