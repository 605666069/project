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
				echart: null,
			}
		},
		props:{
			data:{
				default:null
			},
		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				this.option = {
					legend: {
				        orient: 'vertical',
				        top:'middle',
				        right:30,
				        data:this.data.data.map(item=>{
				        		return item.name
				        }),
				        textStyle:{
					    		color:'#fff'
					    	},
				    },
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					series: [{
							name: this.data.name,
							type: 'pie',
							center:['30%','50%'],
							radius: ['45%', '65%'],
							avoidLabelOverlap: false,
							hoverAnimation:true,
							label: {
								normal: {
									show: true,
									position:"inner",
									formatter:"{d}%"
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
				this.echart && this.echart.dispose();
				this.echart = this.echarts.init(this.$refs.my_chart);
				this.echart.setOption(this.option);
			},

		},
		watch:{
			'data':{
	    		handler(val,oldVal) {
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