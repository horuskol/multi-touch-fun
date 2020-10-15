import Vue from 'vue';

import MultiTouch from './components/multi-touch';

Vue.component('multi-touch', MultiTouch);

var app = new Vue({
    el: '#app'
});
