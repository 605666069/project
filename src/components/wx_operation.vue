<template>
	<div class="bg clearfix">
		<Top title="磐安全域旅游大数据中心"></Top>
		<div class="content clearfix">
			<Row>
		        <Col span="18" class="pd">
		        	<Title title="微信粉丝分布图"></Title>
	        		<div class="b" style="position: relative;height: 550px;">
						<Apassenger_map></Apassenger_map>
						<Btable class="wx-table" :data="province" ></Btable>
	        		</div>
		        </Col>
		        <Col span="6" class="pd">
			        	<div class="chunk center" style="position: relative;">
			        		<Title title="微信粉丝指标"></Title>
						<Anum class="v-center"></Anum>
			        	</div>
			        	<div class="chunk">
			        		<Title title="关注量Top5"></Title>
			        		<div class="b">
			        			<Abar_two :data="province_chart_data" v-if="province_chart_data"></Abar_two>
						<!--<Bar_two :data="wx_attention" :isAcross='true' :height="250" :show_legend="false" :top="10" :barMaxWidth="20"></Bar_two>-->
			        		</div>
			        	</div>
		        </Col>
		    </Row>
		    <Row>
		        <Col span="18" class="pd">
		        		<Title title="近30日图文消息趋势"></Title>
		        		<div class="b">
		        			<Line_one :data="wx_use_type"  :isSmooth="true" :showTitle="false" class="sub-line" :colorList="colorList"></Line_one>
		        			
		        		</div>
		        </Col>
		        <Col span="6" class="pd">
			        	<Title title="粉丝性别及地域"></Title>
			        	<div class="b">
			        		<Gchart></Gchart>
			        	</div>
					<!--<Bar_two :data="wx_age"  stack="总量"></Bar_two>-->
		        </Col>
		    </Row>
		</div>

	</div>
</template>

<script>
	import Top from "@/base/top.vue";
	import Num from "@/base/num.vue";
	import Apassenger_map from "@/base/center/apassenger_map.vue";
	import Circle_two from "@/base/circle/circle_two.vue";
	import Bar_two from "@/base/bar/bar_two.vue";
	import Bar_three from "@/base/bar/bar_three.vue";
	import Line_one from "@/base/line/line_one.vue";
	import Anum from "@/base/anum.vue";
	import Gchart from "@/base/gchart.vue";
	import Btable from "@/base/Btable.vue";
	import Abar_two from "@/base/bar/abar_two.vue";
	
	
	
	
	export default {
		data() {
			return {
				wx_attention: null,
				wx_age:null,
				wx_use_type:null,
				comfort_data:null,
				province:null,
				province_chart_data:null,
				sum_visitor_data:null,
				colorList:['#ccb14a','#97df5d','#55afe6']
			}
		},
		computed: {},
		components: {
			Top,
			Num,
			Circle_two,
			Bar_two,
			Line_one,
			Bar_three,
			Anum,
			Gchart,Apassenger_map,Btable,Abar_two
		},
		methods: {
			getData() {
				this.wx_attention = this.echarts_data.wx.bar_data1;
				this.wx_age = this.echarts_data.wx.bar_data;
				this.$ajax.post('/admin/api/ShengFenSource').then(data=>{
        				this.province = data.data;
        				
        			})
				this.$ajax.post('/admin/api/TopCity').then(data=>{
        				let product = [];
	    				let dataList = [];
	    				data.data.map((item,index)=>{
	    					if(index<5) {
	    						product.push(item.name);
	    						dataList.push(item.value.num);
	    					}
	    				})
    					this.province_chart_data =  {
						product:product,
						name:'关注量Top5',
						data:dataList
	    				}
	    		
        			});
        			this.$ajax.get('/admin/api/WeixinVisit?daynum=30').then(data=>{
        				let product = [];
	    				let data_obj = {};
	    			
	    				data.data.map((item,index)=>{
	    					product.push(this.global.timespanToString(item.date,'MM/dd'));
	    					for(var key in item) {
	    						if(!data_obj[key])  data_obj[key] = {
								data:[],
								name:key
							};
							for(let obj in data_obj) {
								if(key == obj) {
									data_obj[obj].data.push(item[key]);
								}
							}
	    					}
	    					
	    				});
	    				data_obj.visitNum.name= "总阅读数";
	    				data_obj.friendsVisitNum.name= "朋友圈阅读数";
	    				data_obj.shareNum.name= "分享转发";
	    				
	    				let seriver = [
	    					data_obj.visitNum,
	    					data_obj.friendsVisitNum,
	    					data_obj.shareNum
	    				]

	    				this.wx_use_type =  {
						product:product,
						name:'近30日图文消息趋势',
						data:seriver
	    				}
	    		
        			})
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
	.line-1 {
		width: 400px;
	}
	
	.sub-line {
		margin-top: 20px;
	}
	
	.line-2 {
		margin-left: 400px;
		margin-right: 400px;
	}
	
	.line-left {
		margin-right: 400px;
		position: relative;
	}
	
	.line-right {
		width: 400px;
	}
	.bottom-line-1 {
		width: 20%;
	}
	.bottom-line-2 {
		width: 30%;
	}
	.bottom-line {
		width: 50%;
	}
	.text-top{
		text-align: center;
	}
	.wx-table {
		position: absolute;
		left: 0;
		top: 200px;
		width: 300px;
	}
	
</style>