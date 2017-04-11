<template>
    <div class="s-picker">
        <div class="s-picker__content"
             @mouseleave="onMouseLeave"
             ref="picker">
            <div class="s-picker__content__top"></div>
            <ul>
                <li></li>
                <li v-for="item in items"
                    :class="[
                        item === model ? 's-picker__item--active' : 's-picker__item--inactive'
                    ]">
                    {{ item }}
                </li>
                <li></li>
            </ul>
            <div class="s-picker__content__bottom"></div>
        </div>
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-picker {
        display: inline-block;
        position: relative;
        .s-picker__content {
            height: 79px;
            overflow: scroll;
            &::-webkit-scrollbar {
                display: none;
            }
            .s-picker__content__top {
                position: absolute;
                top: 26px;
                width: 100%;
                height: 1px;
                border-bottom: 1px solid var(--primary-color);
                /*box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);*/
                /*background-color: var(--extra-light-gray);*/
                opacity: 0.6;
            }
            .s-picker__content__bottom {
                position: absolute;
                bottom: 26px;
                width: 100%;
                height: 1px;
                border-top: 1px solid var(--primary-color);
                /*background-color: var(--extra-light-gray);*/
                opacity: 0.6;
            }
            ul {
                transition: all 0.25s;
                li {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 25px;
                    padding: 0 14px;
                    margin: 1px 0;
                    font-size: 14px;
                }
                .s-picker__item--active {
                    animation: s-picker__item--active-anim 0.25s;
                    animation-fill-mode: both;
                }
                .s-picker__item--inactive {
                    animation: s-picker__item--inactive-anim 0.25s;
                    animation-fill-mode: both;
                }
            }
        }
    }

    @keyframes s-picker__item--active-anim {
        0% {
            transform: scale(0.9);
            color: var(--extra-light-silver);
        }
        100% {
            transform: scale(1);
            color: var(--black);
        }
    }

    @keyframes s-picker__item--inactive-anim {
        0% {
            transform: scale(1);
            color: var(--black);
        }
        100% {
            transform: scale(0.9);
            color: var(--extra-light-silver);
        }
    }
</style>

<script>
    module.exports = {
        name: "s-picker",

        props: {
            items: Array,
            value: {},
            type: {
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
                fromScroll: false
            };
        },

        computed: {
            model: {
                get: function () {
                    console.log("s-picker get model: " + this.value);
                    return this.value;
                },
                set: function (value) {
                    console.log("s-picker set model: " + value);
                    this.$emit("input", value);
                }
            }
        },

        watch: {
            model: function (newVal, oldVal) {
                if (!this.fromScroll) {
                    this.$refs.picker.scrollTop = this.items.indexOf(newVal) * 26;
                } else {
                    this.fromScroll = false;
                }
            }
        },

        methods: {
            onMouseLeave: function (ev) {
                this.$refs.picker.scrollTop = this.items.indexOf(this.model) * 26;
            },

            onScroll: function (ev) {

            }
        },

        mounted: function () {
            this.$refs.picker.scrollTop = this.items.indexOf(this.model) * 26;

            this.$nextTick(() => {
                this.$refs.picker.onscroll = (ev) => {
                    let position = Math.round(this.$refs.picker.scrollTop / 26);
                    if (this.items[position] !== this.model) {
                        this.fromScroll = true;
                        this.model = this.items[position];
                    }
                }
            });
        }
    }
</script>


