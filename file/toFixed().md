<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:07:55
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-23 20:24:04
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->
<!-- es5 -->
<!-- Num -->
# JavaScript toFixed() 方法
## 实例

### 把数字转换为字符串，结果的小数点后有指定位数的数字：
```JavaScript
<script type="text/javascript">

var num = 5.56789;
var n=num.toFixed(2);

</script>
```
### 输出结果:
```
5.57
```
### 定义和用法
- toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。

## 语法

> number.toFixed(x)

## 参数说明
|参数|描述|
|-|-|
|x|必需。规定小数的位数，是 0 ~ 20 之间的值，包括 0 和 20，有些实现可以支持更大的数值范围。如果省略了该参数，将用 0 代替。|

## 返回值

|类型|描述|
|-|-|
|String|小数点后有固定的 x 位数字|

<br/>

<div style="display:none">
toFixed()
</div>



