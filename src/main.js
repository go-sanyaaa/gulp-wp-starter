import Vue from "vue"
import App from "@/App.vue"
import VueTheMask from 'vue-the-mask'

Vue.use(VueTheMask)

var vm = new Vue({
    components: {App},
})

vm.$mount("#app")