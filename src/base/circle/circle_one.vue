<template>
	<div>
		<div  style="width: 100%;height:200px;margin-top: 10px;" ref="my_chart"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				option: {},
				circle_one: null,
			}
		},
		props:{
			data:{
				default:[]
			},
			isShowLegend:{
				default:false
			}
		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				console.log(this.isShowLegend)
				this.option = {
					legend: {
				        orient: 'vertical',
				        top:'middle',
				        right:0,
				        data:this.data.data.map(item=>{
				        		return item.name
				        }),
				        textStyle:{
					    		color:'#fff'
					    	},
				        show:this.isShowLegend
				    },
					title:{
						text:this.data.name,
						top:'bottom',
						left:'25%',
						textStyle:{
				        	 	color:'#fff'
				        }
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					series: [{
							name: this.data.name,
							type: 'pie',
							center:['30%','50%'],
							radius: ['55%', '65%'],
							avoidLabelOverlap: false,
							hoverAnimation:false,
							label: {
								normal: {
									show: false,
									position: 'center',
							    		color:'#fff',
							    		fontSize:25,
							    		fontWeight:'700'
								},
								emphasis: {
									show: true,
								},
								textStyle:{
							    		color:'#fff'
							    	},
							},
							labelLine: {
								normal: {
									show: true
								}
							},
							data: this.data.data
						}]
				}

			},
			creatChart() {
				this.initOpction();
				this.circle_one && this.circle_one.dispose();
				this.circle_one = this.echarts.init(this.$refs.my_chart);
				this.circle_one.setOption(this.option);
			},
			getData() {
				this.creatChart()
			}

		},
		created() {
			this.$nextTick(() => {
				this.getData();
			})
		},

	}
</script>

<style>

</style>