<template>
	<div>
		<div style="width: 100%;height:250px;" ref="my_chart"></div>
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

		},
		computed: {},
		components: {},
		methods: {
			random(min, max) {
				return parseInt(Math.random() * (max - min)) + min;
			},
			initOpction() {
				var product = this.global.getRandomData(30, 1);
				var source = [
					['product'],
					['总量'],
					['PC'],
					['移动端']
				];
				product.map(item => {
					source[0].push(item)
				});
				for(var i = 0; i < 30; i++) {
					source[1].push(this.random(5000, 10000));
					source[2].push(this.random(4000, 6000));
					source[3].push(this.random(1000, 2500));
				}
				this.option = {
					color:['#78cba6','#3987ce','#e8af49'],
					legend: {
						textStyle: {
							color: '#fff'
						}
					},
					tooltip: {
						trigger: 'axis',
						showContent: false
					},
					dataset: {
						source: source
					},
					grid: {
						left: '1%',
						right: '35%',
						top: '16%',
						bottom: '6%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						axisLabel: {
							color: '#fff'
						},
					},
					yAxis: {
						gridIndex: 0,
						axisLabel: {
							color: '#fff'
						},
					},
					series: [{
							type: 'line',
							smooth: true,
							seriesLayoutBy: 'row',
							areaStyle: {
								normal: {
									color: new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(88, 206, 163, 1)'
									}, {
										offset: 0.8,
										color: 'rgba(88, 206, 163, 0.1)'
									}], false),
									shadowColor: 'rgba(0, 0, 0, 0.1)',
									shadowBlur: 10
								}
							},
							itemStyle: {
								normal: {
									color: 'rgb(88, 206, 163)',
									borderColor: 'rgba(88, 206, 163,0.2)',
									borderWidth: 12

								}
							},
						},
						{
							type: 'line',
							smooth: true,
							seriesLayoutBy: 'row',
							areaStyle: {
								normal: {
									color: new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(0, 136, 212, 1)'
									}, {
										offset: 0.8,
										color: 'rgba(0, 136, 212, 0.1)'
									}], false),
									shadowColor: 'rgba(0, 0, 0, 0.1)',
									shadowBlur: 10
								}
							},
							itemStyle: {
								normal: {
									color: 'rgb(0, 136, 212)',
									borderColor: 'rgba(0, 136, 212,0.2)',
									borderWidth: 12

								}
							},
						},
						{
							type: 'line',
							smooth: true,
							seriesLayoutBy: 'row',
							areaStyle: {
								normal: {
									color: new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(242, 173, 41, 1)'
									}, {
										offset: 0.8,
										color: 'rgba(242, 173, 41, 0.1)'
									}], false),
									shadowColor: 'rgba(0, 0, 0, 0.1)',
									shadowBlur: 10
								}
							},
							itemStyle: {
								normal: {
									color: 'rgb(242, 173, 41)',
									borderColor: 'rgba(242, 173, 41,0.2)',
									borderWidth: 12

								}
							},
						},
						{
							type: 'pie',
							id: 'pie',
							radius: '60%',
							center: ['80%', '50%'],
							label: {
								formatter: '{b}: {@[' + 1 + ']} ({d}%)'
							},
							encode: {
								itemName: 'product',
								value: 1,
								tooltip: 1
							}
						}
					]
				};

			},
			creatChart() {
				this.initOpction();
				this.echart && this.echart.dispose();
				this.echart = this.echarts.init(this.$refs.my_chart);
				this.echart.setOption(this.option);
				this.bindEvent()
			},
			bindEvent() {
				let _this = this;
				this.echart.on('updateAxisPointer', function(event) {
					var xAxisInfo = event.axesInfo[0];
					console.log(event)
					if(xAxisInfo) {
						var dimension = xAxisInfo.value + 1;
						_this.echart.setOption({
							series: {
								id: 'pie',
								label: {
									formatter: '{b}: {@[' + dimension + ']} ({d}%)'
								},
								encode: {
									value: dimension,
									tooltip: dimension
								}
							}
						});
					}
				});
			}

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