import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.min.css";

//<--Vue.component('Navbar', require('./components/Navbar.vue').default);--> 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
