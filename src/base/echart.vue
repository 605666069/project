<template>
	<div>
		<div style="width: 100%;height:230px;margin-top: 10px;" ref="my_chart"></div>
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
		props: {
			data: {
				default: null
			},
			position: {
				default: 'outside'
			},
			position_formatter: {
				default: '{d}%'
			},
			colorList: {
				default: null
			},
			show_legend: {
				default: true
			}

		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				var  labelLine = {
						length: 5
					}
				this.option = {
					color: ['#ffd285', '#55afe6', '#f96257'],
					tooltip: {
						trigger: 'axis'
					},
					 dataZoom:[{
				        type: 'inside',
				        start: 50,
				        end: 100
				    }, {
				        show: true,
				        type: 'slider',
				        y: '90%',
				        start: 50,
				        end: 100
				    }],
					legend: {
						x: 300,
						textStyle: {
							color: '#ffd285',
						},
						data: ['一日','二日','三日以上']
					},
					grid: {
						left: '1%',
						right: '35%',
						top: '16%',
						bottom: '6%',
						containLabel: true
					},
					toolbox: {
						"show": false,
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						"axisLine": {
							lineStyle: {
								color: '#FF4500'
							}
						},
						"axisTick": {
							"show": false
						},
						axisLabel: {
							textStyle: {
								color: '#fff'
							}
						},
						boundaryGap: false,
						data: this.global.getRandomData(30,1)
					},
					yAxis: {
						"axisLine": {
							lineStyle: {
								color: '#fff'
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff'
							}
						},
						"axisTick": {
							"show": false
						},
						axisLabel: {
							textStyle: {
								color: '#fff'
							}
						},
						type: 'value'
					},
					series: [{
							name: '一日',
							smooth: true,
							type: 'line',
							symbolSize: 8,
							symbol: 'circle',
							data:this.global.getRandomData(30)
						}, {
							name: '二日',
							smooth: true,
							type: 'line',
							symbolSize: 8,
							symbol: 'circle',
							data: this.global.getRandomData(30)
						}, {
							name: '三日以上',
							smooth: true,
							type: 'line',
							symbolSize: 8,
							symbol: 'circle',
							data: this.global.getRandomData(30)
						},
						{
							type: 'pie',
							center: ['93%', '50%'],
							radius: ['40%', '50%'],
							label: {
								normal: {
									color:'#fff'
								},
								fontSize:16
							},
							labelLine:labelLine,
							data: [{
								value: 180,
								name: '一日',
								tooltip: {
									show: false
								},
								itemStyle: {
									normal: {
										color: '#ffd285'
									}
								},
								label: {
									normal: {
										textStyle: {
											color: '#ffd285',
										},
										formatter: '一日 \n{d} % \n',
									}
								}
							}, {
								value: 180,
								name: '二日',
								tooltip: {
									show: false
								},
								itemStyle: {
									normal: {
										color: '#55afe6'
									}
								},
								label: {
									normal: {
										textStyle: {
											color: '#55afe6',
										},
										formatter: '二日 \n{d} %  ',
									}
								}
							}, {
								value: 335,
								name: '三日以上',
								itemStyle: {
									normal: {
										color: '#f96257'
									}
								},
								label: {
									normal: {
										formatter: '三日以上 \n{d} %',
										textStyle: {
											color: '#f96257',
										}
									}
								}
							}]
						},

						{
							type: 'pie',
							center: ['76%', '50%'],
							radius: ['40%', '50%'],
							label: {
								normal: {
									color:'#fff'
								},
								align:'center'
							},
							data: [{
								value: 180,
								name: '男',
								tooltip: {
									show: false
								},
								itemStyle: {
									normal: {
										color: '#3c9eff'
									}
								},
								label: {
									normal: {
										textStyle: {
											color: '#3c9eff',
										},
										formatter: '男 \n{d} % \n',
									}
								}
							}, {
								value: 180,
								center: ['83%', '50%'],
								radius: ['25%', '30%'],
								name: '女',
								tooltip: {
									show: false
								},
								itemStyle: {
									normal: {
										color: '#edc553'
									}
								},
								label: {
									normal: {
										textStyle: {
											color: '#edc553',
										},
										formatter: '女 \n{d} %',
									}
								}
							}]
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
			this.$nextTick(() => {
				this.creatChart()
			})
		},
		beforeDestroy () {
			this.echart.clear()
			},

	}
</script>

<style>

</style>