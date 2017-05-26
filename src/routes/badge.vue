<template>
    <div v-html="content">
    </div>
</template>

<script>
    import marked from 'marked';
    import badgeMd from './badge.md';

    export default {
        data() {
            return {
                content: badgeMd
            }
        },

        mounted() {
            this.content = badgeMd;
        }
    }
</script>

