<template>
    <div class="s-checkbox"
          :class="[
              isChecked ? 's-checkbox--checked' : '',
              disabled ? 's-checkbox--disabled' : ''
          ]"
          @click="handleClick">
        <div class="s-checkbox__indicator"></div>
        <input type="checkbox" :value="label" v-model="model" :disabled="disabled">
        <label><slot></slot></label>
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-checkbox {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        .s-checkbox__indicator {
            position: relative;
            width: 16px;
            height: 16px;
            margin-right: 10px;
            border: 1px solid var(--extra-light-silver);
            border-radius: 2px;
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

    .s-checkbox--checked {
        .s-checkbox__indicator {
            border-color: var(--primary-color);
            background: var(--primary-color);
            &:after {
                content: "";
                position: absolute;
                top:3px;
                left: 2px;
                width: 8px;
                height: 4px;
                border: 2px solid var(--white);
                border-top: none;
                border-right: none;
                border-radius: 2px;
                transform: rotate(-45deg);
                animation: s-checkbox__indicator--anim 0.25s;
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

    @keyframes s-checkbox__indicator--anim {
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
            return {};
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
            handleClick: function (ev) {
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

