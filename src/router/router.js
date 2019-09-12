import VueRouter from "vue-router";
import Vue from 'vue';
import home from '../components/Home.vue'
import member from '../components/Member.vue'
import search from '../components/Search.vue'
import shopcar from '../components/Shopcar.vue'
import newsList from '../components/news/NewsList.vue'
import newInfo from '../components/news/NewInfo.vue'
import  photoList from '../components/photo/PhotoList.vue';
import  photoInfo from '../components/photo/PhotoInfo.vue';
var router=new VueRouter({
    routes:[
        {path:'/',component:home},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/search',component:search},
        {path:'/shopcar',component:shopcar},
        {path:'/home/newList',component:newsList},
        {path:'/home/newInfo/:id',component:newInfo},  
        {path:'/home/photoList',component:photoList},  
        {path:'/home/photoInfo/:id',component:photoInfo},  

        
    ],
     linkActiveClass:'mui-active'
 });
export default router;