# Input

## 基本用法
<div class="demo">
    <div>
        <s-input type="text" placeholder="Text..." v-model="input1"></s-input>
    </div>
</div>


```
<s-input type="text" placeholder="Text..." v-model="input"></s-input>
```

## 前缀和后缀

<div class="demo">
    <div>
        <s-input type="text" placeholder="Text..." v-model="input2">
            <template slot="prefix">http://</template>
            <template slot="suffix">.com</template>
        </s-input>
    </div>
    <br><br>
    {{ input2 }}
</div>

```
<s-input type="text" placeholder="Text..." v-model="input">
            <template slot="prefix">http://</template>
            <template slot="suffix">.com</template>
        </s-input>
```
可以给`s-input`添加两个`slot`形成前缀和后缀，其中，`slot="prefix"`代表前缀，`slot="suffix"`代表后缀。

可点击的前缀和后缀：
<div class="demo">
    <div>
        <s-input type="text" placeholder="Text..." v-model="input3" :fix-clickable="true">
            <template slot="prefix">http://</template>
            <template slot="suffix">.com</template>
        </s-input>
    </div>
    <br><br>
    {{ input3 }}
</div>

```
<s-input type="text" placeholder="Text..." v-model="input" :fix-clickable="true">
    <template slot="prefix">http://</template>
    <template slot="suffix">.com</template>
</s-input>
```
`:fix-clickable="true"`让前缀和后缀可点击。

## 只读状态
<div class="demo">
    <div>
        <s-input type="text" placeholder="Text..." v-model="input4" :readonly="true"></s-input>
    </div>
    <br><br>
    {{ input4 }}
</div>

```
<s-input type="text" placeholder="Text..." v-model="input" :readonly="true"></s-input>
```

只读状态不同于禁用状态，有一定的使用场景。

## 禁用状态
<div class="demo">
    <div>
        <s-input type="text" placeholder="Text..." v-model="input5" :disabled="true">
            <template slot="prefix">http://</template>
            <template slot="suffix">.com</template>
        </s-input>
    </div>
    <br><br>
    {{ input5 }}
</div>

```
<s-input type="text" placeholder="Text..." v-model="input" :disabled="true">
    <template slot="prefix">http://</template>
    <template slot="suffix">.com</template>
</s-input>
```

## 验证输入
<div class="demo">
    <div>
        <s-input type="text" placeholder="Text..." v-model="input6" :validator="validator6">
        </s-input>
    </div>
    <br><br>
    {{ input6 }}
</div>

```
<s-input type="text" placeholder="Text..." v-model="input" :validator="validator">
</s-input>
```
通过给`s-input`的`validator`传递一个验证器对象，可以简单实现对当前表单控件的验证。

验证器对象还是比较丰富的，可以接收 5 种验证要求：`required`对象实现必填验证，`min`和`max`分别实现最小和最大验证，`regExp`实现正则验证，还可以添加自定义验证 -- `custom`：

<div class="demo">
    <div>
        <s-input type="text" placeholder="Text..." v-model="input7" :validator="validator7"></s-input>
        <br><br>
        <s-input type="text" placeholder="Text..." v-model="input8" :validator="validator8"></s-input>
        <br><br>
        <s-input type="text" placeholder="Text..." v-model="input9" :validator="validator9"></s-input>
        <br><br>
        <s-input type="text" placeholder="Text..." v-model="input10" :validator="validator10"></s-input>
        <br><br>
        <s-input type="text" placeholder="Text..." v-model="input11" :validator="validator11"></s-input>
    </div>
</div>

<script>
    export default {
        data() {
            return {
                input1: '',
                input2: '',
                input3: '',
                input4: '',
                input5: '',
                input6: '',
                input7: '',
                input8: '',
                input9: '',
                input10: '',
                input11: '',
                validator6: {
                    regExp: {
                        value: /\.js$/,
                        error: 'error'
                    }
                },
                validator7: {
                    required: {
                        value: true,
                        error: '必填'
                    }
                },
                validator8: {
                    min: {
                        value: 6,
                        error: '不能小于 6'
                    }
                },
                validator9: {
                    max: {
                        value: 10,
                        error: '不能大于 10'
                    }
                },
                validator10: {
                    regExp: {
                        value: /\.js$/,
                        error: '必须以 .js 结尾'
                    }
                },
                validator11: {
                    custom: {
                        fn(value) {
                            return value === 'Hello World';
                        },
                        error: '值只能是“Hello World”'
                    }
                }
            }
        }
    }
</script>