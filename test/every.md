<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:07:55
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-22 23:31:38
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->
<!-- es6 -->
<!-- Arr -->
# JavaScript Array every() 方法
## 实例
### 检测数组 ages 的所有元素是否都大于等于 18 :
```JavaScript
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.every(checkAdult);
}
```
## 输出结果：
```JavaScript
false
```

### 定义和用法
- every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。

- every() 方法使用指定函数检测数组中的所有元素：

    如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
    如果所有元素都满足条件，则返回 true。

*注意: every() 不会对空数组进行检测。*
*注意: every() 不会改变原始数组。*

## 语法

> array.every(function(currentValue,index,arr), thisValue)


## 参数说明
|参数|类型|描述|
|-|-|-|
|currentValue|any|必需。当前元素|
|index|Numbers|可选。当前元素的索引值。|
|arr|Array|可选。当前元素所属的数组对象。|
<br/>

<div style="display:none">
every((item, index, arr) => {
    console.log(item);
});
</div>



