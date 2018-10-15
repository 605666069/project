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
							fontSize: 15,
							color: '#fff'
						},
						b: {
							fontSize: 18,
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
				var radius = 90;
				var center = ['50%','50%']
				this.option = {
					title: {
						text: '免费景区',
						textStyle: {
							fontSize: 25,
							fontWeight: 'normal',
							color: '#fff',
						},
						x: 'center',
						bottom:0
					},
					color: ['#edc553', '#c2f38a', '#3c9eff', '#6df2c5', '#35e2e9'],
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
								color: '#fff',
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
						data: ['乌石村', '小章村', '方前村', '孔氏家庙', '中国药材城']
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
									value: 260,
									name: '',
									itemStyle: placeHolderStyle
								},
								{
									value: 100,
									name: '乌石村',
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
									value: 190,
									name: '',
									itemStyle: placeHolderStyle
								},
								{
									value: 70,
									name: '小章村',
									label: labelShow,
								},
								{
									value: 100,
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
									value: 130,
									name: '',
									itemStyle: placeHolderStyle
								},
								{
									value: 60,
									name: '方前村',
									label: labelShow,
								},
								{
									value: 170,
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
									value: 40,
									name: '',
									itemStyle: placeHolderStyle
								},
								{
									value: 90,
									name: '孔氏家庙',
									label: labelShow,
								},
								{
									value: 230,
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
									value: 40,
									name: '中国药材城',
									label: labelShow,
								},
								{
									value: 320,
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