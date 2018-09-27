<template>
	<div>
		<Title :title="data.name" v-if="data"></Title>
		<div  style="width: 100%;height:200px;margin-top: 10px;" ref="my_chart"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				option: {},
				circle_one: null,
			}
		},
		props:{
			data:{
				default:null
			}
		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				let dataList = [];
				let nameList = [];
				this.data.data.map(item=>{
					dataList.push({
			            name:item.name,
			            type:'line',
			            stack: '总量',
			            data:item.data
			       });
			       nameList.push(item.name)
				})
				this.option = {
//					 title: {
//				        text: this.data.name,
//				        textStyle:{
//				        	 	color:'#fff'
//				        }
//				       
//				    },
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
					    	textStyle:{
					    		color:'#fff'
					    	},
//				    		orient:'vertical',
//				    		right:0,
				        data:nameList
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis: {
				    		axisLabel:{
				        		color:'#fff'
				       	},
				       	axisLine:{
				       		lineStyle:{
				        			color:'#fff'
				       			
				       		}
				       	},
				        type: 'category',
				        boundaryGap: false,
				        data: this.data.product
				    },
				    yAxis: {
				    		axisLine:{
				       		lineStyle:{
				        			color:'#fff'
				       			
				       		}
				       	},
				    		axisLabel:{
				        		color:'#fff'
				       	},
				        type: 'value'
				    },
				    series:dataList
				}

			},
			creatChart() {
				this.initOpction();
				this.circle_one && this.circle_one.dispose();
				this.circle_one = this.echarts.init(this.$refs.my_chart);
				this.circle_one.setOption(this.option);
			},

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
		}

	}
</script>

<style>

</style>