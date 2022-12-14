import Vue from 'vue'
import App from './App.vue'
import { Network } from 'vue-vis-network';

Vue.config.productionTip = false
Vue.component('visNetwork', Network);

new Vue({
  render: h => h(App),
}).$mount('#app')
