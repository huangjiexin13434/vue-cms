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

import './lib/mui/css/mui.css'
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


//Vuex
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
       car: JSON.parse(localStorage.getItem('car')||'[]')
    } , 
    mutations:{
       addToCar(state,goodInfoCar){
          var flag=false;
          
          state.car.forEach(el => {
              if(el.id==goodInfoCar.id){
                  el.selectCount+=parseInt(goodInfoCar.selectCount);
                  return flag=true;
              }
          });
          if(!flag){
            this.state.car.push(goodInfoCar);
          }
          localStorage.setItem('car', JSON.stringify(state.car));
       }
    },
    getters:{
      getMoneyCount(state){
         var o={
            count:0,
            money:0
         }
         state.car.forEach(result=>{
               if(result.isSelected){
                  o.count+=parseInt(result.selectCount);
                  o.money+=parseInt(result.sellPrice)*parseInt(result.selectCount);
               }
         });
         return o;
      },
      getGoodsSelected(state){
         var o=[];
         state.car.forEach(result=>{
           
            o[result.id]=result.isSelected;
         });
         
         return o;
      },
      selectCounts(state){
          var c=0;
           state.car.forEach(el=>{
             
               c+=el.selectCount;
              
           });
          
           return c;
        },
        getShopCount(state){
           var o=[];
         
           state.car.forEach(el=>{
               o[el.id]=el.selectCount;
               
           });
           return o;
        }
    },
    
})




new Vue({
  el: '#app',
  router,
 
  components: {  },
  render(h) {
     return h(App);
  },
  router:router,
  store:store
})
