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
							<Num data="912796"></Num>
						</div>
						<div class="sub_title m-t">
							全年
						</div>
						<div>
							<Num data="2094"></Num>
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
					<Home_center></Home_center>
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
				this.scenic_flow_data = this.echarts_data.scenic_data.line_data;
				this.history_scenic_flow_data = this.echarts_data.scenic_data.line_data1;
				console.log(this.history_scenic_flow_data)
				this.tody_scenic_flow_data = this.echarts_data.scenic_data.bar_data;
				this.comfort_data = this.echarts_data.scenic_data.bar_data1;
				
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