---
date: 2019-12-013
tag:
  - JavaScript
author: 杜世宏
location: 北京
---

# JavaScript 继承机制之混合模式

```JavaScript
/**
 * 混合方式
 *
 * 这种继承方式使用构造函数定义类，并非使用任何原型。
 * 对象冒充的主要问题是必须使用构造函数方式，这不是最好的选择。
 * 不过如果使用原型链，就无法使用 带参数的构造函数了。
 * 开发者如何选择呢？答案很简单，两者都用。
 *
 * 创建类的最好方式是用构造函数定义属性，用原型定义方法。
 * 这种方式同样适用于继承机制，用对象冒充继承构造函数的属性，用原型链继承 prototype 对象的方法。
 * 用这两种方式写个例子，代码如下：
 */
function ClassA(name) {
  this.name = name;
}

ClassA.prototype.sayName = function () {
  console.log(this.name);
};

function ClassB(name, age) {
  ClassA.call(this, name); // 用对象冒充继承构造函数的属性
  this.age = age;
}

ClassB.prototype = new ClassA(); // 用原型链继承 prototype 对象的方法。

ClassB.prototype.sayAge = function () {
  console.log(this.age);
};

var objA = new ClassA("李雷A");
var objB = new ClassB("李雷B", 20);

objA.sayName();	// 输出 "李雷A"

objB.sayAge();	// 输出 20
objB.sayName();	// 输出 "李雷B"
```
