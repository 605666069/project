<template>
	<div>
		<Title :title="data.name" v-if="data&&showTitle"></Title>
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
			},
			show_legend:{
				default:true
			},
			isSmooth:{
				default:false
			},
			isAreaShow:{
				default:false
			},
			showTitle:{
				default:true
			},
			gradient:{
				default:null
			},
			colorList:{
				default:null
			},
			dataZoom:{
				default:null
			}
		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				let dataList = [];
				let nameList = [];
				this.data.data.map((item,index)=>{
					dataList.push({
						 areaStyle: {
						 	opacity:this.isAreaShow?1:0,
						 	normal:this.colorList?{
				                color: new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                    offset: 0,
				                    color: item.color[0]
				                }, {
				                    offset: 1,
				                    color:item.color[1]
				                }], false),
				                shadowColor: 'rgba(0, 0, 0, 0.1)',
				                shadowBlur: 10
				            }:null
						 },
			            name:item.name,
			            type:'line',
			            stack: '总量',
			            data:item.data,
			            smooth: this.isSmooth,
			            color:(this.colorList&&this.colorList[index])?this.colorList[index]:(item.color?new this.echarts.graphic.LinearGradient(
			                0, 0, 0, 1,
			                [
			                    {offset: 0, color:item.color[0]},
			                    {offset: 1, color:item.color[1]}
			                ]
			            ):null)
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
				    dataZoom:this.dataZoom? [{
				        type: 'inside',
				        start: 50,
				        end: 100
				    }, {
				        show: true,
				        type: 'slider',
				        y: '90%',
				        start: 50,
				        end: 100
				    }]:null,
				    legend: {
					    	textStyle:{
					    		color:'#fff'
					    	},
//				    		orient:'vertical',
//				    		right:0,
				        data:nameList,
				        show:this.show_legend
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
				        data: this.data.product,
				        splitLine: {
				            show: false
				        },
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
				        type: 'value',
				        splitLine: {
				            show: false
				        },
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
		},
		beforeDestroy () {
			this.circle_one.clear()
			},

	}
</script>

<style>

</style>