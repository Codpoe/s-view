<template>
    <div class="s-md-input"
        :class="[
            focused ? 's-md-input--focused' : '',
            inputed ? 's-md-input--inputed' : '',
            disabled ? 's-md-input--disabled' : ''
        ]">
        <div class="placeholder"
            :class="focused ? 'placeholder--focus' : ''">
            {{ placeholder }}
        </div>
        <div class="line"></div>
        <input v-if="type === 'text'" v-model="model" :disabled="disabled" @focus="onFocus" @blur="onBlur">
        <input v-else type="password" v-model="model" :disabled="disabled" @focus="onFocus" @blur="onBlur">

        <div class="s-md-input_validator">
            <transition v-if="!validateOk" name="validator">
                <div class="s-md-input_validator_inner">{{ validateError }}</div>
            </transition>
        </div>
    </div>
</template>

<style lang="postcss">
    @import '../common/common.css';
    :root {
        --s-md-input-height: 24px;
        --s-md-input-margin: 16px;
        --s-md-input-padding: 6px;
        --s-md-input-font-size: 14px;
        --s-md-input-placeholder-font-size: 14px;
        --s-md-input-placeholder-font-size--focus: 0.7em;
    }

    .s-md-input {
        position: relative;
        margin: var(--s-md-input-margin) 0;
        width: 200px;
        height: var(--s-md-input-height);
        font-size: 16px;
        .placeholder {
            position: absolute;
            top: 2px;
            width: 100%;
            height: 100%;
            line-height: 100%;
            font-size: 100%;
            color: var(--blue-grey-light);
            overflow: hidden;
            transform-origin: bottom left;
            transition: transform 0.4s cubic-bezier(0.24,0.6,0.24,1), color 0.4s;
        }
        .line {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 0;
            height: 2px;
            margin: 0 auto;
            background: var(--primary-color);
            transition: width 0.24s;
            z-index: 6;
        }
        input {
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding-bottom: var(--s-md-input-padding);
            outline: none;
            border: none;
            border-bottom: 1px solid var(--blue-grey-light);
            background: transparent;
            line-height: 100%;
            font-size: 100%;
            color: #555;
        }
        .s-md-input_validator {
            position: absolute;
            top: var(--s-md-input-height);
            width: 100%;
            height: var(--s-md-input-margin);
            .s-md-input_validator_inner {
                height: 100%;
                line-height: var(--s-md-input-margin);
                font-size: 12px;
                color: var(--error-color);
            }
        }
    }

    .s-md-input--focused {
        .placeholder {
            transform: translateY(-1.35em) scale(0.8);
            color: var(--primary-color);
        }
        .line {
            width: 100%;
        }
    }

    .s-md-input--inputed {
        .placeholder {
            transform: translateY(-1.35em) scale(0.8);
        }
        .line {
            width: 0;
        }
    }

    .s-md-input--focused.s-md-input--inputed {
        .line {
            width: 100%;
        }
    }

    .s-md-input--disabled {
        pointer: default;
        input {
            border-bottom-style: dotted;
            color: var(--blue-grey-light);
        }
    }

    .validator-enter-active,
    .validator-leave-active {
        transition: all 0.24s;
    }

    .validator-enter,
    .validator-leave-active {
        opacity: 0;
        transform: translateX(10px);
    }
</style>

<script>
    export default {
        name: 's-md-input',

        props: {
            value: {
                type: String
            },
            type: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String
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

        data() {
            return {
                focused: false,
                validateOk: true,
                validateError: ''
            }
        },

        computed: {
            model: {
                get() {
                    console.log(`s-md-input get model: ${this.value}`);
                    return this.value;
                },
                set(newVal) {
                    console.log(`s-md-input set model: ${newVal}`);
                    this.$emit('input', newVal);
                }
            },
            inputed() {
                return this.value !== '';
            }
        },

        watch: {
            model(value) {
                if (this.validator.trigger === "change") {
                    this.validate();
                }
            }
        },

        methods: {
            onFocus(ev) {
                if (!this.disabled) {
                    this.focused = true;
                }
            },
            onBlur(ev) {
                if (!this.disabled) {
                    this.focused = false;
                }
                if (this.validator.trigger !== "change") {
                    this.validate();
                }
            },
            validate() {
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
        }
    }
</script>

