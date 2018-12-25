<template>
	<div>
		<div style="width: 100%;height:250px;" ref="my_chart"></div>
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
				this.option = {
					"title": {
						"text": '搜索量',
						"top": 'middle',
						"left": 'center',
						"textStyle": {
							"fontSize": 20,
							"fontWeight": "bold",
							"color": "#bcbfff"
						}
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} : {c} ({d}%)"
					},
					series: [{
						"name": "PC",
						"center": [
							"50%",
							"50%"
						],
						"radius": [
							"49%",
							"50%"
						],
						"clockWise": false,
						"hoverAnimation": false,
						"type": "pie",
						"data": [{
							"value": 5000,
							"name": "",
							"label": {
								"normal": {
									"show": true,
									formatter: function (param) {
										return param.seriesName + ' : ' + param.value + '\n' + param.percent+'%'; 
										console.log(param);
									},
									fontSize:17,
									color:'#fff'
								}
							},
							"itemStyle": {
								"normal": {
									"color": "#5886f0",
									"borderColor": new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#85b6b2'
									}, {
										offset: 1,
										color: '#6d4f8d'
									}]),
									"borderWidth": 15
								},
								"emphasis": {
									"color": "#5886f0",
									"borderColor": new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#00a2ff'
									}, {
										offset: 1,
										color: '#70ffac'
									}]),
									"borderWidth": 25
								}
							},
						}, {
							"name": " ",
							"value": 50,
							"itemStyle": {
								"normal": {
									"label": {
										"show": false
									},
									"labelLine": {
										"show": false
									},
									"color": 'rgba(0,0,0,0)',
									"borderColor": 'rgba(0,0,0,0)',
									"borderWidth": 0
								},
								"emphasis": {
									"color": 'rgba(0,0,0,0)',
									"borderColor": 'rgba(0,0,0,0)',
									"borderWidth": 0
								}
							}
						}]
					}, {
						"name": "总数",
						"center": [
							"50%",
							"50%"
						],
						"radius": [
							"69%",
							"70%"
						],
						startAngle:270,
						"clockWise": false,
						"hoverAnimation": false,
						"type": "pie",
						"data": [{
							"value": 100,
							"name": "",
							"label": {
								"normal": {
									"show": true,
									"formatter": '{a}:{c}',
									color:'#fff',
									fontSize:17,
								}
							},
							"itemStyle": {
								"normal": {
									"color": "#5886f0",
									"borderColor": new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#00a2ff'
									}, {
										offset: 1,
										color: '#70ffac'
									}]),
									"borderWidth": 1
								},
								"emphasis": {
									"color": "#5886f0",
									"borderColor": new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#85b6b2'
									}, {
										offset: 1,
										color: '#6d4f8d'
									}]),
									"borderWidth": 1
								}
							},
						}]
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
		beforeDestroy () {
			this.echart.clear()
			},

	}
</script>

<style>

</style>