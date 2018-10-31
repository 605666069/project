<template>
	<div class="bg clearfix">
		<Top title="磐安全域旅游大数据中心"></Top>
		<div class="content">
			<Row>
		        <Col span="6" class="pd">
		        		<div class="chunk">
						<Title title="景区实时客流"></Title>
						<div class="sub_title m-t">
							今日
						</div>
						<div>
							<Num :data="num.today_total"></Num>
						</div>
						<div class="sub_title m-t">
							全年
						</div>
						<div>
							<Num :data="num.totalNum2018"></Num>
						</div>
					</div>
					<div class="chunk">
		        			<Title title="景区客流趋势" ></Title>
		        			<div class="b">
		        				<Line_one :data="scenic_flow_data"  :colorList="colorList" :showTitle="false"></Line_one>
		        				
		        			</div>
					</div>
		        </Col>
		        <Col span="18" class="pd">
		        		<Title title="实时客流分布地图" ></Title>
					<Home_center :data="home_center_data" v-if="home_center_data"></Home_center>
		        </Col>
		    </Row>
		    <Row>
		        <Col span="6" class="pd">
		        		<Title title="景区客流舒适度"></Title>
		        		<div class="b">
		        			<Achart></Achart>
		        		</div>
		        </Col>
		        <Col span="6" class="pd">
	        		<Title title="今日景区客流Top5"></Title>
	        		<div class="b">
	        			<Bar_two :data="tody_scenic_flow_data" :isAcross='true' :colorList="colorList2" style="margin-top: 20px;" :legendTop="0"></Bar_two>
	        		</div>
		        </Col>
		        <Col span="12" class="pd">
		        		<Title title="各景区客流量趋势"></Title>
		        		<div class="b">
		        			<Line_one :data="history_scenic_flow_data"  :isSmooth="true"  :dataZoom="true" :colorList="colorList1" :showTitle="false"></Line_one>
		        		</div>
		        </Col>
		    </Row>
		</div>
		

	</div>
</template>

<script>
	import Top from "@/base/top.vue";
	import Num from "@/base/num.vue";
	import Passenger_map from "@/base/center/Passenger_map.vue";
	import Circle_two from "@/base/circle/circle_two.vue";
	import Bar_two from "@/base/bar/bar_two.vue";
	import Bar_three from "@/base/bar/bar_three.vue";
	import Line_one from "@/base/line/line_one.vue";
	import Home_center from "@/base/center/home_center.vue";
	import Hill from "@/base/center/hill.vue";
	import Achart from "@/base/achart.vue";
	
	export default {
		data() {
			return {
				scenic_flow_data: null,
				history_scenic_flow_data:null,
				tody_scenic_flow_data:null,
				comfort_data:null,
				sum_visitor_data:null,
	        		colorList:['#edc553','#3c9eff'],
	        		colorList1:['#67d0e4','#97df5d','#4f72f6','#d6807e','#ccb14a'],
	        		colorList2:['#67d0e4','#887bcc'],
	        		num:{},
	        		home_center_data:null
			}
		},
		computed: {},
		components: {
			Top,
			Num,
			Passenger_map,
			Circle_two,
			Bar_two,
			Line_one,
			Bar_three,
			Home_center,
			Hill,
			Achart
		},
		methods: {
			getData() {
				
				this.history_scenic_flow_data = this.echarts_data.scenic_data.line_data1;
				this.tody_scenic_flow_data = this.echarts_data.scenic_data.bar_data;
				this.comfort_data = this.echarts_data.scenic_data.bar_data1;
				//总客流数
        			this.$ajax.post('/admin/api/OperationalData').then(data=>{
        				this.num  = data.data;
        				this.$ajax.post('/admin/api/DeviceRealTimeInfo').then(data=>{
		    				this.home_center_data = data.data;
		    				let total = 0
	
		    				this.home_center_data.map(item=>{
		    					total+= item.total_visitor
		    				});
		    				this.$set(this.num,'today_total',String(total));
		    				
		    			});
        			})
        			
				//网络访问量
	    			this.$ajax.get('/admin/api/StatisticsDayInfo?day=7').then(data=>{
	    				let product = [];
	    				let dataList = [];
	    				let dataList1 = [];
	    				data.data.map(item=>{
	    					product.push(this.global.timespanToString(item.date,'MM/dd'));
	    					dataList.push(item.total)
	    					dataList1.push(item.jingquTotal)
	    				})
	    				this.scenic_flow_data =  {
						product:product,
						name:'网络访问量',
						data:[
							{
								name:'景区客流',
								data:dataList1
							},
							{
								name:'入县客流',
								data:dataList
							}
						]
					
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
	}
	.line-left {
		margin-right: 400px;
		position: relative;
	}
	
	.line-right {
		width: 400px;
	}
	.bottom-line-1 {
		width: 25%;
	}
	.bottom-line-2 {
		width: 25%;
	}
	.bottom-line {
		width: 50%;
	}
</style>