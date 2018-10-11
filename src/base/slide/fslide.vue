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
				var echartdata = [{
					value: 84, //时间
					name: '公共交通',
					itemStyle: {
						normal: {
							borderColor: "#fbc72d",
							borderWidth: 10,
						}
					}
				}, {
					value: 15,
					name: '自驾',
					itemStyle: {
						normal: {
							borderColor: "#fbc72d",
							borderWidth: 3,
						}
					}
				}]

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
				var pie1 =  ['40%', '40%'];
				var pie2 = ['60%', '40%'];
				var pie3 = ['60%', '60%'];
				this.option = {
					title: [
					{
						text: '省内',
						left: '15%',
						top: '80%',
						textAlign: 'center',
						textStyle: {
							color: '#fff',
							fontSize: 16 * scale
						},
					},{
						text: '省外',
						left: '50%',
						top: '80%',
						textAlign: 'center',
						textStyle: {
							color: '#fff',
							fontSize: 16 * scale
						},
					},{
						text: '本地',
						left: '85%',
						top: '80%',
						textAlign: 'center',
						textStyle: {
							color: '#fff',
							fontSize: 16 * scale
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
							center: ['15%', '40%'],
							radius: pie1,
							label: {
								normal: {
									show: false,
//									position: 'center',
									formatter: '{b}:{c} ({d}%)',
//									rich: rich
									color:'#fff'
								},
								emphasis: {
									show: true,
								},
							},
							labelLine: {
								normal: {
									lineStyle:{
										color:'#fff'
									}
								}
							},
							data: echartdata
						},
						//外层背景1
						{
							name: 'bg1',
							type: 'pie',
							clockWise: false, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: ['15%', '40%'],
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
							center: ['15%', '40%'],
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
							center: ['50%', '40%'],
							radius: pie1,
							label: {
								normal: {
									show: false,
//									position: 'center',
									formatter: '{b}:{c} ({d}%)',
//									rich: rich
									color:'#fff'
								},
								emphasis: {
									show: true,
								},
							},
							labelLine: {
								normal: {
									lineStyle:{
										color:'#fff'
									}
								}
							},
							data: echartdata
						},
						//外层背景1
						{
							name: 'bg1',
							type: 'pie',
							clockWise: false, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: ['50%', '40%'],
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
							center: ['50%', '40%'],
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
							center: ['85%', '40%'],
							radius: pie1,
							label: {
								normal: {
									show: false,
//									position: 'center',
									formatter: '{b}:{c} ({d}%)',
//									rich: rich
									color:'#fff'
								},
								emphasis: {
									show: true,
								},
							},
							labelLine: {
								normal: {
									lineStyle:{
										color:'#fff'
									}
								}
							},
							data: echartdata
						},
						//外层背景1
						{
							name: 'bg1',
							type: 'pie',
							clockWise: false, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: ['85%', '40%'],
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
							center: ['85%', '40%'],
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