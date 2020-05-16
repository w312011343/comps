<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Vue 组件库"/>
    <Carousel :carousel="carousel"></Carousel>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Carousel from "./components/Carousel.vue";
export default {
  name: 'App',
  data () {
    return {
      carousel:{
        timeout:5000,
        isNeedArrow:false,
        selectIndex:0,
        data:[
        {
          img:require('./assets/banner1.jpg'),
          title:'我是文本1',
          subTitle:'哈哈',
          btnText:'按钮1',
          btnLink:'www.baidu.com'
        },
         {
          img:require('./assets/banner2.jpg'),
          title:'我是文本1',
          subTitle:'哈哈',
          btnText:'按钮1',
          btnLink:'www.baidu.com'
        },
        {
          img:require('./assets/banner3.jpg'),
          title:'我是文本1',
          subTitle:'哈哈',
          btnText:'按钮1',
          btnLink:'www.baidu.com'
        },
         {
          img:require('./assets/banner4.jpg'),
          title:'我是文本1',
          subTitle:'哈哈',
          btnText:'按钮1',
          btnLink:'www.baidu.com'
        },
        {
          img:require('./assets/banner5.jpg'),
          title:'我是文本1',
          subTitle:'哈哈',
          btnText:'按钮1',
          btnLink:'www.baidu.com'
        }
      ]
      }
    }
  },
  components: {
    HelloWorld,
    Carousel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
