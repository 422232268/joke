## Form表单
### 具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

### 何时使用#
#### 用于创建一个实体或收集信息。

#### 需要对输入的数据类型进行校验时。

### 表单#
<!--
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-19 15:43:03
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-10-19 16:51:23
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
-->
#### 我们为 form 提供了以下三种排列方式：

- 水平排列：标签和表单控件水平排列；（默认）

- 垂直排列：标签和表单控件上下垂直排列；

- 行内排列：表单项水平行内排列。

### 表单域#
#### 表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。

#### 这里我们封装了表单域 <Form.Item /> 。
## 快捷命令

```javascript
fi
```

<div style="display:none">
    "Print to console": {
            "prefix": "fi",
            "body": [
                "<Form.Item>",
                "    {getFieldDecorator('username', {",
                "    rules: [{ required: true, message: 'Please input your username!' }],",
                "    })(",
                "    <Input",
                "        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}",
                "        placeholder='Username'",
                "    />,",
                "    )}",
                "</Form.Item>"
            ],
            "description": "Log output to Form.Item"
}
</div>
