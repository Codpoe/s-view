<template>
    <span class="s-input"
          :class="[
              's-input--' + size,
              $slots.prepend ? 's-input--prepend' : '',
              $slots.append ? 's-input--append' : '',
              readonly ? 's-input--readonly' : '',
              pendClickable ? 's-input--pendClickable' : '',
              disabled ? 's-input--disabled' : ''
          ]">

        <!--<div v-if="$slots.left-icon" class="s-input__left-icon">-->
            <!--<slot name="left-icon" @click="handleIconClick"></slot>-->
        <!--</div>-->

        <div v-if="$slots.prepend" class="s-input__prepend" @click="handlePendClick">
            <slot name="prepend"></slot>
        </div>

        <input v-if="type === 'text'"
               type="text"
               :size="size"
               v-model="model"
               :placeholder="placeholder"
               :readonly="readonly"
               :disabled="disabled">

        <input v-else type="password" :size="size" v-model="model" :disabled="disabled">

        <div v-if="$slots.append" class="s-input__append" @click="handlePendClick">
            <slot name="append"></slot>
        </div>

        <!--<div v-if="$slots.right-icon" class="s-input__right-icon">-->
            <!--<slot name="right-icon"></slot>-->
        <!--</div>-->
    </span>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-input {
        display: inline-flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
        input {
            outline: none;
            border: 1px solid var(--extra-light-silver);
            border-radius: 4px;
            color: var(--extra-light-black);
            background: transparent;
            line-height: 1;
            transition: all 0.25s;
            &:hover {
                border-color: var(--primary-light-color);
            }
            &:focus {
                border-color: var(--primary-color);
            }
            &::placeholder {
                color: var(--extra-light-silver);
            }
            &::-webkit-input-placeholder {
                color: var(--extra-light-silver);
            }
            &::-moz-placeholder {
                color: var(--extra-light-silver);
            }
            &:-moz-placeholder {
                color: var(--extra-light-silver);
            }
            &:-ms-input-placeholder {
                color: var(--extra-light-silver);
            }
        }
    }

    .s-input--prepend {
        input {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        .s-input__prepend {
            color: var(--light-silver);
            border: 1px solid var(--extra-light-silver);
            border-right: none;
            border-radius: 4px 0 0 4px;
        }
    }

    .s-input--append {
        input {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        .s-input__append {
            color: var(--light-silver);
            border: 1px solid var(--extra-light-silver);
            border-left: none;
            border-radius: 0 4px 4px 0;
        }
    }

    .s-input--small {
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

    .s-input--normal {
        input {
            padding: 6px;
            font-size: 14px;
        }
        .s-input__prepend,
        .s-input__append {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: 0 6px;
            font-size: 14px;
        }
        .s-input__right-icon {
        }
    }

    .s-input--large {
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

    .s-input--readonly {
        input {
            &:hover {
                border-color: var(--extra-light-silver);
            }
            &:focus {
                border-color: var(--extra-light-silver);
            }
        }
    }

    .s-input--pendClickable {
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
            }
        }
    }

    .s-input--disabled {
        input {
            background: var(--extra-light-gray);
            border-color: var(--extra-light-silver);
            color: var(--extra-light-silver);
            &:hover {
                border-color: var(--extra-light-silver);
            }
        }
    }

    .s-input--pendClickable.s-input--disabled {
        .s-input__prepend,
        .s-input__append {
            &:hover {
                border-color: var(--extra-light-silver);
            }
        }
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
            }
        },

        data: function () {
            return {};
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
                this.$emit("pendclick", ev);
            }
        }
    }
</script>