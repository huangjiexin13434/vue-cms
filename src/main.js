// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter);

import 'mint-ui/lib/style.css';
import { Header } from 'mint-ui';
import { link } from 'fs';

Vue.component(Header.name, Header);


Vue.config.productionTip = false

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router/router.js'
Vue.use(router);
console.log('dddddddd');

//Vue.config.devtools = true;
import moment from 'moment';
Vue.filter("dateForm",function(data){
  return moment(data).format('YYYY-MM-DD HH:mm:ss');    
  
});
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
new Vue({
  el: '#app',
  router,
  components: {  },
  render(h) {
     return h(App);
  },
  router:router
  
})
