<template>
  <div id="app">
    
    <div class="container">
      <mt-header fixed title="商城">
      <span slot="left" @click="goBack" v-show="flag" >
        <mt-button icon="back">返回</mt-button>
      </span>
      </mt-header>


      


      <transition>
           <router-view></router-view>
      </transition>



       <nav class="mui-bar mui-bar-tab">
          <router-link class="mui-tab-item-lib" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
          </router-link>
         <!--  mui-active  -->
          <router-link class="mui-tab-item-lib" to="/member">
            <span class="mui-icon mui-icon-contact">
               <span class="mui-badge"></span>
            </span>
            <span class="mui-tab-label">会员</span>
          </router-link>
          <router-link class="mui-tab-item-lib" to="/shopcar">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
              <span class="mui-badge">{{$store.getters.selectCounts}}</span>
            </span>
            <span class="mui-tab-label" id="badge">购物车</span>
          </router-link>
          <router-link class="mui-tab-item-lib" to="/search">
            <span class="mui-icon mui-icon-search"></span>
            <span class="mui-tab-label">搜索</span>
          </router-link>


		</nav>

    </div>

    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      flag:false
    }
  },
  methods:{
    goBack(){
       
       this.$router.go(-1);
    }
  },
  created(){
    
  },
  watch: {
    "$route.path": function(newVal) {
      console.log(newVal);
      if(newVal=='/home'){
          this.flag=false;
      }else{
        this.flag=true;
      }
    }
  }
}
</script>

<style>
  .container{
    padding-top: 50px;
    overflow: hidden;
  }
  .v-enter{
            opacity: 0; 
            transform: translateX(100%);
   }
   .v-leave-to{
           transform: translateX(-100%);

   }
   .v-leave-active{
        position: absolute;
       transition: all 0.5s ease;   
   }
   


.mui-bar-tab .mui-tab-item-lib
{
    display: table-cell;
    overflow: hidden;

    width: 1%;
    height: 50px;

    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;

    color: #929292;
}
.mui-bar-tab .mui-tab-item-lib.mui-active
{
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-lib .mui-icon
{
    top: 3px;

    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-lib .mui-icon ~ .mui-tab-label
{
    font-size: 11px;

    display: block;
    overflow: hidden;

    text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item-lib .mui-icon:active
{
    background: none;
}
</style>
