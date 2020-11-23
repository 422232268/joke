<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:07:55
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-23 18:32:11
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->
<!-- es5 -->
<!-- Str -->
# JavaScript split() 方法
## 实例

### 在本例中，我们将按照不同的方式来分割字符串：
```JavaScript
<script type="text/javascript">

var str="How are you doing today?"

document.write(str.split(" ") + "<br />")
document.write(str.split("") + "<br />")
document.write(str.split(" ",3))

</script>
```
### 输出结果:
```
How,are,you,doing,today?
H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?
How,are,you
```
### 定义和用法

- split() 方法用于把一个字符串分割成字符串数组。

## 语法

> stringObject.split(separator,howmany)


## 参数说明
|参数|描述|
|-|-|
|separator|必需。字符串或正则表达式，从该参数指定的地方分割 stringObject|
|howmany|可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。|


## 返回值
- 一个字符串数组。该数组是通过在 separator 指定的边界处将字符串 stringObject 分割成子串创建的。返回的数组中的字串不包括 separator 自身。

- 但是，如果 separator 是包含子表达式的正则表达式，那么返回的数组中包括与这些子表达式匹配的字串（但不包括与整个正则表达式匹配的文本）。
## 提示和注释
- 注释：如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字- 符之间都会被分割。

注释：String.split() 执行的操作与 Array.join 执行的操作是相反的。
<div style="display:none">
split('');
</div>



