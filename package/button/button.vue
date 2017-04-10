<template>
    <button :disabled="disabled" class="s-button"
            :class="[
                's-button--' + type,
                's-button--' + size,
                disabled ? 's-button--' + type + '--disabled' : ''
            ]"
            @click="handleClick">
        <slot></slot>
    </button>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-button {
        position: relative;
        outline: none;
        border: none;
        background-color: transparent;
        border-radius: 4px;
        transition: all 0.25s;
        cursor: pointer;
        line-height: 1;
    }

    .s-button--hollow {
        border: 1px solid var(--primary-color);
        background-color: transparent;
        color: var(--primary-color);
        &:hover {
            background-color: var(--primary-color);
            color: var(--white);
        }
    }

    .s-button--colored {
        border: 1px solid var(--primary-color);
        background-color: var(--primary-color);
        color: var(--white);
        &:hover {
            background-color: var(--primary-light-color);
            border-color: var(--primary-light-color);
        }
    }

    .s-button--plain {
        color: var(--primary-color);
        &:hover {
            color: var(--primary-light-color);
        }
    }

    .s-button--xsmall {
        font-size: 12px;
        padding: 4px;
    }

    .s-button--small {
        font-size: 12px;
        padding: 6px 8px;
    }

    .s-button--normal {
        font-size: 14px;
        padding: 8px 14px;
    }

    .s-button--large {
        font-size: 16px;
        padding: 10px 16px;
    }

    .s-button--hollow--disabled {
        cursor: default;
        border-color: var(--extra-light-silver);
        color: var(--extra-light-silver);
        &:hover {
            background-color: var(--white);
            color: var(--extra-light-silver);
        }
    }

    .s-button--colored--disabled {
        cursor: default;
        border-color: var(--extra-light-silver);
        background-color: var(--extra-light-gray);
        color: var(--extra-light-silver);
        &:hover {
            background-color: var(--extra-light-gray);
            border-color: var(--extra-light-silver);
        }
    }

    .s-button--plain--disabled {
        cursor: default;
        color: var(--extra-light-silver);
        &:hover {
            color: var(--extra-light-silver);
        }
    }
</style>

<script>
    module.exports = {
        name: "s-button",

        props: {
            type: { // hollow, colored, plain
                type: String,
                default: "hollow"
            },
            size: { // xsmall, small, normal, large
                type: String,
                default: "normal"
            },
            disabled: { // true or false
                type: Boolean,
                default: false
            }
        },

        data: function () {
            return {

            };
        },

        methods: {
            handleClick: function (ev) {
                this.$emit("click", ev);
            }
        }

    };
</script>
