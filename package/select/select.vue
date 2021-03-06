<template>
    <div class="s-select"
         :class="[
             's-select--' + size,
             shouldOptionsShow ? 's-select--show' : ''
        ]">

        <s-input type="text"
                 :size="size"
                 :placeholder="placeholder"
                 v-model="model"
                 :pendClickable="true"
                 :readonly="readonly"
                 :disabled="disabled"
                 @pendClick="handleIndicatorClick">

            <template slot="suffix">
                <span class="s-select__indicator"></span>
            </template>

        </s-input>

        <s-drop-down-menu
                class="s-select__options"
                :items="selectOptions"
                type="select"
                :size="size"
                :shouldShow="shouldOptionsShow"
                @itemclick="handleItemClick">
        </s-drop-down-menu>

    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-select {
        display: inline-block;
        position: relative;
        .s-input {
            .s-select__indicator {
                transition: all 0.25s;
            }
        }
        .s-select__options {
            position: absolute;
            width: 100%;
        }
    }

    .s-select--small {
        .s-select__indicator {
            width: 6px;
            height: 6px;
            margin: 0 4px;
            border: 2px solid var(--extra-light-silver);
            border-top: none;
            border-right: none;
            border-radius: 2px;
            transform: rotate(-45deg);
        }
        .s-select__options {
            top: 26px;
            font-size: 12px;
        }
    }

    .s-select--normal {
        .s-select__indicator {
            width: 8px;
            height: 8px;
            margin: 0 6px;
            border: 2px solid var(--extra-light-silver);
            border-top: none;
            border-right: none;
            border-radius: 2px;
            transform: translateY(-1px) rotate(-45deg);
        }
        .s-select__options {
            top: 32px;
            font-size: 14px;
        }
    }

    .s-select--large {
        .s-select__indicator {
            width: 10px;
            height: 10px;
            margin: 0 8px;
            border: 2px solid var(--extra-light-silver);
            border-top: none;
            border-right: none;
            border-radius: 2px;
            transform: translateY(-1px) rotate(-45deg);
        }
        .s-select__options {
            top: 38px;
            font-size: 16px;
        }
    }

    .s-select--small.s-select--show {
        .s-select__indicator {
            transform: translateY(1px) rotate(135deg);
        }
    }

    .s-select--normal.s-select--show {
        .s-select__indicator {
            transform: translateY(2px) rotate(135deg);
        }
    }

    .s-select--large.s-select--show {
        .s-select__indicator {
            transform: translateY(3px) rotate(135deg);
        }
    }
</style>

<script>
   import SInput from "../input/input.vue";
   import SDropDownMenu from '../drop-down-menu/drop-down-menu.vue';

    export default {
        name: "s-select",

        components: {
            SInput,
            SDropDownMenu
        },
        
        props: {
            size: {
                type: String,
                default: "normal"
            },
            placeholder: {
                type: String,
                default: ""
            },
            value: {},
            options: {
                type: Array,
                default: []
            },
            readonly: {
                type: Boolean,
                default: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        
        data: function () {
            return {
                shouldOptionsShow: false
            };
        },
        
        computed: {
            model: {
                get: function () {
                    console.log("get select model: " + this.value);
                    return this.value;
                },
                set: function (value) {
                    console.log("set select value: " + value);
                    this.$emit("input", value);
                }
            },
            selectOptions: function () {
                this.options.forEach((option) => {
                    option.selected = false;
                    if (option.text === this.model.toString()) {
                        option.selected = true;
                    }
                });
                return this.options;
            }
        },
        
        methods: {
            handleClick: function (ev) {

            },
            handleIndicatorClick: function (ev) {
                console.log("handle indicator click");
                this.shouldOptionsShow = !this.shouldOptionsShow;
                this.$emit("indicatorclick", ev);
            },
            handleItemClick: function (item) {
                console.log("item clicked");
                this.shouldOptionsShow = false;
                // do something else for item here
                this.model = item.text;
            }
        }
    }
</script>

