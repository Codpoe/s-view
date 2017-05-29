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
<s-checkbox v-model="checked1" label="one">Item One</s-checkbox>&nbsp;
<s-checkbox :value="checked1" label="two">Item Two</s-checkbox>&nbsp;
<s-checkbox :value="checked1" label="three">Item Three</s-checkbox>&nbsp;
<br><br>
checked: {{ checked1 }}


module.exports = {
    data() {
        return {
            checked1: []
        }
    }
};
```

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

<script>
    module.exports = {
        data() {
            return {
                checked1: [],
                checked2: []
            }
        }
    };
</script>

```
div class="demo">
    <div>
        <s-checkbox :value="checked2" :label="['one', 'two', 'three']">All</s-checkbox>&nbsp;
        <s-checkbox :value="checked2" label="one">Item One</s-checkbox>&nbsp;
        <s-checkbox :value="checked2" label="two">Item Two</s-checkbox>&nbsp;
        <s-checkbox :value="checked2" label="three">Item Three</s-checkbox>&nbsp;
        <br><br>
        checked: {{ checked2 }}
    </div>
</div>

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
            argument: 'value',
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
        }]">
    </s-table>
</div>

