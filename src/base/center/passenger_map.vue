<template>
	<div class="wrap">
		<div style="width: 100%;height:500px;margin-top: 10px;" ref="my_chart"></div>
	</div>
</template>

<script>
	import echarts from "echarts";
	import 'echarts/map/js/china.js'

	export default {
		data() {
			return {
				chinaData: this.echarts.getMap('china').geoJson.features
			}
		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				let citys = [];
				let moveLines = [];
				let data = [];
				this.chinaData.map(item=>{
					let randomData = this.global.randomFunction(500,1000);
					citys.push({
						name: item.properties.name,
						value: item.properties.cp.concat(randomData),
					});
					moveLines.push({
						fromName: item.properties.name,
						toName: "磐安",
						coords: [item.properties.cp,
							[120.4413750000000,29.0514720000000],
						]
					});
					data.push({
						name: item.properties.name,
						value: randomData,
					})
					
					
				});
				
				var mapName = 'china'

				var geoCoordMap = {};
				

				/*获取地图数据*/
				//				var mapFeatures = echarts.getMap(mapName).geoJson.features;
				var mapFeatures = this.echarts.getMap(mapName).geoJson.features;
				//				var mapFeatures = this.geoCoordMap.features;
				mapFeatures.forEach(function(v) {
					// 地区名称
					var name = v.properties.name;
					// 地区经纬度
					geoCoordMap[name] = v.properties.cp;

				});


				var convertData = function(data) {
					var res = [];
					for(var i = 0; i < data.length; i++) {
						var geoCoord = geoCoordMap[data[i].name];
						if(geoCoord) {
							res.push({
								name: data[i].name,
								value: geoCoord.concat(data[i].value),
							});
						}
					}
					return res;
				};
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
//					visualMap: {
//						show: true,
//						min: 0,
//						max: 200,
//						left: 'left',
//						top: 'bottom',
//						text: ['高', '低'], // 文本，默认为数值文本
//						textStyle: {
//							color: '#fff'
//						},
//						calculable: true,
//						seriesIndex: [1],
//						inRange: {
//							// color: ['#3B5077', '#031525'] // 蓝黑
//							// color: ['#ffc0cb', '#800080'] // 红紫
//							// color: ['#3C3B3F', '#605C3C'] // 黑绿
//							// color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
//							// color: ['#23074d', '#cc5333'] // 紫红
//							//color: ['#00467F', '#A5CC82'] // 蓝绿
//							// color: ['#1488CC', '#2B32B2'] // 浅蓝
//							// color: ['#00467F', '#A5CC82'] // 蓝绿
//							// color: ['#00467F', '#A5CC82'] // 蓝绿
//							// color: ['#00467F', '#A5CC82'] // 蓝绿
//							// color: ['#00467F', '#A5CC82'] // 蓝绿
//
//						}
//					},
					geo: {

						show: true,
						map: mapName,
						aspectScale:0.8,
						label: {
							normal: {
								show: false,
								color: '#fff'
							},
							emphasis: {
								show: false,
							}
						},
						roam: false,
						itemStyle: {
							normal: {

								borderColor: 'rgba(147, 235, 248, .4)',
								borderWidth: 1,
								areaColor: {
									type: 'radial',
									x: 0.5,
									y: 0.5,
									r: 0.8,
									colorStops: [{
										offset: 0,
										color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
									}, {
										offset: 1,
										color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
									}],
									globalCoord: false // 缺省为 false
								},
								shadowColor: 'rgba(128, 217, 248, .4)',
								// shadowColor: 'rgba(255, 255, 255, 1)',
								shadowOffsetX: -2,
								shadowOffsetY: 2,
								shadowBlur: 10
							},
							emphasis: {
								areaColor: '',
							}
						}

					},
					series: [{
							name: '散点',
							type: 'effectScatter',
							coordinateSystem: 'geo',
							data: citys,
							symbolSize:5,
							 label: {
			                    normal: {
			                       
			                    }
			                },
							hoverAnimation: true,
							label: {
								normal: {
									formatter: function (v) {
			                            return v.value[2] + '辆';
			                        },
			                        position: 'bottom',
			                        show: true,
			                        textStyle: {
			                            fontSize: 12,
			                            color:'#fff'
			                        }
								},
								emphasis: {
									show: true
								}
							},
							itemStyle: {
								normal: {
									color: '#05C3F9'
								}
							}
						},
						{
							type: 'map',
							map: mapName,
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
							animation: false,
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
								symbolSize: 10,
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
									width: 5,
									opacity: 0.2,
									curveness: 0.1
								}
							},
							data: moveLines
						}

					]
				}
			},
			creatChart() {
				this.initOpction();
				this.chart && this.chart.dispose();
				this.chart = this.echarts.init(this.$refs.my_chart);
				this.chart.setOption(this.option);
			},
			getData() {
				this.creatChart()
			}
		},
		created() {
			this.$nextTick(() => {
				this.getData();
			})
		},

	}
</script>

<style scoped>
	.wrap {
		width: 100%;
	}
</style>