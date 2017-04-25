<template>
    <div 
        class="s-date-picker"
        :class="[
            shouldShow ? 's-date-picker--show' : ''
        ]">
        <s-input 
            v-model="model"
            type="text"
            :placeholder="placeholder"
            :readonly="true"
            :pendClickable="true"
            @pendClick="onIndicatorClick">

            <template slot="append">
                <div class="s-date-picker__indicator"></div>
            </template>
        </s-input>

        <s-drop-down-menu
            class="s-date-picker__dropdown"
            type="plain" 
            :shouldShow="shouldShow">
            <template>    
                <s-picker :items="yearItems" v-model="yearModel"></s-picker>
                /
                <s-picker :items="monthItems" v-model="monthModel"></s-picker>
                /
                <s-picker :items="dayItems" v-model="dayModel"></s-picker>
            </template>
        </s-drop-down-menu>
    </div>
</template>

<style lang="postcss">
    @import "../common/common.css";

    .s-date-picker {
        display: inline-block;
        position: relative;
        .s-date-picker__indicator {
            width: 8px;
            height: 8px;
            margin: 0 6px;
            border: 2px solid var(--extra-light-silver);
            border-radius: 2px;
            border-top: none;
            border-right: none;
            transform: translateY(-1px) rotate(-45deg);
            transition: all 0.25s;
        }
        .s-date-picker__dropdown {
            position: absolute;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            s-picker {
            }
        }
    }

    .s-date-picker--show {
        .s-date-picker__indicator {
            transform: translateY(1px) rotate(135deg);
        }
        .s-date-picker__dropdown {
            width: 100%;
            top: 32px;
        }
    }
</style>

<script>
    import SInput from '../input/input.vue';
    import SPicker from "./picker.vue";

    export default {
        name: "s-date-picker",

        components: {
            SInput,
            SPicker
        },

        props: {
            value: {},
            yearItems: {
                type: Array,
                default: function() {
                    return [
                        "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999",
                        "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009",
                        "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"
                    ];
                }
            },
            monthItems: {
                type: Array,
                default: function() {
                    return [
                        "01", "02", "03", "04", "05", "06", "07", "08", "09",
                        "10", "11", "12"
                    ];
                }
            },
            dayItems: {
                type: Array,
                default: function() {
                    return [
                        "01", "02", "03", "04", "05", "06", "07", "08", "09",
                        "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
                        "20", "21", "22", "23", "24", "26", "27", "28", "29",
                        "30", "31"
                    ];
                }
            },
            placeholder: {
                type: String,
                default: ""
            },

        },

        data: function() {
            return {
                shouldShow: false,
                yearModel: "",
                monthModel: "",
                dayModel: ""
            }
        },

        computed: {
            realValue: function() {
                let tempValue = new Date(this.value);
                this.yearModel = String(tempValue.getFullYear());
                if (tempValue.getMonth() < 9) {
                    this.monthModel = "0" + (tempValue.getMonth() + 1);
                } else {
                    this.monthModel = String(tempValue.getMonth() + 1);
                }
                if (tempValue.getDate() < 10) {
                    this.dayModel = "0" + tempValue.getDate();
                } else {
                    this.dayModel = String(tempValue.getDate());
                }
                return tempValue;
            },
            model: {
                get: function() {
                    console.log("get date-picker model: " + this.realValue);
                    return this.yearModel + "/" + this.monthModel + "/" + this.dayModel;
                },
                set: function(value) {
                    console.log("set date-picker model: " + value);
                    this.$emit("input", value);
                }
            }
        },

        methods: {
            onIndicatorClick: function(ev) {
                this.shouldShow = !this.shouldShow;
            }
        }


    }
</script>


