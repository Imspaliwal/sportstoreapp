import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// To use the bootstrap & fint-awesom feature throughout the application
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"

new Vue({
  render: h => h(App),
}).$mount('#app')
