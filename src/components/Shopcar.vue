<template>
    <div class="shopcar-container">
        <div class="mui-card" v-for="(item,index) in shopcarlist" :key="item.id">
				<div class="mui-card-content" >
					<div class="mui-card-content-inner"  >
						   <mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
                @change="changeSwitch(item.id,$store.getters.getGoodsSelected[item.id])" ></mt-switch>
                 <!-- @change="changeSwitch(item.id,$store.getters.getGoodsSelected[item.id])" -->
               <img :src="item.thumb_path" />
               <div class="main">
                   <h1>{{item.title}}</h1>
                    <span class="price">
                        ￥{{item.sell_price}}
                    </span>
                   
                     <div class="mui-numbox" data-numbox-min='1'  >
                              <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                              
                              <!--  :value="$store.getters.selectCount[item.id]" -->
                            
                            
                              <input class="mui-input-numbox"  type="number" 
                                            :value="$store.getters.getShopCount[item.id]"     />
                              <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                      </div>
                     <span class="del">
                        <a href="#" @click="remove(item.id,index)">删除</a>
                    </span>
               </div>
					</div>
				</div>
		</div>


     <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span class="count">{{$store.getters.getMoneyCount.count}} </span>件，
               总价 <span class="red">￥{{$store.getters.getMoneyCount.money}}</span></p>
            </div>
             <mt-button type="danger" @click="pay">去结算</mt-button>
					</div>
				</div>
			</div>


    

      <br>
      <br>

  </div>
       
    
</template>
<script>
import Axios from 'axios'
import { Toast } from "mint-ui";
export default {
    data(){
      return {
        shopcarlist:[]
      }
    },
    created(){
      this.getShopCar();
    },
    methods:{
      pay(){
          Toast("后续再实现，请耐心等待");
      },
      getShopCar(){
          var idArr = [];
          this.$store.state.car.forEach(item => idArr.push(item.id));
          if(idArr.length==0){
             idArr.push(0);
          }
          Axios.get('http://www.liulongbin.top:3005/api/goods/getshopcarlist/'+idArr.join(','))
             .then(result=>{
               this.shopcarlist=result.data.message;
          });
      },
      remove(id,index){
         this.$store.state.car.splice(index,1);
         localStorage.setItem('car', JSON.stringify( this.$store.state.car));
         this.getShopCar();
      },
      changeSwitch(id,flag){
        
        this.$store.state.car.forEach(item=>{
          if(item.id==id){  
            item.isSelected=flag;
            return true;
          }
        })
        localStorage.setItem('car', JSON.stringify( this.$store.state.car));

      
      }
    }
}
</script>
<style lang="scss" scoped>
  .shopcar-container{
    background-color: 	rgb(216,216,216);
    overflow: hidden;
    .mui-card-content-inner{
      display: flex;
      align-items: center;
    }
    img{
      //height: 30px;
      width:53px;
      margin-left: 1px;
      margin-right: 1px;
    }
    .main{
      line-height: 20px;
       h1{
         font-size: 14px;
       }
       .price{
         font-size: 14px;
         color: red;
         font-weight: bold;
       }
       .del{
         font-size: 14px;
       }
       .mui-numbox{
         width: 109px;
         height: 28px;
       }
    }
    .jiesuan{
       display: flex;
       justify-content: space-between;
    }
  }
</style>