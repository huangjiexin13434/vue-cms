<template>
    <div>
       
       <h1 class="title">{{goodDesc.title}}</h1>
       <div class="content" v-html="goodDesc.content">
       
       </div>
    </div>
</template>
<script>

import axios from 'axios';
export default {
     data(){
        return {
               
                'goodDesc':''
        }
    },
    created(){
        this.getGoodDesc();
    },
    methods:{
        getGoodDesc(){
             axios.get('http://www.liulongbin.top:3005/api/goods/getdesc/'+this.$route.params.id).then(result=>{
               
                console.log('===='+result.data);
                this.goodDesc=result.data.message[0];
               
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .title{
        color:rgb(26, 99, 117);
        font-size: 14px;
        text-align: center;
    }
    .content{
       border-top: 1px solid #000;
       margin-top: 10px;
       

    }
  
   
   
</style>