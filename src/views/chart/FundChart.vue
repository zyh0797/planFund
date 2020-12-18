<template>
    <div id="fundChart" class="fund_chart">
        <div class="chart_choose">
            <span class="title_choose">图表分类</span>
            <div class="item_box" :class="[index == 1 ? 'active' : '']" @click="drawInvest">投入比例图</div>
            <div class="item_box" :class="[index == 2 ? 'active' : '']" @click="drawProfit">收益统计图</div>
        </div>
        <div class="chart_box">
            <div class="box" id="canvas"></div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                index:1,
                labelRight:{
                     position: 'right'
                },
                investData:[
                    {name:'华夏国证半导体芯片ETF联C',value:3000},
                    {name:'华夏中证5G通信主题ETF联A',value:2000},
                    {name:'华夏中证5G通信主题ETF联C',value:2000},
                    {name:'诺安成长混合',value:500},
                    {name:'招商国证生物医药指数',value:4500}
                ],
                profitData:[
                    {name:'华夏国证半导体芯片ETF联C',value:180},
                    {name:'华夏中证5G通信主题ETF联A',value:24},
                    {name:'华夏中证5G通信主题ETF联C',value:102},
                    {name:'诺安成长混合',value:30.5},
                    {name:'招商国证生物医药指数',value:-102}
                ]
            }
        },
        methods:{
            drawInvest(){
                this.index = 1
                let canvas = document.getElementById('canvas')
                let investChart = this.$echarts.init(canvas)
                investChart.dispose()
                investChart = this.$echarts.init(canvas)

                investChart.setOption({
                    title:{     //标题
                        text: '投资比例图',
                        left: 'left',    //标题位置
                        top:10,
                        left:10
                    },
                    tooltip:{   //tip样式
                        trigger: 'item',
                        formatter: '{a} <br/> {b}: {c} ({d}%)'
                    },
                    legend:{    //绘图标题
                        type: 'scroll',
                        orient: 'vertical',
                        right:10,
                        top: 10,
                        bottom: 10,
                        data: this.investData.name
                    },
                    series:[{
                        name: '总投入',    //tip的名称
                        type:'pie',
                        radius:'50%',       //绘图的大小
                        center:['40%','50%'],   //绘图的位置
                        data: this.investData,             //绘图数据
                        emphasis:{  //高亮样式
                            itemStyle:{
                                shadowBlur:10,
                                shadowOffsetX:1,    //阴影偏远
                                shadowColor:'rgba(0,0,0,0.5)'
                            }
                        }
                    }]
                })
            },
            drawProfit(){
                this.index = 2
                let labelRight = {
                    position: 'right'
                }
                let showData = []
                let names = []
                this.profitData.forEach((item,index) => {
                    let obj = {}
                    obj.value = item.value
                    obj.label = labelRight
                    showData.push(obj)
                    names.push(item.name)
                })

                let canvas = document.getElementById('canvas')
                let investChart = this.$echarts.init(canvas)
                investChart.dispose()
                investChart = this.$echarts.init(canvas)
                
                investChart.setOption({
                    title: {
                        text: '收益统计图',
                        left: 10,
                        top: 10
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {  // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'  // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: '{a} <br/> {b}: {c}元'
                    },
                    gird: {
                        top: 80,
                        bottom: 50
                    },
                    xAxis: {
                        type: 'value',
                        position: 'top',
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        }
                    },
                    yAxis: {
                        type: 'category',
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        splitLine: {show: false},
                        data: names
                    },
                    series: [{
                        name: '持有收益',
                        type: 'bar',
                        label: {
                            show: true,
                            formatter: '{b}'
                        },
                        data: showData
                    }]
                })
            }
        },
        mounted(){
            this.drawProfit()
        }
    }
</script>
<style scoped>
    .fund_chart{
        width: 100%;
        height: 100%;
        background: rgb(216, 224, 200);
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .chart_choose{
        width: 25%;
        height: 100%;
        border-right: 1px solid #fff;
    }
    .chart_box{
        width: 75%;
        height: 100%;
    }
    .box{
        width: 100%;
        height: 92%;
    }
    .title_choose{
        line-height: 40px;
        font-size: 18px;
        font-weight: bolder;
    }
    .item_box{
        width: 94%;
        height: 50px;
        line-height: 50px;
        margin: 5px auto;
        background-color: rgba(243, 243, 243, 1);
        border-radius: 10px;
        cursor: pointer;
    }
    .active{
        background-color: rgba(182, 245, 179, 0.61);
    }
</style>