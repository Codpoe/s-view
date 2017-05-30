# Switch - 开关

## 基本用法
<div class="demo">
    <s-switch v-model="switched1"></s-switch>
</div>

<div class="demo">
    switched: {{ switched1 }}
</div>

```
<s-switch v-model="switched1"></s-switch>
switched: {{ switched1 }}


<script>
    module.exports = {
        data() {
            return {
                switched1: false
            }
        }
    }
</script>
```

## 禁用状态
<div class="demo">
    <s-switch v-model="switched2" :disabled="true"></s-switch>
</div>
<div class="demo">
    switched: {{ switched2 }}
</div>

```
<s-switch v-model="switched2" ：disabled="true"></s-switch>
switched: {{ switched2 }}


<script>
    module.exports = {
        data() {
            return {
                switched2: false
            }
        }
    }
</script>
```

<script>
    module.exports = {
        data() {
            return {
                switched1: false,
                switched2: false
            }
        }
    }
</script>


