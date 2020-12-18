<template>
    <div id="FundHave" class="fund_have">
        <el-row>
            <el-col :span="24">
                <template>
                    <el-table 
                        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                        style="width: 100%"
                        max-height="700"
                        :row-class-name="tableRowClassName"
                    >
                        <el-table-column type="selection" width="50"></el-table-column>
                        <el-table-column prop="number" label="代码" width="100"></el-table-column>
                        <el-table-column prop="name" label="基金名称" width="250"></el-table-column>
                        <el-table-column prop="input" label="总投入" width="120" sortable></el-table-column>
                        <el-table-column prop="profit" label="盈亏" width="120" sortable></el-table-column>
                        <el-table-column prop="value" label="成本" width="80"></el-table-column>
                        <el-table-column prop="count" label="持有" width="80"></el-table-column>
                        <el-table-column prop="yesterday" label="昨天净值" width="100"></el-table-column>
                        <el-table-column prop="today" label="估值" width="80"></el-table-column>
                        <el-table-column align="right">
                            <template slot="header">
                                <el-input v-model="search" size="mini" placeholder="输入基金名"/>
                            </template>
                            <template slot-scope="scope">
                                <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)" >操作记录</el-button>
                                <el-button size="mini" type="danger" @click="handleEdit(scope.$index, scope.row)" >模拟加仓</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                search: '',
                tableData:[
                    {id:1,number:'131008',name:'mingcheng',input:5000,value:0.9023,count:5526.45,profit:-50,yesterday:0.9031,today:0.9123},
                    {id:2,number:'131008',name:'mingcheng',input:5000,value:0.9023,count:5526.45,profit:-50,yesterday:0.9031,today:0.9123},
                    {id:3,number:'131008',name:'mingcheng',input:5000,value:0.9023,count:5526.45,profit:2.3,yesterday:0.9031,today:0.9123},
                    {id:4,number:'131008',name:'mingcheng',input:5000,value:0.9023,count:5526.45,profit:10.8,yesterday:0.9031,today:0.9123},
                    {id:5,number:'131008',name:'wangha',input:5000,value:0.9023,count:5526.45,profit:100,yesterday:0.9031,today:0.9123},
                    {id:6,number:'131008',name:'tab',input:5000,value:0.9023,count:5526.45,profit:-50,yesterday:0.9031,today:0.9123},
                    {id:7,number:'131008',name:'kit',input:5000,value:0.9023,count:5526.45,profit:-50,yesterday:0.9031,today:0.9123},
                    {id:8,number:'131008',name:'mingcheng',input:5000,value:0.9023,count:5526.45,profit:-50,yesterday:0.9031,today:0.9123},
                    {id:9,number:'131008',name:'kiven',input:5000,value:0.9023,count:5526.45,profit:-50,yesterday:0.9031,today:0.9123},
                    {id:10,number:'131008',name:'mingcheng',input:5000,value:0.9023,count:5526.45,profit:-50,yesterday:0.9031,today:0.9123},
                    {id:11,number:'131008',name:'mingcheng',input:5000,value:0.9023,count:5526.45,profit:600,yesterday:0.9031,today:0.9123},
                    {id:12,number:'131008',name:'mingcheng',input:5000,value:0.9023,count:5526.45,profit:-50,yesterday:0.9031,today:0.9123},
                    {id:13,number:'131008',name:'mingcheng',input:5000,value:0.9023,count:5526.45,profit:-50,yesterday:0.9031,today:0.9123},
                    {id:14,number:'131008',name:'mingcheng',input:5000,value:0.9023,count:5526.45,profit:-50,yesterday:0.9031,today:0.9123},
                    {id:15,number:'131008',name:'mingcheng',input:5000,value:0.9023,count:5526.45,profit:-50,yesterday:0.9031,today:0.9123},
                    {id:16,number:'131008',name:'mingcheng',input:5000,value:0.9023,count:5526.45,profit:-50,yesterday:0.9031,today:0.9123},
                    {id:17,number:'131008',name:'mingcheng',input:5000,value:0.9023,count:5526.45,profit:-50,yesterday:0.9031,today:0.9123},
                    {id:18,number:'131008',name:'mingcheng',input:5000,value:0.9023,count:5526.45,profit:-50,yesterday:0.9031,today:0.9123},
                ]
            }
        },
        methods:{
            tableRowClassName({row,rowIndex}){
                console.log(row,rowIndex)
                if(row.profit >= 0){
                    return 'warning-row';
                }else{
                    return 'success-row';
                }
            },
            handleEdit(index,row){
                console.log(index,row)
            }
        }
    }
</script>
<style scoped>
    .fund_have{
        width: 100%;
        height: 100%;
    }
</style>