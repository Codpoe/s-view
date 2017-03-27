<template>
    <span class="s-checkbox"
          :class="[
              disabled ? 's-checkbox--disabled' : ''
          ]"
          @click="handleClick">
        <span class="s-checkbox--indicator"
              :class="[
                  isChecked ? 's-checkbox--indicator--checked' : ''
              ]">
        </span>
        <input type="checkbox" :value="label" v-model="model" :disabled="disabled">
        <label><slot></slot></label>
    </span>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-checkbox {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
    }

    .s-checkbox--disabled {
        cursor: default;
    }

    .s-checkbox--indicator {
        display: inline-block;
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

    .s-checkbox--disabled .s-checkbox--indicator {
        border-color: var(--extra-light-silver);
    }

    .s-checkbox--indicator--checked {
        border-color: var(--primary-color);
        background: var(--primary-color);
    }

    .s-checkbox--disabled .s-checkbox--indicator--checked  {
        border-color: var(--extra-light-silver);
        background: var(--extra-light-silver);
    }

    .s-checkbox--indicator--checked:after {
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
        animation: s-checkbox--indicator--anim 0.25s;
    }

    .s-checkbox--disabled .s-checkbox--indicator--checked:after {

    }

    .s-checkbox input {
        display: none;
    }

    .s-checkbox label {
        font-size: 14px;
        color: var(--extra-light-black);
        cursor: pointer;
    }

    .s-checkbox--disabled label {
        color: var(--extra-light-silver);
        cursor: default;
    }

    @keyframes s-checkbox--indicator--anim {
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
                    console.log("get model： " + this.value);
                    return this.value;
                },
                set: function (value) {
                    console.log("set model: " + value);
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

