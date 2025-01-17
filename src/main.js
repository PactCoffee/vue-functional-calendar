import Vue from 'vue';
import FunctionalCalendar from '../index';
import Demo from './Demo';
import 'babel-polyfill'
Vue.use(FunctionalCalendar, {dayNames: ['Moa', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']});
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    template: '<Demo/>',
    components: {Demo}
});
