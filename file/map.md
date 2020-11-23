<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:07:55
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-23 20:00:32
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->
<!-- es6 -->
<!-- Arr -->
# JavaScript map() 方法
## 实例
### 返回一个数组，数组中元素为原始数组的平方根:
```JavaScript
var numbers = [4, 9, 16, 25];

function myFunction() {
    x = document.getElementById("demo")
    x.innerHTML = numbers.map(Math.sqrt);
}
</script>
```
## 输出结果：
```JavaScript
2,3,4,5
```

### 定义和用法
- map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

- map() 方法按照原始数组元素顺序依次处理元素。

*注意： map() 不会对空数组进行检测。*

*注意： map() 不会改变原始数组。*

## 语法

> array.map(function(currentValue,index,arr), thisValue)

## 参数说明
|参数|类型|描述|
|-|-|-|
|currentValue|any|必需。当前元素|
|index|Numbers|可选。当前元素的索引值。|
|arr|Array|可选。当前元素所属的数组对象。|
|thisValue|可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象。|
<br/>

<div style="display:none">
map((item, index, arr) => {
    console.log(item);
});
</div>



