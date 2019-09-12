<template>
  <div >
      <mt-swipe :auto="4000">
       <!-- <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>-->
        <mt-swipe-item v-for="item in lubotuData" :key="item.id">
           <img :src="item.img"/>
        </mt-swipe-item>
      </mt-swipe>
      
    
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
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../images/menu3.png" />
		                    <div class="mui-media-body">聊天</div></router-link></li>
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
      this.$http.get("http://www.liulongbin.top:3005/api/getlunbo",{
       
      }).then(result=>{
          
           this.lubotuData=result.data.message;
      });
    },
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .mint-swipe{
        height:100px;
        width: 100%;
          .mint-swipe-item{    
           &:nth-child(1){
             background-color: red;
           }
             &:nth-child(2){
             background-color: green;
           }
             &:nth-child(3){
             background-color: pink;
           }
         } 
    }
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
