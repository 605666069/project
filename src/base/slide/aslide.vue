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
				data:{}
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
				let title = [];
				let total = 0;
				let series = [];
				
				this.data.map((data,index)=>{
					total+=  data.value;
					title.push({
						text: data.value,
						subtext: data.name,
						left: 10+index*20 + '%',
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
							fontSize: 20,
							fontWeight: 400
						}
					})
					
					series.push({
							name: 'Line 1',
							type: 'pie',
							clockWise: true, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: [10+index*20 + '%', center-50 + '%'],
							radius:pie1,
							itemStyle: innerItemStyle,
							data: [{
									value: data.value,
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
									value: total-data.value,
									name: '未通过',
									itemStyle: {
										normal: {
											borderWidth: 2,
											borderColor: '#edc553'
										}
									}
								},

							]
						
					})
					series.push({
						name: 'Line 2',
						type: 'pie',
						animation: false,
						clockWise: false,
						center: [10+index*20 + '%', center-50 + '%'],
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
					})
					series.push({
						
							name: 'Line 3',
							type: 'pie',
							animation: false,
							clockWise: false,
							center: [10+index*20 + '%', center-50 + '%'],
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
						
					})
				})
				this.option = {
					title: title,
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
					series: series,
				};
			},
			creatChart() {
				//总客流数
        			this.$ajax.post('/admin/api/EatTop5').then(data=>{
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