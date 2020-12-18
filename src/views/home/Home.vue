<template>
    <div id="home" class="home">
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <template>
                        <el-table 
                            :data="shareData.filter(data => !shareSearch || data.name.toLowerCase().includes(shareSearch.toLowerCase()))"
                            style='width:100%' 
                            height="610"
                        > 
                            <el-table-column fixed prop="name" label="股票名称" width="120"></el-table-column>
                            <el-table-column  prop="price" label="最新" width="80"></el-table-column>
                            <el-table-column  prop="ups" label="涨幅" width="80"></el-table-column>
                            <el-table-column  prop="sub" label="涨跌" width="80"></el-table-column>
                            <el-table-column  prop="speed" label="涨速" width="80"></el-table-column>
                            <el-table-column  prop="amount" label="总量" width="80"></el-table-column>
                            <el-table-column  prop="total" label="现量" width="80"></el-table-column>
                            <el-table-column  prop="rate" label="量比" width="80"></el-table-column>
                            <el-table-column fixed="right" align="right" width="150">
                                <template slot="header" slot-scope="scopes">
                                    <el-input v-model="shareSearch" size="mini" placeholder="股票名称/代码" />
                                </template>
                                <template slot-scope="scopes">
                                    <el-button type='primary' size='mini' @click="shareDetail(scopes.$index,scopes.row)">查看</el-button>
                                    <el-button type='danger' size='mini' @click="shareAdd(scopes.$index,scopes.row)">自选</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </div>
            </el-col>

            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <template>
                        <el-table 
                            :data="fundData.filter(data => !fundSearch || data.name.toLowerCase().includes(fundSearch.toLowerCase()))"
                            style='width:100%' 
                            height="610"
                        > 
                            <el-table-column fixed prop="name" label="基金名称" width="120"></el-table-column>
                            <el-table-column  prop="price" label="净值" width="80"></el-table-column>
                            <el-table-column  prop="appraisement" label="估值" width="80"></el-table-column>
                            <el-table-column  prop="week" label="近1周" width="80"></el-table-column>
                            <el-table-column  prop="oneMonth" label="近1月" width="80"></el-table-column>
                            <el-table-column  prop="threeMonth" label="近3月" width="80"></el-table-column>
                            <el-table-column  prop="sixMonth" label="近6月" width="80"></el-table-column>
                            <el-table-column  prop="year" label="今年来" width="80"></el-table-column>
                            <el-table-column fixed="right" align="right" width="150">
                                <template slot="header" slot-scope="scope">
                                    <el-input v-model="fundSearch" size="mini" placeholder="基金名称/代码" />
                                </template>
                                <template slot-scope="scope">
                                    <el-button type='primary' size='mini' @click="fundDetail(scope.$index,scope.row)">查看</el-button>
                                    <el-button type='danger' size='mini' @click="fundAdd(scope.$index,scope.row)">自选</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import api from '../../api/index'
    export default{
        data(){
            return{
                states:'',
                shareSearch:'',
                fundSearch:'',
                shareData:[
                    {id:'001001',name:'仁东控股',price:15.45,ups:'2.4%',sub:'-0.3',speed:'1.2%',amount:3344,total:2341,rate:0.3},
                    {id:'001002',name:'彩虹股份',price:6.45,ups:'2.4%',sub:'0.3',speed:'1.2%',amount:3344,total:2341,rate:0.3},
                    {id:'001003',name:'彩虹股份',price:6.45,ups:'2.4%',sub:'0.3',speed:'1.2%',amount:3344,total:2341,rate:0.3},
                    {id:'001004',name:'彩虹股份',price:6.45,ups:'2.4%',sub:'0.3',speed:'1.2%',amount:3344,total:2341,rate:0.3},
                    {id:'001005',name:'彩虹股份',price:6.45,ups:'2.4%',sub:'-0.3',speed:'1.2%',amount:3344,total:2341,rate:0.3},
                    {id:'001006',name:'彩虹股份',price:6.45,ups:'2.4%',sub:'0.3',speed:'1.2%',amount:3344,total:2341,rate:0.3},
                    {id:'001007',name:'彩虹股份',price:6.45,ups:'2.4%',sub:'0.3',speed:'1.2%',amount:3344,total:2341,rate:0.3},
                    {id:'001008',name:'彩虹股份',price:6.45,ups:'2.4%',sub:'0.3',speed:'1.2%',amount:3344,total:2341,rate:0.3}
                ],
                fundData:[
                    {id:'100101',name:'招商中证白酒指数分级',price:1.4201,appraisement:1.4521,week:'12.3%',oneMonth:'38.47%',threeMonth:'45.32%',sixMonth:'50.25%',year:'101.23%'},
                    {id:'100101',name:'招商国证医药生物指数分级',price:1.5201,appraisement:1.4521,week:'12.3%',oneMonth:'38.47%',threeMonth:'45.32%',sixMonth:'50.25%',year:'101.23%'},
                    {id:'100101',name:'易方达消费指数分级',price:1.4201,appraisement:1.4521,week:'12.3%',oneMonth:'38.47%',threeMonth:'45.32%',sixMonth:'50.25%',year:'101.23%'},
                    {id:'100101',name:'天弘计算机主题',price:1.401,appraisement:1.4521,week:'12.3%',oneMonth:'38.47%',threeMonth:'45.32%',sixMonth:'50.25%',year:'101.23%'},
                    {id:'100101',name:'诺安混合成长',price:1.8201,appraisement:1.4521,week:'12.3%',oneMonth:'38.47%',threeMonth:'45.32%',sixMonth:'50.25%',year:'101.23%'},
                    {id:'100101',name:'中欧医药股票指数',price:3.4201,appraisement:1.4521,week:'12.3%',oneMonth:'38.47%',threeMonth:'45.32%',sixMonth:'50.25%',year:'101.23%'},
                    {id:'100101',name:'华夏5G主题ETF联接C',price:2.4201,appraisement:1.4521,week:'12.3%',oneMonth:'38.47%',threeMonth:'45.32%',sixMonth:'50.25%',year:'101.23%'},
                    {id:'100101',name:'华夏5G主题ETF联接A',price:1.4201,appraisement:1.4521,week:'12.3%',oneMonth:'38.47%',threeMonth:'45.32%',sixMonth:'50.25%',year:'101.23%'},
                    {id:'100101',name:'易方达中小盘',price:1.4201,appraisement:1.4521,week:'12.3%',oneMonth:'38.47%',threeMonth:'45.32%',sixMonth:'50.25%',year:'101.23%'},
                    {id:'100101',name:'汇添富中证银行指数',price:5.4201,appraisement:1.4521,week:'12.3%',oneMonth:'38.47%',threeMonth:'45.32%',sixMonth:'50.25%',year:'101.23%'},
                    {id:'100101',name:'广发中证汽车指数',price:1.4201,appraisement:1.4521,week:'12.3%',oneMonth:'38.47%',threeMonth:'45.32%',sixMonth:'50.25%',year:'101.23%'}
                ]
            }
        },
        methods:{
            shareDetail(index,row){
                console.log(index,row)
            },
            fundDetail(index,row){
                console.log(index,row)
            },
            shareAdd(index,row){
                console.log(index,row)
            },
            fundAdd(index,row){
                console.log(index,row)
            }
        },
        mounted(){
        }
    }
</script>
<style scoped>
    .home{
        width: 100%;
        height: 100%;
        position: fixed;
        top:65px;
    }
    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 400px;
        padding: 5px;
        text-align: center;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>