
    var module_00091 = echarts.init(document.getElementById('module_00091'), theme);

    var module_00091_data = [  
      {name: '北京',value:2},  
      {name: '天津',value:0},  
      {name: '上海',value:1},  
      {name: '重庆',value:0},  
      {name: '河北',value:0},  
      {name: '河南',value:0},  
      {name: '云南',value:0},
      {name: '辽宁',value:0},  
      {name: '黑龙',value:0},  
      {name: '湖南',value:0},
      {name: '安徽',value:0},
      {name: '山东',value:1},  
      {name: '新疆',value:0},  
      {name: '江苏',value:1},  
      {name: '浙江',value:3},  
      {name: '江西',value:1},
      {name: '湖北',value:0},
      {name: '广西',value:254},
      {name: '甘肃',value:5},  
      {name: '山西',value:0},  
      {name: '内蒙',value:0},  
      {name: '陕西',value:0},  
      {name: '吉林',value:0},  
      {name: '福建',value:1},  
      {name: '贵州',value:0},  
      {name: '广东',value:47},  
      {name: '青海',value:0},  
      {name: '西藏',value:0},  
      {name: '四川',value:0},  
      {name: '宁夏',value:0},  
      {name: '海南',value:0},  
      {name: '台湾',value:0},  
      {name: '香港',value:0},  
      {name: '澳门',value:0}  
  ];

    var module_00091_geoCoordMap = {
        '青海': [101.78446, 36.623364],
        '新疆': [87.565012, 43.908805],
        '陕西': [108.95187, 34.317625],
        '山东': [116.899502, 36.753481],
        '江苏': [118.798173, 32.149286],
        '四川': [104.039792, 30.717825],
        '湖北': [114.314682, 30.622403],
        '甘肃': [103.840893, 36.066967],
        '福建': [119.30035, 26.099965],
        '吉林': [126.562819, 43.863669],
        '广东': [113.261438, 23.144549],
        '西藏': [91.17849, 29.65844],
        '云南': [102.839607, 24.886083],
        '广西': [108.372721, 22.823551],
        '贵州': [106.636766, 26.653317],
        '湖南': [112.945393, 28.234251],
        '重庆': [106.558106, 29.569114],
        '江西': [115.864758, 28.688335],
        '浙江': [120.162142, 30.278993],
        '上海': [121.480237, 31.2363],
        '河南': [113.631768, 34.753433],
        '安徽': [117.233592, 31.826709],
        '山西': [112.555135, 37.876817],
        '河北': [114.521467, 38.048692],
        '北京': [116.413624, 39.910843],
        '辽宁': [123.471844, 41.683612],
        '内蒙古': [111.755186, 40.848658],
        '黑龙江': [126.541745, 45.808985],
        '天津': [117.207137, 39.089478],
        '海南': [110.206424, 20.050057],
        '宁夏': [106.238976, 38.492392],
        '澳门': [113.549685, 22.192976],
        '香港': [114.171995, 22.281089],
        '台湾': [120.292336, 22.135247]
    };

    var module_00091_convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = module_00091_geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

var wxProvince = function(){
	$.getJSON("/rx/wx/getFasProvince",function(data){
			var fansList = data.fansList;
			var topList = data.topList;
			var html = '';
			for(var i = 0;i < topList.length; i++){
		        var seq = i+1;
				html +='<tr>\
					        <td>'+seq+'</td>\
					        <td>'+topList[i].name+'</td>\
					        <td>'+topList[i].count+'</td>\
					   </tr>';
			}
			$('#table').append(html);
	
    $.get('res/lib/echarts/map/china.json', function (gansuJson) {
        echarts.registerMap('china', gansuJson);
        module_00091.setOption({
            title: {
                text: '微信粉丝地域分布'
                //subtext: '更新时间：9:00'
            },
            tooltip: {
                formatter: function (params) {
                    return params.name;
                    // return params.name + '：' + params.value[2] + '人次';
                }
            },
            geo: {
                layoutCenter: ['50%', '50%'],
                layoutSize: "100%",
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                }
            },
            visualMap: {
                left: 10,
                bottom: 10,
                pieces: [{
                    gt: 0,
                    lte: 80,
                    color: '#00ffff'
                }, {
                    gt: 80,
                    lte: 160,
                    color: '#00ff00'
                }, {
                    gt: 160,
                    lte: 240,
                    color: '#fff000'
                }, {
                    gt: 240,
                    lte: 320,
                    color: '#ffa500'
                }, {
                    gt: 320,
                    color: '#ff3333'
                }]
            },
            series: [{
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: module_00091_convertData(fansList.sort(function (a, b) {
                    return b.value - a.value;
                })),
                symbolSize: function(val) {
                	if(val[2]>=0 && val[2] < 80){
                		return 8;
                	}else if(val[2]>=80 && val[2] < 160){
                		return 10;
                	}else if(val[2]>=160 && val[2] < 240){
                		return 12;
                	}else if(val[2]>=240 && val[2] < 320){
                		return 14;
                	}else{
                		return 16;
                	}
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: function (v) {
                            return v.value[2] + '人次';
                        },
                        position: 'bottom',
                        show: true,
                        textStyle: {
                            fontSize: 12
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                }
            }]
        });
    });
  });
}
wxProvince();
$(window).resize(function () {
    module_00091.resize();
});