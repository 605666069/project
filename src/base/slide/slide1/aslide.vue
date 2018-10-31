<template>
	<div>
		<div style="width: 100%;height:450px;" ref="my_chart"></div>
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
			initOpction() {
				/**
				 * 双层圆环图
				 * param1  echarts的初始化id  echarts.init(document.getElementById('xxx'))
				 * param2  value值  数值型
				 * param3  value值的单位
				 * param4  字体及圆环大颜色
				 * param5,6  最小最大值
				 */
				var scale = 0.9;
				var innerItemStyle = {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
						shadowColor: 'rgba(38, 111,148, 0,5)',
						shadowBlur: 10,
					}
				};
				var midItemStyle = {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
						color: 'rgba(80,224,255,0.1)',
						shadowColor: 'rgba(38, 111,148, 0,1)',
						shadowBlur: 5,
						opacity: 0.4
					}
				};
				var outerItemStyle = {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
						color: 'rgba(80,224,255,0.1)',
					}
				};
				
				var pie1 =  ['33%', '32.8%'];
				var pie2 = ['36%', '33%'];
				var pie3 = ['36%', '37%'];
				var center = 90;
				this.option = {
					title: [{
						text: '5459',
						subtext: '饭店1',
						left: '10%',
						bottom:35,
						textAlign: 'center',
						textStyle: {
							color: '#edc553',
							textAlign: 'center',
							fontSize: 24 * scale,
							fontWeight: 'bold'
						},
						subtextStyle: {
							color: '#fff',
							textAlign: 'center',
							fontSize: 25,
							fontWeight: 400
						}

					}, {
						text: '1548',
						subtext: '饭店2',
						left: '30%',
						bottom:35,
						textAlign: 'center',
						textStyle: {
							color: '#c2f38a',
							textAlign: 'center',
							fontSize: 24 * scale,
							fontWeight: 'bold'
						},
						subtextStyle: {
							color: '#fff',
							textAlign: 'center',
							fontSize: 25,
							fontWeight: 400
						}

					}, {
						text: '1548',
						subtext: '饭店3',
						left: '50%',
						bottom:35,
						textAlign: 'center',
						textStyle: {
							color: '#3c9eff',
							textAlign: 'center',
							fontSize: 24 * scale,
							fontWeight: 'bold'
						},
						subtextStyle: {
							color: '#fff',
							textAlign: 'center',
							fontSize:25,
							fontWeight: 400
							
						}

					}, {
						text: '1548',
						subtext: '饭店4',
						left: '70%',
						bottom:35,
						textAlign: 'center',
						textStyle: {
							color: '#6df2c5',
							textAlign: 'center',
							fontSize: 24 * scale,
							fontWeight: 'bold'
						},
						subtextStyle: {
							color: '#fff',
							textAlign: 'center',
							fontSize: 25,
							fontWeight: 400
							
						}

					}, {
						text: '1548',
						subtext: '饭店5',
						left: '90%',
						bottom:35,
						textAlign: 'center',
						textStyle: {
							color: '#35e2e9',
							textAlign: 'center',
							fontSize: 24 * scale,
							fontWeight: 'bold'
						},
						subtextStyle: {
							color: '#fff',
							textAlign: 'center',
							fontSize: 25,
							fontWeight: 400
							
						}

					}],
					color: ['#edc553', '#edc553'],
					tooltip: {
						show: false,
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						show: false,
						itemGap: 12,
						data: ['通过', '未通过']
					},
					series: [
						//通过三科环形图
						{
							name: 'Line 1',
							type: 'pie',
							clockWise: true, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: ['10%', center-50 + '%'],
							radius:pie1,
							itemStyle: innerItemStyle,
							data: [{
									value: 16,
									name: '通过',
									itemStyle: {
										normal: {
											borderWidth: 10,
											borderColor: '#edc553'
										}
									},
									label: {
										normal: {
											formatter: '{d} %',
											position: 'center',
											show: true,
											textStyle: {
												fontSize: 24 * scale,
												fontWeight: 'bold',
												color: '#edc553'
											}
										}
									}
								}, {
									value: 8,
									name: '未通过',
									itemStyle: {
										normal: {
											borderWidth: 2,
											borderColor: '#edc553'
										}
									}
								},

							]
						}, {
							name: 'Line 2',
							type: 'pie',
							animation: false,
							clockWise: false,
							center: ['10%', center-50 + '%'],
							radius:pie2,
							itemStyle: midItemStyle,
							hoverAnimation: false,
							data: [{
									value: 100,
									name: '01'
								}, {
									value: 0,
									name: 'invisible',
								}

							]
						}, {
							name: 'Line 3',
							type: 'pie',
							animation: false,
							clockWise: false,
							center: ['10%', center-50 + '%'],
							radius: pie3,
							itemStyle: outerItemStyle,
							hoverAnimation: false,
							tooltip: {
								show: false
							},
							data: [{
									value: 100,
									name: '02',
								}, {
									value: 0,
									name: 'invisible',
								}

							]
						},

						//通过二科环形图
						{
							name: 'Line 1',
							type: 'pie',
							clockWise: true, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: ['30%', center-50 + '%'],
							radius: pie1,
							itemStyle: innerItemStyle,
							data: [{
									value: 2,
									name: '通过',
									itemStyle: {
										normal: {
											borderWidth: 10,
											borderColor: '#c2f38a'
										}
									},
									label: {
										normal: {
											formatter: '{d} %',
											position: 'center',
											show: true,
											textStyle: {
												fontSize: 24 * scale,
												fontWeight: 'bold',
												color: '#c2f38a'
											}
										}
									}
								}, {
									value: 9,
									name: '未通过',
									itemStyle: {
										normal: {
											borderWidth: 2,
											borderColor: '#c2f38a'
										}
									}
								},

							]
						}, {
							name: 'Line 2',
							type: 'pie',
							animation: false,
							clockWise: false,
							center: ['30%', center-50 + '%'],
							radius: pie2,
							itemStyle: midItemStyle,
							hoverAnimation: false,
							data: [{
									value: 100,
									name: '01'
								}, {
									value: 0,
									name: 'invisible',
								}

							]
						}, {
							name: 'Line 3',
							type: 'pie',
							animation: false,
							clockWise: false,
							center: ['30%', center-50 + '%'],
							radius: pie3,
							itemStyle: outerItemStyle,
							hoverAnimation: false,
							tooltip: {
								show: false
							},
							data: [{
									value: 100,
									name: '02',
								}, {
									value: 0,
									name: 'invisible',
								}

							]
						},
						//通过一科环形图
						{
							name: 'Line 1',
							type: 'pie',
							clockWise: true, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: ['50%', center-50 + '%'],
							radius: pie1,
							itemStyle: innerItemStyle,
							data: [{
									value: 3,
									name: '通过',
									itemStyle: {
										normal: {
											borderWidth: 10,
											borderColor: '#3c9eff'
										}
									},
									label: {
										normal: {
											formatter: '{d} %',
											position: 'center',
											show: true,
											textStyle: {
												fontSize: 24 * scale,
												fontWeight: 'bold',
												color: '#3c9eff'
											}
										}
									}
								}, {
									value: 20,
									name: '未通过',
									itemStyle: {
										normal: {
											borderWidth: 2,
											borderColor: '#3c9eff'
										}
									}
								},

							]
						}, {
							name: 'Line 2',
							type: 'pie',
							animation: false,
							clockWise: false,
							center: ['50%', center-50 + '%'],
							radius: pie2,
							itemStyle: midItemStyle,
							hoverAnimation: false,
							data: [{
									value: 100,
									name: '01'
								}, {
									value: 0,
									name: 'invisible',
								}

							]
						}, {
							name: 'Line 3',
							type: 'pie',
							animation: false,
							clockWise: false,
							center: ['50%', center-50 + '%'],
							radius: pie3,
							itemStyle: outerItemStyle,
							hoverAnimation: false,
							tooltip: {
								show: false
							},
							data: [{
									value: 100,
									name: '02',
								}, {
									value: 0,
									name: 'invisible',
								}

							]
						},
						//全部未过环形图
						{
							name: 'Line 1',
							type: 'pie',
							clockWise: true, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: ['70%', center-50 + '%'],
							radius: pie1,
							itemStyle: innerItemStyle,
							data: [{
									value: 2,
									name: '通过',
									itemStyle: {
										normal: {
											borderWidth: 10,
											borderColor: '#6df2c5'
										}
									},
									label: {
										normal: {
											formatter: '{d} %',
											position: 'center',
											show: true,
											textStyle: {
												fontSize: 24 * scale,
												fontWeight: 'bold',
												color: '#6df2c5'
											}
										}
									}
								}, {
									value: 25,
									name: '未通过',
									itemStyle: {
										normal: {
											borderWidth: 2,
											borderColor: '#6df2c5'
										}
									}
								},

							]
						}, {
							name: 'Line 2',
							type: 'pie',
							animation: false,
							clockWise: false,
							center: ['70%', center-50 + '%'],
							radius: pie2,
							itemStyle: midItemStyle,
							hoverAnimation: false,
							data: [{
									value: 100,
									name: '01'
								}, {
									value: 0,
									name: 'invisible',
								}

							]
						}, {
							name: 'Line 3',
							type: 'pie',
							animation: false,
							clockWise: false,
							center: ['70%', center-50 + '%'],
							radius: pie3,
							itemStyle: outerItemStyle,
							hoverAnimation: false,
							tooltip: {
								show: false
							},
							data: [{
									value: 100,
									name: '02',
								}, {
									value: 0,
									name: 'invisible',
								}

							]
						},
						//考试缺席环形图
						{
							name: 'Line 1',
							type: 'pie',
							clockWise: true, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: ['90%', center-50 + '%'],
							radius: pie1,
							itemStyle: innerItemStyle,
							data: [{
									value: 1,
									name: '通过',
									itemStyle: {
										normal: {
											borderWidth: 10,
											borderColor: '#35e2e9'
										}
									},
									label: {
										normal: {
											formatter: '{d} %',
											position: 'center',
											show: true,
											textStyle: {
												fontSize: 24 * scale,
												fontWeight: 'bold',
												color: '#35e2e9'
											}
										}
									}
								}, {
									value: 50,
									name: '未通过',
									itemStyle: {
										normal: {
											borderWidth: 2,
											borderColor: '#35e2e9'
										}
									}
								},

							]
						}, {
							name: 'Line 2',
							type: 'pie',
							animation: false,
							clockWise: false,
							center: ['90%', center-50 + '%'],
							radius: pie2,
							itemStyle: midItemStyle,
							hoverAnimation: false,
							data: [{
									value: 100,
									name: '01'
								}, {
									value: 0,
									name: 'invisible',
								}

							]
						}, {
							name: 'Line 3',
							type: 'pie',
							animation: false,
							clockWise: false,
							center: ['90%', center-50 + '%'],
							radius: pie3,
							itemStyle: outerItemStyle,
							hoverAnimation: false,
							tooltip: {
								show: false
							},
							data: [{
									value: 100,
									name: '02',
								}, {
									value: 0,
									name: 'invisible',
								}

							]
						}

					],
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