<template>
	<div class="bg clearfix">
		<Top title="磐安全域旅游大数据中心"></Top>
		<div class="top clearfix">
			<div class="l line-1">
				<div>
					<Title title="今日入住"></Title>
					<Circle_two :data="sex_data" position_formatter="{b}: {d}%"></Circle_two>
					
				</div>
				<div>
					<Title title="磐安好评率酒店Top5"></Title>
					<Bar_two :data="good_hotel" :isAcross='true' stack="总量"></Bar_two>
				</div>
			</div>
			<!--<div class="line-right r">
				<Title title="游客来源增幅TOP10(市)"></Title>
				<Bar_two :data="source_visitor_data"></Bar_two>
				<Line_one :data="visitor_data" :show_legend="false" class="sub-line" :isAreaShow="true"></Line_one>
			</div>-->
			<!--<div class="line-2">
				<Title title="游客来访地图"></Title>
				<Passenger_map></Passenger_map>
			</div>-->
		</div>
		<div class="clearfix  sub-line" style="width: 100%;">
			<div class="l bottom-line-1">
				<Title title="接待人数Top5酒店"></Title>
				<Bar_two :data="hotel_people_num" :isAcross='true' stack="总量"></Bar_two>
			</div>
			<div class="bottom-line-4 clearfix">
				<Title title="近30日入住情况"></Title>
				<div class="bottom-line-6 r clearfix flex">
					<div class="bottom-line-7 l flex-1" v-for="(d,index) in hotel_in_total">
	            			<Circle_one :data="d" :isShowLegend="index==hotel_in_total.length-1"></Circle_one>
	            		</div>
				</div>
				<div class="bottom-line-5 ">
					<Line_one :data="hotel_in"  :isSmooth="true" class="sub-line" :showTitle="false"></Line_one>
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
	import Circle_one from "@/base/circle/circle_one.vue";
	
	export default {
		data() {
			return {
				sex_data: null,
				good_hotel:null,
				hotel_people_num:null,
				hotel_in:null,
				hotel_in_total:null
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
			Circle_one
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