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
				let title = [];
				let sub_name = [];
				this.data.map((item,index)=>{
					title.push(item.name);
					item.data_value = [];
					item.value.map((sub_item,sub_index)=>{
						item.data_value.push(Number(sub_item.value))
						if(index<1) {
						 	sub_name.push({
						 		name:sub_item.name
						 	});
						}
					})
				})
				
				
				
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
						"data": title
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
						"indicator": sub_name
					},
					"series": [{
						"name": this.data[0].name,
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
							this.data[0].data_value
						]
					}, {
						"name": this.data[1].name,
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
							this.data[1].data_value
						]
					},{
						"name": this.data[2].name,
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
							this.data[2].data_value
						]
					
					}]
				};
			},
			creatChart() {
				this.$ajax.post('/admin/api/HotelCommentTop3').then(data=>{
        				this.data = data.data;
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