<template>
	<div class="bg clearfix">
		<Top title="磐安全域旅游大数据中心"></Top>
		<div class="top clearfix">
			<div class="l line-1">
				<div class="t-top">
					<Title title="入磐总车辆数"></Title>
					<div class="sub_title">
						今日入县车辆
					</div>
					<div>
						<Num data="9123796"></Num>
					</div>
					<div class="sub_title">
						当年入县车辆
					</div>
					<div>
						<Num data="2094"></Num>
					</div>
					<Title title="7日入县车辆统计"></Title>
					<Line_one :data="car_type_data" class="sub-line" :showTitle="false" :colorList="colorList"></Line_one>
				</div>
			
				<Title title="景区车辆出入统计"></Title>
				<Line_one :data="car_total_num" :isSmooth="true" class="sub-line" :showTitle="false" :colorList="colorList" ></Line_one>
			</div>
			<div class="line-right r">
				<div class="t-top">
					<div>
						<Title title="轿车驻留时间分析"></Title>
						<Circle_two :data="car_stop_time" position_formatter="{b}" position="inner"></Circle_two>
					</div>
					<div>
						<Title title="车辆来源城市top10"></Title>
						<Bar_two :data="car_from_min_data"  :show_legend="false"></Bar_two>
					</div>
				</div>
				<div>
					<Title title="车辆来源省份top10"></Title>
					<Bar_two :data="car_from_data"  :show_legend="false"></Bar_two>
				</div>
				
			</div>
			<div class="line-2">
				<div class="t-top">
					<Title title="全国车辆来源示意图"></Title>
					<Passenger_map></Passenger_map>
				</div>
				<div>
					<Title title="入县车辆与入景区车辆对比(30日)"></Title>
					<Line_one :data="car_compare_data"  :isSmooth="true" :showTitle="false" class="sub-line" :dataZoom="true" :colorList="colorList"></Line_one>
				</div>
			</div>
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

	export default {
		data() {
			return {
				car_type_data: null,
				car_total_num:null,
				car_stop_time:null,
				car_from_data:null,
				car_from_min_data:null,
				car_compare_data:null,
				colorList:['#8d53ea','#01c6fd'],
				
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
			Bar_three
		},
		methods: {
			getData(){
				this.car_type_data = this.echarts_data.home_data.line_data_1
				this.car_total_num = this.echarts_data.car.line_data
				this.car_stop_time = this.echarts_data.car.data
				this.car_from_min_data = this.echarts_data.car.bar_data;
        			this.car_from_min_data.data.map(item=>{
        				item.color = ['#00d4be','#01c8f4']
        			})
				this.car_from_data = this.echarts_data.car.bar_data1
				this.car_compare_data = this.echarts_data.car.line_data1
				
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
	.bottom-line {
		width: 50%;
	}
	.t-top {
		height: 580px;
	}
</style>