# Checkbox - 复选框

## 基本用法

<div class="demo">
    <div>
        <s-checkbox v-model="checked1" label="one">Item One</s-checkbox>&nbsp;
        <s-checkbox v-model="checked1" label="two">Item Two</s-checkbox>&nbsp;
        <s-checkbox v-model="checked1" label="three">Item Three</s-checkbox>&nbsp;
        <br><br>
        checked: {{ checked1 }}
    </div>
</div>

```
<s-checkbox v-model="checked1" label="one">Item One</s-checkbox>
<s-checkbox v-model="checked1" label="two">Item Two</s-checkbox>
<s-checkbox v-model="checked1" label="three">Item Three</s-checkbox>

checked: {{ checked1 }}


module.exports = {
    data() {
        return {
            checked1: []
        }
    }
};
```

## `label`的数据类型
`label`的数据类型不仅仅可以是字符串，还可以是数值、数组。利用数组类型，可以轻松实现 checkbox 的多选和全选：

<div class="demo">
    <div>
        <s-checkbox v-model="checked2" :label="['one', 'two', 'three']">All</s-checkbox>&nbsp;
        <s-checkbox v-model="checked2" label="one">Item One</s-checkbox>&nbsp;
        <s-checkbox v-model="checked2" label="two">Item Two</s-checkbox>&nbsp;
        <s-checkbox v-model="checked2" label="three">Item Three</s-checkbox>&nbsp;
        <br><br>
        checked: {{ checked2 }}
    </div>
</div>

```
<s-checkbox v-model="checked2" :label="['one', 'two', 'three']">All</s-checkbox>
<s-checkbox v-model="checked2" label="one">Item One</s-checkbox>
<s-checkbox v-model="checked2" label="two">Item Two</s-checkbox>
<s-checkbox v-model="checked2" label="three">Item Three</s-checkbox>

checked: {{ checked2 }}


<script>
    module.exports = {
        data() {
            return {
                checked2: []
            }
        }
    };
</script>
```
## 禁用状态

<div class="demo">
    <div>
        <s-checkbox v-model="checked3" label="one" :disabled="true">Item One</s-checkbox>
        &nbsp;
        <s-checkbox v-model="checked3" label="two" :disabled="true">Item Two</s-checkbox>
        <br><br>
        checked: {{ checked3 }}
    </div> 
</div>

```
<s-checkbox v-model="checked3" label="one" :disabled="true">Item One</s-checkbox>
<s-checkbox v-model="checked3" label="two" :disabled="true">Item Two</s-checkbox>

checked: {{ checked3 }}
```

<script>
    module.exports = {
        data() {
            return {
                checked1: [],
                checked2: [],
                checked3: ['one']
            }
        }
    };
</script>

## 配置

<div class="demo">
    <s-table
        :columns="[{
            key: 'argument',
            head: '参数'
        }, {
            key: 'type',
            head: '类型'
        }, {
            key: 'optional',
            head: '可选值'
        }, {
            key: 'default',
            head: '默认值'
        }, {
            key: 'introduction',
            head: '说明'
        }]"
        :rows="[{
            argument: 'v-model',
            type: 'Array',
            optional: '-',
            default: '-',
            introduction: '已选择的 checkbox 的 label 集合'
        }, {
            argument: 'label',
            type: 'String, Number, Array',
            optional: '-',
            default: '-',
            introduction: 'checkbox 的值'
        }, {
            argument: 'disabled',
            type: 'Boolean',
            optional: '-',
            default: 'false',
            introduction: '是否禁用'
        }]">
    </s-table>
</div>

