<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:07:55
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-23 18:22:04
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->
<!-- es5 -->
<!-- Str -->
# JavaScript indexOf() 方法
## 实例

### 在字符串中查找 "ain":
```JavaScript
var str="The rain in SPAIN stays mainly in the plain";
var n=str.match(/ain/g);
```
### 输出结果:
```
ain,ain,ain
```
### 定义和用法

- match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。

- 如果想了解更多正则表达式教程请查看本站的： RegExp 教程 和我们的 RegExp 对象参考手册。

- 注意： match() 方法将检索字符串 String Object，以找到一个或多个与 regexp 匹配的文本。这个方法的行为在很大程度上有赖于 regexp 是否具有标志 g。如果 regexp 没有标志 g，那么 match() 方法就只能在 stringObject 中执行一次匹配。如果没有找到任何匹配的文本， match() 将返回 null。否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息。



## 语法

> string.match(regexp)


## 参数说明
|参数|描述|
|-|-|
|regexp|必需。规定要匹配的模式的 RegExp 对象。如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，将其转换为 RegExp 对象。|


## 返回值

|类型|描述|
|-|-|
|Array|存放匹配结果的数组。该数组的内容依赖于 regexp 是否具有全局标志 g。 如果没找到匹配结果返回 null 。|

<br/>

<div style="display:none">
match(//g);
</div>



