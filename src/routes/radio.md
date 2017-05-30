# Radio - 单选框

## 基本用法
<div class="demo">
    <div>
        <s-radio v-model="checked1" label="one">Item One</s-radio>
        &nbsp;
        <s-radio v-model="checked1" label="two">Item Two</s-radio>
        <br><br>
        checked: {{ checked1 }}
    </div>
</div>


```
<s-radio v-model="checked" label="one">Item One</s-radio>
<s-radio v-model="checked" label="two">Item Two</s-radio>


<script>
    module.exports = {
        data() {
            return {
                checked1: 'one'
            };
        }
    }
</script>
```

## 禁用状态

<div class="demo">
    <div>
        <s-radio v-model="checked2" label="one" :disabled="true">Item One</s-radio>
        &nbsp;
        <s-radio v-model="checked2" label="two" :disabled="true">Item Two</s-radio>
        <br><br>
        checked: {{ checked2 }}
    </div>
</div>

```
<s-radio v-model="checked2" label="one" :disabled="true">Item One</s-radio>
<s-radio v-model="checked2" label="two" :disabled="true">Item Two</s-radio>


<script>
    module.exports = {
        data() {
            return {
                checked2: 'one'
            };
        }
    }
</script>
```


<script>
    module.exports = {
        data() {
            return {
                checked1: 'one',
                checked2: 'one'
            };
        }
    }
</script>


