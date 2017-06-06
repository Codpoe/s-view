# input

<div class="demo">
    <div>
        <s-input type="text" placeholder="Text..." v-model="input"></s-input>
    </div>
    <br><br>
    {{ input }}
</div>

<div class="demo">
    <div>
        <s-input type="text" placeholder="Text..." v-model="input">
            <template slot="prepend">http://</template>
            <template slot="append">.com</template>
        </s-input>
    </div>
    <br><br>
    {{ input }}
</div>

<script>
    export default {
        data() {
            return {
                input: ''
            }
        }
    }
</script>