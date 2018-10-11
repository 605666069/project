<template>
	<div>
		<div style="width: 100%;height:540px;margin-top: 10px;" ref="my_chart"></div>
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
				this.option = {
					"normal": {
						"top": 200,
						"left": 300,
						"width": 500,
						"height": 400,
						"zIndex": 6,
						"backgroundColor": ""
					},
					"color": ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)", "rgba(151, 223, 93, 1)"],
					"tooltip": {
						"show": true,
						"trigger": "item"
					},
					"legend": {
						"show": true,
						"icon": "circle",
						top:'70%',
						orient:'vertical',
						"textStyle": {
							"fontSize": 14,
							"color": "#fff"
						},
						"data": ["酒店1", "酒店2",'酒店3']
					},
					"radar": {
						"center": ["50%", "35%"],
						"radius": "60%",
						"startAngle": 90,
						"splitNumber": 4,
						"shape": "circle",
						"splitArea": {
							"areaStyle": {
								"color": ["transparent"]
							}
						},
						"axisLabel": {
							"show": false,
							"fontSize": 18,
							"color": "#fff",
							"fontStyle": "normal",
							"fontWeight": "normal"
						},
						"axisLine": {
							"show": true,
							"lineStyle": {
								"color": "grey" //
							}
						},
						"splitLine": {
							"show": true,
							"lineStyle": {
								"color": "grey" //
							}
						},
						"indicator": [{
							"name": "服务",
							"max": 88
						}, {
							"name": "卫生",
							"max": 88
						}, {
							"name": "位置",
							"max": 88
						}, {
							"name": "房间",
							"max": 88
						}, {
							"name": "价格",
							"max": 88
						},{
							"name": "性价比",
							"max": 88
						}]
					},
					"series": [{
						"name": "酒店1",
						"type": "radar",
						"symbol": "circle",
						"symbolSize": 10,
						"areaStyle": {
							"normal": {
								"color": "rgba(245, 166, 35, 0.4)"
							}
						},
						itemStyle: {
							color: 'rgba(245, 166, 35, 1)',
							borderColor: 'rgba(245, 166, 35, 0.3)',
							borderWidth: 10,
						},
						"lineStyle": {
							"normal": {
								"type": "dashed",

								"color": "rgba(245, 166, 35, 1)",
								"width": 2
							}
						},
						"data": [
							[80, 50, 55, 80, 50,75]
						]
					}, {
						"name": "酒店2",
						"type": "radar",
						"symbol": "circle",
						"symbolSize": 10,
						"itemStyle": {
							"normal": {
								color: 'rgba(19, 173, 255, 1)',
								"borderColor": "rgba(19, 173, 255, 0.4)",
								"borderWidth": 10
							}
						},
						"areaStyle": {
							"normal": {
								"color": "rgba(19, 173, 255, 0.5)"
							}
						},
						"lineStyle": {
							"normal": {
								"color": "rgba(19, 173, 255, 1)",
								"width": 2,
								"type": "dashed"
							}
						},
						"data": [
							[60, 60, 65, 60, 70,21]
						]
					},{
						"name": "酒店3",
						"type": "radar",
						"symbol": "circle",
						"symbolSize": 10,
						"itemStyle": {
							"normal": {
								color: 'rgba(151, 223, 93, 1)',
								"borderColor": "rgba(151, 223, 93, 0.4)",
								"borderWidth": 10
							}
						},
						"areaStyle": {
							"normal": {
								"color": "rgba(151, 223, 93, 0.5)"
							}
						},
						"lineStyle": {
							"normal": {
								"color": "rgba(151, 223, 93, 1)",
								"width": 2,
								"type": "dashed"
							}
						},
						"data": [
							[40, 50, 25, 80, 30,26]
						]
					
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