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
				data:null
			}
		},
		props: {
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
				var echartdata = [];
				var title = [];
				this.data.map((data,index)=>{
					title.push({
						text: data.name,
						left: '15' + index * 35 + "%",
						bottom:35,
						textAlign: 'center',
						textStyle: {
							color: '#fff',
							fontSize:20,
							fontWeight: 400
						},
					});
					let list = []
					data.value.map((item,item_index)=>{
						list.push({
							value: item.value, //时间
							name: item.name,
							itemStyle: {
								normal: {
									borderColor:(index==0&&'#edc553')||(index==1&&'#c2f38a')||(index==2&&'#3c9eff'),
									borderWidth:item_index==0?3:10,
								}
							}
						})
					});
					echartdata.push(list);
				})

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
				var pie1 =  ['30%', '30%'];
				var pie2 = ['50%', '30%'];
				var pie3 = ['50%', '50%'];
				this.option = {
					title: title,
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
									show: true,
									formatter: '{b}   \n{d}%',
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
									show: true,
//									position: 'center',
									formatter: '{b}   \n{d}%',
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
									show: true,
//									position: 'center',
									formatter: '{b}   \n{d}%',
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
        			this.$ajax.post('/admin/api/Traffic').then(data=>{
//      				0自驾 1公共交通
        				this.data  = data.data
        				this.initOpction();
					this.echart && this.echart.dispose();
					this.echart = this.echarts.init(this.$refs.my_chart);
					this.echart.setOption(this.option);
        			})
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