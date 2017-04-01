<template>
    <div class="s-slider"
         :class="[
             's-slider--' + size,
             disabled ? 's-slider--disabled' : ''
         ]">
        <div class="s-slider__track">
            <div class="s-slider__indicator"
                 @mouseenter="onMouseEnter"
                 @mousedown="onMouseDown">
                <div class="s-slider__indicator__inner">
                    {{ hoveringValue }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-slider {
        display: inline-block;
        padding: 4px;
        cursor: pointer;
        .s-slider__track {
            display: inline-flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            background: var(--light-gray);
            .s-slider__indicator {
                position: relative;
                left: -2px;
                border-radius: 50%;
                background: rgba(32, 160, 255, 0.25);
                &:hover {
                    .s-slider__indicator__inner {
                        transform: scale(1.25) translateY(-16px);
                        border-radius: 4px;
                    }
                }
                .s-slider__indicator__inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: var(--primary-color);
                    transition: all 0.25s;
                }
            }
        }
    }

    .s-slider--normal {
        .s-slider__track {
            width: 100px;
            height: 12px;
            border-radius: 6px;
            .s-slider__indicator {
                width: 16px;
                height: 16px;
            }
        }
    }
</style>

<script>
    module.exports = {
        name: "s-slider",

        props: {
            value: {},
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            stepLength: {
                type: Number,
                default: 1
            },
            size: { // small, normal or large
                type: String,
                default: "normal"
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },

        data: function () {
            return {
                isHovering: false,
                hoveringValue: null,
                startX: null,
                currentX: null
            };
        },

        computed: {
            model: {
                get: function () {
                    console.log("slider: get model: " + this.value);
                    return this.value;
                },
                set: function (value) {
                    console.log("slider: set model: " + value);
                    this.$emit("input", value);
                }
            },

            stepCount: function () {
                let length = this.max - this.min;
                if (length % this.stepCount === 0) {
                    return length / this.stepLength;
                } else {
                    return length;
                }
            }
        },

        methods: {
            onMouseEnter: function (ev) {
                this.isHovering = true;
                this.hoveringValue = this.model;
            },

            onMouseDown: function (ev) {
                this.startX = ev.clientX;
                window.addEventListener("mousemove", this.onDragging);
                window.addEventListener("mouseup", this.onDragEnd);
            },

            onDragging: function (ev) {
                let diffStepCount;
                this.currentX = ev.clientX;
                diffStepCount = Math.round((this.currentX - this.startX) / this.stepLength);
                if (this.model + diffStepCount > this.stepCount) {
                    this.model = this.stepCount;
                } else if (this.model + diffStepCount < 0) {
                    this.model = 0;
                } else {
                    this.model += diffStepCount; // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                }
            },

            onDragEnd: function (ev) {
                window.removeEventListener("mousemove");
                window.removeEventListener("mouseup");
            }
        }
    }
</script>


