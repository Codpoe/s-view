<template>
    <button :disabled="disabled" class="s-button"
            :class="[
                's-button--' + type,
                's-button--' + size,
                disabled ? 's-button--' + type + '--disabled' : ''
            ]"
            @click="handleClick">
        <span><slot></slot></span>
    </button>
</template>

<style lang="postcss">
    :root {
        --primary-color: #20A0FF;
        --primary-light-color: #58B7FF;
        --primary-dark-color: #1D8CE0;
        --accent-color: #13CE66;
        --error-color: #FF4949;
        --black: #1F2D3D;
        --light-black: #324057;
        --extra-light-black: #475669;
        --silver: #8492A6;
        --light-silver: #99A9BF;
        --extra-light-silver: #C0CCDA;
        --gray: #D3DCE6;
        --light-gray: #E5E9F2;
        --extra-light-gray: #EFF2F7;
        --white: #FFFFFF;
        --dark-white: #F9FAFC;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .s-button {
        outline: none;
        border: none;
        background: none;
        border-radius: 4px;
        transition: all 0.25s;
        cursor: pointer;
        line-height: 1;
    }

    .s-button--hollow {
        border: 1px solid var(--primary-color);
        background: var(--white);
        color: var(--primary-color);
        &:hover {
            background: var(--primary-color);
            color: var(--white);
        }
    }

    .s-button--colored {
        background: var(--primary-color);
        color: var(--white);
        &:hover {
            background: var(--primary-light-color);
        }
    }

    .s-button--pure {
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
            background: var(--white);
            color: var(--extra-light-silver);
        }
    }

    .s-button--colored--disabled {
        cursor: default;
        border-color: var(--extra-light-silver);
        background: var(--extra-light-gray);
        color: var(--extra-light-silver);
        &:hover {
            background: var(--extra-light-gray);
        }
    }

    .s-button--pure--disabled {
        cursor: default;
        color: var(--extra-light-silver);
        &:hover {
            color: var(--extra-light-silver);
        }
    }
</style>

<script>
    export default {
        name: "s-button",

        props: {
            type: { // hollow, colored, pure
                type: String,
                default: "colored"
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
