<template>
	<div class="bg clearfix">
		<Top title="磐安全域旅游大数据中心"></Top>
		<div class="content">
			<Row>
		        <Col span="6" class="pd">
		        		<div class="chunk">
						<Title title="今日入住"></Title>
						<div class="b">
							<Circle_two :data="sex_data" position_formatter="{b}: {d}%" :colorList="colorList"></Circle_two>
						</div>
					</div>
					<div  class="chunk">
						<Title title="接待人数Top5酒店"></Title>
						<div class="b">
							<Bar_two :data="hotel_people_num" :isAcross='true' stack="总量" style="margin-top: 10px;" :colorList="colorList1"></Bar_two>
							<!--<Bar_two :data="good_hotel" :isAcross='true' stack="总量"></Bar_two>-->
						</div>
					</div>
		        </Col>
		        <Col span="12" class="pd">
		        		<Kchart></Kchart>
		        </Col>
		         <Col span="6" class="pd">
	        		<Title title="磐安好评率酒店Top3"></Title>
	        		<div class="b" style="height: 530px;">
	        			<Dchart></Dchart>
	        		</div>
		        </Col>
		    </Row>
		    	<Row>
		        <Col span="24" class="pd">
	        		<Title title="近30日入住情况"></Title>
	        		<div class="b">
	        			<Echart></Echart>
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
	import Circle_one from "@/base/circle/circle_one.vue";
	import Dchart from "@/base/dchart.vue";
	import Echart from "@/base/echart.vue";
	import Kchart from "@/base/kchart.vue";
	
	
	
	
	export default {
		data() {
			return {
				sex_data: null,
				good_hotel:null,
				hotel_people_num:null,
				hotel_in:null,
				hotel_in_total:null,
				colorList:['#3c9eff','#edc553'],
				colorList1:['rgba(19, 173, 255, 1)','rgba(245, 166, 35, 1)'],
				
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
			Circle_one,
			Dchart,
			Echart,Kchart
		},
		methods: {
			getData() {
				this.sex_data = this.echarts_data.hotel_data.data;
				this.good_hotel = this.echarts_data.hotel_data.bar_data;
				this.hotel_people_num = this.echarts_data.hotel_data.bar_data1;
				this.hotel_in = this.echarts_data.hotel_data.line_data;
				this.hotel_in_total = this.echarts_data.hotel_data.circle_data;
				
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
	.bottom-line-4 {
		margin-left: 400px;
	}
	.bottom-line-5 {
		margin-right: 600px;
	}
	.bottom-line-6 {
		width: 600px;
	}
	.bottom-line-7 {
		width: 60px;
	}
</style>