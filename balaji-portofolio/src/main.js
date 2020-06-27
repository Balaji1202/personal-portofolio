import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      isMobile: false
    }
  },
  render: h => h(App),
}).$mount('#app')