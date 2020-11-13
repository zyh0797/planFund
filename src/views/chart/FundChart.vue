<template>
    <div id="fundChart" class="fund_chart">
        <div class="chart_choose">1</div>
        <div class="chart_box" id="invest_chart">2</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                investData:[
                    {name:'华夏国证半导体芯片ETF联C',value:540},
                    {name:'华夏中证5G通信主题ETF联A',value:500},
                    {name:'华夏中证5G通信主题ETF联C',value:500},
                    {name:'招商景气优选股票C',value:500},
                    {name:'招商国证生物医药指数',value:520},
                    {name:'招商中证白酒指数分级',value:5002},
                    {name:'广发中证全指汽车指数C',value:500},
                    {name:'广发中证军工ETF联接C',value:5003},
                    {name:'天弘中证800指数A',value:100},
                    {name:'天弘沪深300ETF联接C',value:80},
                    {name:'天弘中证计算机主题ETF联接C',value:80},
                    {name:'汇添富中证新能源汽车产业指数(LOF)C',value:80},
                    {name:'汇添富中证银行ETF联接C',value:80},
                    {name:'宝盈人工智能主题股票C',value:80},
                    {name:'宝盈发展新动能股票C',value:80},
                    {name:'诺安成长混合',value:80},
                    {name:'兴全趋势投资混合(LOF)',value:80},
                    {name:'万家行业优选混合(LOF)',value:80}
                ],
                profitData:[
                     {name:'华夏国证半导体芯片ETF联C',value:5},
                     {name:'华夏中证5G通信主题ETF联A',value:500},
                     {name:'华夏中证5G通信主题ETF联C',value:3},
                     {name:'招商景气优选股票C',value:3},
                     {name:'招商国证生物医药指数',value:6},
                     {name:'招商中证白酒指数分级',value:8},
                     {name:'广发中证全指汽车指数C',value:500},
                     {name:'广发中证军工ETF联接C',value:0.7},
                     {name:'天弘中证800指数A',value:500},
                     {name:'天弘沪深300ETF联接C',value:5},
                     {name:'汇添富中证银行ETF联接C',value:5},
                     {name:'宝盈发展新动能股票C',value:5},
                     {name:'诺安成长混合',value:5},
                     {name:'兴全趋势投资混合(LOF)',value:5},
                     {name:'万家行业优选混合(LOF)',value:5}
                ]
            }
        },
        methods:{
            draw(){
                let investChart = this.$echarts.init(document.getElementById('invest_chart'))

                investChart.setOption({
                    title:{     //标题
                        text: '投资比例图',
                        left: 'left'    //标题位置
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
                        radius:'80%',       //绘图的大小
                        center:['50%','50%'],   //绘图的位置
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
            }
        },
        mounted(){
            this.draw()
        }
    }
</script>
<style scoped>
    .fund_chart{
        width: 100%;
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .chart_choose{
        width: 20%;
        height: 100%;
    }
    .chart_box{
        width: 80%;
        height: 100%;
        background: rgb(216, 224, 200);
    }
</style>