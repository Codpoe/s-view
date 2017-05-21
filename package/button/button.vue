<template>
    <button
        class="s-button"
        :class="[
            's-button--' + type,
            isRaised ? 's-button--raised' : 's-button--flat',
            disabled ? 's-button--' + type + '--disabled' : '',
            !isHexColor ? ('s-button--' + colorStyle) : ''
        ]"
        :style="styleObject"
        :disabled="disabled" 
        @click="onClick">

        <slot></slot>
    </button>
</template>

<style lang="postcss">
    @import "../common/common.css";
    :root {
        --buttom-min-width: 64px;
        --button-height: 36px;
        --button-padding: 16px;
        --button-border-radius: 2px;
        --button-fab-size: 56px;
        --button-fab-size-mini: 40px;
        --button-fab-font-size: 24px;
        --button-icon-size: 32px;
        --button-icon-size-mini: 24px;
    }

    .s-button {
        position: relative;
        outline: none;
        border: none;
        background: transparent;
        transition: all 0.25s;
        cursor: pointer;
    }

    .s-button--normal {
        min-width: var(--button-min-width);
        height: var(--button-height);
        border-radius: var(--button-border-radius);
        padding: 0 var(--button-padding);
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        vertical-align: middle;
    }

    .s-button--fab {
        width: var(--button-fab-size);
        height: var(--button-fab-size);
        border-radius: 50%;
        font-size: var(--button-fab-font-size);
    }

    .s-button--mini-fab {
        width: var(--button-fab-size-mini);
        height: var(--button-fab-size-mini);
        border-radius: 50%;
    }

    .s-button--raised {
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.25);
        color: white;
    }

    .s-button--flat {
        background: transparent;
        color: #555;
    }

    .s-button--raised.s-button--primary {
        background: var(--primary-color);
    }

    .s-button--raised.s-button--accent {
        background: var(--accent-color);
    }

    .s-button--flat.s-button--primary {
        color: var(--primary-color);
    }

    .s-button--flat.s-button--accent {
        color: var(--accent-color);
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
        name: 's-button',

        props: {
            mode: { // normal or fab or mini-fab, raised or flat
                type: String,
                default: 'normal raised'
            },
            colorStyle: {
                type: String,
                default: 'primary'
            },
            // type: { // hollow, colored, plain
            //     type: String,
            //     default: "hollow"
            // },
            // size: { // xsmall, small, normal, large
            //     type: String,
            //     default: "normal"
            // },
            disabled: { // true or false
                type: Boolean,
                default: false
            }
        },

        data: function () {
            return {

            };
        },

        computed: {
            type: function() {
                return this.mode.indexOf('normal') !== -1
                    ? 'normal'
                    : (
                        this.mode.indexOf('mini-fab') !== -1
                        ? 'mini-fab'
                        : 'fab'
                    )
            },
            isRaised: function() {
                return this.mode.indexOf('raised') !== -1;
            },
            isHexColor: function() {
                return this.colorStyle.indexOf('#') === 0;
            },
            styleObject: function() {
                return this.colorStyle.indexOf('#') === 0
                    ? (
                        this.isRaised
                        ? {
                            background: this.colorStyle
                        }
                        : {
                            color: this.colorStyle
                        }
                    )
                    : {};
            }
        },

        methods: {
            onClick: function (ev) {
                this.$emit("click", ev);
            }
        },

    };
</script>
