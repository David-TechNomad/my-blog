---
date: 2019-12-013
tag:
  - JavaScript
author: 杜世宏
location: 北京
---

# javascript 时间戳和日期字符串相互转换

```JavaScript
// 获取当前时间戳(以s为单位)
var timestamp = Date.parse(new Date());
timestamp = timestamp / 1000;
//当前时间戳为：1403149534
console.log("当前时间戳为：" + timestamp);

//另一个方法获取当前时间戳
console.log(+new Date());
console.log(Number(new Date()));
console.log(Date.now());

// 获取某个时间格式的时间戳
var stringTime = "2014-07-10 10:21:12";
var timestamp2 = Date.parse(new Date(stringTime));
timestamp2 = timestamp2 / 1000;
//2014-07-10 10:21:12的时间戳为：1404958872
console.log(stringTime + "的时间戳为：" + timestamp2);

// 将当前时间换成时间格式字符串
var timestamp3 = 1403058804;
var newDate = new Date();
newDate.setTime(timestamp3 * 1000);
// Wed Jun 18 2014
console.log(newDate.toDateString());

// Wed, 18 Jun 2014 02:33:24 GMT
console.log(newDate.toGMTString());

// 2014-06-18T02:33:24.000Z
console.log(newDate.toISOString());

// 2014-06-18T02:33:24.000Z
console.log(newDate.toJSON());

// 2014年6月18日
console.log(newDate.toLocaleDateString());

// 2014年6月18日 上午10:33:24
console.log(newDate.toLocaleString());

// 上午10:33:24
console.log(newDate.toLocaleTimeString());

// Wed Jun 18 2014 10:33:24 GMT+0800 (中国标准时间)
console.log(newDate.toString());

// 10:33:24 GMT+0800 (中国标准时间)
console.log(newDate.toTimeString());

// Wed, 18 Jun 2014 02:33:24 GMT
console.log(newDate.toUTCString());

Date.prototype.format = function(format) {
  var date = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S+": this.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in date) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
    }
  }
  return format;
}
console.log(newDate.format('yyyy-MM-dd h:m:s'));
```
