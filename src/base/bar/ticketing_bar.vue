<template>
	<div>
		<div  style="width: 100%;height:200px;" ref="my_chart"></div>		
	</div>
</template>

<script>
	
	export default {
        data() {
        	return {
        		option:{},
        		echart_one:null,
        	}
        },
        props:{
        		data:{
        			default:null
        		},
        },
        computed:{
        },
        components: {
        },
        methods:{
        	initOpction() {
        		let series = [];
        		this.data.data.map(item=>{
        			series.push({
		            name:item.name,
		            type: 'bar',
		            data: item.data,
		            barMaxWidth:20,
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    color:'#fff',
		                    fontSize:14
		                },
		                
		            },
		            itemStyle: {
		                normal: {
		                    color:{
		                    	 colorStops: [{
		                            offset: 0,
		                            color: '#37C4DA' // 0% 处的颜色
		                        }, {
		                            offset: 1,
		                            color: '#6474F0' // 100% 处的颜色
		                        }],
		                    }
		                    
		                },
		            },
		        })
				        
				      
				    
        		})
        		this.option = {
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'shadow'
				        },
				        color:'#fff'
				    },
				    grid: {
				        left:0,
				        right: '4%',
				        bottom: '3%',
				        top:"20px",
				        containLabel: true
				    },
				    xAxis: {
				    		type: 'category',
				        data: this.data.xAxis,
				        axisLine:{
				        	show:false
				        },
				        axisTick:{
				        	show:false
				        },
				        axisLabel:{
				        		color:'#fff',
				        		align:'center',
				        		fontSize:16
				        },
				        
				        
				    },
				    yAxis: {
				        type: 'value',
				        boundaryGap: [0, 0.01],
				        show:false,
				        splitLine: {
				            show: false
				        }
				    },
				    series:series
        		}
        		
        	},
        	creatChart() {
        		
        		this.initOpction();
        		this.echart_one && this.echart_one.dispose();
				this.echart_one = this.echarts.init(this.$refs.my_chart);
        		this.echart_one.setOption(this.option);
        	},
        	getData() {
//      		this.data = this.echarts_data.ticketing_data.data4
        		this.creatChart()
        		
        		
        	}
        	
        	
        },
       watch:{
			'data':{
		    		handler(val,oldVal) {
		    			if(this.data) {
		    				this.creatChart()
		    			}
		    		},
		    		immediate: true
		    	}
		},
		beforeDestroy () {
			this.echart.clear()
		},
       
    }
</script>

<style>
</style>