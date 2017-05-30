<template>
    <div class="s-slider"
         :class="[
             isDragging ? 's-slider--dragging' : '',
             toShowValue ? 's-slider--show-value' : '',
             disabled ? 's-slider--disabled' : ''
         ]"
         @click="onSliderClick">

        <div class="s-slider_track"
             :class="[
                 showStops ? 's-slider_track--stops' : ''
             ]"
             :style="{ width: trackWidth + 'px' }">

            <div v-if="showStops"
                 class="s-slider_track_stops">
                <div v-for="n in (stepCount + 1)"
                     class="s-slider_track_stop"
                     :style="{ opacity: (n === 1 || n === (stepCount + 1)) ? 0 : 1 }">
                </div>
            </div>

            <div class="s-slider_indicator"
                 :style="{ width: indicatorWidth }">

                <div class="s-slider_indicator_tooltip">
                    {{ toShowValue ? model : "" }}
                </div>

                <div class="s-slider_indicator_thumb"
                     @mouseenter="onMouseEnter"
                     @mouseleave="onMouseLeave"
                     @mousedown="onMouseDown"
                     @click.stop="">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    :root {
        --slider-track-height: 2px;
        --slider-thumb-size: 12px;
        --slider-track-color: #b9b9b9;
    }

    .s-slider {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: calc((var(--slider-thumb-size) - var(--slider-track-height)) / 2);
        cursor: pointer;
        .s-slider_track {
            background: var(--slider-track-color);
            height: var(--slider-track-height);
            border-radius: calc(var(--slider-track-height) / 2);
            position: relative;
            .s-slider_track_stops {
                position: absolute;
                width: 100%;
                height: 100%;
                display: inline-flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: stretch;
                .s-slider_track_stop {
                    width: 2px;
                    background: var(--primary-extra-light);
                }
            }
            .s-slider_indicator {
                height: 100%;
                background: var(--primary-color);
                border-radius: calc(var(--slider-track-height) / 2);
                position: relative;
                .s-slider_indicator_tooltip {
                    position: absolute;
                    top: -calc((var(--slider-thumb-size) - var(--slider-track-height)) / 2);
                    right: -calc((var(--slider-thumb-size) - var(--slider-track-height)) / 2);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-width: var(--slider-thumb-size);
                    min-height: var(--slider-thumb-size);
                    padding: 2px 6px;
                    border-radius: calc(var(--slider-thumb-size) / 2);
                    background: var(--primary-color);
                    font-size: 12px;
                    color: var(--white);
                    user-select: none;
                    transition: all 0.25s;
                }
                .s-slider_indicator_thumb {
                    position: absolute;
                    top: -calc((var(--slider-thumb-size) - var(--slider-track-height)) / 2);
                    right: -calc((var(--slider-thumb-size) - var(--slider-track-height)) / 2);
                    width: var(--slider-thumb-size);
                    height: var(--slider-thumb-size);
                    border-radius: 50%;
                    background: var(--primary-color);
                    opacity: 0.25;
                    transition: all 0.25s;
                }
            }
        }
    }

    .s-slider--dragging {
        .s-slider_indicator_tooltip {
            transform: scale(1.4);
        }
        .s-slider_indicator_thumb {
            transform: scale(1.4);
        }
    }

    .s-slider--show-value {
        .s-slider_indicator_tooltip {
            transform: translateY(-20px);
        }
    }

    .s-slider--disabled {
        .s-slider_track {
            cursor: default;
            .s-slider_indicator {
                background: var(--extra-light-silver);
                .s-slider_indicator_tooltip {
                    background: var(--extra-light-silver);
                }
                .s-slider_indicator_thumb {
                    background: var(--extra-light-silver);
                }
            }
        }
    }

    /*@keyframes s-slider__indicator__point-anim--false {*/
        /*0% {*/
            /*transform: scale(1);*/
        /*}*/
        /*100% {*/
            /*transform: scale(0);*/
        /*}*/
    /*}*/

    /*@keyframes s-slider__indicator__point-anim--true {*/
        /*0% {*/
            /*transform: scale(0);*/
        /*}*/
        /*100% {*/
            /*transform: scale(1);*/
        /*}*/
    /*}*/

    /*@keyframes s-slider__indicator__point__inner-anim--false {*/
        /*0% {*/
            /*transform: translateY(-24px);*/
            /*border-radius: 2px;*/
        /*}*/
        /*100% {*/
            /*transform: translateY(0px);*/
            /*border-radius: 8px;*/
        /*}*/
    /*}*/
    /**/
    /*@keyframes s-slider__indicator__point__inner-anim--true {*/
        /*0% {*/
            /*transform: translateY(0px);*/
            /*border-radius: 8px;*/
        /*}*/
        /*100% {*/
            /*width: 32px;*/
            /*transform: translateY(-24px);*/
            /*border-radius: 2px;*/
        /*}*/
    /*}*/
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
            step: {
                type: Number,
                default: 1
            },
            trackWidth: {
                type: Number,
                default: 150
            },
            showStops: {
                type: Boolean,
                default: false
            },
            showValue: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },

        data: function () {
            return {
                toShowValue: false,
                isDragging: false,
                startX: 0,
                currentX: 0
            };
        },

        computed: {
            model: {
                get: function () {
                    console.log("slider: get model: " + this.value);
                    return this.value < this.min
                        ? this.min
                        : (
                            this.value > this.max
                                ? this.max
                                : this.value
                        );
                },
                set: function (value) {
                    console.log("slider: set model: " + value);
                    this.$emit("input", value);
                }
            },

            stepCount: function () {
                let length = this.max - this.min;
                if (length % this.step === 0) {
                    return length / this.step;
                } else {
                    return length;
                }
            },

            stepWidth: function () {
                return this.trackWidth / this.stepCount;
            },

            indicatorWidth: function () {
                return (this.model - this.min) / (this.max - this.min) * 100 + "%";
            }
        },

        methods: {
            onMouseEnter: function (ev) {
                if (!this.disabled && this.showValue) {
                    this.toShowValue = true;
                }
            },

            onMouseLeave: function (ev) {
                this.toShowValue = (this.toShowValue && this.isDragging) ? true : false;
            },

            onMouseDown: function (ev) {
                if (!this.disabled) {
                    this.startX = ev.clientX;
                    this.isDragging = true;
                    window.addEventListener("mousemove", this.onDragging);
                    window.addEventListener("mouseup", this.onDragEnd);
                }
            },

            onDragging: function (ev) {
                if (this.isDragging) {
                    let tempValue;
                    let diffValue;
                    this.currentX = ev.clientX;
                    diffValue = Math.round((this.currentX - this.startX) / (this.trackWidth / this.stepCount)) * this.step;
                    tempValue = this.model + diffValue;

                    if (this.currentX > this.startX && this.model !== this.max
                        || this.currentX < this.startX && this.model !== this.min) {
                        if (tempValue > this.max) {
                            this.model = this.max;
                        } else if (tempValue < this.min) {
                            this.model = this.min;
                        } else {
                            this.model = tempValue;
                        }
                        this.startX += diffValue / this.step * (this.trackWidth / this.stepCount);
                    }
                }
            },

            onDragEnd: function (ev) {
                if (this.isDragging) {
                    this.isDragging = false;
                    this.toShowValue = false;
                    window.removeEventListener("mousemove", this.onDragging);
                    window.removeEventListener("mouseup", this.onDragEnd);
                }
            },

            onSliderClick: function (ev) {
                if (!this.disabled) {
                    let diffX;
                    let diffValue;

                    diffX = ev.clientX - ev.target.getBoundingClientRect().left;
                    if (ev.target.className === 's-slider') {
                        diffX = diffX - 5;
                    }
                    diffValue = Math.round(diffX / (this.trackWidth / this.stepCount)) * this.step;
                    this.model = this.min + diffValue;
                }
            }
        }
    }
</script>


