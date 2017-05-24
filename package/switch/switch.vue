<template>
    <div class="s-switch"
         :class="[
             model ? 's-switch--true' : 's-switch--false',
             disabled ? 's-switch--disabled' : ''
         ]"
         @click="onClick">
        <div class="s-switch_track">
            <div class="s-switch_thumb"></div>
        </div>
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    :root {
        --switch-track-width: 28px;
        --switch-track-height: 12px;
        --switch-thumb-size: 16px;
        --switch-track-color--false: #dcdcdc;
        --switch-thumb-color--false: #a3a3a3;
    }

    .s-switch {
        position: relative;
        width: calc(var(--switch-thumb-size) * 2);
        height: var(--switch-thumb-size);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        .s-switch_track {
            width: var(--switch-track-width);
            height: var(--switch-track-height);
            border-radius: 6px;
            background: var(--light-gray);
            transition: all 0.25s;
            display: inline-flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            .s-switch_thumb {
                position: relative;
                left: -2px;
                width: var(--switch-thumb-size);
                height: var(--switch-thumb-size);
                border-radius: 50%;
                box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
                background: var(--extra-light-silver);
                transition: all 0.25s;
            }
        }
    }

    .s-switch--false {
        .s-switch_track {
            background: var(--switch-track-color--false);
            .s-switch_thumb {
                background: var(--switch-thumb-color--false);
                animation: s-switch_thumb--false 0.25s;
                animation-fill-mode: both;
            }
        }
    }

    .s-switch--true {
        .s-switch_track {
            background: var(--primary-extra-light);
            .s-switch_thumb {
                background: var(--primary-color);
                animation: s-switch_thumb--true 0.25s;
                animation-fill-mode: both;
            }
        }
    }

    .s-switch--disabled {
        cursor: default;
        .s-switch_track {
            background: var(--switch-track-color--false);
            .s-switch_thumb {
                background: var(--switch-thumb-color--false);
                box-shadow: none;
            }   
        }
    }

    @keyframes s-switch_thumb--false {
        0% {
            transform: translateX(16px) scale(1);
        }
        50% {
            transform: translateX(8px) scale(0.8);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes s-switch_thumb--true {
        0% {
            transform: scale(1);
        }
        50% {
            transform: translateX(8px) scale(0.8);
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
                if (!this.disabled) {
                    this.model = !this.model;
                }
            }
        }
    }
</script>


