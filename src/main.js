import Vue from 'vue'
import SButton from "../package/button/button.vue";
import SButtonGroup from "../package/button-group/button-group.vue";
import SRadio from "../package/radio/radio.vue";
import SCheckbox from "../package/checkbox/checkbox.vue";
import SInput from "../package/input/input.vue";
import SDropDownMenu from "../package/drop-down-menu/drop-down-menu.vue";
import SSelect from "../package/select/select.vue";

Vue.component(SButton.name, SButton);
Vue.component(SButtonGroup.name, SButtonGroup);
Vue.component(SRadio.name, SRadio);
Vue.component(SCheckbox.name, SCheckbox);
Vue.component(SInput.name, SInput);
Vue.component(SDropDownMenu.name, SDropDownMenu);
Vue.component(SSelect.name, SSelect);

let app = new Vue({
    el: '#app',
    data: {
        picked: "备选项 1",
        checked: ["备选项 3", "备选项 4"],
        inputValue: "",
        selected: "2",
        options: [
            {
                text: "1"
            },
            {
                text: "2"
            }
        ]
    },
    methods: {
        handleClick: function (ev) {
            console.log("button clicked");
            console.log(ev);
            console.log("picked: " + this.picked);
            console.log("checked: " + this.checked);
            console.log("input: " + this.inputValue);
            console.log("selected: " + this.selected);
        },
        handleIndicatorClick: function (ev) {
            console.log("indicator clicked");
            console.log(ev);
        }
    }
});



