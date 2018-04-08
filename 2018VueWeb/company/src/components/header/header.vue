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
        <router-link to="/"><span></span></router-link>
      </div>
    </div>
    <div v-show="slideShow" class="slide-wrapper">
      <nav>
        <router-link to="/" @click.native="clickSlide()">首页/ Home</router-link>
        <router-link to="about" @click.native="clickSlide()">关于/ About</router-link>
        <router-link to="product" @click.native="clickSlide()">产品/ Product</router-link>
        <router-link to="member" @click.native="clickSlide()">会员/ Member</router-link>
      </nav>
      <div class="click" @click="clickSlide"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        slideShow: false
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
    padding-top: 30px;
    font-size: 14px;
  }

  .slide-wrapper a {
    display: block;
    color:#fff;
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
  }

  .slide-wrapper ul li {
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
  }
</style>
