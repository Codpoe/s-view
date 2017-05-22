<template>
    <div class="s-button-group">
        <slot></slot>
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-button-group {
        display: inline-block;
    }

    .s-button-group:after {
        content: "";
        display: block;
        clear: both;
    }

    .s-button-group {
        .s-button {
            float: left;
            &:first-child {
                border-radius: 2px 0 0 2px;
            }
            &:last-child {
                border-radius: 0 2px 2px 0;
            }
            &:not(:first-child, :last-child) {
                border-radius: 0;
            }
            &:not(:first-child) {
                margin-left: 1px;
            }
        }
    }
</style>

<script>
    module.exports = {
        name: "s-button-group",

        data: function () {
            return {

            };
        },

        methods: {

        }
    };
</script>
