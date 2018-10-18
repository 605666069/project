<template>
	<div>
		<div  style="width: 100%" ref="my_chart" v-bind:style="{height:height+'px'}"></div>		
	</div>
</template>

<script>
	
	export default {
        data() {
        	return {
        		option:{},
        		echart:null,
        	}
        },
        props:{
        		data:{
        			default:null
        		},
        		barMaxWidth:{
        			default:10
        		},
        		show_legend:{
        			default:true
        		},
        		isAcross:{
        			default:false
        		},
        		gradient:{
        			default:null
        		},
        		stack:{
        			default:null
        		},
        		colorList:{
        			default:null
        		},
        		
			height:{
				default:200
			},
			top:{
				default:null
			},
			legendTop:{
				default:0
			},
			axisLineShow:{
				default:false
			}
        },
        computed:{
        },
        components: {
        },
        methods:{
        	initOpction() {
        		console.log(this.axisLineShow)
        		let data = this.data;
        		let series_list =  [];
        		let name_list = [];
        		
    			data.data.map((item,index)=>{
    				series_list.push(
    					{
    						stack:this.stack,
			        		barMaxWidth:this.barMaxWidth,
			            name: item.name,
			            type: 'bar',
			            data:item.data,
			            color:(this.colorList&&this.colorList[index])?this.colorList[index]:(item.color?new this.echarts.graphic.LinearGradient(
			                0, 0, 0, 1,
			                [
			                    {offset: 0, color:item.color[0]},
			                    {offset: 1, color:item.color[1]}
			                ]
			            ):null)
			        }
    				);
    				name_list.push(item.name)
    			})
    			
    			let a = {
			        type: 'category',
			        data: data.product,
			        axisLabel:{
			        		color:'#fff'
			       	},
			        axisLine:{
			        		show:this.axisLineShow,
			        		lineStyle:{
			        			color:'#fff'
			       			
			       		}
			        		
			        },
			        axisTick:{
			        		show:false
			        },
			        inverse:true,
			    }
    			let b = {
				        type: 'value',
				        axisLabel:{
				        		color:'#fff'
				       	},
				       	axisLine:{
				        		show:this.axisLineShow,
				        		lineStyle:{
				        			color:'#fff'
				       			
				       		}
				        },
				        splitLine: {
				            show: false
				        },
				        show:this.axisLineShow
				    }
        		this.option = {
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'shadow'
				        }
				    },
				    legend: {
					    	textStyle:{
					    		color:'#fff'
					    	},
//				    		orient:'vertical',
//				    		right:0,
						top:this.legendTop,
				        data:name_list,
				        show:this.show_legend
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        top:(this.show_legend&&!this.top)?50: (this.top?this.top:50),
				        containLabel: true
				    },
				    xAxis:!this.isAcross?a:b,
				    yAxis:this.isAcross?a:b,
				    series: series_list
        		}
        		
        	},
        	creatChart() {
        		this.initOpction();
        		this.echart && this.echart.dispose();
				this.echart = this.echarts.init(this.$refs.my_chart);
        		this.echart.setOption(this.option);
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