import Vue from "vue"
import VueTheMask from 'vue-the-mask'

Vue.use(VueTheMask)

var vm = new Vue({
    el: "#app",
    data: {
        title: "Hello"
    },
})