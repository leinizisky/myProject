<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="left-wrapper" @click="showSlide()">
        <i></i>
        <span>菜单</span>
      </div>
      <div class="center-wrapper">
        <span></span>
      </div>
      <div class="right-wrapper">
        <span></span>
      </div>
    </div>
    <div v-show="slideShow" class="slide-wrapper">
      <nav>
        <ul>
          <li v-for="item in slide">{{item}}</li>
        </ul>
      </nav>
      <div class="click" @click="clickSlide"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        slide: ['首页/ Home', '关于/ About', '产品/ Product'],
        slideShow: false,
      }
    },
    methods: {
      showSlide() {
        this.slideShow = true;
      },
      clickSlide() {
        this.slideShow = false;
      }
    }
  };
</script>

<style scoped>
  .header-wrapper {
    display: flex;
    width: 100%;
    height: 104px;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
  }

  .left-wrapper {
    flex: 1;
  }

  .left-wrapper i {
    display: block;
    width: 24px;
    height: 24px;
    background: url("menu.png") no-repeat center;
    margin: 0 auto;
  }

  .left-wrapper span {
    font-size: 12px;
  }

  .center-wrapper {
    flex: 5;
  }

  .center-wrapper span {
    display: block;
    width: 100px;
    height: 44px;
    background: url("logo.png") no-repeat center;
    background-size: 100%;
    margin: 0 auto;
  }

  .right-wrapper {
    flex: 1;
  }

  .right-wrapper span {
    display: block;
    width: 33px;
    height: 30px;
    background: url("home.png") no-repeat center;
    margin: 0 auto;
  }

  .slide-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.35);
    width: 100%;
    height: 100%;
    z-index: 99;
    display: flex;
  }

  .slide-wrapper .click {
    flex: 1;
    height: 100%;
  }

  .slide-wrapper nav {
    flex: 1;
    height: 100%;
    background: #292929;
    color: #fff;
    z-index: 999;
    overflow-y: auto;
  }

  .slide-wrapper ul {
    padding-top: 30px;
    font-size: 14px;
  }

  .slide-wrapper ul li {
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
  }
</style>
