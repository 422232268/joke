<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:07:55
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-22 23:27:10
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->
<!-- es6 -->
<!-- Arr -->
# JavaScript forEach() 方法
## 实例
### 列出数组的每个元素：
```JavaScript
<button onclick="numbers.forEach(myFunction)">点我</button>
<p id="demo"></p>

<script>
demoP = document.getElementById("demo");
var numbers = [4, 9, 16, 25];

function myFunction(item, index) {
    demoP.innerHTML = demoP.innerHTML + "index[" + index + "]: " + item + "<br>";
}
</script>
```
## 输出结果：
```JavaScript
index[0]: 4
index[1]: 9
index[2]: 16
index[3]: 25
```

### 定义和用法
- forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。

*注意: forEach() 对于空数组是不会执行回调函数的。*

## 语法

> array.forEach(function(currentValue, index, arr), thisValue)


## 参数说明
|参数|类型|描述|
|-|-|-|
|currentValue|any|必需。当前元素|
|index|Numbers|可选。当前元素的索引值。|
|arr|Array|可选。当前元素所属的数组对象。|
<br/>

<div style="display:none">
forEach((item, index, arr) => {
    console.log(item);
});
</div>



