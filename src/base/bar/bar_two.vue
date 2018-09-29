<template>
	<div>
		<div  style="width: 100%;height:480px;" ref="my_chart"></div>		
	</div>
</template>

<script>
	
	export default {
        data() {
        	return {
        		option:{},
        		echart:null,
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
				    legend: {
				        data: ['本月', '上月']
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis: {
				        type: 'category',
				        data: ['巴西','印尼','美国','印度','中国']
				    },
				    yAxis: {
				        type: 'value',
				    },
				    series: [
				        {
				            name: '2011年',
				            type: 'bar',
				            data: [18203, 23489, 29034, 104970, 131744,]
				        },
				        {
				            name: '2012年',
				            type: 'bar',
				            data: [19325, 23438, 31000, 121594, 134141]
				        }
				    ]
        		}
        		
        	},
        	creatChart() {
        		this.initOpction();
        		this.echart && this.echart.dispose();
				this.echart = this.echarts.init(this.$refs.my_chart);
        		this.echart.setOption(this.option);
        	},
        },
        created() {
        	this.$nextTick(()=>{
        		this.creatChart();
        	})
        },
       
       
    }
</script>

<style>
</style>