<template>
    
    <div class="newinfo-container">
       <h1> {{newInfo.title}}</h1>
       <p class="subtitle">
            <span>发表时间 {{newInfo.add_time|dateForm}} </span>
            <span>点击 {{newInfo.click}}</span>
            
       </p>
      <p v-html="newInfo.content"></p>
     
       <comment v-bind:id="newInfo.id" ></comment>   
          
            <br>
            <br>
            <br>
     
     
    </div>
    
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { Toast } from "mint-ui";
import comment from  '../subcomponents/comment.vue';



export default {
   
    data(){
        return {
                'id':this.$route.params.id,
                'newInfo':''
        }
    },
    created(){
        this.show();
        this.getNewInfo();
    },
    
    methods:{
        show(){
            // console.log(this.$route)
            // console.log(this.$route.params)
        },
        getNewInfo(){
            axios.get('http://www.liulongbin.top:3005/api/getnew/'+this.id).then(result=>{
                //  console.log(result.data);
                //  console.log(result.data.message[0]);
                // result.data.status=1;
                 if(result.data.status==0){  //成功
                    this.newInfo=result.data.message[0];
                 }else{
                     Toast("获取失败请刷新页面!!");
                 }
            });
        }
    },
    components:{
        'comment':comment
    }
}
</script>
<style lang="scss" scoped>
      .newinfo-container{
          h1{
              font-size: 16px;
              color: red;
              text-align: center;
          }
          .subtitle{
              display: flex;
              justify-content: space-between;
          }
      }
</style>