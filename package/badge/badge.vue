<template>
    <div class="s-badge"
         :class="[
             isDot ? 's-badge--dot' : ''
         ]">
        <slot></slot>
        <sup v-show="!hidden && (content || isDot)" class="s-badge__inner">
            {{ content }}
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
            top: 0;
            right: 0;
            transform: translateX(50%) translateY(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid var(--white);
            border-radius: 9px;
            height: 18px;
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
            },
            hidden: {
                type: Boolean,
                default: false
            }
        },

        data: function () {
            return {};
        },

        computed: {
            content: function () {
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



