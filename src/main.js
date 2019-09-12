// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter);

import VuePreview from 'vue2-preview'
Vue.use(VuePreview);

import { link } from 'fs';

//Vue.component(Header.name, Header);


Vue.config.productionTip = false

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router/router.js'
Vue.use(router);

//Vue.config.devtools = true;
import moment from 'moment';
Vue.filter("dateForm",function(data){
  return moment(data).format('YYYY-MM-DD HH:mm:ss');    
  
});

import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css';
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad);

new Vue({
  el: '#app',
  router,
  components: {  },
  render(h) {
     return h(App);
  },
  router:router
  
})
