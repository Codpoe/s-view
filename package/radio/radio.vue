<template>
    <span class="s-radio" :class="[
            disabled ? 's-radio--disabled' : ''
        ]" @click="handleClick">
        <span class="s-radio--indicator"
              :class="[
                  model == label ? 's-radio--indicator--checked' : ''
              ]">
        </span>
        <input type="radio" :name="name" :value="label" v-model="model" :disabled="disabled">
        <label><slot></slot></label>
    </span>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-radio {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
    }

    .s-radio--disabled {
        cursor: default;
    }

    .s-radio--indicator {
        position: relative;
        display: inline-block;
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

    .s-radio--disabled .s-radio--indicator {
        border-color: var(--extra-light-silver);
    }

    .s-radio--indicator--checked {
        border-color: var(--primary-color);
    }

    .s-radio--indicator--checked:after{
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 2px;
        background: var(--primary-color);
        animation: s-radio--indicator--anim 0.25s;
    }

    .s-radio--disabled .s-radio--indicator--checked:after {
        background: var(--extra-light-silver);
    }

    .s-radio input {
        display: none;
    }

    .s-radio label {
        font-size: 14px;
        color: var(--extra-light-black);
        cursor: pointer;
    }

    .s-radio--disabled label {
        color: var(--extra-light-silver);
        cursor: default;
    }

    @keyframes s-radio--indicator--anim {
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
                    console.log("get model： " + this.value);
                    return this.value;
                },
                set: function(value) {
                    console.log("set model: " + value);
                    this.$emit("input", value);
                }
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

