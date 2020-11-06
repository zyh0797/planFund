<template>
    <div id="home" class="home">
        <div :class="[getFocus?'search_on':'search_off']">
            <el-row :gutter="20">
                <el-col :span="8" :offset="8">
                    <div class="search">
                        <!-- @input="search" -->
                        <input type="text" name="" id="" placeholder="请输入基金代号或名称" 
                            v-model="content"  @click="toTop" @blur="toCenter" @keyup.space="showHot" @keyup.enter="search">
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="quick_search">
             <el-row :gutter="20">
                <el-col :span="8" :offset="8">
                    <div class="hot_box" v-if="showHots">
                        <div class="span_label">热门搜索</div>
                        <div class="hot">
                            <ul class="hot_result">
                                <li>000888 华夏国证新能源汽车B</li>
                                <li>000888 华夏国证新能源汽车B</li>
                                <li>000888 华夏国证新能源汽车B</li>
                                <li>000888 华夏国证新能源汽车B</li>
                                <li>000888 华夏国证新能源汽车B</li>
                                <li>000888 华夏国证新能源汽车B</li>
                                <li>000888 华夏国证新能源汽车B</li>
                                <li>000888 华夏国证新能源汽车B</li>
                                <li>000888 华夏国证新能源汽车B</li>
                                <li>000888 华夏国证新能源汽车B</li>
                            </ul>
                        </div>
                    </div>
                    <div class="history_box"  v-if="showHistory">
                        <div class="span_label">历史记录</div>
                        <div class="history">
                            <span class="item success">华夏国正半导体接C</span>
                            <span class="item warning">招商中证白酒指数</span>
                            <span class="item danger">诺安成长混合</span>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                content:'',
                getFocus:false,
                showHistory:false,
                showHots:false
            }
        },
        methods:{
            search(){
                console.log(this.content)
                console.log("you press the enter button")
            },
            toTop(){
                this.getFocus = true
                this.showHistory = true
            },
            toCenter(){
                this.getFocus = false
                this.showHistory = false
                this.showHots = false
            },
            showHot(){
                this.showHots = true
                console.log("you press the space button")
            },
        }
    }
</script>
<style scoped>
    .home{
        width: 100%;
        height: 100%;
        position: fixed;
        top:50px;
    }
    .search_off{
        width: 100%;
        height: 50px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-100%);
    }
    .search_on{
        width: 100%;
        height: 50px;
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translate(-50%,-100%);
    }
    .search{
        width: 100%;
        height: 100%;
    }
    .search input{
        width: 100%;
        height: 30px;
        border-radius: 25px;
        border: none;
        outline: none;
        text-align: center;
    }
    .quick_search{
        width: 100%;
        height: 50px;
        position: absolute;
        top: 185px;
        left: 50%;
        transform: translate(-50%,-100%);
    }
    .hot_box{
        background-color: #fff;
        width: 94%;
        margin: auto;
    }
    .span_label{
        width: 100%;
        height: 20px;
        background-color: #C0C4CC;
        line-height: 20px;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
    }
    .hot{
        width: 94%;
        height: 220px;
        margin: auto;
    }
    .hot ul>li{
        height: 20px;
        line-height: 20px;
        display: block;
        margin-left: 20px;
        margin-top: 2px;
        font-size: 14px;
        cursor: pointer;
    }
    .history_box{
        background-color: #fff;
        width: 94%;
        margin: auto;
    }
    .history{
        width: 94%;
        margin: auto;
    }
    .item{
        display: inline-block;
        height: 18px;
        font-size: 14px;
        padding: 0 10px;
        border-radius: 10px;
        margin: 2px 5px;
        line-height: 18px;
        cursor: pointer;
    }
    .success{
        background-color: #F56C5C;
    }
    .danger{
        background-color: #67C23A;
    }
    .warning{
        background-color: #E6A23C;
    }
</style>