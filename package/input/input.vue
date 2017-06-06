<template>
    <div class="s-input"
          :class="[
              's-input--' + size,
              $slots.prepend ? 's-input--prepend' : '',
              $slots.append ? 's-input--append' : '',
              readonly ? 's-input--readonly' : '',
              pendClickable ? 's-input--pendClickable' : '',
              disabled ? 's-input--disabled' : '',
              !validateOk ? 's-input--error' : ''
          ]">

        <!--<div v-if="$slots.left-icon" class="s-input__left-icon">-->
            <!--<slot name="left-icon" @click="handleIconClick"></slot>-->
        <!--</div>-->

        <div class="s-input__content">
            <div v-if="$slots.prepend" class="s-input__prepend" @click="handlePendClick">
                <slot name="prepend"></slot>
            </div>

            <input v-if="type === 'text'"
                   v-model="model"
                   :placeholder="placeholder"
                   :readonly="readonly"
                   :disabled="disabled"
                   @blur="onBlur">

            <input v-else type="password" :size="size" v-model="model" :disabled="disabled">

            <div v-show="$slots.append" class="s-input__append" @click="handlePendClick">
                <slot name="append"></slot>
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
        --input-border-radius: 2px;
        --input-font-size: 14px;
        --input-padding: 12px;
        --input-validator-font-size: 12px;
    }

    .s-input {
        position: relative;
        display: inline-block;
        .s-input__content {
            display: inline-flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: stretch;
            height: var(--input-height);
            input {
                outline: none;
                height: 100%;
                border: 1px solid var(--blue-grey-light);
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
                    box-shadow: 0 0 2px 1px var(--primary-color);
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
        }
        .s-input__validator {
            position: absolute;
            .s-input__validator__inner {
                color: var(--error-color);
                font-size: var(--input-validator-font-size);
            }
        }
    }

    .s-input--prepend {
        .s-input__content {
            input {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
            .s-input__prepend {
                color: var(--blue-grey-dark);
                border: 1px solid var(--blue-grey-light);
                border-right: none;
                border-radius: var(--input-border-radius) 0 0 var(--input-border-radius);
            }
        }
    }

    .s-input--append {
        .s-input__content {
            input {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
            .s-input__append {
                color: var(--blue-grey-dark);
                border: 1px solid var(--blue-grey-light);
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
            .s-input__prepend,
            .s-input__append {
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

    .s-input--normal {
        .s-input__content {
            input {
                padding: 0 var(--input-padding);
                font-size: var(--input-font-size);
            }
            .s-input__prepend,
            .s-input__append {
                padding: 0 var(--input-padding);
                font-size: var(--input-font-size);
                line-height: calc(var(--input-height) - 2px);
            }
        }
        .s-input__validator {
            top: var(--input-height);
        }
    }

    .s-input--large {
        .s-input__content {
            input {
                padding: 8px;
                font-size: 16px;
            }
            .s-input__prepend,
            .s-input__append {
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
                    border-color: var(--extra-light-silver);
                }
                &:focus {
                    border-color: var(--extra-light-silver);
                }
            }
        }
    }

    .s-input--pendClickable {
        .s-input__content {
            .s-input__prepend,
            .s-input__append {
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
                background: var(--extra-light-gray);
                border-color: var(--extra-light-silver);
                color: var(--extra-light-silver);
                &:hover {
                    border-color: var(--extra-light-silver);
                }
            }
        }
    }

    .s-input--pendClickable.s-input--disabled {
        .s-input__content {
            .s-input__prepend,
            .s-input__append {
                &:hover {
                    border-color: var(--extra-light-silver);
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
            pendClickable: {
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
            handlePendClick: function (ev) {
                console.log("prepend / append click");
                this.$emit("pendClick", ev);
            },

            onBlur: function (ev) {
                if (this.validator.trigger !== "change") {
                    this.validate();
                }
            },

            validate: function () {
                console.log(this.model);
                this.validateOk = true;
                let required = this.validator.required;
                let min = this.validator.min;
                let max = this.validator.max;
                let regexp = this.validator.regexp;
                let custom = this.validator.custom;

                if (required && required.value === true && (this.model === null || this.model === "")) {
                    this.validateOk = false;
                    this.validateError = required.error;
                    return;
                }
                if (min && Number(this.model) < min.value) {
                    this.validateOk = false;
                    this.validateError = min.error;
                    return;
                }
                if (max && Number(this.model) > max.value) {
                    this.validateOk = false;
                    this.validateError = max.error;
                    return;
                }
                if (regexp) {
                    let pattern = new RegExp(regexp.value);
                    if (!(pattern.test(this.model))) {
                        this.validateOk = false;
                        this.validateError = regexp.error;
                        return;
                    }
                }
                if (custom) {
                    let fn = custom.fn;
                    if (!fn(this.model)) {
                        this.validateOk = false;
                        this.validateError = custom.error;
                        return;
                    }
                }
            }
        },

        watch: {
            model: function (value) {
                if (this.validator.trigger === "change") {
                    this.validate();
                }
            }
        }
    }
</script>