<template>
    <div class="s-md-input"
        :class="[
            focused ? 's-md-input--focused' : '',
            inputed ? 's-md-input--inputed' : ''
        ]">
        <div class="placeholder"
            :class="focused ? 'placeholder--focus' : ''">
            {{ placeholder }}
        </div>
        <div class="line"></div>
        <input v-if="type === 'text'" v-model="model" :disabled="disabled" @focus="onFocus" @blur="onBlur">
        <input v-else type="password" v-model="model" :disabled="disabled">
    </div>
</template>

<style lang="postcss">
    @import '../common/common.css';
    :root {
        --s-md-input-height: 18px;
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
        height: 24px;
        font-size: 16px;
        .placeholder {
            position: absolute;
            top: 2px;
            width: 100%;
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
    }

    .s-md-input--focused {
        .placeholder {
            transform: translate3d(0,-1.35em,0) scale(0.8);
            color: var(--primary-color);
        }
        .line {
            width: 100%;
        }
    }

    .s-md-input--inputed {
        .placeholder {
            transform: translate3d(0,-1.35em,0) scale(0.8);
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
            }
        },

        data() {
            return {
                focused: false
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

        methods: {
            onFocus(ev) {
                this.focused = true;
            },
            onBlur(ev) {
                this.focused = false;
            }
        }
    }
</script>

