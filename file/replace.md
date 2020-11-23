<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:07:55
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-23 18:26:59
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->
<!-- es5 -->
<!-- Str -->
# JavaScript replace() 方法
## 实例

### 在本例中，我们将使用 "W3School" 替换字符串中的 "Microsoft"：
```JavaScript
<script type="text/javascript">

var str="Visit Microsoft!"
document.write(str.replace(/Microsoft/, "W3School"))

</script>
```
### 输出结果:
```
Visit W3School!
```
### 定义和用法

- replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。



## 语法

> stringObject.replace(regexp/substr,replacement)


## 参数说明
|参数|描述|
|-|-|
|regexp/substr|必需。规定子字符串或要替换的模式的 RegExp 对象。请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。|
|replacement|必需。一个字符串值。规定了替换文本或生成替换文本的函数。|


## 返回值
- 一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。

## 说明
- 字符串 stringObject 的 replace() 方法执行的是查找并替换的操作。它将在 stringObject 中查找与 regexp 相匹配的子字符串，然后用 replacement 来替换这些子串。如果 regexp 具有全局标志 g，那么 replace() 方法将替换所有匹配的子串。否则，它只替换第一个匹配子串。

- replacement 可以是字符串，也可以是函数。如果它是字符串，那么每个匹配都将由字符串替换。但是 replacement 中的 $ 字符具有特定的含义。如下表所示，它说明从模式匹配得到的字符串将用于替换。
<br/>

|字符|替换文本|
|-|-|
|$1、$2、...、$99|与 regexp 中的第 1 到第 99 个子表达式相匹配的文本。|
|$&|与 regexp 相匹配的子串。|
|$`|位于匹配子串左侧的文本。|
|$'|位于匹配子串右侧的文本。|
|$$|直接量符号。|

<div style="display:none">
replace(//g);
</div>



