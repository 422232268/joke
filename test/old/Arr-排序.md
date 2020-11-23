<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-11-02 13:57:35
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-02 14:32:11
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->

## 定义和用法
- sort() 方法用于对数组的元素进行排序。

- 排序顺序可以是字母或数字，并按升序或降序。

- 默认排序顺序为按字母升序。

*注意：当数字是按字母顺序排列时"40"将排在"5"前面。*

- 使用数字排序，你必须通过一个函数作为参数来调用。

- 函数指定数字是按照升序还是降序排列。

- 这些说起来可能很难理解，你可以通过本页底部实例进一步了解它。

*注意： 这种方法会改变原始数组！*

## 语法

```javascript
    fruitsArr.sort(sortfunction)
```

## 参数 Values

|参数|描述|
|-|-|
|sortfunction|可选。规定排序顺序。必须是函数。

## 返回值

|Type|描述|
|-|-|
|Array|对数组的引用。请注意，数组在原数组上进行排序，不生成副本。

## 实例

```js
var points = [40,100,1,5,25,10];
points.sort(function(a,b){return a-b});
//fruits输出结果：100,40,25,10,5,1
```

<div style="display:none">
    sort(function(a,b){return b-a})
</div>
