---
date: 2019-12-013
tag:
  - JavaScript
author: 杜世宏
location: 北京
---

# _JavaScript 对象 or 数组深拷贝_

**lastUpdated: 2023-7-27**

> - 声明一个 deepCopy 函数；
> - 声明一个变量`target`，根据数据源（`source`）格式给其赋初始值；
> - `for...in`循环遍历对象 or 数组，如果当前属性`source[key]`不是对象，就把`source[key]`复制到`target`中，如果是个对象就递归调用`deepCopy`函数，直到所有属性不再是对象为止，拷贝结束。

```JavaScript

const obj = {
  k0: null,
  k2: undefined,
  k5: true,
  k6: false,
  k7: 0,
  k9: '',
  k1: 1,
  k3: [],
  k4: function () {
    console.log('我是k4函数')
  },
  k21: {
    k3: 3,
    k4: 4,
    k5: {
      k6: 6,
      k7: 7,
      k8: {
        k9: 9,
        k10: [1, 2, 3, 4, 5, 6, 7, {
          k1: 1,
          k2: 2,
          k3: null,
          k4: [ 444, 555 ]
        }]
      }
    }
  }
}

const deepCopy = (source) => {
  const target = Array.isArray(source) ? [] : {}
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === 'object' && source[key] !== null) {
        target[key] = deepCopy(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

const res = deepCopy(obj)

console.log('obj: ', obj)
console.log('res: ', res)
console.log(obj === res) // 输出false 代表着两个对象没有引用关系了， 是两个不同的对象， 只是长得一样。

```
<!-- README.md -->
## Comment area

<Vssue />