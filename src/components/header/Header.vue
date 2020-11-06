<template>
    <div id="headerNav" class="header_box">
        <div id="header_nav">
            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="left_logo"><img src="../../assets/logo.png" alt=""></div>
                </el-col>
                <el-col :span="16">
                    <div class="center_nav">
                        <div class="nav">
                            <router-link class="item" to="/home" :class="{active: isCurrent('/home')}" >首页</router-link>
                            <router-link class="item" to="/help" :class="{active: isCurrent('/help')}" >指南</router-link>
                            <router-link class="item" to="/feadback" :class="{active: isCurrent('/feadback')}" >反馈</router-link>
                            <router-link class="item last" to="/about" :class="{active: isCurrent('/about')}" >关于我们</router-link>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="right_icon">
                        <span><i @click="showMenu" class="iconfont iconyonghu"></i></span>
                    </div>
                    <!-- <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                            <span><i  class="iconfont iconyonghu"></i></span>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item >黄金糕</el-dropdown-item>
                            <el-dropdown-item >狮子头</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown> -->
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                isLogin:false
            }
        },
        methods:{
            isCurrent(path) {
                return this.$route.path === path
            },
            showMenu(){
                if(this.isLogin){
                    alert('Welcome to use')
                }else{
                    alert('Please login')
                }
            },
            exchange(){},
            login(){},
            regiset(){},
        }
    }
</script>
<style scoped>
    .header_box{
        width: 100%;
        height: 50px;
        background-color: rgba(255,255,255,0.8);
    }
    .left_logo{
        height: 40px;
        margin-top: 5px;
        margin-left: 80px;
    }
    .left_logo img{
        width: 100%;
        height: 100%;
    }
    .center_nav{
        width: 100%;
        height: 20px;
        margin-top: 15px;
        line-height: 20px;
    }
    .nav{
        width: auto;
    }
    .item{
        text-decoration: none;
        color: #000;
        font-size: 14px;
        padding: 0 25px;
        border-right: 1px solid #000;
    }
    .last{
        border-right: none;
    }
    .nav a:hover{
        font-size: 15px;
        color: red;
    }
    .active{
        color: green;
        font-size: 15px;
        font-weight: bold;
    }
    .right_icon{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-top: 5px;
        margin-right: 80px;
    }
    .iconfont{
        font-size: 25px;
        cursor: pointer;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #272525;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .demonstration {
        display: block;
        color: #27f049;
        font-size: 14px;
        margin-bottom: 20px;
    }
</style>