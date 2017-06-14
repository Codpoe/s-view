import SButton from "../../package/button/button.vue";
import SButtonGroup from "../../package/button-group/button-group.vue";
import SRadio from "../../package/radio/radio.vue";
import SCheckbox from "../../package/checkbox/checkbox.vue";
import SInput from "../../package/input/input.vue";
import SDropDownMenu from "../../package/drop-down-menu/drop-down-menu.vue";
import SSelect from "../../package/select/select.vue";
import SSwitch from "../../package/switch/switch.vue";
import SSlider from "../../package/slider/slider.vue";
import SBadge from "../../package/badge/badge.vue";
import SIcon from "../../package/icon/icon.vue";
import SPicker from "../../package/picker/picker.vue";
import SDatePicker from "../../package/picker/date-picker.vue";
import STable from '../../package/table/table.vue';
import SForm from '../../package/form/form.vue';
import SMDInput from '../../package/md-input/input.vue';

const components = [
    SButton,
    SButtonGroup,
    SRadio,
    SCheckbox,
    SInput,
    SDropDownMenu,
    SSelect,
    SSwitch,
    SSlider,
    SBadge,
    SIcon,
    SPicker,
    SDatePicker,
    STable,
    SForm,
    SMDInput
];

const install = function (Vue) {
    components.map((component) => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = {
    install,
    SButton,
    SButtonGroup,
    SRadio,
    SCheckbox,
    SInput,
    SDropDownMenu,
    SSelect,
    SSwitch,
    SSlider,
    SBadge,
    SIcon,
    SPicker,
    SDatePicker,
    STable,
    SForm,
    SMDInput
};



