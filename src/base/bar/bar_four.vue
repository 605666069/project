<template>
	<div>
		<div style="width: 100%;height:200px;" ref="my_chart"></div>
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
			
		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				var xData = function() {
					var data = [];
					for(var i = 1; i < 11; i++) {
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
						"bottom": 30,
						textStyle: {
							color: "#fff"
						}
					},
					"calculable": true,
					"xAxis": [{
						"type": "category",
						axisLabel:{
				        		color:'#fff'
				       	},
				       	axisLine:{
				       		lineStyle:{
				        			color:'#fff'
				       			
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
						"data": this.data.product,
					}],
					"yAxis": [{
						"type": "value",
						"splitLine": {
							"show": false
						},
						axisLabel:{
				        		color:'#fff'
				       	},
				       	axisLine:{
				       		lineStyle:{
				        			color:'#fff'
				       			
				       		}
				       	},
						"axisTick": {
							"show": false
						},
						"splitArea": {
							"show": false
						},

					}],
//					"dataZoom": [{
//						"show": true,
//						"height": 30,
//						"xAxisIndex": [
//							0
//						],
//						bottom: 30,
//						"start": 0,
//						"end":70,
//						handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
//						handleSize: '110%',
//						handleStyle: {
//							color: "#d3dee5",
//
//						},
//						textStyle: {
//							color: "#fff"
//						},
//						borderColor: "#90979c"
//
//					}, {
//						"type": "inside",
//						"show": true,
//						"height": 15,
//						"start": 1,
//						"end": 35
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
							"data": this.data.data['女'].data
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
							"data": this.data.data['男'].data
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
							"data": this.data.data['总数'].data
						},
					]
				}
			},
			creatChart() {
				this.$ajax.post('/admin/api/KeLiuTopCity').then(data=>{
	    				
	    				let product = [];
	    				let data_obj = {};
	    				let seriver = [];
	    				data.data.map((item,index)=>{
	    					let total = 0;
	    					item.value.map((sub_item,sub_index)=>{
	    						total+=sub_item.value;
	    					});

	    					item.value.push({
	    						value:total,
	    						name:'总数'
	    					})
	    				});
	    				data.data.map((item,index)=>{
	    					product.push(item.name);
	    					item.value.map((sub_item,sub_index)=>{
							if(!data_obj[sub_item.name])  data_obj[sub_item.name] = {
								data:[],
								name:sub_item.name
							};
							for(let key in data_obj) {
								if(sub_item.name == key) {
									data_obj[key].data.push(sub_item.value);
								}
							}
	    					})
	    				});
	    				this.data =  {
						product:product,
						name:'2018年客源累计Top10',
						data:data_obj
	    				}
	    				console.log(this.data);
	    				
	    				this.initOpction();
					this.echart && this.echart.dispose();
					this.echart = this.echarts.init(this.$refs.my_chart);
					this.echart.setOption(this.option);
	    			});
				
			},
		},
		created() {
			 this.$nextTick(()=>{
	        		this.creatChart();
	        	})
		},
		  beforeDestroy () {
			this.echart.clear()
			},

	}
</script>

<style>

</style>