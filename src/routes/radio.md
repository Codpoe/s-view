# Radio - 单选框

## 基本用法
<div class="demo">
    <div>
        <s-radio v-model="checked" label="one">Item One</s-radio>
        &nbsp;
        <s-radio v-model="checked" label="two">Item Two</s-radio>
        <br><br>
        checked: {{ checked }}
    </div>
</div>

<script>
    module.exports = {
        data() {
            return {
                checked: 'one'
            };
        }
    }
</script>

```
<div class="demo">
    <s-radio :value="checked" label="one">Item One</s-radio>
    <s-radio :value="checked" label="two">Item Two</s-radio>
</div>
```