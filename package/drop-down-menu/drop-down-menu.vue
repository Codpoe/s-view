<template>
    <transition v-if="shouldShow" name="drop-down">
        <div v-if="type !== 'plain'" 
            class="s-drop-down-menu"
            :class="[
                's-drop-down-menu--' + type,
                's-drop-down-menu--' + size
            ]">
            <ul>
                <li v-for="item in items"
                    :class="[
                        item.selected === true ? 's-drop-down-menu__item--selected' : ''
                    ]"
                    @click="handleItemClick(item)">
                    {{ item.text }}
                </li>
            </ul>
        </div>
        <div v-else class="s-drop-down-menu--plain">
            <slot></slot>
        </div>
    </transition>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-drop-down-menu--plain {
        background: var(--white);
        border-radius: 4px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
        z-index: 1001;
    }

    .s-drop-down-menu {
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        border-radius: 4px;
        padding: 8px 0;
        background: var(--white);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
        z-index: 1001;
        ul {
            list-style-type: none;
            li {
                color: var(--extra-light-black);
                cursor: pointer;
                transition: all 0.25s;
                &:hover {
                    background: var(--light-gray);
                }
            }
        }
    }

    .s-drop-down-menu--click {
        li {
            &:hover {
                color: var(--primary-color);
                transform: translateX(1em);
            }
        }
    }

    .s-drop-down-menu--select {
        .s-drop-down-menu__item--selected {
            color: var(--white);
            background: var(--primary-color);
        }
    }

    .s-drop-down-menu--small {
        li {
            padding: 6px;
            font-size: 12px;
        }
    }

    .s-drop-down-menu--normal {
        li {
            padding: 8px;
            font-size: 14px;
        }
    }

    .s-drop-down-menu--large {
        li {
            padding: 8px;
            font-size: 16px;
        }
    }

    .drop-down-enter-active,
    .drop-down-leave-active {
        transform-origin: 50% 0;
        transition: all 0.25s;
    }

    .drop-down-enter,
    .drop-down-leave-active {
        opacity: 0;
        transform: translateY(-10px);
    }
</style>

<script>
    module.exports = {
        name: "s-drop-down-menu",

        props: {
            items: { // eg. if type === "click", then [{text: "1"}, {text: "2"}]
                type: Array // if type === "select", then [{text: "1", selected: true}, {text: "2"}]
            },
            type: { // used for: link, click, select
                type: String,
                default: "click"
            },
            size: { // small, normal, large
                type: String,
                default: "normal"
            },
            shouldShow: {
                type: Boolean,
                default: false
            }
        },

        data: function () {
            return {
//                menuItems: this.items
            };
        },

        computed: {

        },

        methods: {
            handleItemClick: function (item) {
                this.$emit("itemclick", item);
            }
        }
    }
</script>

