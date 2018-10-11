<template>
	<div>
		<div style="width: 100%;height:550px;" ref="my_chart"></div>
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
				var dataAll = [
					[30, 14, 28, 49, 60],
					[2, 7, 3, 2, 90]
				];

				this.option = {
					 legend: {
		                data: ['男', '女'],
		                right:0,
		                top:'middle',
		                orient: 'vertical',
		                textStyle:{
		                		color:'#fff'
		                }
		            },
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: [{
							x: '7%',
							y: '2%',
							width: '78%',
							height: '38%'
						},

						{
							x: '7%',
							y2: '10.3%',
							width: '78%',
							height: '38%'
						},

					],
					xAxis: [{
							gridIndex: 0,
							data: ['0-17', '18-35', '36-55', '55-65', '65以上'],
							axisTick: {
								show: false
							},
							nameGap: '50',
							axisLabel:{
					        		color:'#fff'
					       	},
						},
						{
							gridIndex: 1,
							data: ['0-17', '18-35', '36-55', '55-65', '65以上'],
							axisLabel: {
								show: false
							},
							axisTick: {
								show: false
							},
						},
					],
					yAxis: [{
							gridIndex: 0,
//							min: 0,
//							max: 60,
							splitLine: {
								lineStyle: {
									type: 'dashed',
									color:'rgba(255,255,255,.2)'
								},
							},
							axisLabel:{
					        		color:'#fff',
					       	},
						},
						{
							gridIndex: 1,
//							min: 0,
//							max: 10,
							inverse: true,
							splitLine: {
								lineStyle: {
									type: 'dashed',
									color:'rgba(255,255,255,.2)'
								},
							},
							axisLabel:{
					        		color:'#fff',
					        		
					       	},
						},

					],
					series: [{
							name: '男',
							type: 'bar',
							xAxisIndex: 0,
							yAxisIndex: 0,
							data: dataAll[0],
							itemStyle: {
								normal: {
									color: new this.echarts.graphic.LinearGradient(
										0, 1, 0, 0, [{
												offset: 1,
												color: 'rgb(11,208,216)'
											},
											{
												offset: 0,
												color: 'rgb(11,112,205)'
											}
										]
									)
								}
							},
							barWidth: 20,

							label: {
								normal: {
									show: true,
									position: 'top'
								}
							},
						},
						{
							name: '女',
							type: 'bar',
							xAxisIndex: 1,
							yAxisIndex: 1,
							data: dataAll[1],
							itemStyle: {
								normal: {
									color: new this.echarts.graphic.LinearGradient(
										0, 1, 0, 0, [{
												offset: 1,
												color: 'rgb(186,174,249)'
											},
											{
												offset: 0,
												color: 'rgb(136,123,204)'
											}
										]
									)
								}
							},
							barWidth: 20,
							label: {
								normal: {
									show: true,
									position: 'bottom'
								}
							},
						},
					]
				};
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

	}
</script>

<style>

</style>