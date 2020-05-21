<template>
  <div id="app" >

    <div class="container" >
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

    <div class="main" v-for="(item ,index) in list" :key="index">
       <div class="left" v-if="3>2
       ">{{item}}</div>
      <div class="left" v-else>{{item}}---{{index}}</div>

    </div>

  </div>

  <!--<div class="left" >fffffffffffff</div>



      <div class="left" style="">dddddddddddddddd</div>
      <div class="left" style="width:60%">eeeeeeeeeeeeeeeeeee</div>
      <div class="left" style="">fffffffffffff</div>
  </div>-->
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      flag:false,
      screenWidth:document.body.clientWidth,
      list:[

        "成人人均每日食用油摄入量不高于25 ~ 30G--------","人均每日添加糖摄入量不高于25G" ,"蔬菜和水果每日摄入量不低于500G",

      "成人男性腰围小于85CM，女性小于80CM","成年人维持健康体重，将体重招数( BMI)控制在18.5- 24KG/m.",
      "足量饮水，成年人一般每天7-8杯( 1500 1700ML).",
      " 进食有规律，不要满餐，不暴饮暴食，七八分饱即可",

      " 早晚刷牙 饭后漱口，采用正确的刷牙方法，每次剧牙不少于2分钟。"
      ]
    }
  },
  methods:{
    goBack(){

       this.$router.go(-1);
    },
    f(){
      console.log(this.$refs.ff.offsetWidth);
    }
  },
  mounted () {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
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
.main{
  width: 100%;
}
.left{

  width: 47%;
  height: 50px;
  background: red;
  float: left;
  border: 1px black solid;

}

</style>
