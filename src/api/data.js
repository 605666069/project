function  timespanToString (timespan, format) {
	if (!timespan) return "--";

	var date = new Date(timespan);
	var o = {
		"M+": date.getMonth() + 1, //month
		"d+": date.getDate(), //day
		"h+": date.getHours(), //hour
		"m+": date.getMinutes(), //minute
		"s+": date.getSeconds(), //second
		"q+": Math.floor((date.getMonth() + 3) / 3), //quarter
		"S": date.getMilliseconds() //millisecond
	}
	if (/(y+)/.test(format))
		format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

	for (var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1,
				RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}

	return format;
}

function timeGMTToString (str, format) {
	if (!str) return;
	str = str.split(' ');
	var date_str = str[0];
	var time_str = "";
	if (str.length > 1)
		time_str = str[1];
	date_str = date_str.split('-');
	time_str = time_str.split(':');
	var date = new Date();
	date.setFullYear(date_str[0], date_str[1] - 1, date_str[2]);
	date.setHours(time_str[0], time_str.length > 1 ? time_str[1] : 0, time_str.length > 2 ? time_str[2] : 0, time_str.length > 3 ? time_str[3] : 0);
	return timespanToString(date.getTime(), format);
}
function getRandomData(length,isDate) {
	var arr = [];
	if(!isDate) {
		for(var i = 0;i< length;i++) {
			arr.push(parseInt(Math.random()*10000));
		}
	} else {
		var Nowdate = new Date();
		for(var i = 0;i< length;i++) {
			arr.push(timespanToString( Nowdate.getTime() - 3600 * 1000 * 24 * i,'MM/dd'));
		}
	}
	return arr;
}
export default  {
	home_data:{
		rank:{
			product:['1.十八窝','2.百丈潭','3.沙溪玫瑰园','4.百丈潭','5.十八窝','6.百丈潭','7.十八窝','8.百丈潭','9.孔庙'],
			name:'排名列表',
			data:[1234,1111,1000,500,300,200,150,130,100]
		},
		traffic:[
			{
				name:'省内',
				data:[
					{
						value: 435,
						name: '公共交通'
					},
					{
						value: 20,
						name: '自驾'
					},
				]
			},
			{
				name:'省外',
				data:[
					{
						value: 20,
						name: '公共交通'
					},
					{
						value: 60,
						name: '自驾'
					},
				]
			},
			{
				name:'本地',
				data:[
					{
						value: 77,
						name: '公共交通'
					},
					{
						value: 100,
						name: '自驾'
					},
				]
			},
		
		],
		line_data:{
			product:getRandomData(7,1),
			name:'网络访问量',
			data:[
				{
					name:'微信访问量',
					data:getRandomData(7)
				},
				{
					name:'每日关注量',
					data:getRandomData(7)
				},
			]
		},
		line_data_1:{
			product:getRandomData(7,1),
			name:'入县车型统计',
			data:[
				{
					name:'轿车',
					data:getRandomData(7)
				},
				{
					name:'大巴',
					data:getRandomData(7)
				},
			]
		},
		home_center:[
			{
				name:'十八涡',
				today_data:10131,
				current_data:100
			},
			{
				name:'百丈潭',
				today_data:10131,
				current_data:100
			},
			{
				name:'沙溪玫瑰园',
				today_data:10131,
				current_data:100
			},
			{
				name:'金鸡岩',
				today_data:10131,
				current_data:100
			},
			{
				name:'舞龙峡',
				today_data:10131,
				current_data:100
			},
			{
				name:'水下孔',
				today_data:10131,
				current_data:100
			},
			{
				name:'花溪',
				today_data:10131,
				current_data:100
			},
			{
				name:'灵江源',
				today_data:10131,
				current_data:100
			},
			{
				name:'孔庙',
				today_data:10131,
				current_data:100
			},
		]
	},
	passenger_flow:{
		data1:{
			name:'昨日游客驻留情况',
			data:[
				{
					value: 435,
					name: '1-3天'
				},
				{
					value: 20,
					name: '3-5天'
				},
				{
					value: 1601,
					name: '5天以上'
				},
			]
		},
		line_data:{
			product:getRandomData(7,1),
			name:'7日入磐客流趋势',
			data:[
				{
					name:'人次',
					data:getRandomData(7)
				},
			]
		},
		bar_data:{
			product:['浙江','杭州','深圳','北京','浙江','杭州','深圳','北京','深圳','深圳'],
			name:'游客来源增幅TOP10(市)',
			data:[
				{
					name:'本月',
					data:[1234,1111,1000,500,300,200,150,130,100,231]
				},
				{
					name:'上月',
					data:[124,111,100,430,320,334,13,45,12,211]
				}
			]
		},
		bar_data1:{
			product:['浙江','杭州','深圳','北京','浙江','杭州','深圳','北京','深圳'],
			name:'2018年客源累计Top10',
			data:[
				{
					name:'人次',
					data:[1234,1111,1000,500,300,200,150,130,100]
				}
			]
		},
		line_data1:{
			product:['0h','2h','4h','6h','8h','10h','12h','14h','16h','18h','20h','24h'],
			name:'昨日与历史客流对比',
			data:[
				{
					name:'昨日',
					data:[120, 132, 101, 134, 90, 230, 210, 90, 230, 210,230, 210]
				},
				{
					name:'当年最高',
					data:[12, 122, 10, 14, 90, 230, 210, 90, 230, 210,122, 10]
				},
				{
					name:'当年最低',
					data:[223, 441, 223, 444, 90, 230, 210, 90, 230, 210,223, 444]
				},
			]
		},
	},
	scenic_data:{
		line_data:{
			product:['1','2','3','4','5','6','7'],
			name:'景区客流趋势',
			data:[
				{
					name:'入县客流',
					data:[120, 132, 101, 134, 90, 230, 210]
				},
				{
					name:'景区客流',
					data:[120, 132, 101, 134, 90, 230, 210]
				},
			]
		},
		line_data1:{
			product: getRandomData(30,1),
			name:'各景区客流量趋势',
			data:[
				{
					name:'十八窝',
					data:getRandomData(30)
				},
				{
					name:'百丈潭',
					data:getRandomData(30)
				},
				{
					name:'孔庙',
					data:getRandomData(30)
				},
				{
					name:'沙溪玫瑰园',
					data:getRandomData(30)
				},
				{
					name:'水下孔',
					data:getRandomData(30)
				},
			]
		},
		bar_data:{
			product:['百丈潭','孔庙','水下孔','百丈潭','十八窝'],
			name:'游客来源增幅TOP10(市)',
			data:[
				{
					name:'本地',
					data:[1234,1111,1000,500,300]
				},
				{
					name:'外地',
					data:[124,111,100,430,320]
				}
			]
		},
		bar_data1:{
			product:['百丈潭','孔庙','水下孔','百丈潭','十八窝'],
			name:'景区舒适度',
			data:[
				{
					name:'舒适度',
					data:[1234,1111,1000,500,300]
				},
			]
		},
		
	},
	hotel_data:{
		data:{
			name:'今日入住',
			data:[
				{
					value: 435,
					name: '男'
				},
				{
					value: 120,
					name: '女'
				},
			]
		},
		bar_data:{
			product:['如家酒店','星期天酒店','如家酒店','星期天酒店','如家酒店'],
			name:'磐安好评率酒店Top5',
			data:[
				{
					name:'好评',
					data:[1234,1111,1000,500,300]
				},
				{
					name:'差评',
					data:[124,111,100,430,320]
				}
			]
		},
		bar_data1:{
			product:['如家酒店','星期天酒店','如家酒店','星期天酒店','如家酒店'],
			name:'接待人数Top5酒店',
			data:[
				{
					name:'本地',
					data:[1234,1111,1000,500,300]
				},
				{
					name:'外地',
					data:[124,111,100,430,320]
				}
			]
		},
		line_data:{
			product:['1','2','3','4','5','6','7'],
			name:'今30日入驻情况',
			data:[
				{
					name:'1日',
					data:[120, 132, 101, 134, 90, 230, 45]
				},
				{
					name:'2日',
					data:[1203, 3, 101, 134, 90, 230, 11]
				},
				{
					name:'3日及以上',
					data:[12, 132, 44, 134, 90, 55, 22]
				},
			]
		},
		circle_data:[
			{
				name:'1日男女',
				data:[
					{
						value: 435,
						name: '男'
					},
					{
						value: 20,
						name: '女'
					},
				]
			},
			{
				name:'1日男女',
				data:[
					{
						value: 20,
						name: '男'
					},
					{
						value: 60,
						name: '女'
					},
				]
			},
			{
				name:'3日及以上',
				data:[
					{
						value: 77,
						name: '男'
					},
					{
						value: 100,
						name: '女'
					},
				]
			},
		
		],
	},
	car:{
		line_data:{
			product:['1','2','3','4','5','6','7'],
			name:'景区卡口车辆出入统计',
			data:[
				{
					name:'驶入',
					data:[120, 32, 101, 134, 90, 230, 110]
				},
				{
					name:'驶出',
					data:[140, 312, 213, 114, 90, 20, 210]
				},
			]
		},
		data:{
			name:'轿车驻留时间分析',
			data:[
				{
					value: 435,
					name: '1日'
				},
				{
					value: 120,
					name: '2日'
				},
				{
					value: 110,
					name: '3日及以上'
				},
			]
		},
		bar_data:{
			product:['浙江','北京','上海','大连','长春','浙江','北京','上海','大连','长春'],
			name:'车辆来源城市top10',
			data:[
				{
					name:'好评',
					data:getRandomData(10)
				},
			]
		},
		bar_data1:{
			product:['浙江','北京','上海','大连','长春'],
			name:'车辆来源省份top10',
			data:[
				{
					name:'轿车',
					data:getRandomData(5)
				},
				{
					name:'大巴车',
					data:getRandomData(5)
				},
				{
					name:'其他',
					data:getRandomData(5)
				},
			]
		},
		line_data1:{
			product:getRandomData(30,1),
			name:'入县车辆与入景区车辆对比',
			data:[
				{
					name:'30日总入县数',
					data:getRandomData(30)
				},
				{
					name:'30日总入景区数',
					data:getRandomData(30)
				},
			]
		},
	},
	wx:{
		bar_data1:{
			product:['浙江','北京','上海','大连','长春'],
			name:'车辆来源省份top10',
			data:[
				{
					name:'粉丝数',
					data:[1234,1111,1000,500,300]
				},
			]
		},
		bar_data:{
			product:['1-18','18-20','18-20','18-20','18-20','18-20','18-20','18-20','18-20'],
			name:'粉丝性别及年龄',
			data:[
				{
					name:'男',
					data:[1234,1111,1000,500,300,200,150,130,100]
				},
				{
					name:'女',
					data:[124,111,100,430,320,334,13,45,12]
				}
			]
		},
		line_data:{
			product:getRandomData(30,1),
			name:'图文消息趋势',
			data:[
				{
					name:'阅读数',
					data:getRandomData(30)
				},
				{
					name:'分享数',
					data:getRandomData(30)
				},
				{
					name:'转发数',
					data:getRandomData(30)
				},
			]
		},
		
	},
	hot_search:{
		table:{
			columns1: [
                    {
                        title: '关键字',
                        key: 'name'
                    },
                    {
                        title: '总搜索',
                        key: 'all'
                    },
                    {
                        title: '移动搜索',
                        key: 'phone'
                    }
                ],
                data2: [
                    {
                        name: '百度',
                        all: 1821,
                        phone: 283,
                    },
                     {
                        name: '百度',
                        all: 1821,
                        phone: 283,
                    },
                     {
                        name: '百度',
                        all: 1821,
                        phone: 283,
                    },
                     {
                        name: '百度',
                        all: 1821,
                        phone: 283,
                    },
                    
                ]
		},
		line_data:{
			product:['1','2','3','4','5','6','7','8','9','10'],
			name:'近30日变化趋势',
			data:[
				{
					name:'总量',
					data:[120, 132, 101, 134, 90, 230, 210, 90, 230, 210]
				},
				{
					name:'pc端',
					data:[12, 122, 10, 14, 90, 230, 210, 90, 230, 210]
				},
				{
					name:'移动端',
					data:[132, 321, 104, 141, 940, 30, 20, 90, 20, 210]
				},
			]
		},
	}
	
	
}