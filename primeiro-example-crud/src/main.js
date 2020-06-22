import Vue from 'vue'
import App from './App.vue'
import store from './store'

/**
 * Importando biblioteca fontawesome
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/**
 * Importando biblioteca V-Mask
 */
import VueMask from 'v-mask'  
import { VueMaskDirective } from 'v-mask'
import { VueMaskFilter } from 'v-mask'
Vue.use(VueMask)
Vue.directive('mask', VueMaskDirective);
Vue.filter('VMask', VueMaskFilter)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
