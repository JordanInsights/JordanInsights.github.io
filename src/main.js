import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

library.add(faUserSecret)

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component(
  'sidebar', require('./components/Sidebar.vue').default
);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
