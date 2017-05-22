<template>
    <div class="s-badge"
         :class="[
             isDot ? 's-badge--dot' : ''
         ]">
        <slot></slot>
        <sup v-show="!hidden && (content || isDot)" class="s-badge__content">
            {{ content }}
        </sup>
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";
    :root {
        --badge-dot-size: 10px;
        --badge-size: 22px;
        --badge-padding: 2px;
        --badge-font-size: 12px;
    }

    .s-badge {
        display: inline-block;
        position: relative;
        .s-badge__content {
            min-width: var(--badge-size);
            height: var(--badge-size);
            position: absolute;
            top: 0;
            right: 0;
            transform: translateX(50%) translateY(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 11px;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
            padding: 0 6px;
            background-color: var(--accent-color);
            color: var(--white);
            font-size: var(--badge-font-size);
        }
    }

    .s-badge--dot {
        .s-badge__content {
            min-width: 12px;
            height: 12px;
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



