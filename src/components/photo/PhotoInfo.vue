<template>
    
    <div class="photo-container">
       <h1 class="title"> {{info.title}}</h1>
       <p class="subtitle">
            <span>发表时间 {{info.add_time|dateForm}} </span>
            <span>点击 {{info.click}}</span>
           
       </p>
       <vue-preview      :list="listImage" class="listImage"></vue-preview>
      <p v-html="info.content" class="content"></p>
     
        <comment v-bind:id="info.id" ></comment>   
          
            <br>
            <br>
            <br>  
    </div>
    
</template>
<script>
import Axios from 'axios';
import comment from  '../subcomponents/comment.vue';
export default {
    data(){
        return {
           'id':this.$route.params.id,
            'info':[],
            listImage: [ ]
        };
    },
    created(){
        this.getList();
        this.getThumimages();
    },
    components:{
        'comment':comment
    },
    methods:{
        getList(){
            Axios.get("http://www.liulongbin.top:3005/api/getimageInfo/"+this.id).then(result=>{
               // console.log(result.data);
                this.info= result.data.message[0];
               // console.log(this.info);
            });
        },
        //所落
        getThumimages(){
            Axios.get("http://www.liulongbin.top:3005/api/getthumimages/"+this.id).then(result=>{
                console.log('----------'+result.data.message);
                var i;
                 result.data.message.forEach(item => {
                    item.w = 600;
                    item.h = 400;
                 });
                for(i in result.data.message){
                    console.log('-----'+result.data.message[i].src);
                }
                this.listImage=result.data.message;
               // console.log(this.info);
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .photo-container{
        .title{
            font-size: 16px;
            color:rgb(32, 110, 134);
            text-align: center;
        }
        .subtitle{
            font-size: 13px;
            display: flex;
            justify-content: space-between;
           
        }
        .listImage{
            margin:0px;
        }
        .content{
                font-weight: bolder;
        }
        
      
    }
</style>