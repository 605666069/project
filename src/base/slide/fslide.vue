<template>
	<div>
		<div style="width: 100%;height:300px;" ref="my_chart"></div>
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
			color:{
				default:null
			},
			title:{
				default:''
			},
			data:{
				default:{}
			},
			total:{
				default:0
			}
	

		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				var rate = this.data/this.total; 
				var linear_color = {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0,
						color: this.color
					}, {
						offset: 1,
						color: this.color
					}]
				};
				this.option = {
					title: {
						text: this.title,
						textStyle: {
							color: '#fff',
							fontSize: 20,
							fontWeight: 400
						},
						left: 'center',
						bottom: 35
					},
					series: [{
						type: 'pie',
						hoverAnimation: false,
						radius: ['49%', '50%'],
						center:['50%','40%'],
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
										fontSize: 20,
										fontWeight: 400
										
									}
								}
							},
							itemStyle: {
								normal: {
									borderColor: linear_color,
									borderWidth: 10
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
		beforeDestroy () {
			this.echart.clear()
		},

	}
</script>

<style>

</style>