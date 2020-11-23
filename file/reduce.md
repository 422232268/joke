<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:07:55
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-23 19:58:03
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->
<!-- es6 -->
<!-- Arr -->
# JavaScript reduce() 方法
## 实例
### 计算数组元素相加后的总和：
```JavaScript
var numbers = [65, 44, 12, 4];

function getSum(total, num) {
    return total + num;
}
function myFunction(item) {
    document.getElementById("demo").innerHTML = numbers.reduce(getSum);
}
```
## 输出结果：
```JavaScript
125

```

### 定义和用法
- reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

- reduce() 可以作为一个高阶函数，用于函数的 compose。

*注意: reduce() 对于空数组是不会执行回调函数的。*

## 语法

> array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


## 参数说明
|参数|描述|
|-|-|-|
|total|必需。初始值, 或者计算结束后的返回值。|
|currentValue|必需。当前元素|
|currentIndex|可选。当前元素的索引|
|arr|可选。当前元素所属的数组对象。|
<br/>

<div style="display:none">
reduce(function(total, currentValue, currentIndex, arr), initialValue)
</div>



