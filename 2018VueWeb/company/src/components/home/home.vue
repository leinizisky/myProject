<template>
  <div class="content">
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="banner in banners">
          <img :src="banner">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="detail">
      <img :src="details">
    </div>
    <div class="footer">
      <div class="info">
        Corpration.태희네 음식관리유한회 All rights reserved<br>
        Copyright © 2016-2018Taixijia <br>
        加盟热线：<a href="tel:400-029-6565">400-029-6565</a><br>
        备案号：陕ICP备16002501号-1
      </div>
    </div>
    <div class="fix-wrapper">
      <div class="item" v-for="(item,index) in footer" :style="{background:item.color}">
        <img width="35" height="30" :src="item.img">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import 'swiper/dist/css/swiper.css'

  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    data() {
      return {
        banners: ['http://m.taixijia.com/uploads/img1/20170622/594b2b41c06e3.jpg!600X600.jpg', 'http://m.taixijia.com/uploads/img1/20170720/597066341c1bd.jpg!600X600.jpg', 'http://m.taixijia.com/uploads/img1/20170622/594b63a128010.jpg!600X600.jpg', 'http://m.taixijia.com/uploads/img1/20170720/59706a2ba5096.jpg!600X600.jpg', 'http://m.taixijia.com/uploads/img1/20171009/59db46ae52181.png!600X600.jpg'],
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          autoplay: {delay: 1500},
          slidesPerView: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        },
        details:['http://m.taixijia.com/uploads/img1/20170817/599565a43186e.jpg'],
        footer:[
          {'name':'在线留言','img':'http://m.taixijia.com/Public/default/mobile/images/t_01.jpg','color':'#d74142'},
          {'name':'在线咨询','img':'http://m.taixijia.com/Public/default/mobile/images/t_02.jpg','color':'#3488de'},
          {'name':'免费电话','img':'http://m.taixijia.com/Public/default/mobile/images/t_03.jpg','color':'#35ac68'}
        ]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      //this.swiper.slideTo(3, 1000, false)
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>
  .banner {
    padding: 20px 10px;
  }

  .banner .swiper-slide img {
    display: block;
    width: 145px;
    height: auto;
  }

  .detail img {
    display: block;
    width: 100%;
  }

  .footer {
    background: #000;
    color: #fff;
    padding-top: 32px;
    padding-bottom: 65px;
  }

  .footer .info {
    margin: 0 auto;
    width: 85%;
    text-align: center;
    line-height: 24px;
    font-size: 12px;
  }

  .fix-wrapper {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height:60px;
    background: #fff;
    display: flex;
    align-items: stretch;
    align-content: center;
  }

  .fix-wrapper .item {
    flex:1;
    height: 100%;
    color:#fff;
    text-align: center;
    font-size:12px;
  }

  .fix-wrapper .item img{
    display: block;
    margin: 0 auto;
    margin-top: 9px;
  }
</style>
