<template>
    <div class="s-radio"
          :class="[
              isChecked ? 's-radio--checked' : '',
              disabled ? 's-radio--disabled' : ''
          ]" @click="handleClick">
        <div class="s-radio__indicator"></div>
        <input type="radio" :name="name" :value="label" v-model="model" :disabled="disabled">
        <label><slot></slot></label>
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-radio {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        .s-radio__indicator {
            position: relative;
            height: 16px;
            width: 16px;
            margin-right: 10px;
            border: 1px solid var(--extra-light-silver);
            border-radius: 50%;
            transition: all 0.25s;
            &:hover {
                border-color: var(--primary-color);
            }
        }
        input {
            display: none;
        }
        label {
            font-size: 14px;
            color: var(--extra-light-black);
            cursor: pointer;
        }
    }

    .s-radio--checked {
        .s-radio__indicator {
            border-color: var(--primary-color);
            &:after {
                content: '';
                width: 10px;
                height: 10px;
                border-radius: 50%;
                position: absolute;
                top: 2px;
                left: 2px;
                background: var(--primary-color);
                animation: s-radio__indicator--anim 0.25s;
            }
        }
    }

    .s-radio--disabled {
        cursor: default;
        .s-radio__indicator {
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

    .s-radio--checked.s-radio--disabled {
        .s-radio__indicator {
            &:after {
                background: var(--extra-light-silver);
            }
        }
    }

    @keyframes s-radio__indicator--anim {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
</style>

<script>
    module.exports = {
        name: "s-radio",

        props: {
            name: {
                type: String
            },
            label: {
                type: String
            },
            value: {},
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
                get: function() {
                    console.log("radio get model： " + this.value);
                    return this.value;
                },
                set: function(value) {
                    console.log("radio set model: " + value);
                    this.$emit("input", value);
                }
            },
            isChecked: function () {
                return this.model == this.label;
            }
        },

        methods: {
            handleClick: function (ev) {
                if (!this.disabled) {
                    this.model = this.label;
                }
            }
        }
    }
</script>

