
## 项目构建

1.  安装稳定的node

2.  安装cnpm

3.  全局安装vue和vue-cli
npm install -g vue
npm install -g vue-cli

4.  提示vue不是内部或外部命令，也不是可运行的程序 或批处理文件的处理方法，环境变量加入vue.cmd的路径

5.  然后创建一个webpack项目并且下载依赖
 vue init webpack vue-tutorial

6.  cnpm install

7.  cnpm run dev热加载中运行我们的应用

8.  为我们的路由、XHR请求、数据管理下载三个库
 npm i vue-resource vue-router vuex --save

9.  全局安装vue-router 和 vuex
  cnpm install vue-router
  cnpm install vuex --save

10. 安装
 cnpm install vue-router vue-resource --save

11. 安装vue 的轮播插件
 cnpm install vue-awesome-swiper --save

12. 安装vue-resource 到当前项目中，找到当前的项目
 cnpm install vue-resource --save

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
