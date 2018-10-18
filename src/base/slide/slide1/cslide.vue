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
				var echartdata = [[{
					value: 84, //时间
					name: '公共交通',
					itemStyle: {
						normal: {
							borderColor: "#edc553",
							borderWidth: 10,
						}
					}
				}, {
					value: 15,
					name: '自驾',
					itemStyle: {
						normal: {
							borderColor: "#edc553",
							borderWidth: 3,
						}
					}
				}],[{
					value: 84, //时间
					name: '公共交通',
					itemStyle: {
						normal: {
							borderColor: "#c2f38a",
							borderWidth: 10,
						}
					}
				}, {
					value: 15,
					name: '自驾',
					itemStyle: {
						normal: {
							borderColor: "#c2f38a",
							borderWidth: 3,
						}
					}
				}],[{
					value: 84, //时间
					name: '公共交通',
					itemStyle: {
						normal: {
							borderColor: "#3c9eff",
							borderWidth: 10,
						}
					}
				}, {
					value: 15,
					name: '自驾',
					itemStyle: {
						normal: {
							borderColor: "#3c9eff",
							borderWidth: 3,
						}
					}
				}]]

				/*---------------------缩放----------------------------*/
				var scale = 1;
				/*---------------------富文本----------------------------*/
				var rich = {
					percent: {
						color: '#3fdaff',
						fontSize: 26 * scale,
						padding: [0, 0, 30, 0],
						fontWeight: 'bold'
					},
					white: {
						color: '#fff',
						padding: [0, 0, 5, 0],
						fontSize: 14 * scale,
					}
				}
				var pie1 =  ['20%', '20%'];
				var pie2 = ['40%', '20%'];
				var pie3 = ['40%', '40%'];
				this.option = {
					title: [
					{
						text: '省内',
						left: '15%',
						bottom:35,
						textAlign: 'center',
						textStyle: {
							color: '#fff',
							fontSize:25,
							fontWeight: 400
						},
					},{
						text: '省外',
						left: '50%',
						bottom:35,
						textAlign: 'center',
						textStyle: {
							color: '#fff',
							fontSize:25,
							fontWeight: 400
						},
					},{
						text: '本地',
						left: '85%',
						bottom:35,
						textAlign: 'center',
						textStyle: {
							color: '#fff',
							fontSize: 25,
							fontWeight: 400
							
						},
					}
					],
					series: [
						//中间圆环
						{
							name: 'Line 1',
							type: 'pie',
							clockWise: false, //顺时加载
							startAngle: 180,
							hoverAnimation: false, //鼠标移入变大
							center: ['15%', '50%'],
							radius: pie1,
							label: {
								
								normal: {
									show: true,
									formatter: '{b}:{c}  \n({d}%)',
									color:'#fff',
									fontSize:16,
								},
								emphasis: {
									show: true,
								},
							},
							labelLine: {
								normal: {
									length:5,
									length2:5,
									lineStyle:{
										color:'#fff'
									}
								}
							},
							data: echartdata[0]
						},
						//外层背景1
						{
							name: 'bg1',
							type: 'pie',
							clockWise: false, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: ['15%', '50%'],
							radius: pie2,
							color: ['rgba(56,129,137,0.1)', 'none'],
							z: -5,
							label: {
								normal: {
									show: false
								}
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: [{
								value: 10,
								name: '占位',
							}]
						},
						//外层边框
						{
							name: 'Line 2',
							type: 'pie',
							clockWise: false, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: ['15%', '50%'],
							radius: pie3,
							itemStyle: {
								normal: {
									borderWidth: 2 * scale,
									borderColor: 'rgba(38,111,148,0.4)',
									label: {
										show: false
									},
									labelLine: {
										show: false
									},
								}
							},
							data: [{
								value: 10,
								name: '',
							}]
						},
						
						//中间圆环
						{
							name: 'Line 1',
							type: 'pie',
							clockWise: false, //顺时加载
							startAngle: 180,
							hoverAnimation: false, //鼠标移入变大
							center: ['50%', '50%'],
							radius: pie1,
							label: {
								normal: {
									show: true,
//									position: 'center',
									formatter: '{b}:{c}  \n({d}%)',
//									rich: rich
									color:'#fff',
									fontSize:16,
								},
								emphasis: {
									show: true,
								},
							},
							labelLine: {
								normal: {
									lineStyle:{
										color:'#fff'
									},
									length:5,
									length2:5,
								}
							},
							data: echartdata[1]
						},
						//外层背景1
						{
							name: 'bg1',
							type: 'pie',
							clockWise: false, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: ['50%', '50%'],
							radius: pie2,
							color: ['rgba(56,129,137,0.1)', 'none'],
							z: -5,
							label: {
								normal: {
									show: false
								}
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: [{
								value: 10,
								name: '占位',
							}]
						},
						//外层边框
						{
							name: 'Line 2',
							type: 'pie',
							clockWise: false, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: ['50%', '50%'],
							radius: pie3,
							itemStyle: {
								normal: {
									borderWidth: 2 * scale,
									borderColor: 'rgba(38,111,148,0.4)',
									label: {
										show: false
									},
									labelLine: {
										show: false
									},
								}
							},
							data: [{
								value: 10,
								name: '',
							}]
						},
					
						//中间圆环
						{
							name: 'Line 1',
							type: 'pie',
							clockWise: false, //顺时加载
							startAngle: 180,
							hoverAnimation: false, //鼠标移入变大
							center: ['85%', '50%'],
							radius: pie1,
							label: {
								normal: {
									show: true,
//									position: 'center',
									formatter: '{b}:{c}  \n({d}%)',
//									rich: rich
									color:'#fff',
									fontSize:16,
									
								},
								emphasis: {
									show: true,
								},
							},
							labelLine: {
								normal: {
									lineStyle:{
										color:'#fff'
									},
									length:5,
									length2:5,
								}
							},
							data: echartdata[2]
						},
						//外层背景1
						{
							name: 'bg1',
							type: 'pie',
							clockWise: false, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: ['85%', '50%'],
							radius: pie2,
							color: ['rgba(56,129,137,0.1)', 'none'],
							z: -5,
							label: {
								normal: {
									show: false
								}
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: [{
								value: 10,
								name: '占位',
							}]
						},
						//外层边框
						{
							name: 'Line 2',
							type: 'pie',
							clockWise: false, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: ['85%', '50%'],
							radius: pie3,
							itemStyle: {
								normal: {
									borderWidth: 2 * scale,
									borderColor: 'rgba(38,111,148,0.4)',
									label: {
										show: false
									},
									labelLine: {
										show: false
									},
								}
							},
							data: [{
								value: 10,
								name: '',
							}]
						},
					
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