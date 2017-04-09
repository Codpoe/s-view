import Vue from 'vue'
import SButton from "../package/button/button.vue";
import SButtonGroup from "../package/button-group/button-group.vue";
import SRadio from "../package/radio/radio.vue";
import SCheckbox from "../package/checkbox/checkbox.vue";
import SInput from "../package/input/input.vue";
import SDropDownMenu from "../package/drop-down-menu/drop-down-menu.vue";
import SSelect from "../package/select/select.vue";
import SSwitch from "../package/switch/switch.vue";
import SSlider from "../package/slider/slider.vue";

Vue.component(SButton.name, SButton);
Vue.component(SButtonGroup.name, SButtonGroup);
Vue.component(SRadio.name, SRadio);
Vue.component(SCheckbox.name, SCheckbox);
Vue.component(SInput.name, SInput);
Vue.component(SDropDownMenu.name, SDropDownMenu);
Vue.component(SSelect.name, SSelect);
Vue.component(SSwitch.name, SSwitch);
Vue.component(SSlider.name, SSlider);

let app = new Vue({
    el: '#app',
    data: {
        picked: "备选项 1",
        checked: ["备选项 3", "备选项 4"],
        inputValue: "",
        validator: {
            required: {
                value: true,
                error: "此项必填"
            },
            min: {
                value: 10,
                error: "值不能小于 10"
            },
            max: {
                value: 30,
                error: "值不能大于 30"
            },
            regexp: {
                value: /^\d*$/,
                error: "只能填入数字"
            },
            custom: {
                fn: function (value) {
                    return value > 15 && value < 25;
                },
                error: "只能填入 15 ～ 25 范围内的数字"
            },
            trigger: "change"
        },
        selected: "2",
        options: [
            {
                text: "1"
            },
            {
                text: "2"
            }
        ],
        switched: true,
        slided: 40
    },
    methods: {
        handleClick: function (ev) {
            console.log("button clicked");
            console.log(ev);
            console.log("picked: " + this.picked);
            console.log("checked: " + this.checked);
            console.log("input: " + this.inputValue);
            console.log("selected: " + this.selected);
            console.log("switched: " + this.switched);
            console.log("slided: " + this.slided);
        },
        handleIndicatorClick: function (ev) {
            console.log("indicator clicked");
            console.log(ev);
        }
    }
});



