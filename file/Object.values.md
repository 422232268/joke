<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:07:55
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-23 20:13:48
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->
<!-- es5 -->
<!-- Obj -->

# JavaScript Object.values() 方法
## 实例
### 获取对象数据所有的value
```JavaScript
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(anObj));
```
## 输出结果：
```JavaScript
['a', 'b', 'c']
```

### 定义和用法
- Object.values()返回一个数组，其元素是在对象上找到的可枚举属性值。属性的顺序与通过手动循环对象的属性值所给出的顺序相同。

## 语法

> Object.values(obj)

## 参数说明
|参数|描述|
|-|-|
|obj|要返回其枚举自身属性的对象。|

## 返回值
- 一个包含对象自身的所有可枚举属性值的数组。

<br/>

<div style="display:none">
values(obj)
</div>



