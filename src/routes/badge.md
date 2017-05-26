# Badge - 角标

## 用法

<div class="demo">
    <s-badge :value="6">
        <s-button mode="normal raised">BUTTON</s-button>
    </s-badge>
</div>

```
<div class="demo">
    <s-badge :value="6">
        <s-button mode="normal raised">BUTTON</s-button>
    </s-badge>
</div>
```

可给`s-badge`设置上限，超过上限则会显示为`{上限}+`
<div class="demo">
    <s-badge :value="10" :max="9">
        <s-button mode="normal raised">BUTTON</s-button>
    </s-badge>
</div>

```
<div class="demo">
    <s-badge :value="10" :max="9">
        <s-button mode="normal raised">BUTTON</s-button>
    </s-badge>
</div>
```




