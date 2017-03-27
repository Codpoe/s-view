import Vue from 'vue'
import SButton from "../package/button/button.vue";
import SButtonGroup from "../package/button-group/button-group.vue";
import SRadio from "../package/radio/radio.vue";
import SCheckbox from "../package/checkbox/checkbox.vue";

Vue.component(SButton.name, SButton);
Vue.component(SButtonGroup.name, SButtonGroup);
Vue.component(SRadio.name, SRadio);
Vue.component(SCheckbox.name, SCheckbox);

let app = new Vue({
    el: '#app',
    data: {
        picked: "备选项 1",
        checked: ["备选项 3", "备选项 4"]
    },
    methods: {
        handleClick: function (ev) {
            console.log(ev);
            console.log(this.picked);
            console.log(this.checked);
        }
    }
});



