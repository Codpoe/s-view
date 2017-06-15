# md-input

<div class="demo">
    <s-md-input class="md-input" v-model="input"
        placeholder="Username"
        :validator="validator">
    
    </s-md-input>
</div>

<script>
    export default {
        data() {
            return {
                input: '',
                validator: {
                    max: {
                        value: 10,
                        error: '只能小于或等于 10'
                    }
                }
            }
        }
    }
</script>