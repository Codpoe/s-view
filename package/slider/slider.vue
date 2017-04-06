<template>
    <div class="s-slider"
         :class="[
             isDragging ? 's-slider--dragging' : '',
             disabled ? 's-slider--disabled' : ''
         ]">
        <div class="s-slider__track"
             :style="{ width: trackWidth + 'px' }">
            <div class="s-slider__indicator"
                 :style="{ width: indicatorWidth }">
                <div class="s-slider__indicator__point"
                     @mouseenter="onMouseEnter"
                     @mousedown="onMouseDown">
                    <div class="s-slider__indicator__point__inner">
                        <!--{{ hoveringValue }}-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";
    /*background: rgba(32, 160, 255, 0.25);*/

    .s-slider {
        display: inline-block;
        padding: 8px;
        cursor: pointer;
        .s-slider__track {
            display: inline-flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            background: var(--light-gray);
            height: 6px;
            border-radius: 3px;
            .s-slider__indicator {
                height: 100%;
                background: var(--primary-color);
                border-radius: 3px;
                position: relative;
                .s-slider__indicator__point {
                    display: inline;
                    position: absolute;
                    top: -5px;
                    right: -8px;
                    border-radius: 50%;
                    background: rgba(32, 160, 255, 0.25);
                    width: 16px;
                    height: 16px;
                    .s-slider__indicator__point__inner {
                        position: relative;
                        min-width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        background: var(--primary-color);
                        transition: all 0.25s;
                    }
                }
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
            stepValue: {
                type: Number,
                default: 1
            },
            trackWidth: {
                type: Number,
                default: 100
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
                isDragging: false,
                startX: 0,
                currentX: 0
            };
        },

        computed: {
            model: {
                get: function () {
                    console.log("slider: get model: " + this.value);
                    if (this.value < this.min) {
                        return this.min;
                    } else if (this.value > this.max) {
                        return this.max;
                    } else {
                        return this.value;
                    }
                },
                set: function (value) {
                    console.log("slider: set model: " + value);
                    this.$emit("input", value);
                }
            },

            stepCount: function () {
                let length = this.max - this.min;
                if (length % this.stepValue === 0) {
                    return length / this.stepValue;
                } else {
                    return length;
                }
            },

            indicatorWidth: function () {
                return this.value / (this.max - this.min) * 100 + "%";
            }
        },

        methods: {
            onMouseEnter: function (ev) {
                this.isHovering = true;
                this.hoveringValue = this.model;
            },

            onMouseDown: function (ev) {
                this.startX = ev.clientX;
                this.isDragging = true;
                window.addEventListener("mousemove", this.onDragging);
                window.addEventListener("mouseup", this.onDragEnd);
            },

            onDragging: function (ev) {
                if (this.isDragging) {
                    let diffValue;
                    let oldValue = this.model;
                    this.currentX = ev.clientX;
                    diffValue = Math.round((this.currentX - this.startX) / (this.trackWidth / this.stepCount)) * this.stepValue;

                    if ((this.currentX > this.startX && this.model !== this.max)
                        || (this.currentX < this.startX && this.model !== this.min)) {
                        this.model += diffValue;
                        this.startX += diffValue / this.stepValue * (this.trackWidth / this.stepCount);
                    }
                }
            },

            onDragEnd: function (ev) {
                if (this.isDragging) {
                    this.isDragging = false;
                    window.removeEventListener("mousemove", this.onDragging);
                    window.removeEventListener("mouseup", this.onDragEnd);
                }
            }
        }
    }
</script>


