<template>
    <div class="goods-list">
        <router-link class="good" v-for="(item, index) in list" :key="index" :to="'/home/goodInfo/'+item.id" tag="div" >
            <img :src="item.img_url">
            <div class="info">
                <h1 class="title">{{item.title}}</h1>
                <div class="ps">
                    <div class="price">
                    <span class="new">{{item.sell_price}}$</span>
                     <span class="old">{{item.market_price}}$</span>
                    </div>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩{{item.stock_quantity}}件</span>
                    </p>
                </div>
                
            </div>
        </router-link >
        
        </div>
  
    
</template>
<script>
import Axios from 'axios';

export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.getList();
    },
    methods:{
        getList(){
            Axios.get("http://www.liulongbin.top:3005/api/getgoods?pageindex=1").then(result=>{
                console.log(result.data);
                result.data.message.forEach(i=>{
                    console.log(i.img_url);
                });
                this.list=result.data.message;
            });
        }
    }
}
</script>
<style lang="scss" scope>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        
        .good{
            width: 49%;
            min-height: 300px;
            margin:1px;
            border: 1px solid #ccc;
            box-shadow: 3px 1px 5px #ccc;
            position:relative;
            img{
                width:100%;
               
            }
             
             .info{
                  
                   position: absolute;
                   
                    width: 100%;
                    flex-direction: column;
                    bottom: 0px;
                    margin-bottom: 0px;
                   // min-height: 168px;
                  h1{
                      font-size: 20px;
                  }
                  .ps{
                       background-color: #ccc;  
                      // position: absolute;
                     // margin-top: 0px;
                       .price{
                            background-color: #ccc;  
                            .new{
                                color:red;
                                font-size: 17px;
                            }
                            .old{
                                margin-left: 20px;
                                font-size: 14px;
                                text-decoration: line-through;
                            }
                        }
                        .sell{
                                display: flex;
                                justify-content: space-between;
                               // margin-top: 15px;
                                font-size: 15px;
                                background-color: #ccc;
                                margin-bottom: 0px;
                        }
                  }
             }
            
        }
    }
</style>