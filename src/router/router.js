import VueRouter from "vue-router";
import Vue from 'vue';
import home from '../components/Home.vue'
import member from '../components/Member.vue'
import search from '../components/Search.vue'
import shopcar from '../components/Shopcar.vue'

var router=new VueRouter({
    routes:[
        {path:'/',component:home},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/search',component:search},
        {path:'/shopcar',component:shopcar},
    ],
     linkActiveClass:'mui-active'
 });
export default router;