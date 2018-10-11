<template>
	<div>
		<div style="width: 100%;height: 250px;" ref="my_chart"></div>
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
					tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'shadow'
				        }
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        top:20,
				    },
					xAxis: {
						type: 'value',
						axisLabel: {
							color: '#fff'
						},
						axisLine: {
							show: false
						},
						splitLine: {
							show: false
						},
						show: false
					},
					yAxis: {
						type: 'category',
						data: ['浙江', '北京', '上海', '长春', '深圳'],
						axisLabel: {
							color: '#fff'
						},
						axisLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						inverse: true,
					},
					series: [{
						name: '关注量',
						barMaxWidth:20,
						itemStyle: {
							normal: {
			                    color: function(params) {
			                        // build a color map as your need.
			                        var colorList = [
			                          '#01649b','#003399','#6766cc','#6599ff','#6799cc',
			                        ];
			                        return colorList[params.dataIndex]
			                    },
								shadowBlur: 20,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						},
						type: 'bar',
						data: [9263, 13203, 14203, 18103, 2120]
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
		}
	}	
</script>

<style>

</style>