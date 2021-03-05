import Vue from 'vue'
import App from './App.vue'
import configurations from './zoho-configuration.js';
Vue.config.productionTip = false

new Vue({
  data() {
    return configurations
  },
  render: h => h(App),
}).$mount('#app')