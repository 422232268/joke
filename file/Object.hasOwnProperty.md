<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:07:55
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-23 20:16:13
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->
<!-- es5 -->
<!-- Obj -->

# JavaScript Object.hasOwnProperty() 方法
## 实例
### 判断某一属性是否未该对象数据所有
```JavaScript
o = new Object();
o.propOne = null;
o.hasOwnProperty('propOne'); // 返回 true
o.propTwo = undefined;
o.hasOwnProperty('propTwo'); // 返回 true
```

### 定义和用法
- Object.hasOwnProperty()方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

## 语法

> Object.hasOwnProperty(prop)

## 参数说明
|参数|描述|
|-|-|
|prop|要检测的属性的 String 字符串形式表示的名称，或者 Symbol。|

## 返回值
- 用来判断某个对象是否含有指定的属性的布尔值 Boolean。

<br/>

<div style="display:none">
hasOwnProperty(obj)
</div>



