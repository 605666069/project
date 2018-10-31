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
		props: ['data'],
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
				        left: '15%',
				        right: '4%',
				        bottom: 20,
				        top:0,
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
						data: this.data.product,
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
						data:this.data.data
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