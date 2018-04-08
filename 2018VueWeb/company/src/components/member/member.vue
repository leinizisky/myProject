<template>
  <div class="login-wrapper">
    <header>
      <div class="border-bottom">账号登陆</div>
    </header>
    <div class="content">
      <div class="item border-bottom">
        <div class="icon-box"><i class="icon iconfont">&#xe63e;</i></div>
        <input id="username" placeholder="用户名/手机号" v-on:input="closeSwitch()">
        <a v-if="closeBtn1" href="javascript:;" @click="clearInput" class="close">×</a>
      </div>
      <div class="item border-bottom">
        <div class="icon-box"><i class="icon iconfont">&#xe622;</i></div>
        <input id="password" type="password" placeholder="密码" v-on:input="closeSwitch()">
        <a v-if="closeBtn2" href="javascript:;" @click="clearInput" class="close">×</a>
      </div>
    </div>
    <a href="javascript:;" class="login-btn" @click="submitLogin">登陆</a>
    <a href="javascript:;" class="reg-btn">用户注册</a>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        closeBtn1: false,
        closeBtn2: false
      }
    },
    created: function () {

    },
    watch:{

    },
    methods: {
      closeSwitch: function (event) {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if(!username){
          this.closeBtn1 = true;
        }else if(!password){
          this.closeBtn2= true;
        }else if(!username && !password){
          document.querySelector(".login-btn").className+='cur';
        }

      },
      clearInput: function (event) {

        this.closeBtn = false;
      },
      submitLogin: function (event) {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        this.$http.post('?',{username:username,password:password}).then((response) => {
          console.log(response);
        });

      }
    }
  }
</script>

<style scoped>
  @import "../../common/fonts/iconfont.css";

  .border-bottom:after, .border-top:before {
    content: "";
    position: absolute;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }

  .border-bottom:after {
    bottom: -.5px;
    left: 0;
    right: 0;
    border-bottom: 1px solid #dfdfdf;
  }

  .login-wrapper {
    max-width: 640px;
    margin: 0 auto;
  }

  .login-wrapper header {
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    height: 44px;
    background: #fafafa;
    font-size: 16px;
    position: relative;
  }

  .login-wrapper header .border-bottom:after {
    content: "";
    position: absolute;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #ccc;
  }

  .login-wrapper .content .item {
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    height: 45px;
    margin: 10px 20px;
    position: relative;
  }

  .login-wrapper .content .item .icon-box {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 10px;
  }

  .login-wrapper .content .item .icon-box .icon {
    font-size: 18px;
  }

  .login-wrapper .content .item input {
    flex: 1;
    height: 43px;
    border: 0;
    outline: none;
  }

  .login-wrapper .content .item .close {
    font-size: 24px;
    color: #999;
  }

  .login-wrapper .login-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dfdfdf;
    color: #fff;
    height: 45px;
    border-radius: 2px;
    margin: 20px;
  }

  .login-wrapper .login-btn.cur {
    background: #c80f1e;
  }

  .login-wrapper .reg-btn {
    display: flex;
    justify-content: flex-end;
    color: #3caaff;
    margin: 10px 20px;
  }
</style>
