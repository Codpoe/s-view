<template>
    <div class="s-form">
        <form>
            <slot></slot>
        </form>
    </div>
</template>

<style lang="postcss">
    
</style>

<script>
    export default {
        name: 's-form',

        props: {

        },

        data() {
            return {
                items: []
            }
        },

        computed: {

        },

        methods: {
            validate() {
                return this.$children.every((item) => {
                    if (typeof item.validate !== 'function') {
                        return true;
                    }
                    return item.validate();
                })
            }
        },

        created() {

        }
    }
</script>

