<template>
	<div>
		<div style="width: 100%;height:200px;margin-top: 10px;" ref="my_chart"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				option: {},
				circle_one: null,
				data:null
			}
		},
		props: {},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				let data = {
					"chart": [{
							month: "景区1",
							value: 138,
							ratio: 14.89
						},

						{
							month: "景区1",
							value: 114,
							ratio: 79.49
						},

						{
							month: "景区1",
							value: 714,
							ratio: 75.8
						},

						{
							month: "景区1",
							value: 442,
							ratio: 19.8
						},

						{
							month: "景区1",
							value: 622,
							ratio: 44.5
						},

						{
							month: "景区1",
							value: 528,
							ratio: 999.3
						},{
							month: "景区1",
							value: 528,
							ratio: 87.3
						},
						{
							month: "景区1",
							value: 528,
							ratio: 87.3
						},
						{
							month: "景区1",
							value: 528,
							ratio: 87.3
						}

					]
				}

				//  x轴数据          象形柱图数据  折线图数据
				let xAxisMonth = this.data.xAxis,
					barData = [],
					lineData = [];
				this.data.data[0].data.map((item,i)=>{
					barData.push({
						"name": xAxisMonth[i],
						"value": item
					});
				})
				this.data.data[1].data.map((item,i)=>{
					barData.push({
						"name": xAxisMonth[i],
						"value": item
					});
				})
				let colorList = [];
				
				barData.data.map((item,index)=>{
					if(item/lineData.data[index] < 0.6) {
						colorList.push('rgba(151,223,93,'+(index%2?0.6:0.3) +')')
					} else if(item/lineData.data[index]  > 60 && item/lineData.data[index]  < 0.75) {
						colorList.push('rgba(249,230,89 ,'+(index%2?0.6:0.3) +')')
					} else {
						colorList.push('rgba(236,88,81,'+(index%2?0.6:0.3) +')')
					}
				})
				console.log(barData);
				console.log(lineData);
				
//				data.chart.map((item,index)=>{
//					console.log(item.value/item.ratio)
//					if(item.value/item.ratio < 0.6) {
//						colorList.push('rgba(151,223,93,'+(index%2?0.6:0.3) +')')
//					} else if(item.value/item.ratio > 60 && item.value/item.ratio < 0.75) {
//						colorList.push('rgba(249,230,89 ,'+(index%2?0.6:0.3) +')')
//					} else {
//						colorList.push('rgba(236,88,81,'+(index%2?0.6:0.3) +')')
//					}
//					
//				})
//				console.log(colorList)

				this.option = {
					title: '',
					grid: {
						top: '24%',
						left: '7%',
						bottom: '0',
						containLabel: true
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'none'
						},
						formatter: function(params) {
							return params[0]["data"].name + "<br/>" + '舒适度: ' + params[1]["data"].value + "<br/>" + '承载量: ' + params[0]["data"].value;
						}
					},
					xAxis: [{
							type: 'category',
							show: false,
							data: xAxisMonth,
							axisLabel: {
								textStyle: {
									color: '#b6b5ab'
								}
							}
						},
						{
							type: 'category',
							position: "bottom",
							data: xAxisMonth,
							boundaryGap: true,
							// offset: 40,
							axisTick: {
								show: false
							},
							axisLine: {
								show: false
							},
							axisLabel: {
								textStyle: {
									color: '#b6b5ab'
								}
							}
						}

					],
					yAxis: [{
						show: true,
						offset: 52,
						splitLine: {
							show: false,
							lineStyle: {
								color: "rgba(255,255,255,0.2)"
							}
						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: true
						},
						axisLabel: {
							show: true,
							color: '#b6b5ab'
						}
					}, {
						show: false,
						type: "value",
						name: "合格率(%)",
						nameTextStyle: {
							color: '#ccc'
						},
						axisLabel: {
							color: '#ccc'
						},
						splitLine: {
							show: false
						},
						axisLine: {
							show: false
						},
						axisTick: {
							show: false
						}
					}],
					color: ['#e54035'],
					series: [{
							name: barData.name,
							type: 'pictorialBar',
							xAxisIndex: 1,
							barCategoryGap: '-80%',
							// barCategoryGap: '-5%',
							symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
							itemStyle: {
								normal: {
									color: function(params) {
//										let colorList = [
//											'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
//											'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
//											'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
//											'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
//											'rgba(13,177,205,0.8)'
//										];
										return colorList[params.dataIndex];
									}
								},
								emphasis: {
									opacity: 1
								}
							},
							data: barData,
						},
						{
							symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAGDUlEQVRogbWaPWxcRRDHf/fO92Ffgk2MrXygBEJACCiQkCgQcoPSIAVXoYCKFBRIKegpQJHSBokehIgoiBBFrEiAQuEKgoQiPiIQEIRANnFI7ODYvvP5fBQ74zdvb/e9y9keafV27+3Hf2ZnZmf2XYlulx2kClAFVqS9V57LO7mIUmmb4H2wO90/l7YLfru0LWYGAd8A1oF2dM4wFS1UB8oFc3sLbV/yMbD9kF1cd6EDNPtbuBh8BUiAVmacP09+21+kqN0XDSL5UuQZ+w2y4LqRp18fwalPVIWGckBWvIE+yJJXz2PKAg3VtV0y9TbOBgYCnwSA+4ATD7zPSAj8pgFui+1XokDqrlOx2oQkbIEnpsQYUICb5rkZ+C2kUnWp9xixL/kKbqu0Ywh44pWy97SMPQ78A9w2ADsGfEf6bRqwm/KbqlHTMJAhX/INUleVB7xsypCpPwncBO6QlbyCfQyYkz6dQMnbhULw2Xdx4EOmPCiLLRtGtK8u3hVwG15pm7plwNqFZaAsfYC4wYY8iwVeMeUO7nBpSFsZ0HEKXMG3cafoOnAMuAEsBDBYVQqS9SiNAAMxqU8CR3G6OIzzyS8DM8B9wMPAi8DzwCjwEHAROCnrjMi4FeB+w7Rv+BYLGKn74Ne9jpYBX+qTOCkq8HEB+ouA7QA/AX8BYzJmBjgF7DEMNHH6XyVVw5DnslSX+YI6H5K4gq4CNbISfwd4Hxe7q4dQr6WeZEOE0wLWgNPA18Cn0j6M80i/Sz+1Aav/yFM1ZCXvkFJGfJVRJurA2x7IESMZH3wLJ+khATkNXJL3i2S9loJWDFbC69KHEt2uH1P7qlI2gI+JhEZw278fp7Mdaasuqxoo+LYAX5N17uK807LU7wKr8r5Ferpa9+mHEwzJQr6+W10Lucgq8BZwXvo0BHxjCg6/Ac895YyWFqx/AVffhW9uOAkjoNoilBeAT2TeI8BvZFXXlzy43W0mIomiAEwZmDcMPC3jEplseAqOnIOTChygBtUT8Ox5eIV0Z4bdKxrAa6QqM0q+sWYoyXvpTXKY7A58Rurra0DtLJyouV3poQMwftoxXMP1qeJs4XtS9bxJ2FVaPCDhS0Ka4cc6an0f2Z24gjlpp+DgWHwuAI7DE2ZMWcCfM4CXcoD3UEzyscGx8Lc0FgmeLHXDYfQlD/CeAgxK5YTwnUroSP6B1OI/Bm6Zdnepj7yzFI7nIeBJIhgypMYWIj/LOYQzqC7wAc7oEiSwmoW5ecdQlL6Ea/QGYl8FGOorN02QozaHAS0jwIQsOIPb1iGcx2kBrTPweSt1uxm6DnPvwVXpq4FZGzhLNqL8L4cB+1snoTfV8iWuWz0vE6vkTgHP4NSlCazNwp9vwoUf4Q+dYAmWL8KVl5yq6UG0Jq+Pk4bFe4ED5BxKhurgJGd1VWMTO1CP6n9xJ+EIqdSmgcuYUGAWrs/C3+SfsGsyZp+Zaz9O7fpRoQrQ1MCsTjb102KzJQ3KxmWBhpRDpL69n9hmlTREWJGiO9I0zKhd6M6rcLeoKDCzybKfCWnGdAv4ELiAixSbEfDrMt/rAvYMaSyjgP10sAewJfXzvpvzt82CXyQb3t4GvsPlp9pnSfotSn0Jl3FtAI8C35JKegJ4hGwYHFIZrW8lTbEcNi+L0gjzKE5aa0h4gDO6j6RcJk1SpoFXSb1My5QJYXKBXumHdmDrMsyCt7e/NrrUE9Hqv2ZTkzjjrJLGOf3msJM4r+TreCgJj0g4BR+L64tuDypeu5/bg3Gc3i9wb7cHUfC973qZiN3bPAAcBH41fWxsMopTj2uGiXu9t6mRvakOgq+TJguD3piN4/z2z4QNfzNQt8At6B5dzwOvurtqgPsMWFvY7bvKKPV7P18KPEPhbSwDsmBit8Qh16ifeoLfrIoOKT15bdhgSS9KLWD/6YP36yEp+7cFQSqSfOh6OQ9k6LcYsCLQhTToBzUfXFG7KNGw7dA3sAiI/sHXSCPE7ByD00CSUyq6PbDUQm6qAgD6yYDyjLNC70VvIW3nO2zRx+Rdp536fB/9bhShHWF8t/574P/bY1d26X/PtooMr/p/9AAAAABJRU5ErkJggg==',
							symbolSize: 42,
							name: lineData.name,
							type: "line",
							yAxisIndex: 1,
							data: lineData,
							itemStyle: {
								normal: {
									borderWidth: 5,
									color: {
										colorStops: [{
												offset: 0,
												color: '#821eff'
											},

											{
												offset: 1,
												color: '#204fff'
											}
										],
									}
								}
							}
						}
					]
				}
			},
			creatChart() {
				//总客流数
        			this.$ajax.post('/admin/api/ScenicComfort').then(data=>{
        				this.data = data.data;
        				this.initOpction();
					this.circle_one && this.circle_one.dispose();
					this.circle_one = this.echarts.init(this.$refs.my_chart);
					this.circle_one.setOption(this.option);
        			})
				
			},

		},
		created() {
        		this.$nextTick(() => {
				this.creatChart()
        		})
		},
			beforeDestroy () {
			this.circle_one.clear()
			},

	}
</script>

<style>

</style>