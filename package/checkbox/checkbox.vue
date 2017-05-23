<template>
    <div class="s-checkbox"
          :class="[
              isChecked ? 's-checkbox--checked' : '',
              disabled ? 's-checkbox--disabled' : ''
          ]"
          @click="onClick">
        <div class="s-checkbox_indicator">
            <div class="s-checkbox_indicator_inner"></div>
        </div>
        <input type="checkbox" :value="label" v-model="model" :disabled="disabled">
        <label><slot></slot></label>
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    :root {
        --checkbox-size: 16px;
        --checkbox-off-color: #737373;
        --checkbox-label-color: #737373;
        --checkbox-anim-duration: 0.3s;
    }

    .s-checkbox {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        .s-checkbox_indicator {
            position: relative;
            width: var(--checkbox-size);
            height: var(--checkbox-size);
            margin-right: 10px;
            border: 2px solid var(--checkbox-off-color);
            border-radius: 2px;
            transition: all 0.25s;
            &:hover {
                border-color: var(--primary-color);
            }
            &:before {
                content: "";
                box-sizing: border-box;
                position: absolute;
                top: -2px;
                left: -2px;
                width: var(--checkbox-size);
                height: var(--checkbox-size);
                border: 2px solid var(--checkbox-off-color);
                border-radius: 2px;
                transition: all calc(var(--checkbox-anim-duration) / 2);
            }
        }
        input {
            display: none;
        }
        label {
            font-size: 14px;
            color: var(--checkbox-label-color);
            cursor: pointer;
        }
    }

    .s-checkbox--checked {
        .s-checkbox_indicator {
            animation: s-checkbox_indicator var(--checkbox-anim-duration);
            &:before {
                border-width: 8px;
                border-color: var(--primary-color);
            }
            &:after {
                content: "";
                position: absolute;
                box-sizing: border-box;
                top: 2px;
                left: 1px;
                width: 10px;
                height: 6px;
                border: 2px solid white;
                border-top: none;
                border-right: none;
                border-radius: 2px;
                transform: scale(0);
                animation: s-checkbox_indicator_inner calc(var(--checkbox-anim-duration) / 2);
                animation-delay: calc(var(--checkbox-anim-duration) / 2);
                animation-fill-mode: forwards;
            }
        }
    }

    .s-checkbox--disabled {
        cursor: default;
        .s-checkbox__indicator {
            border-color: var(--extra-light-silver);
            &:hover {
                border-color: var(--extra-light-silver);
            }
        }
        label {
            color: var(--extra-light-silver);
            cursor: default;
        }
    }

    .s-checkbox--checked.s-checkbox--disabled {
        .s-checkbox__indicator {
            background: var(--extra-light-silver);
        }
    }

    @keyframes s-checkbox_indicator {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.8);

        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes s-checkbox_indicator_inner {
        0% {
            transform: rotate(-45deg) scale(0);
        }
        100% {
            transform: rotate(-45deg) scale(1);
        }
    }
</style>

<script>
    module.exports = {
        name: "s-checkbox",

        props: {
            label: {
                type: String
            },
            value: {
                type: Array,
                default: []
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
                    console.log("checkbox get model： " + this.value);
                    return this.value;
                },
                set: function (value) {
                    console.log("checkbox set model: " + value);
                    this.$emit("input", value);
                }
            },

            isChecked: function () {
                return this.value.indexOf(this.label) > -1;
            }
        },

        methods: {
            onClick: function (ev) {
                if (!this.disabled) {
                    if (this.isChecked) {
                        let index = this.value.indexOf(this.label);
                        this.value.splice(index, 1);
                    } else {
                        this.value.push(this.label);
                    }
                    this.$emit("change", ev);
                }
            }
        }
    }
</script>

