<template>
    <div class="s-radio"
          :class="[
              isChecked ? 's-radio--checked' : '',
              disabled ? 's-radio--disabled' : ''
          ]" @click="onClick">
        <div class="s-radio_indicator"></div>
        <input type="radio" :name="name" :value="label" v-model="model" :disabled="disabled">
        <label><slot></slot></label>
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    :root {
        --radio-size: 16px;
        --radio-off-color: #737373;
        --radio-label-color: #737373;
        --radio-color-disabled: #b9b9b9;
        --radio-anim-duration: 0.3s;
    }

    .s-radio {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        .s-radio_indicator {
            position: relative;
            height: 16px;
            width: 16px;
            margin-right: 10px;
            border: 2px solid var(--radio-off-color);
            border-radius: 50%;
            transition: all 0.25s;
            &:before {
                content: "";
                position: absolute;
                top: -2px;
                left: -2px;
                box-sizing: border-box;
                width: var(--radio-size);
                height: var(--radio-size);
                border: 2px solid var(--radio-off-color);
                border-radius: 50%;
                transition: all var(--radio-anim-duration);
            }
        }
        input {
            display: none;
        }
        label {
            font-size: 14px;
            color: var(--radio-label-color);
            cursor: pointer;
        }
    }

    .s-radio--checked {
        .s-radio_indicator {
            border-color: var(--primary-color);
            animation: s-radio_indicator calc(var(--radio-anim-duration) / 2);
            &:before {
                border-color: var(--primary-color);
                border-width: 8px;
                transform: scale(0.5);
            }
            
        }
    }

    .s-radio--disabled {
        cursor: default;
        .s-radio_indicator {
            border-color: var(--radio-color-disabled);
            &:before {
                border-color: var(--radio-color-disabled);    
            }
        }
        label {
            color: var(--radio-color-disabled);
            cursor: default;
        }
    }

    .s-radio--checked.s-radio--disabled {
        .s-radio_indicator {
            &:before {
                
            }
        }
    }

    @keyframes s-radio_indicator {
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

    @keyframes s-radio_indicator_inner {
        0% {

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
                isClicked: false
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
            onClick: function (ev) {
                if (!this.disabled) {
                    this.model = this.label;
                }
            }
        }
    }
</script>

