<template>
    <div class="comment-contain">
        <h1>发表评论</h1>
        <textarea  placeholder="请输入要BB的内容（做多吐槽120字）" v-model="content" ></textarea>
        <mt-button type="primary" size="large" @click="postcomment">评论</mt-button>
        <div class="cmt-container" v-for="(comment,index) in comments" :key="comment.id">
            <div class="cmt-title">
                <h3>第{{index+1}}楼 &nbsp; &nbsp;&nbsp;用户：{{comment.user_name}}
                &nbsp;&nbsp; 发表时间&nbsp;{{comment.add_time}}</h3>
            </div>
            <div class="cmt-content"> 
                  <h3>{{comment.content=='undefined'||comment.content==''?
                  '该用户很懒，没有评论':comment.content}}</h3>
            </div>
        </div>
        <!-- <div class="cmt-container">
            <div class="cmt-title">
                <h3>第一楼 &nbsp; &nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp; 发表时间</h3>
            </div>
            <div class="cmt-content"> 
                  <h3>醋和日当晚  </h3>
            </div>
        </div>
         <div class="cmt-container">
            <div class="cmt-title">
                <h3> 第一楼 &nbsp; &nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp; 发表时间</h3>
            </div>
            <div class="cmt-content"> 
                  <h3>醋和日当晚  </h3>
            </div>
        </div>
       -->
         <mt-button type="danger" size="large" @click="moreData" plain>加载更多</mt-button>
    </div>
</template>
<script>
import axios from 'axios';
import { Toast } from "mint-ui";
import { Header } from 'mint-ui';
import { Button } from 'mint-ui';
export default {
    created(){
       
        
    },
    data(){
        return {
            pageindex:'1',
            comments:[],
            allcomments:'',
            content:''
        }
    },
    methods:{
        getComment(){
            console.log('========'+this.id);
            axios.get("http://www.liulongbin.top:3005/api/getcomments/"+this.id+
                    "?pageindex="+this.pageindex).then(result=>{
                console.log(result.data); 
                if(result.data.status==0){
                    this.allcomments=result.data.message;
                
                    this.comments=this.comments.concat(this.allcomments);
                    
                }else{
                    Toast("请刷新!!!");
                }
            });
        },
        moreData(){
            this.pageindex++;
            this.getComment();
        },
        postcomment(){
             axios.post("http://www.liulongbin.top:3005/api/postcomment/"+this.id,
                    {
                       content:this.content     
                    }).then(result=>{
                    console.log('this.content.trim().length  '+this.content.trim().length);    
                    if(this.content.trim().length!=0){
                        var obj={
                            add_time: new Date(),
                            content: this.content,
                            user_name: "匿名用户"
                        }   
                        this.comments.unshift(obj);
                        Toast(result.data.message);
                        this.content='';
                        
                    }else{
                        Toast("内容不能为空!!!");
                    }
            });
        }
    },
    props: ["id"],
     watch: {
             'id':function(newVal,oldVal){
                 // console.log(newVal+'    '+oldVal)  
                  if(newVal!=oldVal){
                      this.id=newVal;
                  }
                  this.getComment();
             },
    }
    
       

}
</script>
<style lang="scss" scoped>
    .comment-contain{
        h1{
            font-size: 18px;
        }
        textarea{
            margin: 0px;
        }
        .cmt-container{
            .cmt-title{
                background-color:rgb(233, 203, 203);
            }
            h3{
                font-size: 16px;
                font-weight: bold;
            } 
             .cmt-content{
                 text-indent: 2em;
             }
        }
       
    }
</style>