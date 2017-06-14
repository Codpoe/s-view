<template>
    <button
        class="s-button"
        :class="[
            's-button--' + type,
            isFlat ? 's-button--flat' : 's-button--raised',
            isAccent ? 's-button--accent' : 's-button--primary',
            disabled ? 's-button--disabled' : ''
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
        --button-font-size: 14px;
        --button-fab-font-size: 24px;
        --button-fab-font-size-mini: 16px;
        --button-icon-size: 32px;
        --button-icon-size-mini: 24px;
        --button-raised-background-disabled: #dcdcdc;
        --button-raised-color-disabled: #a3a3a3;
        --button-flat-color-disabled: #b9b9b9;
    }

    .s-button {
        position: relative;
        outline: none;
        border: none;
        background: transparent;
        transition: all 0.24s;
        cursor: pointer;
    }

    .s-button--normal {
        min-width: var(--button-min-width);
        height: var(--button-height);
        border-radius: var(--button-border-radius);
        padding: 0 var(--button-padding);
        text-align: center;
        font-size: var(--button-font-size);
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
        font-size: var(--button-fab-font-size-mini);
    }

    .s-button--raised {
        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
        color: white;
        &:active {
            box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
        }
    }

    .s-button--flat {
        background: transparent;
        color: #555;
        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
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

    .s-button--disabled {
        cursor: default;
    }

    .s-button--raised.s-button--disabled {
        background: var(--button-raised-background-disabled);
        color: var(--button-raised-color-disabled);
        box-shadow: none;
        cursor: default;
    }

    .s-button--flat.s-button--disabled {
        background: transparent;
        color: var(--button-flat-color-disabled);
        cursor: default;
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
            colorStyle: { // primary, accent or the hex color
                type: String,
                default: 'primary'
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

        computed: {
            type: function() {
                if (this.mode.indexOf('mini-fab') !== -1) {
                    return 'mini-fab';
                }
                if (this.mode.indexOf('fab') !== -1) {
                    return 'fab';
                }
                return 'normal';
                // return this.mode.indexOf('normal') !== -1
                //     ? 'normal'
                //     : (
                //         this.mode.indexOf('mini-fab') !== -1
                //         ? 'mini-fab'
                //         : 'fab'
                //     )
            },
            isFlat: function() {
                return this.mode.indexOf('flat') !== -1;
            },
            isAccent: function() {
                if (this.colorStyle.indexOf('#') !== 0) {
                    return this.colorStyle.indexOf('accent') !== -1;
                }
            },
            isHexColor: function() {
                return this.colorStyle.indexOf('#') === 0;
            },
            styleObject: function() {
                return (!this.disabled && this.colorStyle.indexOf('#') === 0)
                    ? (
                        this.isFlat
                        ? {
                            color: this.colorStyle
                        }
                        : {
                            background: this.colorStyle
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
