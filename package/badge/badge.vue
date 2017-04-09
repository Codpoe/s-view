<template>
    <div class="s-badge"
         :class="[
             isDot ? 's-badge--dot' : ''
         ]">
        <slot></slot>
        <sup class="s-badge__inner">
            {{ showValue }}
        </sup>
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-badge {
        display: inline-block;
        position: relative;
        .s-badge__inner {
            position: absolute;
            top: 0px;
            right: 0px;
            transform: translateX(50%) translateY(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid var(--white);
            border-radius: 10px;
            height: 20px;
            padding: 0 6px;
            background-color: var(--error-color);
            color: var(--white);
            font-size: 12px;
        }
    }

    .s-badge--dot {
        .s-badge__inner {
            width: 10px;
            height: 10px;
            padding: 0px;
            border-radius: 50%;
        }
    }
</style>


<script>
    module.exports = {
        name: "s-badge",

        props: {
            value: {
                type: Number
            },
            max: {
                type: Number
            },
            isDot: {
                type: Boolean,
                default: false
            }
        },

        data: function () {
            return {};
        },

        computed: {
            showValue: function () {
                if (this.isDot) {
                    return;
                }
                return this.value > this.max ? this.max + "+" : this.value;
            }
        },

        methods: {

        }
    }
</script>



