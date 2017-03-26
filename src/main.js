import Vue from 'vue'
import SButton from "../package/button/button.vue";
import SButtonGroup from "../package/button-group/button-group.vue";
import SRadio from "../package/radio/radio.vue";

Vue.component(SButton.name, SButton);
Vue.component(SButtonGroup.name, SButtonGroup);
Vue.component(SRadio.name, SRadio);

let app = new Vue({
    el: '#app',
    data: {
        picked: "备选项 1"
    },
    methods: {
        handleClick: function (ev) {
            console.log(ev);
            console.log(this.picked);
        }
    }
});



