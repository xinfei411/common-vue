import Vue from 'vue'
Vue.directive('focus', {
    bind(el, binding) {

    },
    inserted(el, binding) {
        el.focus();
    }
});