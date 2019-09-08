<template>
   <div>
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newLists" :key="item.id">
					<router-link :to="'/home/newInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间 {{item.add_time|dateForm}}</span>
                                <span>点击量:{{item.click}}</span>
                            </p>
			
						</div>
					</router-link>
				</li>
				
			</ul>
   </div>
</template>
<script>

 import axios from 'axios';
  axios.defaults.baseURL="http://www.liulongbin.top:3005/"
export default {

    data(){
        return {'newLists':'' }
    },
    created(){
        this.getList();
    },
    methods:{
        getList(){
           
           /*  axios.get("http://www.liulongbin.top:3005/api/getnewslist").then(result=>{
                
                console.log('=-======='+result.body) ;
                console.log('=-======='+result.statu) ;
                console.log('=-======='+result.message) ;
            }); */
             axios.get("http://www.liulongbin.top:3005/api/getnewslist",{
                        
              }).then(result=>{
                 /*  var i;
                for(i in result ){
                    console.log(i);           //获得属性 
                    console.log(result[i]);  //获得属性值

                } */              
                
                 this.newLists=result.data.message;
              });
        }
        
    }
}
</script>
<style lang="scss" scoped>
    .mui-media-body{
        h1{
             font-size: 14px;   
        }
        .mui-ellipsis{
            display: flex;
            justify-content: space-between;
            color:blue;
        }
       
    }
</style>