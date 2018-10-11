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
			return {}
		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				var nameColor = " rgb(55, 75, 113)"
				var name_fontFamily = '等线'
				var subname_fontSize = 15
				var name_fontSize = 18
				var mapName = 'china'
				var data = [{
						name: "北京",
						value: 177
					},
					{
						name: "天津",
						value: 42
					},
					{
						name: "河北",
						value: 102
					},
					{
						name: "山西",
						value: 81
					},
					{
						name: "内蒙古",
						value: 47
					},
					{
						name: "辽宁",
						value: 67
					},
					{
						name: "吉林",
						value: 82
					},
					{
						name: "黑龙江",
						value: 66
					},
					{
						name: "上海",
						value: 24
					},
					{
						name: "江苏",
						value: 92
					},
					{
						name: "浙江",
						value: 114
					},
					{
						name: "安徽",
						value: 109
					},
					{
						name: "福建",
						value: 116
					},
					{
						name: "江西",
						value: 91
					},
					{
						name: "山东",
						value: 119
					},
					{
						name: "河南",
						value: 137
					},
					{
						name: "湖北",
						value: 116
					},
					{
						name: "湖南",
						value: 114
					},
					{
						name: "重庆",
						value: 91
					},
					{
						name: "四川",
						value: 125
					},
					{
						name: "贵州",
						value: 62
					},
					{
						name: "云南",
						value: 83
					},
					{
						name: "西藏",
						value: 9
					},
					{
						name: "陕西",
						value: 80
					},
					{
						name: "甘肃",
						value: 56
					},
					{
						name: "青海",
						value: 10
					},
					{
						name: "宁夏",
						value: 18
					},
					{
						name: "新疆",
						value: 67
					},
					{
						name: "广东",
						value: 123
					},
					{
						name: "广西",
						value: 59
					},
					{
						name: "海南",
						value: 14
					},
				];

				var geoCoordMap = {};
				var toolTipData = [{
						name: "北京",
						value: [{
							name: "人数",
							value: 177
						}]
					},
					{
						name: "天津",
						value: [{
							name: "人数",
							value: 95
						}]
					},
					{
						name: "河北",
						value: [{
							name: "人数",
							value: 95
						}]
					},
					{
						name: "山西",
						value: [{
							name: "人数",
							value: 95
						}]
					},
					{
						name: "内蒙古",
						value: [{
							name: "人数",
							value: 95
						}]
					},
					{
						name: "辽宁",
						value: [{
							name: "人数",
							value: 95
						}]
					},
					{
						name: "吉林",
						value: [{
							name: "人数",
							value: 95
						}]
					},
					{
						name: "黑龙江",
						value: [{
							name: "人数",
							value: 95
						}]
					},
					{
						name: "上海",
						value: [{
							name: "人数",
							value: 95
						}]
					},
					{
						name: "江苏",
						value: [{
							name: "人数",
							value: 95
						}]
					},
					{
						name: "浙江",
						value: [{
							name: "人数",
							value: 95
						}]
					},
					{
						name: "安徽",
						value: [{
							name: "人数",
							value: 95
						}]
					},
					{
						name: "福建",
						value: [{
							name: "人数",
							value: 95
						}]
					},
					{
						name: "江西",
						value: [{
							name: "人数",
							value: 95
						}]
					},

				];

				/*获取地图数据*/
				//				var mapFeatures = echarts.getMap(mapName).geoJson.features;
				var mapFeatures = this.echarts.getMap(mapName).geoJson.features;
				console.log(mapFeatures)
				//				var mapFeatures = this.geoCoordMap.features;
				mapFeatures.forEach(function(v) {
					// 地区名称
					var name = v.properties.name;
					// 地区经纬度
					geoCoordMap[name] = v.properties.cp;

				});

				// console.log("============geoCoordMap===================")
				// console.log(geoCoordMap)
				// console.log("================data======================")
				//console.log(data)
				//console.log(toolTipData)
				var max = 480,
					min = 9; // todo 
				var maxSize4Pin = 100,
					minSize4Pin = 20;

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
						left: '40%',
						zoom: 1.2,
						label: {
							normal: {
								show: false,
								color: '#fff'
							},
							emphasis: {
								show: false,
							}
						},
						roam: true,
						itemStyle: {
							normal: {
			                    areaColor: 'rgba(61,97,166,0.5)',
			                    borderColor: 'rgba(108,136,216,0.9)'
			                },
			                emphasis: {
			                    areaColor: 'rgba(61,97,166,1)'
			                }
						}

					},
					series: [{
							name: '散点',
							type: 'effectScatter',
							coordinateSystem: 'geo',
							data: convertData(data),
							symbolSize: 5,
							 label: {
			                    normal: {
			                       
			                    }
			                },
							hoverAnimation: true,
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
							label: {
								normal: {
									show: true
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
						}
						//				        {
						//				            name: 'Top 5',
						//				            type: 'effectScatter',
						//				            coordinateSystem: 'geo',
						//				            data: convertData(data.sort(function(a, b) {
						//				                return b.value - a.value;
						//				            }).slice(0, 5)),
						//				            symbolSize: function(val) {
						//				                return val[2] / 10;
						//				            },
						//				            showEffectOn: 'render',
						//				            rippleEffect: {
						//				                brushType: 'stroke'
						//				            },
						//				            hoverAnimation: true,
						//				            label: {
						//				                normal: {
						//				                    formatter: '{b}',
						//				                    position: 'right',
						//				                    show: true
						//				                }
						//				            },
						//				            itemStyle: {
						//				                normal: {
						//				                    color: 'yellow',
						//				                    shadowBlur: 10,
						//				                    shadowColor: 'yellow'
						//				                }
						//				            },
						//				            zlevel: 1
						//				        },

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