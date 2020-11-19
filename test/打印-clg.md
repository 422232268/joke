<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:07:55
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-10-08 17:26:48
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->
# 打印命令

### 此命令能够快速的答应内容到控制台
<br/>

## 定义和用法
<br/>

### console.log() 方法用于在控制台输出信息。
### 该方法对于开发过程进行测试很有帮助。

##### 提示: 在测试该方法的过程中，控制台需要可见 (浏览器按下 F12 打开控制台)。
<br/>

```javascript
console.log(message);
```

## 参数说明
|参数|类型|描述|
|-|-|-|
|message|String 或 Object|必需，控制台上要显示的信息。|
<br/>

## 快捷命令
```javascript
clg
```

<div style="display:none">
    "Print to console": {
            "prefix": "clg",
            "body": [
                "console.log('$1');",
                "$2"
            ],
            "description": "Log output to console"
    }
</div>



