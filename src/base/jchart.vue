<template>
	<div>
		<div style="width: 100%;height:540px;" ref="my_chart"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				option: {},
				echart: null,
				chinaData: this.echarts.getMap('china').geoJson.features
			}
		},
		props: {

		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				let citys = [];
				let moveLines = [];
				this.chinaData.map(item=>{
					citys.push({
						name: item.properties.name,
						value: item.properties.cp.concat(this.global.randomFunction(500,1000)),
						symbolSize: 2,
						itemStyle: {
							normal: {
								color: "#F58158"
							}
						}
					
					});
					moveLines.push({
						fromName: item.properties.name,
						toName: "磐安",
						coords: [item.properties.cp,
							[120.4413750000000,29.0514720000000],
						]
					})
					
				});
				
				this.option = {
					legend: {
						show: false,
						orient: 'vertical',
						top: 'bottom',
						left: 'right',
						data: ['地点', '线路'],
						textStyle: {
							color: '#fff'
						}
					},
					geo: {
						map: 'china',
						label: {
							emphasis: {
								show: false
							}
						},
						roam: true,
						itemStyle: {
							normal: {
								areaColor: '#323c48',
								borderColor: '#404a59'
							},
							emphasis: {
								areaColor: '#2a333d'
							}
						}
					},
					series: [{
						name: '地点',
						type: 'effectScatter',
						coordinateSystem: 'geo',
						zlevel: 2,
						rippleEffect: {
							brushType: 'stroke'
						},
						label: {
							emphasis: {
								show: true,
								position: 'right',
								formatter: '{b}'
							}
						},
						symbolSize: 2,
						showEffectOn: 'render',
						itemStyle: {
							normal: {
								color: '#46bee9'
							}
						},
						data: citys
					}, {
						name: '线路',
						type: 'lines',
						coordinateSystem: 'geo',
						zlevel: 2,
						large: true,
						effect: {
							show: true,
							constantSpeed: 30,
							symbol: 'pin',
							symbolSize: 3,
							trailLength: 0,
						},
						lineStyle: {
							normal: {
								color: new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#58B3CC'
								}, {
									offset: 1,
									color: '#F58158'
								}], false),
								width: 1,
								opacity: 0.2,
								curveness: 0.1
							}
						},
						data: moveLines
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