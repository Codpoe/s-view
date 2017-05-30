# Slider - 滑块

## 基本用法

<div class="demo">
    <div>
        <s-slider v-model="slided1"></s-slider>
        <br><br>
        slided: {{ slided1 }}
    </div>
</div>

```
<s-slider v-model="slided"></s-slider>
slided: {{ slided }}
```

## 设置上界和下界
<div class="demo">
    <div>
        <s-slider v-model="slided2" :min="100" :max="200"></s-slider>
        <br><br>
        slided: {{ slided2 }}
    </div>
</div>

```
<s-slider v-model="slided2" :min="100" :max="200"></s-slider>
slided: {{ slided2 }}
```


## 设置步长
<div class="demo">
    <div>
        <s-slider v-model="slided3" :step="20"></s-slider>
        <br><br>
        slided: {{ slided3 }}
    </div>
</div>

```
<s-slider v-model="slided3" :step="20"></s-slider>
slided: {{ slided3 }}
```


## 显示当前数值
<div class="demo">
    <div>
        <s-slider v-model="slided4" :show-value="true"></s-slider>
        <br><br>
        slided: {{ slided4 }}
    </div>
</div>

```
<s-slider v-model="slided4" :show-value="true"></s-slider>
slided: {{ slided4 }}
```


## 显示断点
<div class="demo">
    <div>
        <s-slider v-model="slided5" :step="20" :show-stops="true"></s-slider>
        <br><br>
        slided: {{ slided5 }}
    </div>
</div>

```
<s-slider v-model="slided5" :show-stops="true"></s-slider>
slided: {{ slided5 }}
```

## 设置轨道长度
<div class="demo">
    <div>
        <s-slider v-model="slided6" :track-width="300"></s-slider>
        <br><br>
        slided: {{ slided6 }}
    </div>
</div>

```
<s-slider v-model="slided6" :track-width="300"></s-slider>
slided: {{ slided6 }}
```

## 禁用状态
<div class="demo">
    <div>
        <s-slider v-model="slided7" :disabled="true"></s-slider>
        <br><br>
        slided: {{ slided7 }}
    </div>
</div>

```
<s-slider v-model="slided7" :disabled="true"></s-slider>
slided: {{ slided7 }}
```


<script>
    module.exports = {
        data() {
            return {
                slided1: 20,
                slided2: 120,
                slided3: 20,
                slided4: 20,
                slided5: 20,
                slided6: 20,
                slided7: 20
            }
        }
    }
</script>

