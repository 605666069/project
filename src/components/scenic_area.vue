<template>
	<div class="bg clearfix">
		<Top title="磐安全域旅游大数据中心"></Top>
		<div class="top clearfix">
			<div class="l line-1">
				<Title title="景区实时客流"></Title>
				<div class="sub_title">
					今日
				</div>
				<div>
					<Num data="9123796"></Num>
				</div>
				<div class="sub_title">
					全年
				</div>
				<div>
					<Num data="2094"></Num>
				</div>
				<Line_one :data="scenic_flow_data" class="sub-line" :colorList="colorList"></Line_one>
			</div>
			<div class="line-2">
				<Title title="实时客流分布地图" ></Title>
				<Home_center></Home_center>
			</div>
		</div>
		<div class="clearfix" style="width: 100%;">
			<div class="l bottom-line">
				<Line_one :data="history_scenic_flow_data"  :isSmooth="true" class="sub-line" :dataZoom="true" :colorList="colorList1"></Line_one>
			</div>
			<div class="l bottom-line-1 sub-line">
				<Title title="今日景区客流top5"></Title>
				<Bar_two :data="tody_scenic_flow_data" :isAcross='true' :colorList="colorList"></Bar_two>
			</div>
			<div class="l bottom-line-2 sub-line">
				<Title title="景区舒适度"></Title>
				<Bar_two :data="comfort_data"  barMaxWidth="auto" :show_legend='false'></Bar_two>
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
	import Home_center from "@/base/center/home_center.vue";
	import Hill from "@/base/center/hill.vue";
	
	export default {
		data() {
			return {
				scenic_flow_data: null,
				history_scenic_flow_data:null,
				tody_scenic_flow_data:null,
				comfort_data:null,
				sum_visitor_data:null,
	        		colorList:['#fe996a','#944fe8'],
	        		colorList1:['#00d4bf','#01c7f8','#8b55ea','#fd986b','#fb2f7c'],
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
			Hill
		},
		methods: {
			getData() {
				this.scenic_flow_data = this.echarts_data.scenic_data.line_data;
				this.history_scenic_flow_data = this.echarts_data.scenic_data.line_data1;
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
		width: 20%;
	}
	.bottom-line-2 {
		width: 30%;
	}
	.bottom-line {
		width: 50%;
	}
</style>