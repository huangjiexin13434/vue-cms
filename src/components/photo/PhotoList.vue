<template>
  <div>
    <div
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a
          :class="['mui-control-item',index==0?'mui-active':'']"
          v-for="(item, index) in allCategory"
          :key="index"
          @click="getImagesByCategory(index==0?item.id=0:item.id)">{{index==0?item.title='全部':item.title}}</a>
      </div>
      <div class="a"></div>
      <ul class="contain">
     
        <router-link v-for="(item, index) in images" :key="index" tag="li" :to="'/home/photoInfo/'+item.id" >
          <img alt v-lazy="item.img_url" class="image-class" />
          <div class="info">
            <div class="info-title">{{item.title}}</div>
            <div class="info-content">{{item.zhaiyao}}</div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import mui from "mui";
import Axios from "axios";

export default {
  data() {
    return {
      allCategory: [],
      images: []
    };
  },
  created() {
    this.getAllCategory();
    this.getImagesByCategory(0);
  },
  methods: {
    getAllCategory() {
      Axios.get("http://www.liulongbin.top:3005/api/getimgcategory").then(
        result => {
          // console.log(result.data.message);
          this.allCategory = result.data.message;
        }
      );
    },
    getImagesByCategory(cid) {
      Axios.get("http://www.liulongbin.top:3005/api/getimages/" + cid).then(
        result => {
        //  console.log(result.data);
          this.images = result.data.message;
        }
      );
    }
  },
  mounted() {
    // 需要在组件的 mounted 事件钩子中，注册 mui 的 scroll 滚动事件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
<style lang="scss" scoped>
.a {
  margin: 40px;
}

.contain {
    margin: 0px;
    padding:0px;
    
  li {
        background-color: black;
        position: relative;
        margin-bottom: -94px;
        list-style-type: none;
        text-align: center;
    // margin: 0px;
    // padding:0px;
    img[lazy="loading"] {
   //  width: 900px;
     margin: 0px;
     padding: 0px;
      
    }
    .info {
        height: 88px;
        text-align: left;
        position: relative;
        max-height: 88px;
        max-width: 100%;
        bottom: 88px;
        left: 0;
        color: white;
        opacity: 0.7;
        // background-color: rgb(70, 39, 85);

        .info-title {
          font-size: 14px;
        }
        .info-content {
          font-size: 13px;
        }
      }
  }
}
img {
    border: 0;
    width: 100%;
}
</style>