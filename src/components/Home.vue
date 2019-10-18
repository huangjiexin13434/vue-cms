<template>
  <div >
     
      <swiper :lubotuData="lubotuData"></swiper>
    
     <div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newList">
		                    <img src="../images/menu1.png" />
		                    <div class="mui-media-body">新闻</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photoList">
		                   <img src="../images/menu2.png" />
                        <span class="mui-badge">5</span>
		                    <div class="mui-media-body">图片</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodsList">
		                    <img src="../images/menu3.png" />
		                    <div class="mui-media-body">商品</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../images/menu4.png" />
		                    <div class="mui-media-body">收款</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../images/menu5.png" />
		                    <div class="mui-media-body">安全</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../images/menu6.png" />
		                    <div class="mui-media-body">更多</div></router-link></li>
		            
		        </ul> 
     </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
 import axios from 'axios';
 Vue.prototype.$http= axios;
 import swiper from '../components/subcomponents/Swipe.vue';
 

 import lubotu from '../api/getlunbo.json'
export default {
  
  data () {
    return {
     
      lubotuData:[]
    }
  },
  created(){
    this.lubotu();
   
  },
  methods:{
    lubotu(){
    //   this.axios.get("/src/api/getlunbo.json",{
       
    //   }).then(result=>{ 
          
            this.lubotuData=lubotu.message;
          
    //   });
     },
   
  },
   components: {
    swiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    
    img{
      width: 800px;
      height: 100px;
    }
 
    
    .mui-grid-view .mui-grid-9 .mui-table-view-cell{
      background-color: white;
      border: 0px;
    }
    //  .mui-table-view-cell .mui-media .mui-col-xs-4  
    .mui-col-sm-3 {
      width: 33.3%;
      background-color: white;
    }
    ul li img{
        width: 63px;
        height: 100%;
    }
    
</style>
