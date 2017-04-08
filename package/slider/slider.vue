<template>
    <div class="s-slider"
         :class="[
             (shouldShowValue || isDragging) ? 's-slider--dragging' : '',
             disabled ? 's-slider--disabled' : ''
         ]">

        <div class="s-slider__track"
             :class="[
                 shouldShowStops ? 's-slider__track--stops' : ''
             ]"
             :style="{ width: trackWidth + 'px' }"
             @click="onTrackClick">

            <div class="s-slider__track__stops">
                <div v-for="n in (stepCount + 1)"
                     class="s-slider__track__stop"
                     :style="{ opacity: n === 1 || n === stepCount + 1 ? 0 : 1 }">
                </div>
            </div>

            <div class="s-slider__indicator"
                 :style="{ width: indicatorWidth }">

                <div class="s-slider__indicator__tooltip">
                    {{ (shouldShowValue || isDragging) ? model : "" }}
                </div>

                <div class="s-slider__indicator__point"
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
    /*background: rgba(32, 160, 255, 0.25);*/

    .s-slider {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        .s-slider__track {
            background: var(--light-gray);
            height: 6px;
            border-radius: 3px;
            cursor: pointer;
            position: relative;
            .s-slider__track__stops {
                position: absolute;
                width: 100%;
                height: 100%;
                display: inline-flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: stretch;
                .s-slider__track__stop {
                    width: 2px;
                    background: var(--extra-light-silver);
                }
            }
            .s-slider__indicator {
                height: 100%;
                background: var(--primary-color);
                border-radius: 3px;
                position: relative;
                .s-slider__indicator__tooltip {
                    position: absolute;
                    top: -5px;
                    right: -8px;
                    min-width: 16px;
                    min-height: 16px;
                    padding: 6px;
                    border-radius: 8px;
                    background: var(--primary-color);
                    font-size: 14px;
                    color: var(--white);
                    user-select: none;
                    transition: all 0.25s;
                }
                .s-slider__indicator__point {
                    position: absolute;
                    top: -5px;
                    right: -8px;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: rgba(32, 160, 255, 0.25);
                    transition: all 0.25s;
                }
            }
        }
    }

    .s-slider--dragging {
        .s-slider__indicator__tooltip {
            transform: translateY(-32px);
        }
    }

    .s-slider--disabled {
        .s-slider__track {
            cursor: default;
            .s-slider__indicator {
                background: var(--extra-light-silver);
                .s-slider__indicator__tooltip {
                    background: var(--extra-light-silver);
                }
                .s-slider__indicator__point {
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
            stepValue: {
                type: Number,
                default: 1
            },
            trackWidth: {
                type: Number,
                default: 100
            },
            shouldShowStops: {
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
                shouldShowValue: false,
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

            stepWidth: function () {
                return this.trackWidth / this.stepCount;
            },

            indicatorWidth: function () {
                return (this.value - this.min) / (this.max - this.min) * 100 + "%";
            }
        },

        methods: {
            onMouseEnter: function (ev) {
                if (!this.disabled) {
                    this.shouldShowValue = true;
                }
            },

            onMouseLeave: function (ev) {
                this.shouldShowValue = false;
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
                    diffValue = Math.round((this.currentX - this.startX) / (this.trackWidth / this.stepCount)) * this.stepValue;
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
            },

            onTrackClick: function (ev) {
                if (!this.disabled) {
                    let diffValue = Math.round((ev.clientX - ev.target.offsetParent.offsetLeft) / (this.trackWidth / this.stepCount))
                        * this.stepValue;
                    this.model = this.min + diffValue;
                }
            }
        }
    }
</script>


