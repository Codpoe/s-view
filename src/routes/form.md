# Form - 表单

<div class="demo">
    <s-form ref="testForm">
        <s-input v-model="input" :validator="validator"></s-input>
        <s-button @click="onClick">SUBMIT</s-button>
    </s-form>
</div>

<script>
    export default {
        data() {
            return {
                input: '',
                validator: {
                    required: {
                        value: true,
                        error: '此项必填'
                    }
                }
            }
        },

        methods: {
            onClick(ev) {
                console.log(this.$refs.testForm.validate());
            }
        }
    }
</script>