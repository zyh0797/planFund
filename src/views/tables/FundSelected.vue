<template>
    <div id="FundSelected" class="fund_selected">
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
                        <el-table-column prop="value" label="净值" width="70" ></el-table-column>
                        <el-table-column prop="appraisement" label="估值" width="100" sortable></el-table-column>
                        <el-table-column prop="week" label="近1周" width="70"></el-table-column>
                        <el-table-column prop="one_m" label="近1月" width="70"></el-table-column>
                        <el-table-column prop="three_m" label="近3月" width="70"></el-table-column>
                        <el-table-column prop="six_m" label="近半年" width="70"></el-table-column>
                        <el-table-column prop="one_y" label="近1年" width="70"></el-table-column>
                        <el-table-column prop="three_y" label="近3年" width="70"></el-table-column>
                        <el-table-column prop="five_y" label="近5年" width="70"></el-table-column>
                        <el-table-column align="right">
                            <template slot="header">
                                <el-input v-model="search" size="mini" placeholder="输入基金名称或代码"/>
                            </template>
                            <template slot-scope="scope">
                                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" >取消自选</el-button>
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
                    {id:1,number:'131810',name:'RT-001',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:2,number:'131810',name:'RT-001',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:3,number:'131810',name:'ST-001',value:3.56,appraisement:7.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:4,number:'880880',name:'RT-001',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:5,number:'131810',name:'测试',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:6,number:'166610',name:'RT-001',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:7,number:'131810',name:'RT-001',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:8,number:'131810',name:'RT-001',value:3.56,appraisement:1.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:9,number:'131810',name:'RT-001',value:3.78,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:10,number:'131810',name:'RT-001',value:3.56,appraisement:5.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:10,number:'131810',name:'RT-001',value:5.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:10,number:'131810',name:'RT-001',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:10,number:'131810',name:'RT-001',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:10,number:'131810',name:'RT-001',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:10,number:'131810',name:'RT-001',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:10,number:'131810',name:'RT-001',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:10,number:'131810',name:'RT-001',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:10,number:'131810',name:'RT-001',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:10,number:'131810',name:'RT-001',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:11,number:'131810',name:'RT-001',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87},
                    {id:12,number:'131810',name:'RT-001',value:3.56,appraisement:3.46,week:1.16,one_m:-2.4,three_m:5.6,six_m:15.6,one_y:20.6,three_y:93.08,five_y:43.87}
                ]
            }
        },
        methods: {
            tableRowClassName({row,rowIndex}){
                if(rowIndex % 2 == 0){
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
    .fund_selected{
        width: 100%;
        height: 100%;
    }
</style>