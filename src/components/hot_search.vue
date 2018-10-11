<template>
	<div class="bg clearfix">
		<Top title="磐安全域旅游大数据中心"></Top>
		<div class="content">
			<Row>
		        <Col span="6" class="pd">
		        		<div class="chunk">
						<Title title="百度指数"></Title>
						<Hchart></Hchart>
					</div>
					<div class="chunk">
						<Title title="关键字"></Title>
						<Atable style="margin-top: 10px;"></Atable>
					</div>
		        </Col>
		        <Col span="18" class="pd">
		        		<Title title="旅游要素分析"></Title>
					<Slider_chart></Slider_chart>
		        </Col>
		    </Row>
		    <Row>
		        <Col span="24" class="pd">
		        		<Title title="近30日搜索趋势"></Title>
		        		<iChart></iChart>
				<!--<Line_one :data="hot_change"  :isSmooth="true" class="sub-line" :showTitle="false"></Line_one>-->
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
	import Slider_chart from "@/base/slider_chart.vue";
	import aSlider_chart from "@/base/aslider_chart.vue";
	import Hchart from "@/base/hchart.vue";
	import Atable from "@/base/atable.vue";
	import iChart from "@/base/ichart.vue";
	
	
	
	
	
	export default {
		data() {
			return {
				total_data: {},
				hot_change:null
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
			Slider_chart,
			Hchart,
			Atable,iChart,aSlider_chart
		},
		methods: {
			getData() {
				this.total_data = this.echarts_data.hot_search.table;
				this.hot_change = this.echarts_data.hot_search.line_data;
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