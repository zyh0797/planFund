<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <router-view/>
        <Login/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Login from './components/modal/Login'
export default {
  components:{ Header , Login}
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #e1fc9e;
}
.el-header{
  padding: 0;
}
</style>
