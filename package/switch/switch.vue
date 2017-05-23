<template>
    <div class="s-switch"
         :class="[
             's-switch--' + size,
             model ? 's-switch--true' : 's-switch--false',
             disabled ? 's-switch--disabled' : ''
         ]"
         @click="onClick">
        <div class="s-switch__track">
            <div class="s-switch__indicator"></div>
        </div>
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-switch {
        display: inline-block;
        padding: 2px;
        position: relative;
        cursor: pointer;
        .s-switch__track {
            display: inline-flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            background: var(--light-gray);
            transition: all 0.25s;
            .s-switch__indicator {
                position: relative;
                left: -2px;
                border-radius: 50%;
                background: var(--extra-light-silver);
                transition: all 0.25s;
            }
        }
    }

    .s-switch--false {
        .s-switch__track {
            background: var(--light-gray);
            .s-switch__indicator {
                background: var(--extra-light-silver);
                animation: s-switch__indicator-anim--false 0.25s;
                animation-fill-mode: both;
            }
        }
    }

    .s-switch--true {
        .s-switch__track {
            background: var(--primary-extra-light-color);
            .s-switch__indicator {
                background: var(--primary-color);
                animation: s-switch__indicator-anim--true 0.25s;
                animation-fill-mode: both;
            }
        }
    }

    .s-switch--small {
        .s-switch__track {

        }
        .s-switch__indicator {

        }
    }

    .s-switch--normal {
        .s-switch__track {
            width: 28px;
            height: 12px;
            border-radius: 6px;
            .s-switch__indicator {
                width: 16px;
                height: 16px;
            }
        }
    }

    .s-switch--large {
        .s-switch__track {
            width: 36px;
            height: 16px;
            border-radius: 8px;
        }
        .s-switch__indicator {
            width: 20px;
            height: 20px;
        }
    }

    @keyframes s-switch__indicator-anim--false {
        0% {
            transform: translate(16px) scale(1);
        }
        50% {
            transform: translateX(8px) scale(0.75);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes s-switch__indicator-anim--true {
        0% {
            transform: scale(1);
        }
        50% {
            transform: translateX(8px) scale(0.75);
        }
        100% {
            transform: translateX(16px) scale(1);
        }
    }
</style>

<script>
    module.exports = {
        name: "s-switch",

        props: {
            size: { // small, normal, large
                type: String,
                default: "normal"
            },
            value: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },

        data: function () {
            return {

            };
        },

        computed: {
            model: {
                get: function () {
                    console.log("switch: get model: " + this.value);
                    return this.value;
                },
                set: function (value) {
                    console.log("switch: set model: " + value);
                    this.$emit("input", value);
                }
            }
        },

        methods: {
            onClick: function (ev) {
                this.model = !this.model;
            }
        }
    }
</script>


