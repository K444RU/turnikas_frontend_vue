import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import VueAxios from "vue-axios";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap'; // Import Bootstrap JS


import {library} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faR, fas, faUserSecret} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, fas, faR)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
    router,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
