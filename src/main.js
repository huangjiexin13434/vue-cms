// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


Vue.config.productionTip = false

console.log('dddddddd');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {  },
  render(h) {
     return h(App);
  },
})
