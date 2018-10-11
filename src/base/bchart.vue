<template>
	<div>
		<div style="width: 100%;height:240px;margin-top: 10px;" ref="my_chart"></div>
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
		props: {
			data: {
				default: null
			},
			show_legend: {
				default: true
			},
			isSmooth: {
				default: false
			},
			isAreaShow: {
				default: false
			},
			showTitle: {
				default: true
			},
			gradient: {
				default: null
			},
			colorList: {
				default: null
			},
			dataZoom: {
				default: null
			}
		},
		computed: {},
		components: {},
		methods: {
			initOpction() {
				this.option = {
				    tooltip: {
				        show:true,
				        trigger: 'item',
				        axisPointer: { // 坐标轴指示器，坐标轴触发有效
				            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				        },
				        formatter: "{b}: {c}</br>占比：{d}%"
				    },
				    legend: {
				        orient: 'vertical',
				        //            x: 'right',文字在图例颜色的右边了
				        right: '0%',
				        bottom: '15%',
				        textStyle:{
				        		color:'#fff',
				        	
				        },

				        //            data数据中若存在''，则表示换行，用''切割。
				        data: ['1-3天', '3-5天', '5天以上']
				    },
				    //        calculable:true,
				    series: [{
				            type: 'pie',
				            // center: [110, 95],
				            // radius: [88, 90],
				            radius: ['46%', '48%'],
				            center: ['40%', '50%'],
				            labelLine: {
				                normal: {
				                    show: 0,
				                },
				            },
				             hoverAnimation: false,
				            itemStyle: {
				                normal: {
				                    color: function(a) {
				                        if (a.data == 2) {
				                            return '#232F78';
				                        }
				                        if (a.data == 1) {
				                            return 'rgba(0,0,0, 0)';
				                        }
				                    },
				                    borderWidth:2,
				                    borderColor:'#250077'
				                },
				               
				            },
				            data: [2, 1, 2 ],
				        },
				        {
				            name: '',
				            type: 'pie',
				            radius: ['50%', '70%'],
				              center: ['40%', '50%'],
				            // center: [110, 95],
				            // radius: [52, 62],
				            startAngle: 190, //设置起始的角度
				            avoidLabelOverlap: false,
				            hoverAnimation: false,
				            /*控制圆环点击不会放大*/
				
				          /*  label: {
				                normal: {
				                    show: 1,
				                    position: 'top',
				                    formatter: '{c}%'
				                },
				                emphasis: {
				                    show: true,
				                    textStyle: {
				                        fontSize: '10',
				                        fontWeight: 'bold'
				                    }
				                }
				            },*/
				            //                labelLine: {
				            //                    normal: {
				            //                        show: true,
				            //                        length:0.001,
				            //                        type: 'dashed'
				            //                    }
				            //                },
				            labelLine: {
				                normal: {
				                    smooth: true,
				                    length: 20,
				                    length2: 3,
				                    lineStyle: {
				                        type: 'dotted',//虚线
				                    },
				                },
				            },
				             itemStyle: {
				                normal: {
				                    shadowBlur: 50,
				                    shadowColor: 'rgba(21,41,185,.75)',
				                    borderWidth:3,
				                    borderColor:'#250077'
				                },
				               
				            },
				            data: [{
				                    value: 21,
				                    name: '1-3天',
				                    itemStyle: {
				                        color: '#f48c2d'
				                    }
				                },
				                {
				                    value: 2,
				                    name: '3-5天',
				                    itemStyle: {
				                        color: '#32e3eb'
				                    }
				                },
				                {
				                    value: 16,
				                    name: '5天以上',
				                    itemStyle: {
				                        color: '#55afe6'
				                    }
				                },
				
				            ]
				        }
				    ]
				};
			},
			creatChart() {
				this.initOpction();
				this.circle_one && this.circle_one.dispose();
				this.circle_one = this.echarts.init(this.$refs.my_chart);
				this.circle_one.setOption(this.option);
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