<template>
	<div>
		<div  style="width: 100%;height:280px;margin-top: 10px;" ref="my_chart"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				option: {},
				circle_one: null,
				color:{
					'省内':['#00d4be','#01c8f4'],
					'省外':['#8d53ea', '#01c6fd'],
					'本地':['#9952e2','#fe996a'],
				}
			}
		},
		props:{
			data:{
				default:null
			},
			isShowLegend:{
				default:false
			}
		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				this.data.data.map((item,index)=>{
					item.itemStyle = {
		                normal: {
		                    color: { // 完成的圆环的颜色
		                        colorStops: [{
		                            offset: 0,
		                            color: (this.color[this.data.name]&&index<1)?this.color[this.data.name][0]:'#25354F' // 0% 处的颜色
		                        }, {
		                            offset: 1,
		                            color: (this.color[this.data.name]&&index<1)?this.color[this.data.name][1]:'#25354F'  // 100% 处的颜色
		                        }]
		                    },
		                    label: {
		                        show: false
		                    },
		                    labelLine: {
		                        show: false
		                    }
		                } 
		            }
				})
				this.option = {
					legend: {
				        orient: 'vertical',
				        top:'middle',
				        right:0,
				        data:this.data.data.map(item=>{
				        		return item.name
				        }),
				        textStyle:{
					    		color:'#fff'
					    	},
				        show:this.isShowLegend
				    },
					title:{
						text:this.data.name,
						top:'bottom',
						left:'33%',
						textStyle:{
				        	 	color:'#fff'
				        }
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					series: [{
							name: this.data.name,
							type: 'pie',
							center:['40%','50%'],
							radius: ['55%', '65%'],
							avoidLabelOverlap: false,
							hoverAnimation:false,
							label: {
								normal: {
									show: false,
									position: 'center',
							    		color:'#fff',
							    		fontSize:25,
							    		fontWeight:'700'
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
				
				this.circle_one && this.circle_one.dispose();
				this.circle_one = this.echarts.init(this.$refs.my_chart);
				this.circle_one.setOption(this.option);
			},

		},
		watch:{
			'data':{
		    		handler(val,oldVal) {
		    			if(this.data) {
		    				this.$nextTick(() => {
							this.creatChart()
						})
		    				
		    			}
		    		},
		    		immediate: true
		    	}
		}

	}
</script>

<style>

</style>