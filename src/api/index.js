import axios from "axios";
import {Message} from "iview"
import router from '../router'
import store from '@/store'

axios.interceptors.request.use(function (config) {
	return config;
}, function (error) {
	return Promise.reject(error);
  });
axios.interceptors.response.use(
	res=>{
//	console.groupEnd && console.groupEnd();
	const data = res.data||{};
	if(data.code != 10000) {
		Message.error(data.msg);
		return Promise.reject(data.msg);
	}
	
	return data.data; //统一输入
});

