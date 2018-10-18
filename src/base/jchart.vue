<template>
	<div class="wrap">
		<div style="width: 100%;height:540px;" ref="my_chart"></div>
		<ButtonGroup size="large" shape="circle" class="map-btn">
	        <Button type="info" @click="changeMap('china')">全国</Button>
	        <Button type="success" @click="changeMap('zhejiang')">浙江</Button>
	    </ButtonGroup>
	</div>
</template>

<script>
 	import zhejiang from '@/api/zhejiang.json'
	export default {
		data() {
			return {
				option: {},
				echart: null,
				mapName:'china',
			}
		},
		props: {

		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				var mapName = 'china'
				let citys = [];
				let moveLines = [];
				let data = [];
				let mapData = this.echarts.getMap(this.mapName).geoJson.features
				mapData.map(item=>{
					let randomData = this.global.randomFunction(500,1000);
					
					citys.push({
						name: item.properties.name,
						value: item.properties.cp.concat(randomData),
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
					data.push({
						name: item.properties.name,
						value: randomData,
					})
					
				});
				
				this.option = {
					tooltip: {
						trigger: 'item',
						formatter: function(params) {
							var toolTiphtml = '';
							for(var i = 0; i < data.length; i++) {
								if(params.name == data[i].name) {
									toolTiphtml += params.name + ' : ' + data[i].value;
								}
							}
							return toolTiphtml;
						}
					},
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
						map: this.mapName,
						zoom:1.2,
						roam: false,
						label: {
							emphasis: {
								show: false
							}
						},
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
							normal: {
								formatter: function (v) {
		                            return v.value[2] + '人';
		                        },
		                        position: 'bottom',
		                        show: true,
		                        textStyle: {
		                            fontSize: 12
		                        }
							},
							emphasis: {
								show: true
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
					},
					{
						
						type: 'map',
						map: this.mapName,
						geoIndex: 0,
						aspectScale: 0.75, //长宽比
						showLegendSymbol: false, // 存在legend时显示
						zoom: 1.2,
						label: {
							normal: {
								show: false,
								textStyle: {
									color: '#fff'
								}
							},
							emphasis: {
								show: false,
								textStyle: {
									color: '#fff'
								}
							}
						},
						roam: true,
						itemStyle: {
							normal: {
								areaColor: '#031525',
								borderColor: '#3B5077',
							},
							emphasis: {
								areaColor: '#2B91B7'
							}
						},
						animation: true,
						data: data
					},
					{
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
			changeMap(str) {
				this.mapName = str;
				this.creatChart();
			}

		},
		created() {
			this.$nextTick(() => {
				this.echarts.registerMap('zhejiang', zhejiang);
				this.creatChart()
			})
		},

	}
</script>

<style scoped>
	.map-btn {
		position: absolute;
		bottom: 50px;
		left: 50px;
		color: #FFFFFF;
	}

</style>