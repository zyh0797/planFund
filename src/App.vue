<template>
  <div id="app">
    <el-container>
      <el-header>
        <template>
          <div class="logo_box"><img class="logo" src="./assets/logo.png" alt="#"></div>
        </template>
        <el-menu :default-active="activeIndex" 
          background-color="#E9EEF3" class="el-menu-demo" 
          mode="horizontal" @select="handleSelect">
          <el-menu-item index="2">首页</el-menu-item>
          <el-menu-item index="3">个人中心</el-menu-item>
          <el-menu-item index="4">用户指南</el-menu-item>
          <el-menu-item index="5">关于我们</el-menu-item>
          <span class="user_logo">
            <span v-if="isLogin">用户888</span>
            <i class="iconfont iconyonghu" @click="doLogin"></i>
          </span>
        </el-menu>
        
      </el-header>
        <el-main>
          <router-view/>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from './components/header/Header'
export default {
  data(){
    return{
      activeIndex:'2',
      isLogin:false
    }
  },
  components:{ Header },
  methods:{
    doLogin(){
      this.$utils.showMsg('login success','success')
      this.isLogin = !this.isLogin
    },
    handleSelect(key, keyPath) {
      switch(key){
        case '2':
          console.log(2)
          this.$router.replace('/home')
          break
        case '3':
          if(this.isLogin){
            this.$router.replace('/holding')
          }else{
            this.$utils.showMsg('Please log in frist','error')
          }
          break
        case '4':
          console.log(4)
          this.$router.replace('/feedback')
          break
        case '5':
          console.log(5)
          this.$router.replace('/about')
          break
        default:
          console.log(2)
          this.$router.replace('/home')
      }
    },
  }
}
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    position: fixed;
  }
  .el-container{
      width: 100%;
      height: 100%;
  }
  .el-header{
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .logo_box{
    height: 100%;
    width: 200px;
    float: left;
  }
  .logo{
    width: 94%;
    height: 94%;
    margin: auto;
  }
  .user_logo{
    float:right;
    margin-right: 20px;
    border: none;
    outline: none;
  }
  .user_logo span{
    margin-right: 10px;
    vertical-align: middle;
  }
  .user_logo i{
    font-size: 20px;
    cursor: pointer;
    vertical-align: middle;
  }
  .el-menu-demo{
    margin-left: 205px;
  }
  .el-main {
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: #fff;
    color: #333;
    line-height: normal;
  }
</style>
