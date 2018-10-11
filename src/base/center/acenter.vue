<template>
	<div class="wrap">
		<div  style="width: 100%;height:600px;margin-top: 10px;" ref="my_chart"></div>
	</div>
</template>

<script>
	import echarts from "echarts";
 	import 'echarts/map/js/china.js'
	
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
        		initOpction() {
				let  data = {"total":[{"name":"上海","value":"6753"},{"name":"云南","value":"3391"},{"name":"内蒙古","value":"6836"},{"name":"北京","value":"6762"},{"name":"台湾","value":"10092"},{"name":"吉林","value":"3336"},{"name":"四川","value":"10043"},{"name":"天津","value":"10152"},{"name":"宁夏","value":"10194"},{"name":"安徽","value":"6733"},{"name":"山东","value":"10226"},{"name":"山西","value":"6712"},{"name":"广东","value":"3197863"},{"name":"广西","value":"6323257"},{"name":"新疆","value":"6721"},{"name":"江苏","value":"10172"},{"name":"江西","value":"3399"},{"name":"河北","value":"6802"},{"name":"河南","value":"6627"},{"name":"浙江","value":"6824"},{"name":"海南","value":"10118"},{"name":"湖北","value":"10213"},{"name":"湖南","value":"3357"},{"name":"澳门","value":"10161"},{"name":"甘肃","value":"10204"},{"name":"福建","value":"10239"},{"name":"西藏","value":"3358"},{"name":"贵州","value":"3410"},{"name":"辽宁","value":"6819"},{"name":"重庆","value":"3462"},{"name":"陕西","value":"10140"},{"name":"青海","value":"3408"},{"name":"香港","value":"10098"},{"name":"黑龙江","value":"10042"}],"totalgx":6323257,"gx":8934,"today":[{"name":"上海","value":"13"},{"name":"云南","value":"3"},{"name":"内蒙古","value":"7"},{"name":"北京","value":"7"},{"name":"台湾","value":"10"},{"name":"吉林","value":"5"},{"name":"四川","value":"18"},{"name":"天津","value":"17"},{"name":"宁夏","value":"18"},{"name":"安徽","value":"6"},{"name":"山东","value":"20"},{"name":"山西","value":"11"},{"name":"广东","value":"1796"},{"name":"广西","value":"8934"},{"name":"新疆","value":"9"},{"name":"江苏","value":"14"},{"name":"江西","value":"4"},{"name":"河北","value":"10"},{"name":"河南","value":"7"},{"name":"浙江","value":"9"},{"name":"海南","value":"13"},{"name":"湖北","value":"22"},{"name":"湖南","value":"5"},{"name":"澳门","value":"14"},{"name":"甘肃","value":"9"},{"name":"福建","value":"11"},{"name":"西藏","value":"4"},{"name":"贵州","value":"5"},{"name":"辽宁","value":"10"},{"name":"重庆","value":"6"},{"name":"陕西","value":"14"},{"name":"青海","value":"0"},{"name":"香港","value":"6"},{"name":"黑龙江","value":"12"}]}
				var mapdata= [];
				var maxValue = '';
				
					maxValue= data.totalgx;
				if (parseInt(maxValue)<100) {
					maxValue=100;
				}else{
					var index=maxValue.toString().length-2;
					var end=maxValue.toString().length;
					var last2Num=maxValue.toString().substring(index,end);
					var before=maxValue.toString().substring(0,index);
					if (parseInt(last2Num)!=00) {
						if (parseInt(last2Num)<50) {
							maxValue=parseInt(before+"00")+50;
						}else{
							maxValue=parseInt(before+"00")+100;
						}
					}
				}
				mapdata	= data.total
	//			[
	//				  {'name':'上海','value':3},
	//                   {'name':'兰州','value':2},
	//                   {'name':'银川','value':1},
	//                   {'name':'西安','value':2},
	//                   {'name':'成都','value':3},
	//                   {'name':'呼和浩特','value':4},
	//                   {'name':'西宁','value':1},
	//                   {'name':'天津','value':1},
	//                   {'name':'北京','value':1},
	//                   {'name':'重庆','value':2},
	//                   {'name':'广西','value':data[2]},
	//                   {'name':'广东','value':data[3]},
	//                   {'name':'云南','value':1},
	//                   {'name':'福建','value':1},
	//                   {'name':'吉林','value':1},
	//                   {'name':'河南','value':1},
	//                   {'name':'甘肃','value':1},
	//                    {'name':'陕西','value':1},
	//                   {'name':'湖北','value':1},
	//                   {'name':'新疆','value':1},
	//                   {'name':'辽宁','value':1},
	//                   {'name':'西藏','value':1}
	//				];
				var gansu = {};
				gansu.name = '容县';
				gansu.value = 0;
				mapdata.push(gansu);
				var mapdata1=[];
				for ( var i = 0; i < mapdata.length; i++) {
					var sheng={};
					sheng.name= mapdata[i].name;
					mapdata1.push(sheng);
				}
				var module_00326_cityData = [];
				var flag = 0;
				for(var key in geoCoordMap) {
					for(var i=0;i<mapdata.length;i++){
						if (key==mapdata[i].name) {
							if (mapdata[i].value!=0) {
								flag += 1;
								if(key != '容县' && flag < 50) {
									module_00326_cityData.push({
										fromName: key,
										toName: '容县',
										coords: [geoCoordMap[key], geoCoordMap['容县']],
										value:	aa(mapdata,key)
									});
								}
							}
						}
					}
				}
			
				
				function randomData() {
				    return Math.round(Math.random() * 2500);
				}
				var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
				var geoCoordMap = {
				     '青海': [101.49401,36.888954],
				     '新疆': [87.565012,43.908805],
				     '陕西': [108.95187,34.317625],
				     '山东': [116.899502,36.753481],
				     '江苏': [118.798173,32.149286],
				     '四川': [104.039792,30.717825],
				     '湖北': [114.314682,30.622403],
				     '甘肃': [103.745436,36.158991],
				     '福建': [119.30035,26.099965],
				     '吉林': [126.562819,43.863669],
				     '广东': [113.261438,23.144549],
				     '北京': [116.4551,40.2539],
				     '上海': [121.4648,31.2891],
				     '天津': [117.207137,39.089478],
				     '重庆': [106.558106,29.569115],
				     '安徽': [117.233591,31.82671],
				     '广西': [108.372625,22.823559],
				     '贵州': [106.636767,26.653316],
				     '海南': [110.206424,20.050057],
				     '河北': [114.521467,38.048693],
				     '河南': [113.631768,34.753434],
				     '黑龙江': [126.541745,45.808985],
				     '容县': [112.945393,28.234266],
				     '江西': [115.864758,28.688335],
				     '辽宁': [123.47174,41.683555],
				     '内蒙古': [111.75521,40.84856],
				     '宁夏': [106.238976,38.492392],
				     '西藏': [91.17849,29.65844],
				     '云南': [102.839608,24.886083],
				     '浙江': [120.162141,30.278995],
				     '山西': [112.569035,37.880047],
				      '容县': [110.563954,22.862333]
				};
				function aa(mapdata,key){
					var value = 0;
					for ( var i = 0; i < mapdata.length; i++) {
						if(mapdata[i].name==key){
							value = mapdata[i].value;
							break;
						}	
					}
					return 	value;
				}
				this.option = {
					tooltip: {
						trigger: 'item',
						formatter: '{b}'
					},
					 visualMap: {
				        type: 'piecewise',
				       	orient : 'verticall',
				        min: 0,
				        max: maxValue,
				        left: 25,
				        bottom: 0,
				        itemWidth: 18,
				        itemHeight: 12,
				        calculable: true,
				        realtime: false,
						splitNumber: 5,
				         textStyle: {
		           			 color: '#fff'
		       			 },
				        inRange: {
				            color: ['#00ffff', '#49c591', '#ffff00', '#ffa500', '#D94E5D']
				        }
				    },
					geo: {
						map: 'china',
						roam: true,
						label: {
							normal: {
								show: false
							},
							emphasis:{
								show: false
							}
						},
						itemStyle:{
							
								emphasis:{
									color: '#00407D'
								}
						},
						left:160
					},
					series: [{
						type: 'map',
						geoIndex: 0,
						data: mapdata1
					}, {
						type: 'lines',
						zlevel: 1,
						effect: {
							show: true,
							constantSpeed:20,
							trailLength: 0.5,
							color: '#fff',
							symbolSize: 1.5,
							opacity: .6
						},
						lineStyle: {
							normal: {
								width: 0,
								curveness: 0.2
							}
						},
						data: module_00326_cityData
					}, {
						type: 'lines',
						zlevel: 2,
						symbol: ['none', 'none'],
						symbolSize: 10,
						effect: {
							show: true,
							constantSpeed:20,
							trailLength: 0,
							symbol:'image://res/img/Mapicons/fjicon.svg',
							symbolSize: 1,
							color:'#fff'
							
						},
						lineStyle: {
							normal: {
								width: 0.7,
								color: '#fff',
								opacity: 1,
								curveness: 0.2
							}
						},
						data: module_00326_cityData,
						tooltip: {
							formatter: function(v) {
								return v.data.fromName + '>' + v.data.toName + '：' + v.data.value
							}
						}
					}, 
					
					
					{
						type: 'effectScatter',
						coordinateSystem: 'geo',
						zlevel: 2,
						legendHoverLink: true,
						effectType: 'ripple',
						rippleEffect: {
							period: 3,
							brushType: 'fill',
							scale:6
						},
						 symbol: 'emptyCircle',
						
						
						symbolSize: function(val) {
							return val[2] / 1800000+7 ;
						},
							
			           lable:{
				           normal: {
				           		color:'#000',
				           		backgroundColor: '#000'
				           },
				           emphasis: {
				           		color:'#000',
				           		backgroundColor: '#000'
				           }
			           },
			            
						itemStyle: {
							normal: {
								opacity:0.1,
								color: '#000',
								borderWidth: 0
								
							}
						},
						data: module_00326_cityData.map(function(item) {
							return {
								name: item.fromName,
								value: item.coords[0].concat(item.value)
							}
						}),
						tooltip: {
							formatter: function(v) {
								return v.data.name + '：' + v.data.value[2]
							}
						}
					}, ]
				}
					
			
			},
			creatChart() {
				this.initOpction();
				this.chart && this.chart.dispose();
				this.chart = this.echarts.init(this.$refs.my_chart);
				this.chart.setOption(this.option);
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

<style scoped>
	.wrap {
		width: 100%;
	}
</style>