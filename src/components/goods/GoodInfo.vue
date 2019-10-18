<template>
    
    <div class="goodinfo-container">
       
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
             <div class="ball" v-show="ballFlag"></div>
        </transition>

		<div class="mui-content">
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                         <swiper :lubotuData="lubotuData" ></swiper>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">{{goodInfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                         <div class="price">
                                <span class="shichangjia">市场价</span>
                                <span class="old">￥{{goodInfo.market_price}}</span>
                                <span class="xiaoshoujia">销售价</span>
                                <span class="new">￥{{goodInfo.sell_price}}</span>
                          </div>
                          <div class="count">
                               <span class="goumaishuliang">购买数量</span>
                              
                                <div class="mui-numbox" data-numbox-min='1' data-numbox-max='goodInfo.stock_quantity'  >
                                    <button class="mui-btn mui-btn-numbox-minus" type="button"  @click="selectCount--">-</button>
                                    <input class="mui-input-numbox" id="ball-begin" type="number"  v-model="selectCount"/>
                                    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="selectCount++" >+</button>
                                </div> 
                          </div>
                          <div class="btn">
                                <mt-button type="primary" size="small">立即购买</mt-button>
                              <mt-button type="danger" size="small" @click="addToCar">加入购物车</mt-button>
                          </div>
					</div>
				</div>
				
			</div>
            <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品编号:{{goodInfo.goods_no}}</p>
                        <p>库存情况:{{goodInfo.stock_quantity}}</p>
                        <p>上架时间:{{goodInfo.add_time|dateForm}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                     <mt-button type="primary" size="large" plain @click="goDesc(id)" >图文介绍</mt-button>
                     <br>
                     <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
                </div>
			</div>
			<br>
            <br>
		
     
    </div>   
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { Toast } from "mint-ui";
import comment from  '../subcomponents/comment.vue';
import swiper from '../subcomponents/Swipe.vue';



export default {
    data(){
        return {
                'id':this.$route.params.id,
                'goodInfo':'',
                'lubotuData':'',
                'ballFlag':false,
                'selectCount':1
        }
    },
    created(){
        
        this.getImages();
        this.getGoodInfo();
    },
    
    methods:{
       addToCar(){
           this.ballFlag=!this.ballFlag;
          
           var goodInfoCar={
               'id':this.id,
               'selectCount':this.selectCount,
               'sellPrice':this.goodInfo.sell_price,
               'isSelected':true
           }
            this.$store.commit("addToCar", goodInfoCar);
       },
       goDesc(id){
           this.$router.push({
               name:'goodDesc',
                params:{id}
           })
       },
       goComment(id){
            this.$router.push({
               name:'goodComment',
               params:{id}
           })
       },
      
        getImages(){
            axios.get('http://www.liulongbin.top:3005/api/getthumimages/'+this.id).then(result=>{
               
                result.data.message.forEach(result=>{
                    result.img=result.src;
                });
                this.lubotuData=result.data.message;
            });
        },
        getGoodInfo(){
             axios.get('http://www.liulongbin.top:3005/api/goods/getinfo/'+this.id).then(result=>{
               
               
                this.goodInfo=result.data.message[0];
               
            });
        },
        beforeEnter(el) {
         el.style.transform = "translate(0, 0)";
        },
        enter(el, done) {
          el.offsetWidth;
          
          const ballBegin=  document.getElementById("ball-begin").getBoundingClientRect(); 
          const badgePosition=  document.getElementById("badge").getBoundingClientRect(); 
         
          var x=  badgePosition.left-ballBegin.left;
          var y=  badgePosition.top-ballBegin.top;
          el.style.transform = `translate(${x}px, ${y}px)`;
          el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
          done();
        },
          afterEnter(el) {
          this.ballFlag = !this.ballFlag;
        },
    
    },
    components:{
        'comment':comment,
        'swiper':swiper
    }
}
</script>
<style lang="scss" scoped>
   

      .goodinfo-container{
          background-color: #eee;
          overflow:hidden;
      }
      .price {
           .old{
               text-decoration: line-through;
               margin:10px;
           }
           .new{
               color:red;
           }
      }
      .count{
          margin-top:10px;
           margin-bottom: 10px;
          .goumaishuliang{
             
              //position: absolute;
             left:0px;
          }
      }
    .mui-card-footer {
    
      display: block;
   
    }
    .ball {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: red;
        z-index: 99;
        position: absolute;
         left: 138px;
         top: 397px;
        // left: 213px;
        // top: 600px;

    }
</style>