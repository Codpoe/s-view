<template>
    <div class="s-picker">
        <div class="s-picker__content">
            <div class="s-picker__content__top"></div>
            <ul>
                <li v-for="item in items">
                    {{ item }}
                </li>
            </ul>
            <div class="s-picker__content__bottom"></div>
        </div>
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-picker {
        display: inline-block;
        position: relative;
        .s-picker__content {
            height: 76px;
            overflow: scroll;
            &::-webkit-scrollbar {
                display: none;
            }
            .s-picker__content__top {
                position: absolute;
                top: 0;
                width: 100%;
                height: 26px;
                border-bottom: 1px solid var(--primary-color);
            }
            .s-picker__content__bottom {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 26px;
                border-top: 1px solid var(--primary-color);
            }
            li {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 24px;
                padding: 0 14px;
                margin: 1px 0;
                font-size: 14px;
            }
        }
    }
</style>

<script>
    module.exports = {
        name: "s-picker",

        props: {
            items: Array,
            value: {},
            type: {
                type: String,
                default: "normal"
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },

        data: function () {
            return {};
        },

        computed: {
            model: {
                get: function () {
                    console.log("s-picker get model: " + this.value);
                    return this.value;
                },
                set: function (value) {
                    console.log("s-picker set model: " + value);
                    this.$emit("input", value);
                }
            }
        },

        methods: {

        }
    }
</script>


