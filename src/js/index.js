import Vue from 'vue';
import VueRouter from 'vue-router';
import Sview from './sview.js';
import Intro from '../routes/intro.md';
import Badge from '../routes/badge.md';
import Button from '../routes/button.md';
import Checkbox from '../routes/checkbox.md';
import Icon from '../routes/icon.md';
import Input from '../routes/input.md';
import Radio from '../routes/radio.md';
import Slider from '../routes/slider.md';
import Switch from '../routes/switch.md';
import Table from '../routes/table.md';

import '../css/index.css';

Vue.use(VueRouter);
Vue.use(Sview);

const router = new VueRouter({
    routes: [
        {
            path: '/intro',
            component: Intro
        },
        {
            path: '/badge',
            component: Badge
        },
        {
            path: '/button',
            component: Button
        },
        {
            path: '/checkbox',
            component: Checkbox
        },
        {
            path: '/icon',
            component: Icon
        },
        {
            path: '/input',
            component: Input
        },
        {
            path: '/radio',
            component: Radio
        },
        {
            path: '/slider',
            component: Slider
        },
        {
            path: '/switch',
            component: Switch
        },
        {
            path: '/table',
            component: Table
        }
    ]
});

const app = new Vue({
    router
}).$mount('#app');

// let app = new Vue({
//     el: '#app',
//     data: {
//         picked: "备选项 1",
//         checked: ["备选项 3", "备选项 4"],
//         inputValue: "",
//         validator: {
//             required: {
//                 value: true,
//                 error: "此项必填"
//             },
//             min: {
//                 value: 10,
//                 error: "值不能小于 10"
//             },
//             max: {
//                 value: 30,
//                 error: "值不能大于 30"
//             },
//             regexp: {
//                 value: /^\d*$/,
//                 error: "只能填入数字"
//             },
//             custom: {
//                 fn: function (value) {
//                     return value > 15 && value < 25;
//                 },
//                 error: "只能填入 15 ～ 25 范围内的数字"
//             },
//             trigger: "change"
//         },
//         selected: "2",
//         options: [
//             {
//                 text: "1"
//             },
//             {
//                 text: "2"
//             }
//         ],
//         switched: true,
//         slided: 40,
//         yearItems: ["1970", "1975", "1980", "1985", "1990", "1995", "2000", "2005", "2010", "2015"],
//         monthItems: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
//         dateItems: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
//             "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "26", "27",
//             "28", "29", "30", "31"],
//         pickedYear: "1995",
//         pickedMonth: "12",
//         pickedDay: "4",
//         pickedDate: "2017/04/24"
//     },
//     methods: {
//         handleClick: function (ev) {
//             console.log("button clicked");
//             console.log(ev);
//             console.log("picked: " + this.picked);
//             console.log("checked: " + this.checked);
//             console.log("input: " + this.inputValue);
//             console.log("selected: " + this.selected);
//             console.log("switched: " + this.switched);
//             console.log("slided: " + this.slided);
//             this.picked = "Java";
//         },
//         handleIndicatorClick: function (ev) {
//             console.log("indicator clicked");
//             console.log(ev);
//         }
//     }
// });