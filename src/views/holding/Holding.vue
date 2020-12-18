<template>
    <div id="holding" class="holding">
        <el-container>
            <el-aside width="205px">
                <el-row class="tac">
                    <el-col>
                        <el-menu 
                            default-active="1-1" 
                            class="el-menu-vertical-demo" 
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b"
                            @select="handleSelect"
                        >
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span>基金</span>
                                </template>
                                <el-menu-item-group>
                                    <template slot="title">表格预览</template>
                                    <el-menu-item index="1-1">自选基金</el-menu-item>
                                    <el-menu-item index="1-2">持有基金</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="统计图">
                                    <el-menu-item index="1-3">基金统计</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-coin"></i>
                                    <span>股票</span>
                                </template>
                                <el-menu-item-group>
                                    <template slot="title">表格预览</template>
                                    <el-menu-item index="2-1">自选股票</el-menu-item>
                                    <el-menu-item index="2-2">持有股票</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="统计图">
                                    <el-menu-item index="2-3">股票统计</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-collection"></i>
                                    <span>语录</span>
                                </template>
                                <el-menu-item-group title="韭菜语录">
                                    <el-menu-item index="3-1">韭菜语录</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    export default{
        data(){
            return{
            }
        },
        methods:{
            handleSelect(key, keyPath) {
                switch(keyPath[1]){
                    case '1-1':
                        this.$router.push('/holding/fundSelected')
                        break
                    case '1-2':
                        this.$router.push('/holding/fundHave')
                        break
                    case '1-3':
                        this.$router.push('/holding/fundChart')
                        break
                    case '2-1':
                        this.$router.push('/holding/sharesSelected')
                        break
                    case '2-2':
                        this.$router.push('/holding/sharesHave')
                        break
                    case '2-3':
                        this.$router.push('/holding/sharesChart')
                        break
                    case '3-1':
                        this.$router.push('/holding/myAna')
                        break
                }
            }
        },
        beforeMount(param){
            
        },
        mounted(){

        }
    }
</script>
<style scoped>
    .holding{
        width: 100%;
        height: 100%;
        position: fixed;
        top:60px;
        text-align: center;
    }
    .el-container{
        width: 100%;
        height: 100%;
    }
    .el-main{
        width: 100%;
        height: 100%;
        line-height: normal;
    }
    .el-aside{
        background-color:#545c64;
        overflow: hidden;
    }
</style>