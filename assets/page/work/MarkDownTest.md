Markdown is the **best**!

  
* It has [links](https://dart.dev).
  It has... 

&nbsp;
&nbsp;
&nbsp;  

-----   

```
import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'dart:html';

int innerWidth = window.innerWidth ?? 500;
int innerHeight = window.innerHeight ?? 1000;

// 字体颜色
TextStyle textsytle_lightblue = const TextStyle(color: Color.fromRGBO(173, 207, 245, 1));
TextStyle textsytle_lightblue2 = const TextStyle(color: Color.fromRGBO(118, 177, 243, 1.0));
TextStyle textsytle_lightblue3 = const TextStyle(color: Color.fromRGBO(124, 192, 217, 1.0));

// 导航栏主题
Color appbarbackgroundColor = const Color.fromRGBO(225, 245, 254, 0.4);
Color appbarshadowColor = const Color.fromRGBO(118, 214, 255, 0.3);
double appbarelevation = 50;
Color appbarforegroundColor = const Color.fromRGBO(173, 207, 245, 1.0); // 导航栏字体颜色
String appbarname = "hvh洋的小站";


// 抽屉主题
Color drawerscrimcolor = const Color.fromRGBO(0, 0, 0, 0.15); //抽出抽屉后的背景颜色
Color drawcardshadowcolor = const Color.fromRGBO(72, 72, 72, 0.0); // 抽屉卡片
Color drawcardcolor = const Color.fromRGBO(255, 255, 255, 0.0);
Color drawcardlistcolor = const Color.fromRGBO(241, 249, 255, 0.5019607843137255); //抽屉背景色
MarkdownStyleSheet MarkdownDraw = MarkdownStyleSheet(h1: textsytle_lightblue,);
double drawcardvertical = 20;
double drawcardhorizontal = 10;
double drawbottemmargethorizontal = 0;
double drawbottemmargetvertical = 20;
double drawcardheight = 300;

// 页面基色
Color bodyblackcolor = const Color.fromRGBO(238, 251, 253, 1.0); // 背景色

// 日记主题
Color bodycardcolor = const Color.fromRGBO(245, 252, 255, 1.0);
Color bodycardshadowcolor = Colors.black;
double bodycardvertical = 100;
double bodycardhorizontal = innerWidth>500?100:20;
double bodycardminheight = 700;
double bodycardelevation = 20;
double MarkdownBodyCard1_padding_v = 15;
double MarkdownBodyCard1_padding_h = 20;
MarkdownStyleSheet MarkdownBodyCard1 = MarkdownStyleSheet(h1: textsytle_lightblue3,h1Padding:EdgeInsets.symmetric(vertical: MarkdownBodyCard1_padding_v,horizontal: MarkdownBodyCard1_padding_h),h2Padding:EdgeInsets.symmetric(vertical: MarkdownBodyCard1_padding_v,horizontal: MarkdownBodyCard1_padding_h),pPadding: EdgeInsets.symmetric(vertical: MarkdownBodyCard1_padding_v,horizontal: MarkdownBodyCard1_padding_h),);


// 文章list主题
Color workcardcolor = const Color.fromRGBO(245, 252, 255, 1.0);
Color workcardshadowcolor = Colors.black;
EdgeInsetsGeometry WorkListMargin = EdgeInsets.symmetric(vertical: 30,horizontal:innerWidth>800?300:20);
double topMargin = 50;
double WorkCardHeight = 100;
double MarkdownWorkCard_padding_v = 2;
double MarkdownWorkCard_padding_h = 20;
double WorkListElevation = 10;
Decoration WorkListDecoration = BoxDecoration(color: Color.fromRGBO(245, 252, 255, 1.0));
EdgeInsetsGeometry WorkListPadding = EdgeInsets.symmetric(vertical: 10);
MarkdownStyleSheet MarkdownWorkListCard = MarkdownStyleSheet(
    h1: textsytle_lightblue3,
    h1Padding:EdgeInsets.symmetric(vertical: MarkdownWorkCard_padding_v,horizontal: MarkdownWorkCard_padding_h),
    h2Padding:EdgeInsets.symmetric(vertical: MarkdownWorkCard_padding_v,horizontal: MarkdownWorkCard_padding_h),
    pPadding: EdgeInsets.symmetric(vertical: MarkdownWorkCard_padding_v,horizontal: MarkdownWorkCard_padding_h),
    p: TextStyle(overflow: TextOverflow.clip));

// work主题
double WorkHeight = 100;
Color Workcardshadowcolor = Colors.black;
double WorkCardElevation1 = bodycardelevation;
EdgeInsetsGeometry WorkMargin = EdgeInsets.symmetric(vertical: 30,horizontal:innerWidth>500?100:20);
EdgeInsetsGeometry WorkPadding = EdgeInsets.only(top: 30,bottom: 0);
Decoration WorkDecoration = BoxDecoration(color: Colors.white70);
BoxConstraints WorkConstraints = BoxConstraints(minHeight: 5000);
MarkdownStyleSheet MarkdownWorkCard = MarkdownBodyCard1;
```
    
-----

* ...and _so much more_...