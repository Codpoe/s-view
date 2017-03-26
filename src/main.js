import Vue from 'vue'
import SButton from "../package/button/button.vue";
import SButtonGroup from "../package/button-group/button-group.vue";

Vue.component(SButton.name, SButton);
Vue.component(SButtonGroup.name, SButtonGroup);

new Vue({
    el: '#app',
    methods: {
        handleClick: function (ev) {
            console.log(ev);
        }
    }
});

