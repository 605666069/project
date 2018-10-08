<template>
	<div>
		<div style="width: 100%;height:400px;" ref="my_chart"></div>
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
			barMaxWidth: {
				default: 10
			},
			show_legend: {
				default: true
			},
			isAcross: {
				default: false
			},
			gradient: {
				default: null
			},
			stack: {
				default: null
			},
			colorList: {
				default: null
			}
		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				var xData = function() {
					var data = [];
					for(var i = 1; i < 13; i++) {
						data.push('杭州' + i);
					}
					return data;
				}();
				this.option = {
					"tooltip": {
						"trigger": "axis",
						"axisPointer": {
							"type": "shadow",
							textStyle: {
								color: "#fff"
							}

						},
					},
					"grid": {
						"borderWidth": 0,
						"top": 30,
						"bottom": 95,
						textStyle: {
							color: "#fff"
						}
					},
					"calculable": true,
					"xAxis": [{
						"type": "category",
						"axisLine": {
							lineStyle: {
								color: '#90979c'
							}
						},
						"splitLine": {
							"show": false
						},
						"axisTick": {
							"show": false
						},
						"splitArea": {
							"show": false
						},
						"axisLabel": {
							"interval": 0,

						},
						"data": xData,
					}],
					"yAxis": [{
						"type": "value",
						"splitLine": {
							"show": false
						},
						"axisLine": {
							lineStyle: {
								color: '#90979c'
							}
						},
						"axisTick": {
							"show": false
						},
						"axisLabel": {
							"interval": 0,

						},
						"splitArea": {
							"show": false
						},

					}],
					"dataZoom": [{
						"show": true,
						"height": 30,
						"xAxisIndex": [
							0
						],
						bottom: 30,
						"start": 0,
						"end":70,
						handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
						handleSize: '110%',
						handleStyle: {
							color: "#d3dee5",

						},
						textStyle: {
							color: "#fff"
						},
						borderColor: "#90979c"

					}, {
						"type": "inside",
						"show": true,
						"height": 15,
						"start": 1,
						"end": 35
					}],
					"series": [{
							"name": "女",
							"type": "bar",
							"stack": "总量",
							"barMaxWidth": 35,
							"barGap": "10%",
							"itemStyle": {
								"normal": {
									"color": "rgba(255,144,128,1)",
									"label": {
										"show": true,
										"textStyle": {
											"color": "#fff"
										},
										"position": "insideTop",
										formatter: function(p) {
											return p.value > 0 ? (p.value) : '';
										}
									}
								}
							},
							"data": [
								709,
								1917,
								2455,
								2610,
								1719,
								1433,
								1544,
								3285,
								5208,
								3372,
								2484,
								4078
							],
						},

						{
							"name": "男",
							"type": "bar",
							"stack": "总量",
							"itemStyle": {
								"normal": {
									"color": "rgba(0,191,183,1)",
									"barBorderRadius": 0,
									"label": {
										"show": true,
										"position": "top",
										formatter: function(p) {
											return p.value > 0 ? (p.value) : '';
										}
									}
								}
							},
							"data": [
								327,
								1776,
								507,
								1200,
								800,
								482,
								204,
								1390,
								1001,
								951,
								381,
								220
							]
						}, {
							"name": "总数",
							"type": "line",
							"stack": "总量",
							symbolSize: 10,
							symbol: 'circle',
							"itemStyle": {
								"normal": {
									"color": "rgba(252,230,48,1)",
									"barBorderRadius": 0,
									"label": {
										"show": true,
										"position": "top",
										formatter: function(p) {
											return p.value > 0 ? (p.value) : '';
										}
									}
								}
							},
							"data": [
								1036,
								3693,
								2962,
								3810,
								2519,
								1915,
								1748,
								4675,
								6209,
								4323,
								2865,
								4298
							]
						},
					]
				}
			},
			creatChart() {
				this.initOpction();
				this.echart && this.echart.dispose();
				this.echart = this.echarts.init(this.$refs.my_chart);
				this.echart.setOption(this.option);
			},
		},
		watch: {
			'data': {
				handler(val, oldVal) {
					if(this.data) {
						this.creatChart()
					}
				},
				immediate: true
			}
		}

	}
</script>

<style>

</style>