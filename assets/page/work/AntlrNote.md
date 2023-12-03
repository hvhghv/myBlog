# Antlr学习与探索 

## 2023-12-01

刚开始建博客的时候，在markdown这里呢，没有适合我需求的框架。于是就自己去写。

不过回想起来，拿正则去解析markdown，未免也太抽象了\~\~\~  

最近了解到了antlr，发现确实是个好东西。于是就去学了学一下。

然后就用上自己的博客。

### antlr的一些注意事项

* 语法解析器和词法解析器分别编写

antlr可以直接一个文件直接写就行，不区分语法解析器和词法解析器，但是这样就少了词法解析器的一些比较好用的功能。

所以，我的习惯是，新建两个文件，将语法解析器和词法解析器区分就好了。


那么这个时候，两个文件的开头应该是这样

~~~
// m.g4
grammar m;
options { tokenVocab = mLexer; }

// ...
~~~

~~~
// mLexer.g4
lexer grammar mLexer;

// ...
~~~

注意如果你的的第一个文件名为`m.g4`,那么另一个就应为`mLexer.g4`,要不然后期是编译不了的

> 其实也可以把`m.g4`改为`mParser.g4`的，之后`mParser.g4`开头`grammar`改为`parser grammar`，不过笔者也没尝试过（程序能跑就行哈哈）




### 如何去编写antlr内容

> 本文需要对antlr的语法有一定的了解

本来，`antlr`拥有动作，语义判定，错误处理等强大的功能的。但是，这些似乎是语言相关的（笔者也没验证过，只是我是这样理解的）

另一方面，也存在着解析的目标，逻辑比较复杂的情况

所以，我就围绕着`antlr`的`pushMode`,`popMode`,`mode`这些功能来编写词法解析器。

只需要按照这个下面这个简单的模板来设计，就能很快编写好词法解析器文件了
~~~
入口(pushMode) + 内容 + 出口(popMode)
~~~

有了词法解析器，也就能很快的编写语法解析器
而语法解析器，就对每一个mode内部各个词法进行打包一下，比如将一个字符组成一个字符串之类的
每一处语法对应一处词法的mode，之后再整合起来，就能实现一个完整的解析器了。

下面这些是我总结出来的经验

* 词法解析器里面少用`+`或者`*`号，这些建议留到语法解析器里面处理
  因为这可能会导致词法解析器死啃一个词法导致其他词法失效的问题

* 只要有入口，有出口，就直接无脑写出一个mode来就好了。剩下的交给语法解析器


### 自已编写的markdown

下面就开源一份我自己编写的markdown的g4文件

这份为`md.g4`
~~~
grammar md;
options { tokenVocab = mdLexer; }

init: expr*;

expr: 
	  h1_expr
	| h2_expr
	| h3_expr
	| h4_expr
	| h5_expr
	| h6_expr
	| code_text_expr
	| divide_expr 
	| quote_expr
	| list_expr
	| text_expr
	| space_expr
	
	;

// EXPR
h1_expr: h1_element;
h2_expr: h2_element;
h3_expr: h3_element;
h4_expr: h4_element;
h5_expr: h5_element;
h6_expr: h6_element;
code_text_expr: code_text_element;
divide_expr: divide_element;
list_expr: list_data;
text_expr: text_element;
quote_expr : quote_data;
space_expr: space_element;


// head
h1_element: H1 all_head_string STRINGEND;
h2_element: H2 all_head_string STRINGEND;
h3_element: H3 all_head_string STRINGEND;
h4_element: H4 all_head_string STRINGEND;
h5_element: H5 all_head_string STRINGEND;
h6_element: H6 all_head_string STRINGEND;
all_head_string: HEADSTRING+;


// CODE_TEXT_MODE_R
code_text_element: CODE_TEXT all_code_text_string CODE_TEXT_END;
all_code_text_string: CODE_TEXT_STRING+;

// IF_LINK_IMAGE_TAB_MODE_R
link_element:
	(LINK_TAB | TEXT_LINK_TAB | QUOTE_LINK_TAB | LIST_LINK_TAB) all_link_image_string IF_LINK_IMAGE_TAB_MBT_END all_link_image_string IF_LINK_IMAGE_SBT_END;

image_element:
	(IMAGE_TAB | TEXT_IMAGE_TAB | QUOTE_IMAGE_TAB | LIST_IMAGE_TAB) all_link_image_string IF_LINK_IMAGE_TAB_MBT_END all_link_image_string IF_LINK_IMAGE_SBT_END;

all_link_image_string: IF_LINK_IMAGE_TAB_STRING*;

// BOLD_ITALIC_MODE_R
bold_italic_element:
	(BOLD_ITALIC | TEXT_BOLD_ITALIC | QUOTE_BOLD_ITALIC | LIST_BOLD_ITALIC) all_bold_italic_string BOLD_ITALIC_END;

all_bold_italic_string: BOLD_ITALIC_STRING*;

// BOLD_MODE_R
bold_element:
	(BOLD | TEXT_BOLD | QUOTE_BOLD | LIST_BOLD) all_bold_string BOLD_END;
all_bold_string: BOLD_STRING*;

// ITALIC_MODE_R
italic_element:
	(ITALIC | TEXT_ITALIC | QUOTE_ITALIC | LIST_ITALIC) all_italic_string ITALIC_END;
all_italic_string: ITALIC_STRING*;

// CODE_MODE_R
code_element:
	(CODE | TEXT_CODE | QUOTE_CODE | LIST_CODE) all_code_string CODE_END;
all_code_string: CODE_STRING+;

// TEXT_MODE_R
text_element:
	all_text_context* TEXT_END;

all_text_context: 
	(link_element | image_element | bold_italic_element | bold_element | italic_element | code_element | commend_text_string | tranform_text_string);

commend_text_string: (TEXT | TEXT_STRING)+;
tranform_text_string: (TRAMFORM_MEAN_4 | TRAMFORM_MEAN |TEXT_TRAMFORM_4);

// QUOTE_MODE_R
quote_element:
	quote_head all_quote_context* QUOTE_MODE_END;

quote_head: QUOTE;

all_quote_context:
	(link_element | image_element | bold_italic_element | bold_element | italic_element | code_element | commend_quote_string | tranform_quote_string);

commend_quote_string: QUOTE_MODE_STRING+;
tranform_quote_string: QUOTE_TRAMFORM_4;

// LIST_MODE_R
list_element:
	list_head all_list_context* LIST_TAB_END;
list_head: LIST_TAB;

all_list_context:
	(link_element | image_element | bold_italic_element | bold_element | italic_element | code_element | commend_list_string | tranform_list_string);

commend_list_string: LIST_TAB_STRING+;
tranform_list_string: LIST_TRAMFORM_4;

// DIVIDE_R
divide_element: DIVIDE;

// SPACE_R
space_element: SPACE;

// LIST_data quote_data
list_data: 
	list_element all_list_quote_context*;

quote_data: 
	quote_element all_list_quote_context*;

all_list_quote_context:
	(text_element | quote_element | list_element);

~~~

这份为`mdLexer.g4`
~~~
lexer grammar mdLexer;

TRAMFORM_MEAN_4: ('\\\\') -> pushMode(TEXT_MODE);
TRAMFORM_MEAN: ('\\') -> skip,pushMode(TEXT_MODE);

H1: '#' (' ' | '\t')+ -> pushMode(head);
H2: '##' (' ' | '\t')+ -> pushMode(head);
H3: '###' (' ' | '\t')+ -> pushMode(head);
H4: '####' (' ' | '\t')+ -> pushMode(head);
H5: '#####' (' ' | '\t')+ -> pushMode(head);
H6: '######' (' ' | '\t')+ -> pushMode(head);

// 这里预留为CODE_TEXT
DIVIDE:    (' ' | '\t')* ('--' | '**' | '__') ('-' | '*' | '_')+ ' '* '\r'? '\n';
QUOTE:     (' ' | '\t')* ('>')+ -> pushMode(QUOTE_MODE);
LIST_TAB:  
    (' ' | '\t')* ((([0-9])+ '.') | ( '*' | '-' ))  (' ' | '\t')+ -> pushMode(LIST_TAB_MODE);

IMAGE_TAB: (' ' | '\t')* '![' -> pushMode(IF_LINK_IMAGE_TAB_MODE);
LINK_TAB: (' ' | '\t')* '[' -> pushMode(IF_LINK_IMAGE_TAB_MODE);
BOLD_ITALIC: ('***' | '___') -> pushMode(BOLD_ITALIC_MODE);
BOLD: ('**' | '__') -> pushMode(BOLD_MODE);
ITALIC: ('*' | '_') -> pushMode(ITALIC_MODE);
CODE: ('`' | '~') -> pushMode(CODE_MODE);

SPACE: (' '|'\t')* '\r'? '\n';
WS: (' '|'\t') -> skip;
TEXT: . -> pushMode(TEXT_MODE);

mode head;

STRINGEND: ' '* '\r'? '\n' -> popMode;
HEADSTRING: ' ' ~' ' | ~' ' ;
HEAD_WS: ' ' -> skip;

mode CODE_TEXT_MODE;

// 这里预留为CODE_TEXT_END
CODE_TEXT_STRING: .;


mode IF_LINK_IMAGE_TAB_MODE;

IF_LINK_IMAGE_TAB_MBT_END: '](';
IF_LINK_IMAGE_SBT_END: ')' -> popMode;
IF_LINK_IMAGE_TAB_STRING: .;

mode BOLD_ITALIC_MODE;
BOLD_ITALIC_END: ('***' | '___') -> popMode;
BOLD_ITALIC_STRING: .;

mode BOLD_MODE;
BOLD_END: ('**'| '__') -> popMode;
BOLD_STRING: .;

mode ITALIC_MODE;
ITALIC_END: ('*'| '_') -> popMode;
ITALIC_STRING: .;

mode CODE_MODE;
CODE_END: ('`' | '~') -> popMode;
CODE_STRING: .;


mode TEXT_MODE;


TEXT_TRAMFORM_4:
	'\\\\'
	| '\\`'
	| '\\*'
	| '\\_'
	| '\\['
	| '\\]'
	| '\\('
	| '\\)'
	| '\\{'
	| '\\}'
	| '\\#'
	| '\\-'
	| '\\+'
	| '\\.'
	| '\\!'
	| '\\|'
	| '\\~';
TEXT_END: '\r'? '\n' -> popMode;

TEXT_IMAGE_TAB: (' ' | '\t')? '![' -> pushMode(IF_LINK_IMAGE_TAB_MODE);
TEXT_LINK_TAB: (' ' | '\t')? '[' -> pushMode(IF_LINK_IMAGE_TAB_MODE);
TEXT_BOLD_ITALIC: (' ' | '\t')? ('***'| '___') -> pushMode(BOLD_ITALIC_MODE);
TEXT_BOLD: (' ' | '\t')? ('**'| '__') -> pushMode(BOLD_MODE);
TEXT_ITALIC: (' ' | '\t')? ('*'| '_') -> pushMode(ITALIC_MODE);
TEXT_CODE: (' ' | '\t')? ('`' | '~') -> pushMode(CODE_MODE);


TEXT_STRING: ~(' ' | '\t' | '\r' | '\n') | (' ' | '\t') ~(' ' | '\t' | '\\' | '\r' | '\n');
TEXT_WS: (' ' | '\t') -> skip;

mode QUOTE_MODE;
QUOTE_TRAMFORM_4:
	'\\\\'
	| '\\`'
	| '\\*'
	| '\\_'
	| '\\['
	| '\\]'
	| '\\('
	| '\\)'
	| '\\{'
	| '\\}'
	| '\\#'
	| '\\-'
	| '\\+'
	| '\\.'
	| '\\!'
	| '\\|'
	| '\\~';

QUOTE_MODE_END: (' ' | '\t')* '\r'? '\n' -> popMode;

QUOTE_IMAGE_TAB: (' ' | '\t')? '![' -> pushMode(IF_LINK_IMAGE_TAB_MODE);
QUOTE_LINK_TAB: (' ' | '\t')? '[' -> pushMode(IF_LINK_IMAGE_TAB_MODE);
QUOTE_BOLD_ITALIC: (' ' | '\t')? ('***' | '___') -> pushMode(BOLD_ITALIC_MODE);
QUOTE_BOLD: (' ' | '\t')? ('**' | '__') -> pushMode(BOLD_MODE);
QUOTE_ITALIC: (' ' | '\t')? ('*' | '_') -> pushMode(ITALIC_MODE);
QUOTE_CODE: (' ' | '\t')? ('`' | '~') -> pushMode(CODE_MODE);

QUOTE_MODE_STRING: ~(' ' | '\t' | '\r' | '\n') | (' ' | '\t') ~(' ' | '\t' | '\\' | '\r' | '\n');
QUOTE_WS: (' ' | '\t') -> skip;

mode LIST_TAB_MODE;

LIST_TRAMFORM_4:
	'\\\\'
	| '\\`'
	| '\\*'
	| '\\_'
	| '\\['
	| '\\]'
	| '\\('
	| '\\)'
	| '\\{'
	| '\\}'
	| '\\#'
	| '\\-'
	| '\\+'
	| '\\.'
	| '\\!'
	| '\\|'
	| '\\~';

LIST_TAB_END: (' ' | '\t')* '\r'? '\n' -> popMode;

LIST_IMAGE_TAB: (' ' | '\t')? '![' -> pushMode(IF_LINK_IMAGE_TAB_MODE);
LIST_LINK_TAB: (' ' | '\t')? '[' -> pushMode(IF_LINK_IMAGE_TAB_MODE);
LIST_BOLD_ITALIC: (' ' | '\t')? ('***' | '___') -> pushMode(BOLD_ITALIC_MODE);
LIST_BOLD: (' ' | '\t')? ('**' | '__') -> pushMode(BOLD_MODE);
LIST_ITALIC: (' ' | '\t')? ('*' | '_') -> pushMode(ITALIC_MODE);
LIST_CODE: (' ' | '\t')? ('`' | '~') -> pushMode(CODE_MODE);

LIST_TAB_STRING: ~(' ' | '\t' | '\r' | '\n') | (' ' | '\t') ~(' ' | '\t' | '\\' | '\r' | '\n');
LIST_TAB_WS: (' ' | '\t') -> skip;

~~~

其中`CODE_TEXT`处为

###### CODE_TEXT: (' ' | '\t')* ('```' | '~~~') ~('\n')* '\n' -> pushMode(CODE_TEXT_MODE);

而`CODE_TEXT_END`处为

###### CODE_TEXT_END: (' ' | '\t')* ('```' | '~~~') ~('\n')* '\n' -> popMode;

你问我为什么不把这两个填到上面一起，因为这个博客就是用这个来解析markdown的，而我的markdown解析器在解析代码文本是存在bug的（就是一旦识别出两处代码文本的标记符，就直接归为代码文本了），而且也懒得去改了（反正一般情况下也不会出现）

