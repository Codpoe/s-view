import Vue from 'vue'
import SButton from "../package/button/button.vue";

Vue.component(SButton.name, SButton);

new Vue({
    el: '#app',
    methods: {
        handleClick: function (ev) {
            console.log(ev);
        }
    }
});

