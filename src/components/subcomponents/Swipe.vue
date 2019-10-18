<template>
    <div>
       <mt-swipe :auto="4000">
      
        <mt-swipe-item v-for="(item,index) in lubotuData" :key="index">
           <img :src="item.img"/> 
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>
<script>
export default {
   
   props:['lubotuData']
}
</script>
<style lang="scss" scoped>
    .mint-swipe{
            height:200px;
           width: 100%;
              .mint-swipe-item{
                  img {
                    width: 100%;
                    height: 100%;
                }    
              &:nth-child(1){
                background-color: red;
              }
                &:nth-child(2){
                background-color: green;
              }
                &:nth-child(3){
                background-color: pink;
              }
            } 
    }
    .fullWidch{
      width: 100%;
    }
</style>