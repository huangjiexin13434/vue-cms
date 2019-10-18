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
import  goodsList from '../components/goods/GoodsList.vue';
import  goodInfo from '../components/goods/GoodInfo.vue';
import  goodDesc from '../components/goods/goodDesc.vue';
import  goodComment from '../components/goods/goodComment.vue';
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
        {path:'/home/goodsList',component:goodsList},  
        {path:'/home/goodInfo/:id',component:goodInfo},  
        {path:'/home/goodDesc/:id',component:goodDesc,name: 'goodDesc'},  
        {path:'/home/goodComment/:id',component:goodComment,name: 'goodComment'},  
        
    ],
     linkActiveClass:'mui-active'
 });
export default router;