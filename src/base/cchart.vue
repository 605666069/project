<template>
	<div>
		<div  style="width: 100%;height:200px;margin-top: 10px;" ref="my_chart"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				option: {},
				echart: null,
			}
		},
		props:{
			data:{
				default:null
			},
			position:{
				default:'outside'
			},
			position_formatter:{
				default:'{d}%'
			},
			colorList:{
				default:null
			},
			show_legend:{
				default:true
			},
			
		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				if(this.colorList&&this.data) {
					this.data.data.map((item,index)=>{
						item.itemStyle = {
			                normal: {
			                    color: { // 完成的圆环的颜色
			                        colorStops: [{
			                            offset: 0,
			                            color:this.colorList[index] // 0% 处的颜色
			                        }, {
			                            offset: 1,
			                            color: this.colorList[index]  // 100% 处的颜色
			                        }]
			                    },
			                } 
		            }
					})
				}
				this.option = {
					legend: {
				        orient: 'vertical',
				        top:'middle',
				        right:30,
				        data:this.data.data.map(item=>{
				        		return item.name
				        }),
				        textStyle:{
					    		color:'#fff'
					    	},
					    	show:this.show_legend
				    },
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					series: [{
							name: this.data.name,
							type: 'pie',
							center:['45%','50%'],
							radius: ['45%', '55%'],
							avoidLabelOverlap: false,
							hoverAnimation:true,
							label: {
								normal: {
									show: true,
									position:this.position,
									formatter:this.position_formatter
								},
								emphasis: {
									show: true,
								},
								textStyle:{
						    		color:'#fff'
						    	},
							},
							labelLine: {
								normal: {
									show: true
								}
							},
							data: this.data.data
						}]
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