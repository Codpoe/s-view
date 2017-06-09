# Input

## 基本用法
<div class="demo">
    <div>
        <s-input type="text" placeholder="Text..." v-model="input"></s-input>
    </div>
    
</div>

## 前缀和后缀
<div class="demo">
    <div>
        <s-input type="text" placeholder="Text..." v-model="input">
            <template slot="prefix">http://</template>
            <template slot="suffix">.com</template>
        </s-input>
    </div>
    <br><br>
    {{ input }}
</div>

可点击的前缀和后缀：
<div class="demo">
    <div>
        <s-input type="text" placeholder="Text..." v-model="input" :fix-clickable="true">
            <template slot="prefix">http://</template>
            <template slot="suffix">.com</template>
        </s-input>
    </div>
    <br><br>
    {{ input }}
</div>

## 只读状态
<div class="demo">
    <div>
        <s-input type="text" placeholder="Text..." v-model="input" :readonly="true"></s-input>
    </div>
    <br><br>
    {{ input }}
</div>

只读状态不同于禁用状态，有一定的使用场景。

## 禁用状态
<div class="demo">
    <div>
        <s-input type="text" placeholder="Text..." v-model="input" :disabled="true">
            <template slot="prefix">http://</template>
            <template slot="suffix">.com</template>
        </s-input>
    </div>
    <br><br>
    {{ input }}
</div>

## 验证输入
<div class="demo">
    <div>
        <s-input type="text" placeholder="Text..." v-model="input" :validator="validator">
        </s-input>
    </div>
    <br><br>
    {{ input }}
</div>

<script>
    export default {
        data() {
            return {
                input: '',
                validator: {
                    regexp: {
                        value: /\.js$/,
                        error: 'error'
                    }
                }
            }
        }
    }
</script>