<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:07:55
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-23 20:09:41
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->
<!-- es5 -->
<!-- Obj -->

# JavaScript Object.keys() 方法
## 实例
### 获取对象数据所有的key
```JavaScript
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj));
```
## 输出结果：
```JavaScript
['2', '7', '100']
```

### 定义和用法
- Object.keys 返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。

## 语法

> Object.keys(obj)

## 参数说明
|参数|描述|
|-|-|
|obj|要返回其枚举自身属性的对象。|

## 返回值
- 一个表示给定对象的所有可枚举属性的字符串数组。

## 注意
- 在ES5里，如果此方法的参数不是对象（而是一个原始值），那么它会抛出 TypeError。在ES2015中，非对象的参数将被强制转换为一个对象。

<br/>

<div style="display:none">
keys(obj)
</div>



