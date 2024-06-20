---
date: 2023-9-07
lastUpdated: 2023-9-07
tag:
  - TypeScript
author: 杜世宏
location: 北京
---

# TypeScript

**lastUpdated: 2023-9-07**

## 简介

### 什么是 TypeScript
首先，我对 TypeScript 的理解如下：

[TypeScript](https://www.typescriptlang.org/) 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6 的支持，它由 Microsoft 开发，代码[开源于 GitHub](https://github.com/Microsoft/TypeScript) 上。

其次引用[官网](https://www.typescriptlang.org/)的定义：

> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.

翻译成中文即是：

> TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。

#### 为什么选择 TypeScript
[TypeScript 官网](https://www.typescriptlang.org/)列举了一些优势，不过我更愿意自己总结一下：

TypeScript 增加了代码的可读性和可维护性
* 类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了
* 可以在编译阶段就发现大部分错误，这总比在运行时候出错好
* 增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等
TypeScript 非常包容
* TypeScript 是 JavaScript 的超集，.js 文件可以直接重命名为 .ts 即可
* 即使不显式的定义类型，也能够自动做出类型推论
* 可以定义从简单到复杂的几乎一切类型
* 即使 TypeScript 编译报错，也可以生成 JavaScript 文件
* 兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取
TypeScript 拥有活跃的社区
* 大部分第三方库都有提供给 TypeScript 的类型定义文件
* Google 开发的 Angular2 就是使用 TypeScript 编写的
* TypeScript 拥抱了 ES6 规范，也支持部分 ESNext 草案的规范

TypeScript 的缺点

任何事物都是有两面性的，我认为 TypeScript 的弊端在于：

* 有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）、枚举类型（Enums）等前端工程师可能不是很熟悉的概念
* 短期可能会增加一些开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，TypeScript 能够减少其维护成本
* 集成到构建流程需要一些工作量
* 可能和一些库结合的不是很完美
大家可以根据自己团队和项目的情况判断是否需要使用 TypeScript。
### 安装 TypeScript

TypeScript 的命令行工具安装方法如下：

```Javascript
npm install -g typescript
```

以上命令会在全局环境下安装 tsc 命令，安装完成之后，我们就可以在任何地方执行 tsc 命令了。

编译一个 TypeScript 文件很简单：

```Javascript
tsc hello.ts
```
我们约定使用 TypeScript 编写的文件以 .ts 为后缀，用 TypeScript 编写 React 时，以 .tsx 为后缀。

#### 编辑器

TypeScript 最大的优势便是增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等。

主流的编辑器都支持 TypeScript，这里我推荐使用 [Visual Studio Code](https://code.visualstudio.com/)。

它是一款开源，跨终端的轻量级编辑器，内置了 TypeScript 支持。

另外它本身也是[用 TypeScript 编写的](https://github.com/Microsoft/vscode/)。

[下载安装]https://code.visualstudio.com/

获取其他编辑器或 IDE 对 TypeScript 的支持：

* [Sublime Text](https://github.com/Microsoft/TypeScript-Sublime-Plugin)
* [Atom](https://github.blog/2022-06-08-sunsetting-atom/)
* [WebStorm](https://www.jetbrains.com/webstorm/)
* [Vim](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim)
* [Emacs](https://github.com/ananthakumaran/tide)
* [Eclipse](https://github.com/palantir/eclipse-typescript)
* [Visual Studio 2015](https://www.microsoft.com/en-us/download/details.aspx?id=48593)
* [Visual Studio 2013](https://www.microsoft.com/en-us/download/details.aspx?id=48739)

### Hello TypeScript

我们从一个简单的例子开始。

将以下代码复制到 hello.ts 中：
```Javascript
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));
```
然后执行

tsc hello.ts
这时候会生成一个编译好的文件 hello.js：
```Javascript
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
```
TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以。

上述例子中，我们用 : 指定 person 参数类型为 string。但是编译为 js 之后，并没有什么检查的代码被插入进来。

TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。

let 是 ES6 中的关键字，和 var 类似，用于定义一个局部变量，可以参阅 let 和 const 命令。

下面尝试把这段代码编译一下：
```Javascript
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = [0, 1, 2];
console.log(sayHello(user));
```
编辑器中会提示错误，编译的时候也会出错：

index.ts(6,22): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
但是还是生成了 js 文件：
```Javascript
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = [0, 1, 2];
console.log(sayHello(user));
```
TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。

如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError 即可。关于 tsconfig.json，请参阅[官方手册（中文版）](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)。

## 基础

### 原始数据类型
JavaScript 的类型分为两种：原始数据类型（[Primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)）和对象类型（Object types）。

原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 [ES6 中的新类型 Symbol](https://es6.ruanyifeng.com/#docs/symbol)。

本节主要介绍前五种原始数据类型在 TypeScript 中的应用。

#### 布尔值
布尔值是最基础的数据类型，在 TypeScript 中，使用 boolean 定义布尔值类型：
```Javascript
let isDone: boolean = false;

// 编译通过
// 后面约定，未强调编译错误的代码片段，默认为编译通过
```
注意，使用构造函数 Boolean 创造的对象不是布尔值：
```Javascript
let createdByNewBoolean: boolean = new Boolean(1);

// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
```
事实上 new Boolean() 返回的是一个 Boolean 对象：

let createdByNewBoolean: Boolean = new Boolean(1);
直接调用 Boolean 也可以返回一个 boolean 类型：

let createdByBoolean: boolean = Boolean(1);
在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。其他基本类型（除了 null 和 undefined）一样，不再赘述。

#### 数值
使用 number 定义数值类型：
```Javascript
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```
编译结果：
```Javascript
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
```
其中 0b1010 和 0o744 是 ES6 中的二进制和八进制表示法，它们会被编译为十进制数字。

#### 字符串
使用 string 定义字符串类型：
```Javascript
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
```
编译结果：
```Javascript
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
```
其中 ` 用来定义 ES6 中的模板字符串，${expr} 用来在模板字符串中嵌入表达式。

#### 空值
JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
```Javascript
function alertName(): void {
    alert('My name is Tom');
}
```
声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
```Javascript
let unusable: void = undefined;
```
#### Null 和 Undefined
在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
```Javascript
let u: undefined = undefined;
let n: null = null;
```
与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
```Javascript
// 这样不会报错
let num: number = undefined;
// 这样也不会报错
let u: undefined;
let num: number = u;
```
而 void 类型的变量不能赋值给 number 类型的变量：
```Javascript
let u: void;
let num: number = u;
```
// Type 'void' is not assignable to type 'number'.
#### 参考
* [Basic Types（中文版）](https://www.typescriptlang.org/docs/handbook/basic-types.html)
* [Primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
* [ES6 中的新类型 Symbol](https://es6.ruanyifeng.com/#docs/symbol)
* [ES6 中的二进制和八进制表示法](https://es6.ruanyifeng.com/#docs/number#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%92%8C%E5%85%AB%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95)
* [ES6 中的模板字符串](https://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2)

<!-- README.md -->
## Comment area

<Vssue />