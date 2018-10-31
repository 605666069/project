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
				var dataStyle = {
					normal: {
						label: {
							show: true,
							color: '#fff',
							fontSize: 18,
						},
						labelLine: {
							//smooth: 0.2,
							length: 20,
							length2: 20
						},
					}
				};

				var labelShow = {
					show: true,
					color: '#fff',
					fontSize: 15,
					formatter: [
						'{d| {d}% }',
						'{b| {b} }'
					].join('\n'),
					rich: {
						d: {
							fontSize: 14,
							color: '#fff'
						},
						b: {
							fontSize: 16,
							color: '#fff'
						},
					}
				};

				var placeHolderStyle = {
					normal: {
						color: 'rgba(0,0,0,0)',
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					},
					emphasis: {
						color: 'rgba(0,0,0,0)'
					}
				};
				var radius = 70;
				var center = ['50%','40%'];
				let product = [];
				let total = 0;
				var series = [];
				this.data.data.map((item,index)=>{
					product.push(item.name);
					total+= item.totalNum;
				})
				
				this.option = {
					title: {
						text: this.data.name,
						textStyle: {
							fontSize: 20,
							color: '#fff',
							fontWeight: 400
						},
						x: 'center',
						bottom:35
					},
					color: ['#ffd800', '#f46d0b', '#ffb18b', '#fbff8b', '#a2ee3f'],
					tooltip: {
						show: true,
						formatter: "{b} <br/> {c} ({d}%)"
					},
					angleAxis: {
						type: 'category',
						z: 10,
						axisLine: {
							color: '#fff',
							lineStyle: {
								width: 3,
								color: 'rgba(255,255,255,.4)',
							}
						},
					},
					radiusAxis: {
						axisTick: {
							show: false
						},
						axisLabel: {
							show: false,
							color: '#fff'
						},
						axisLine: {
							show: false,
							color: '#fff',
							lineStyle: {
								color: '#fff',
							}
						},
						splitLine: {
							color: '#000',
							lineStyle: {
								type: 'dotted',
								color: 'rgba(170,170,170,.5)',
							}
						},

					},
					polar: {
						center: center,
						radius: radius,
					},
					legend: {
						bottom: '5%',
						textStyle: {
							color: '#fff',
						},
						show:false,
						itemGap: 12,
						data:product
					},
					series: [{
							name: 'Line 1',
							type: 'pie',
							clockWise: false,
							radius: [radius-40, radius-35],
							itemStyle: dataStyle,
							center:center,
							hoverAnimation: false,
							data: [{
									value: total-this.data.data[0].totalNum,
									name: '',
									itemStyle: placeHolderStyle
								},
								{
									value: this.data.data[0].totalNum,
									name: this.data.data[0].name,
									label: labelShow,
								},
								{
									value: 0,
									name: '',
									itemStyle: placeHolderStyle
								}

							]
						},
						{
							name: 'Line 2',
							type: 'pie',
							clockWise: false,
							center:center,
							radius: [radius-70, radius-40],
							itemStyle: dataStyle,
							hoverAnimation: false,

							data: [{
									value: total-this.data.data[0].totalNum-this.data.data[1].totalNum,
									name: '',
									itemStyle: placeHolderStyle
								},
								{
									value: this.data.data[1].totalNum,
									name: this.data.data[1].name,
									label: labelShow,
								},
								{
									value: this.data.data[0].totalNum,
									name: '',
									itemStyle: placeHolderStyle
								}
							]
						},
						{
							name: 'Line 3',
							type: 'pie',
							clockWise: false,
							center:center,
							hoverAnimation: false,
							radius: [radius-20, radius-15],
							itemStyle: dataStyle,

							data: [{
									value: total-this.data.data[0].totalNum-this.data.data[1].totalNum-this.data.data[2].totalNum,
									name: '',
									itemStyle: placeHolderStyle
								},
								{
									value: this.data.data[2].totalNum,
									name: this.data.data[2].name,
									label: labelShow,
								},
								{
									value: this.data.data[0].totalNum+this.data.data[1].totalNum,
									name: '',
									itemStyle: placeHolderStyle
								}
							]
						},
						{
							name: 'Line 4',
							type: 'pie',
							clockWise: false,
							center:center,
							hoverAnimation: false,
							radius: [radius-30, radius-15],
							itemStyle: dataStyle,

							data: [{
									value: total-this.data.data[0].totalNum-this.data.data[1].totalNum-this.data.data[2].totalNum-this.data.data[3].totalNum,
									name: '',
									itemStyle: placeHolderStyle
								},
								{
									value: this.data.data[3].totalNum,
									name: this.data.data[3].name,
									label: labelShow,
								},
								{
									value: this.data.data[0].totalNum+this.data.data[1].totalNum+this.data.data[2].totalNum,
									name: '',
									itemStyle: placeHolderStyle
								}
							]
						},
						{
							name: 'Line 5',
							type: 'pie',
							clockWise: false,
							center:center,
							hoverAnimation: false,
							radius: [radius-60, radius-40],
							itemStyle: dataStyle,

							data: [{
									value: 0,
									name: '',
									itemStyle: placeHolderStyle
								},
								{
									value: this.data.data[4].totalNum,
									name: this.data.data[4].name,
									label: labelShow,
								},
								{
									value: total-this.data.data[4].totalNum,
									name: '',
									itemStyle: placeHolderStyle
								}
							]
						},
						{
							type: 'bar',
							data: [0],
							coordinateSystem: 'polar',
							name: '06a',
							stack: 'a'
						},

					]
				};
			},
			creatChart() {
        			this.$ajax.post('/admin/api/Tourist').then(data=>{
        				this.data  = data.data[1];
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