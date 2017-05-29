# Badge - 角标

## 基本用法

<div class="demo">
    <s-badge :value="6">
        <s-button mode="normal raised">BUTTON</s-button>
    </s-badge>
</div>

```
<s-badge :value="6">
    <s-button mode="normal raised">BUTTON</s-button>
</s-badge>
```

## 设置上限
可给`s-badge`设置上限，超过上限则会显示为`{上限}+`
<div class="demo">
    <s-badge :value="10" :max="9">
        <s-button mode="normal raised">BUTTON</s-button>
    </s-badge>
</div>

```
<s-badge :value="10" :max="9">
    <s-button mode="normal raised">BUTTON</s-button>
</s-badge>
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
            type: 'Number',
            optional: '-',
            default: '-',
            introduction: '角标上的数值'
        }, {
            argument: 'max',
            type: 'Number',
            optional: '-',
            default: '-',
            introduction: '数值上限，超过会显示为: 上限+'
        }, {
            argument: 'is-dot',
            type: 'Boolean',
            optional: '-',
            default: 'false',
            introduction: '是否仅将角标显示为一个小红点，而不显示具体数值'
        }, {
            argument: 'hidden',
            type: 'Boolean',
            optional: '-',
            default: 'false',
            introduction: '是否隐藏角标'
        }]">
    </s-table>
</div>




