<template>
    <!--<select class="s-select"-->
            <!--:class="[-->
                <!--disabled ? 's-select&#45;&#45;disabled' : ''-->
            <!--]"-->
            <!--v-model="model"-->
            <!--@click.prevent="handleClick($event)">-->
        <!--<slot></slot>-->
        <!--<option value="1">选项 1</option>-->
        <!--<option value="2">选项 2</option>-->
        <!--<option value="3">选项 3</option>-->
        <!--<option value="4">选项 4</option>-->
    <!--</select>-->
    <div
            class="s-select"
            :class="[
                's-select--' + size,
                shouldOptionsShow ? 's-select--show' : ''
            ]">

        <s-input
                type="text"
                :size="size"
                :placeholder="placeholder"
                v-model="model"
                :pendClickable="true"
                :readonly="readonly"
                :disabled="disabled"
                @pendclick="handleIndicatorClick">

            <template slot="append">
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

        <!--<transition name="down">-->
            <!--<div v-if="shouldOptionsShow" class="s-select__options">-->
                <!--<div>选项 1</div>-->
                <!--<div>选项 2</div>-->
                <!--<div>选项 3</div>-->
                <!--<div>选项 4</div>-->
            <!--</div>-->
        <!--</transition>-->
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-select {
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        position: relative;
        .s-input {
            order: 0;
            .s-select__indicator {
                transition: all 0.25s;
            }
        }
        .s-select__options {
            order: 1;
            margin-top: 4px;
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
        .s-select__ioptions {
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
//    import SInput from "../input/input.vue";

    module.exports = {
        name: "s-select",
        
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

