<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:07:55
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-23 10:25:25
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->
<!-- es5 -->
<!-- Obj -->

## 定义和用法
- Object.assign( target, source, source1 ) 方法用于对象的合并

- 将源对象（source）的所有可枚举属性，复制到目标对象（target）

- 拷贝的属性是有限制的

- 只拷贝源对象的自身属性（不拷贝继承属性）

- 也不拷贝不可枚举的属性（enumerable: false）

- 原始类型会被包装为对象

- 异常会打断后续拷贝任务


## 语法

```javascript
    Object.assign( target, source, source1 )
```

## 参数 Values

|参数|描述|
|-|-|
|target|目标对象
|source|源对象
|source1|源对象1

## 返回值

|Type|描述|
|-|-|
|Object|返回一个新对象

## 实例

```js
   const obj3 = {a: {b:1}};
　　const obj4 = Object.assign({}, obj3);
　　obj3.a.b = 2;
    console.log(obj4.a.b)
　　// 输出结果：2
```

<div style="display:none">
assign( target, source, source1 )
</div>
