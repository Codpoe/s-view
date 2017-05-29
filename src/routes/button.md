# Button - 按钮
## 基本用法

<div class="demo">
    <s-button mode="normal raised">RAISED</s-button>
    &nbsp;
    <s-button mode="normal flat">FLAT</s-button>
</div>

```
<s-button mode="normal raised">BUTTON 1</s-button>
<s-button mode="normal flat">BUTTON 2</s-button>
```

`mode`用于设置 button 的风格，一般来说，`mode`是由两个值组成的字符串，默认值是`normal raised`，效果如上图的`BUTTON 1`所示。

- `raised`
  
  有阴影效果，按钮看起来像悬浮起来。默认就是`raised`。

- `flat`

  无阴影效果，扁平化。 

## Floating Action Button (fab)

<div class="demo">
    <s-button mode="fab raised">
        <s-icon name="github"></s-icon>
    </s-button>
    &nbsp;
    <s-button mode="mini-fab raised">
        <s-icon name="github"></s-icon>
    </s-button>
    <s-button mode="fab flat">
        <s-icon name="github"></s-icon>
    </s-button>
</div>

```
<s-button mode="fab raised">
    <s-icon name="github"></s-icon>
</s-button>
<s-button mode="mini-fab raised">
    <s-icon name="github"></s-icon>
</s-button>
<s-button mode="fab flat">
    <s-icon name="github"></s-icon>
</s-button>
```

`fab`和`min-fab`都可以使按钮变为圆形，这二者只是大小上的区别。

## Button 的颜色风格

<div class="demo">
    <s-button mode="normal raised" color-style="primary">PRIMARY</s-button>
    &nbsp;
    <s-button mode="normal raised" color-style="accent">ACCENT</s-button>
    &nbsp;
    <s-button mode="normal raised" color-style="#88c9c6">HEX</s-button>
    &nbsp;
    <s-button mode="normal flat" color-style="primary">PRIMARY</s-button>
</div>

```
<s-button mode="normal raised" color-style="primary">PRIMARY</s-button>
<s-button mode="normal raised" color-style="accent">ACCENT</s-button>
<s-button mode="normal raised" color-style="#88c9c6">HEX</s-button>
<s-button mode="normal flat" color-style="primary">PRIMARY</s-button>
```

`color-style`可选值为：

- `primary`

  #03a9f4

- `accent`

  #ff4081

- 自定义

  以`#`开头的 HEX 值，例如上面的`#88c9c6`

`raised`时，`color-style`作用于背景色；`flat`时，`color-style`作用于文字颜色。
  

  

