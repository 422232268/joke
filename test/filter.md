<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:07:55
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-22 23:24:49
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->
<!-- es6 -->
<!-- Arr -->
# JavaScript Array filter() 方法
## 实例
### 返回数组 ages 中所有元素都大于 18 的元素:
```JavaScript
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}

```
## 输出结果：
```JavaScript
32,33,40
```

### 定义和用法
- filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
*注意:  filter() 不会对空数组进行检测。*
*注意:  filter() 不会改变原始数组。*

## 语法

> array.filter(function(currentValue,index,arr), thisValue)


## 参数说明
|参数|类型|描述|
|-|-|-|
|currentValue|any|必需。当前元素|
|index|Numbers|可选。当前元素的索引值。|
|arr|Array|可选。当前元素所属的数组对象。|
<br/>

<div style="display:none">
filter((item, index, arr) => {
    console.log(item);
});
</div>



