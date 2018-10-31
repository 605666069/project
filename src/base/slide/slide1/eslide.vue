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
		props:['title'],
		computed: {},
		components: {},
		methods: {
			initOpction() {
				/*---------------------数据----------------------------*/
				var exemptData = [{
					value: 48,
					name: '差评',
					itemStyle:{
						normal: {
		                    color: { // 完成的圆环的颜色
		                        colorStops: [{
									offset:0,
									color: 'rgba(132,89,226,0.1)' // 0% 处的颜色
								}, {
									offset: 1,
									color: 'rgba(132,89,226,0.8)' // 100% 处的颜色
								}]
		                    },
		                } 
					}
		            
				}, {
					value: 58,
					name: '好评',
					itemStyle:{
						normal: {
		                    color: { // 完成的圆环的颜色
		                        colorStops: [{
									offset:0,
									color: 'rgba(63,218,255,0.1)' // 0% 处的颜色
								}, {
									offset: 1,
									color: 'rgba(63,218,255,0.8)' // 100% 处的颜色
								}]
		                    },
		                } 
					}
				}];
				var scale = 0.8;
				/*---------------------颜色配置----------------------------*/
				var exemptcolor = [{
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset:0,
						color: 'rgba(235,41,125,0.1)' // 0% 处的颜色
					}, {
						offset: 1,
						color: 'rgba(235,41,125,0.8)' // 100% 处的颜色
					}],
				},{
					borderWidth: 0,
					borderColor: 'none'
				}];

				var examNumcolor = [{
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0,
						color: 'rgba(63,218,255,0.1)' // 0% 处的颜色
					}, {
						offset: 1,
						color: 'rgba(63,218,255,0.8)' // 100% 处的颜色
					}],
				}];
				/*---------------------富文本----------------------------*/
				var rich = {
					exemptname: {
						color: '#115b70',
						fontSize: 16,
						padding: [0, 0]
					},
					examptdata: {
						color: '#eb297d',
						fontSize: 30 * scale,
						padding: [0, 0],
						fontWeight: 'bold'
					},
					exemname: {
						color: '#115b70',
						fontSize: 14 * scale,
						padding: [0, 0]
					},
					examdata: {
						color: '#3fdaff',
						fontSize: 30 * scale,
						padding: [0, 0],
						fontWeight: 'bold'
					},
					rectblue: {
						width: 14,
						height: 14,
						borderRadius: 3,
						backgroundColor: "#3fdaff",
					},
					rectred: {
						width: 14,
						height: 14,
						borderRadius: 3,
						backgroundColor: '#eb297d'
					},
					space: {
						padding: [0, 10, 0, 0]
					}
				}
				var radius = 85;
				var center = ['50%', '50%']
				this.option = {
					title: {
						text: this.title,
						textStyle: {
							fontSize: 25,
							color: '#fff',
							fontWeight: 400
						},
						x: 'center',
						bottom:35
					},
					legend: {
						itemGap: 12,
						right: 10,
						bottom: 10,
						icon: 'none',
						align: 'left',
						orient: 'vertical',
						textStyle: {
							color: '#115b70',
							fontSize: 14 * scale,
							rich: rich
						},
						show:false,
						data: ['好评', '差评'],
						formatter: function(name) {
							if(name === '好评') {
								return '{rectblue|}' + '{space|}' + name
							} else {
								return '{rectred|}' + '{space|}' + name
							}
						}
					},
					series: [
						//内圈圆环
						{
							name: '内边框',
							type: 'pie',
							startAngle: 260,
							clockWise: false, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: center,
							radius: [radius-60+'%', radius-60+'%'],
							label: {
								normal: {
									show: false
								}
							},
							data: [{
								value: 10,
								name: '',
								itemStyle: {
									normal: {
										borderWidth: 2,
										borderColor: '#0b5263'
									}
								}
							}, {
								value: 2,
								name: '',
								itemStyle: {
									normal: {
										borderWidth: 0,
										borderColor: 'none'
									}
								}
							}]
						},
						//免考人数圆环
						{
							name: '',
							type: 'pie',
							clockWise: false, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							startAngle: 270,
							center: center,
							radius: [radius-40+'%', radius-50+'%'],
							label: {
								normal: {
									formatter: function(params) {
											return  +params.value + '\n' + params.name ;
									},
									color: '#fff',
									fontSize: 16,
								}
							},
							labelLine: {
								normal: {
									length: 20,
									length2: 20,
									lineStyle: {
										color: '#eb297d',
									}
								}
							},
							data: exemptData,
						},
						//正常考试人数圆环
						//内圈圆环
						{
							name: '外边框',
							type: 'pie',
							// startAngle: 260,
							clockWise: false, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: center,
							radius: [radius-30+'%', radius-30+'%'],
							label: {
								normal: {
									show: false
								}
							},
							data: [{
								value: 9,
								name: '',
								itemStyle: {
									normal: {
										borderWidth: 2,
										borderColor: '#0b5263'
									}
								}
							}, {
								value: 2,
								name: '',
								itemStyle: {
									normal: {
										borderWidth: 0,
										borderColor: 'none'
									}
								}
							}]
						},
					]
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