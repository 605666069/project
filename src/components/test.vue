<template>
	<div class="wrap">
		<div  style="width: 100%;height:500px;margin-top: 10px;" ref="my_chart"></div>
	</div>
</template>

<script>
 	import 'echarts/map/js/china.js'
 	import zhejiang from '@/api/zhejiang.json'
	
	export default {
        data() {
        	return {
        	}
        },
        computed:{
        },
        components: {
        },
        methods:{
        	initOpction(myMap) {
				var nameColor = " rgb(55, 75, 113)"
				var name_fontFamily = '等线'
				var subname_fontSize = 15
				var name_fontSize = 18
				var mapName = myMap?myMap:'china'
				
				var data = []
				this.echarts.getMap(mapName).geoJson.features.map(item=>{
					data.push({name:item.properties.name,value:Math.round(Math.random() * 10000)})
				});
				
//				var data = [
//				    {name:"北京",value:177},
//				    {name:"天津",value:42},
//				    {name:"河北",value:102},
//				    {name:"山西",value:81},
//				    {name:"内蒙古",value:47},
//				    {name:"辽宁",value:67},
//				    {name:"吉林",value:82},
//				    {name:"黑龙江",value:66},
//				    {name:"上海",value:24},
//				    {name:"江苏",value:92},
//				    {name:"浙江",value:114},
//				    {name:"安徽",value:109},
//				    {name:"福建",value:116},
//				    {name:"江西",value:91},
//				    {name:"山东",value:119},
//				    {name:"河南",value:137},
//				    {name:"湖北",value:116},
//				    {name:"湖南",value:114},
//				    {name:"重庆",value:91},
//				    {name:"四川",value:125},
//				    {name:"贵州",value:62},
//				    {name:"云南",value:83},
//				    {name:"西藏",value:9},
//				    {name:"陕西",value:80},
//				    {name:"甘肃",value:56},
//				    {name:"青海",value:10},
//				    {name:"宁夏",value:18},
//				    {name:"新疆",value:67},
//				    {name:"广东",value:123},
//				    {name:"广西",value:59},
//				    {name:"海南",value:14},
//				    ];
//				    
				    
				var geoCoordMap = {};
				var toolTipData = [ 
				    {name:"北京",value:[{name:"人数",value:177}]},
				    {name:"天津",value:[{name:"人数",value:95}]},
				    {name:"河北",value:[{name:"人数",value:95}]},
				    {name:"山西",value:[{name:"人数",value:95}]},
				    {name:"内蒙古",value:[{name:"人数",value:95}]},
				    {name:"辽宁",value:[{name:"人数",value:95}]},
				    {name:"吉林",value:[{name:"人数",value:95}]},
				    {name:"黑龙江",value:[{name:"人数",value:95}]},
				    {name:"上海",value:[{name:"人数",value:95}]},
				    {name:"江苏",value:[{name:"人数",value:95}]},
				    {name:"浙江",value:[{name:"人数",value:95}]},
				    {name:"安徽",value:[{name:"人数",value:95}]},
				    {name:"福建",value:[{name:"人数",value:95}]},
				    {name:"江西",value:[{name:"人数",value:95}]},
				    
				];
				
				/*获取地图数据*/
//				var mapFeatures = echarts.getMap(mapName).geoJson.features;
				var mapFeatures = this.echarts.getMap(mapName).geoJson.features;
				console.log(mapFeatures)
//				var mapFeatures = myMap?myMap.features:this.geoCoordMap.features;
				mapFeatures.forEach(function(v) {
				    // 地区名称
				    var name = v.properties.name;
				    // 地区经纬度
				    geoCoordMap[name] = v.properties.cp;
				
				});
				
				
				// console.log("============geoCoordMap===================")
				// console.log(geoCoordMap)
				// console.log("================data======================")
				//console.log(data)
				//console.log(toolTipData)
				var max = 480,
				    min = 9; // todo 
				var maxSize4Pin = 100,
				    minSize4Pin = 20;
				
				var convertData = function(data) {
				    var res = [];
				    for (var i = 0; i < data.length; i++) {
				        var geoCoord = geoCoordMap[data[i].name];
				        if (geoCoord) {
				            res.push({
				                name: data[i].name,
				                value: geoCoord.concat(data[i].value),
				            });
				        }
				    }
				    return res;
				};
				this.option = {
//				    title: {
//				        text: name_title,
//				        subtext: subname,
//				        x: 'center',
//				        textStyle: {
//				            color: nameColor,
//				            fontFamily: name_fontFamily,
//				            fontSize: name_fontSize
//				        },
//				        subtextStyle:{
//				            fontSize:subname_fontSize,
//				            fontFamily:name_fontFamily
//				        }
//				    },
				    tooltip: {
				        trigger: 'item',
				        formatter: function(params) {
			        		var toolTiphtml = '';
			        		for (var i = 0; i < data.length; i++) {
			        			if (params.name==data[i].name) {
			        				toolTiphtml += params.name + ' : ' + data[i].value;
			        			}
			        		}
			        		return toolTiphtml;
				        }
				    },
//				     legend: {
//				         orient: 'vertical',
//				         y: 'bottom',
//				         x: 'right',
//				         data: ['credit_pm2.5'],
//				         textStyle: {
//				             color: '#fff'
//				         }
//				     },
//				    visualMap: {
//				        show: true,
//				        min: 0,
//				        max: 200,
//				        left: 'left',
//				        top: 'bottom',
//				        text: ['高', '低'], // 文本，默认为数值文本
//				        textStyle:{
//				        	color:'#fff'
//				        },
//				        calculable: true,
//				        seriesIndex: [1],
//				        inRange: {
//				            // color: ['#3B5077', '#031525'] // 蓝黑
//				            // color: ['#ffc0cb', '#800080'] // 红紫
//				            // color: ['#3C3B3F', '#605C3C'] // 黑绿
//				            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
//				            // color: ['#23074d', '#cc5333'] // 紫红
////				            color: ['#00467F', '#A5CC82'] // 蓝绿
//				            // color: ['#1488CC', '#2B32B2'] // 浅蓝
//				            // color: ['#00467F', '#A5CC82'] // 蓝绿
//				            // color: ['#00467F', '#A5CC82'] // 蓝绿
//				            // color: ['#00467F', '#A5CC82'] // 蓝绿
//				            // color: ['#00467F', '#A5CC82'] // 蓝绿
//				            
//				
//				        }
//				    },
				    geo: {
				        show: true,
				        map: mapName,
				        left:'20%',
				        label: {
				            normal: {
				                show: true,
				                color:'#fff'
				            },
				            emphasis: {
				                show: false,
				            }
				        },
				        roam: true,
				        itemStyle: {
				            normal: {
				            	
				                 borderColor: 'rgba(147, 235, 248, 1)',
			                    borderWidth: 1,
			                    areaColor: {
			                        type: 'radial',
			                        x: 0.5,
			                        y: 0.5,
			                        r: 0.8,
			                        colorStops: [{
			                            offset: 0,
			                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
			                        }, {
			                            offset: 1,
			                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
			                        }],
			                        globalCoord: false // 缺省为 false
			                    },
			                    shadowColor: 'rgba(128, 217, 248, 1)',
			                    // shadowColor: 'rgba(255, 255, 255, 1)',
			                    shadowOffsetX: -2,
			                    shadowOffsetY: 2,
			                    shadowBlur: 10
				            },
				            emphasis: {
				               
				            }
				        }
				    },
				    series: [/*{
				            name: '散点',
				            type: 'scatter',
				            coordinateSystem: 'geo',
				            data: convertData(data),
				            symbolSize: function(val) {
				                return val[2] / 10;
				            },
				            label: {
				                normal: {
				                    formatter: '{b}',
				                    position: 'right',
				                    show: false
				                },
				                emphasis: {
				                    show: false
				                }
				            },
				            itemStyle: {
				                normal: {
				                    color: '#05C3F9'
				                }
				            }
				        },*/
				        {
				            type: 'map',
				            map: mapName,
				            geoIndex: 0,
				            aspectScale: 0.75, //长宽比
				            showLegendSymbol: false, // 存在legend时显示
				            label: {
				                normal: {
				                    show: false,
				                },
				                emphasis: {
				                    show: false,
				                    textStyle: {
				                        color: '#fff'
				                    }
				                }
				            },
				            roam: true,
				            itemStyle: {
				                normal: {
				                    areaColor: '#031525',
				                    borderColor: '#3B5077',
				                },
				                emphasis: {
				                    areaColor: '#2B91B7'
				                }
				            },
				            animation: false,
				            data: data
				        },
//				        {
//				            name: '点',
//				            type: 'scatter',
//				            coordinateSystem: 'geo',
//				            symbol: 'pin', //气泡
//				            symbolSize: function(val) {
//				                var a = (maxSize4Pin - minSize4Pin) / (max - min);
//				                var b = minSize4Pin - a * min;
//				                b = maxSize4Pin - a * max;
//				                return a * val[2] + b;
//				            },
//				            label: {
//				                normal: {
//				                    show: true,
//				                    textStyle: {
//				                        color: '#fff',
//				                        fontSize: 9,
//				                    },
//				                    formatter: '{@[2]}'
//				                }
//				            },
//				            itemStyle: {
//				                normal: {
//				                    color: '#F62157', //标志颜色
//				                }
//				            },
//				            zlevel: 6,
//				            data: convertData(data),
//				        },
//				        {
//				            name: 'Top 5',
//				            type: 'effectScatter',
//				            coordinateSystem: 'geo',
//				            data: convertData(data.sort(function(a, b) {
//				                return b.value - a.value;
//				            }).slice(0, 5)),
//				            symbolSize: function(val) {
//				                return val[2] / 10;
//				            },
//				            showEffectOn: 'render',
//				            rippleEffect: {
//				                brushType: 'stroke'
//				            },
//				            hoverAnimation: true,
//				            label: {
//				                normal: {
//				                    formatter: '{b}',
//				                    position: 'right',
//				                    show: true
//				                }
//				            },
//				            itemStyle: {
//				                normal: {
//				                    color: 'yellow',
//				                    shadowBlur: 10,
//				                    shadowColor: 'yellow'
//				                }
//				            },
//				            zlevel: 1
//				        },
				
				    ]
				}
			},
			creatChart(myMap) {
				this.initOpction(myMap);
				this.chart && this.chart.dispose();
				this.chart = this.echarts.init(this.$refs.my_chart);
				this.chart.setOption(this.option);
				this.bindEvent()
			},
			bindEvent() {
				let _this = this;
				this.echarts.registerMap('zhejiang', zhejiang);
				this.chart.on('click',function (param,data) {
					console.log(param)
					console.log(data)
					if(param.data.name == '浙江') {
						_this.creatChart('zhejiang')
					} else {
						_this.creatChart()
					}
				})
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
        beforeDestroy () {
			this.chart.clear()
			},
       
       
    }
</script>

<style scoped>
	.wrap {
		width: 100%;
	}
</style>