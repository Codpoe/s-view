# Checkbox - 复选框

## 基本用法

<div class="demo">
    <div>
        <s-checkbox :value="checked1" label="one">Item One</s-checkbox>&nbsp;
        <s-checkbox :value="checked1" label="two">Item Two</s-checkbox>&nbsp;
        <s-checkbox :value="checked1" label="three">Item Three</s-checkbox>&nbsp;
        <br><br>
        checked: {{ checked1 }}
    </div>
</div>

```
<s-checkbox :value="checked1" label="one">Item One</s-checkbox>&nbsp;
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

