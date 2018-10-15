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
			},
			title:{
				default: ''
			}

		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				var rate = 0.953; //0.4+0.2*Math.random();
				var linear_color = {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0,
						color: '#6959CD'
					}, {
						offset: 1,
						color: '#ede0ff'
					}]
				};
				this.option = {
					title: {
						text: this.title,
						textStyle: {
							color: '#fff',
							fontSize: 20,
							fontWeight: 'bold'
						},
						left: 'center',
						bottom: '20%'
					},
					series: [{
						type: 'pie',
						hoverAnimation: false,
						radius: ['59%', '60%'],
						startAngle: 225,
						labelLine: {
							show: false
						},
						data: [{
							value: rate * 270,
							label: {
								normal: {
									show: true,
									position: 'center',
									formatter: (rate * 100).toFixed(2) + '%',
									textStyle: {
										color: '#fff',
										fontSize: 30,
										fontWeight: 'bold'
									}
								}
							},
							itemStyle: {
								normal: {
									borderColor: linear_color,
									borderWidth: 20
								}
							}
						}, {
							value: 270 - rate * 270,
							itemStyle: {
								normal: {
									borderColor: 'rgba(250,250,250,1)',
									borderWidth: 5
								}
							}
						}, {
							value: 90,
							itemStyle: {
								normal: {
									color: "rgba(0,0,0,0)"
								}
							}
						}],
					}]
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