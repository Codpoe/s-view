<template>
    <div class="table-column">
        
    </div>
</template>

<style lang="postcss">
    
</style>

<script>
    module.exports = {
        name: 's-table-column',

        props: {
            head: {
                type: String,
                required: true
            },
            width: {
                type: Number,
                default: 180
            },
            align: {
                type: String,
                default: 'left'  
            }
        },

        data() {
            return {

            }
        },

        computed: {

        },

        methods: {

        }
    }
</script>

