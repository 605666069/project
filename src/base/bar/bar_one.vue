<template>
	<div>
		<div id="echart_one" style="width: 100%;height:400px;margin-top: 10px;"></div>		
	</div>
</template>

<script>
	
	export default {
        data() {
        	return {
        		option:{},
        		echart_one:null,
        		data:null
        	}
        },
        computed:{
        },
        components: {
        },
        methods:{
        	initOpction() {
        		this.option = {
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'shadow'
				        }
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis: {
				        type: 'value',
				        boundaryGap: [0, 0.01],
				        show:false,
				        splitLine: {
				            show: false
				        },
				    },
				    yAxis: {
				        type: 'category',
				        data: this.data.product,
				        axisLine:{
				        	show:false
				        },
				        axisTick:{
				        	show:false
				        },
				        inverse:true
				    },
				    series: [
				        {
				            name: this.data.name,
				            type: 'bar',
				            data: this.data.data,
				            label: {
				                normal: {
				                    show: true,
				                    position: 'right'
				                }
				            },
				            itemStyle: {
				                normal: {
				                    color: new this.echarts.graphic.LinearGradient(
				                        0, 0, 0, 1,
				                        [
				                            {offset: 0, color: '#28C5E4'},
				                            {offset: 0.5, color: '#23AAF8'},
				                            {offset: 1, color: '#6573EF'}
				                        ]
				                    )
				                },
				            },
				        },
				      
				    ]
        		}
        		
        	},
        	creatChart() {
        		this.initOpction();
        		this.echart_one && this.echart_one.dispose();
				this.echart_one = this.echarts.init(document.getElementById('echart_one'));
        		this.echart_one.setOption(this.option);
        	},
        	getData() {
        		this.data = this.echarts_data.home_data.rank;
        		this.creatChart()
        	}
        	
        	
        },
        created() {
        	this.$nextTick(()=>{
        		this.getData();
        	})
        },
       
       
    }
</script>

<style>
</style>