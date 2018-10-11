var global =  {
	timespanToString:function (timespan, format) {
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
},

timeGMTToString:function (str, format) {
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
	return global.timespanToString(date.getTime(), format);
},
getRandomData:function (length,isDate) {
	var arr = [];
	if(!isDate) {
		for(var i = 0;i< length;i++) {
			arr.push(parseInt(Math.random()*10000));
		}
	} else {
		var Nowdate = new Date();
		for(var i = 0;i< length;i++) {
			arr.push(global.timespanToString( Nowdate.getTime() - 3600 * 1000 * 24 * i,'MM/dd'));
		}
	}
	return arr;
},
randomFunction:function  (min , max){
	return parseInt(Math.random() * (max - min)) + min;
}	
	
	
}
 export default  global