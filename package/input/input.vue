<template>
    <div class="s-input"
          :class="[
              's-input--' + size,
              $slots.prefix ? 's-input--prefix' : '',
              $slots.suffix ? 's-input--suffix' : '',
              readonly ? 's-input--readonly' : '',
              fixClickable ? 's-input--fixClickable' : '',
              disabled ? 's-input--disabled' : '',
              !validateOk ? 's-input--error' : ''
          ]">

        <!--<div v-if="$slots.left-icon" class="s-input__left-icon">-->
            <!--<slot name="left-icon" @click="handleIconClick"></slot>-->
        <!--</div>-->

        <div class="s-input__content">
            <div v-if="$slots.prefix" class="s-input__prefix" @click="handleFixClick">
                <slot name="prefix"></slot>
            </div>

            <input v-if="type === 'text'"
                   v-model="model"
                   :placeholder="placeholder"
                   :readonly="readonly"
                   :disabled="disabled"
                   @blur="onBlur">

            <input v-else type="password" :size="size" v-model="model" :disabled="disabled">

            <div v-show="$slots.suffix" class="s-input__suffix" @click="handleFixClick">
                <slot name="suffix"></slot>
            </div>

                <!--<div v-if="$slots.right-icon" class="s-input__right-icon">-->
                <!--<slot name="right-icon"></slot>-->
                <!--</div>-->
        </div>

        <div class="s-input__validator">
            <transition v-if="!validateOk" name="validator">
                <div class="s-input__validator__inner">{{ validateError }}</div>
            </transition>
        </div>

    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    :root {
        --input-height: 32px;
        --input-border-radius: 4px;
        --input-font-size: 14px;
        --input-padding: 12px;
        --input-validator-font-size: 12px;
    }

    .s-input {
        position: relative;
        display: inline-block;
        .s-input__content {
            height: var(--input-height);
            &:after {
                content: '';
                width: 0;
                height: 0;
                clear: both;
            }
            input {
                float: left;
                outline: none;
                height: 100%;
                border: 1px solid var(--blue-grey-extra-light);
                border-radius: var(--input-border-radius);
                padding: 0 var(--input-padding);
                background: transparent;
                font-size: var(--input-font-size);
                line-height: 1;
                color: var(--blue-grey-dark);
                transition: all 0.24s;
                &:hover {
                    border-color: var(--primary-light);
                }
                &:focus {
                    border-color: var(--primary-color);
                }
                &::placeholder {
                    color: var(--blue-grey-light);
                }
                &::-webkit-input-placeholder {
                    color: var(--blue-grey-light);
                }
                &::-moz-placeholder {
                    color: var(--blue-grey-light);
                }
                &:-moz-placeholder {
                    color: var(--blue-grey-light);
                }
                &:-ms-input-placeholder {
                    color: var(--blue-grey-light);
                }
            }
            .s-input__prefix,
            .s-input__suffix {
                float: left;
                height: 100%;
                padding: 0 var(--input-padding);
                border: 1px solid var(--blue-grey-extra-light);
                font-size: var(--input-font-size);
                line-height: calc(var(--input-height) - 2px);
                color: var(--blue-grey-light);
            }
        }
        .s-input__validator {
            position: absolute;
            top: var(--input-height);
            .s-input__validator__inner {
                color: var(--error-color);
                font-size: var(--input-validator-font-size);
            }
        }
    }

    .s-input--prefix {
        .s-input__content {
            input {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
            .s-input__prefix {
                border-right: none;
                border-radius: var(--input-border-radius) 0 0 var(--input-border-radius);
            }
        }
    }

    .s-input--suffix {
        .s-input__content {
            input {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
            .s-input__suffix {
                border-left: none;
                border-radius: 0 var(--input-border-radius) var(--input-border-radius) 0;
            }
        }
    }

    .s-input--small {
        .s-input__content {
            input {
                padding: 4px;
                font-size: 12px;
            }
            .s-input__prefix,
            .s-input__suffix {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                padding: 0 4px;
                font-size: 12px;
            }
        }
        .s-input__validator {
            top: 26px;
        }
    }

    .s-input--large {
        .s-input__content {
            input {
                padding: 8px;
                font-size: 16px;
            }
            .s-input__prefix,
            .s-input__suffix {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                padding: 0 8px;
                font-size: 16px;
            }
        }
        .s-input__validator {
            top: 38px;
        }
    }

    .s-input--readonly {
        .s-input__content {
            input {
                &:hover {
                    border-color: var(--blue-grey-extra-light);
                }
                &:focus {
                    border-color: var(--blue-grey-extra-light);
                }
            }
        }
    }

    .s-input--fixClickable {
        .s-input__content {
            .s-input__prefix,
            .s-input__suffix {
                cursor: pointer;
                transition: all 0.25s;
                &:hover {
                    border-color: var(--primary-color);
                    color: var(--primary-color);
                    .s-select__indicator {
                        border-color: var(--primary-color);
                    }
                    .s-date-picker__indicator {
                        border-color: var(--primary-color);
                    }
                }
            }
        }
    }

    .s-input--disabled {
        .s-input__content {
            input {
                background: var(--blue-grey-extra-extra-light);
                border-color: var(--blue-grey-extra-light);
                color: var(--blue-grey-light);
                &:hover {
                    border-color: var(--blue-grey-extra-light);
                }
            }
        }
    }

    .s-input--fixClickable.s-input--disabled {
        .s-input__content {
            .s-input__prefix,
            .s-input__suffix {
                &:hover {
                    border-color: var(--blue-grey-extra-light);
                }
            }
        }
    }

    .s-input--error {
        .s-input__content {
            input {
                border-color: var(--error-color);
            }
        }
    }

    .validator-enter-active,
    .validator-leave-active {
        transition: all 0.25s;
    }

    .validator-enter,
    .validator-leave-active {
        opacity: 0;
        transform: translateX(10px);
    }
</style>

<script>
    module.exports = {
        name: "s-input",

        props: {
            type: {
                type: String,
                default: "text"
            },
            size: { // small, normal, large
                type: String,
                default: "normal"
            },
            value: {},
            placeholder: {
                type: String,
            },
            fixClickable: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            validator: {
                type: Object,
                default: function () {
                    return {};
                }
            }
        },

        data: function () {
            return {
                validateOk: true,
                validateError: ""
            };
        },

        computed: {
            model: {
                get: function () {
                    console.log("get input model: " + this.value);
                    return this.value;
                },
                set: function (value) {
                    console.log("set input model: " + value);
                    this.$emit("input", value);
                }
            }
        },

        methods: {
            handleFixClick: function (ev) {
                console.log("prefix / suffix click");
                this.$emit("fixClick", ev);
            },

            onBlur: function (ev) {
                if (this.validator.trigger !== "change") {
                    this.validate();
                }
            },

            validate: function () {
                this.validateOk = true;
                let required = this.validator.required;
                let min = this.validator.min;
                let max = this.validator.max;
                let regExp = this.validator.regExp;
                let custom = this.validator.custom;

                if (required && required.value === true && (this.model === null || this.model === '')) {
                    this.validateOk = false;
                    this.validateError = required.error;
                    return false;
                }
                if (min && Number(this.model) < min.value) {
                    this.validateOk = false;
                    this.validateError = min.error;
                    return false;
                }
                if (max && Number(this.model) > max.value) {
                    this.validateOk = false;
                    this.validateError = max.error;
                    return false;
                }
                if (regExp) {
                    let pattern = new RegExp(regExp.value);
                    if (!(pattern.test(this.model))) {
                        this.validateOk = false;
                        this.validateError = regExp.error;
                        return false;
                    }
                }
                if (custom) {
                    let fn = custom.fn;
                    if (!fn(this.model)) {
                        this.validateOk = false;
                        this.validateError = custom.error;
                        return false;
                    }
                }
                return true;
            }
        },

        watch: {
            model: function (value) {
                if (this.validator.trigger === "change") {
                    this.validate();
                }
            }
        },

        mounted() {
            this.$emit('s.form.addItem', this);
        }
    }
</script>