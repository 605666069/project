<template>
	<div class="bg clearfix">
		<Top title="磐安全域旅游大数据中心"></Top>
		<div class="content">
			<Row>
		        <Col span="6" class="pd">
		        		<div class="chunk">
						<Title title="入磐总客流数"></Title>
						<div class="sub_title m-t">
							今日入磐
						</div>
						<div>
							<Num data="9123796"></Num>
						</div>
						<div class="sub_title m-t">
							2018累积入磐
						</div>
						<div>
							<Num data="2094"></Num>
						</div>
					</div>
					<div class="chunk">
						<Title title="昨日游客驻留情况"></Title>
						<div class="b">
							<Bchart></Bchart>
						<!--<Circle_two :data="reside_data" position="inner" :colorList="colorList"></Circle_two>-->
						</div>
					</div>
		        </Col>
		        <Col span="12" class="pd">
		        		<Title title="游客来访地图"></Title>
		        		<Jchart></Jchart>
					<!--<Test></Test>-->
		        </Col>
		        <Col span="6" class="pd">
	        		<div class="chunk">
						<Title title="游客来源增幅TOP10(市)"></Title>
						<div class="b">
							<Bar_two :data="source_visitor_data" :colorList="colorList2"></Bar_two>
						</div>
					</div>
					<div class="chunk">
						<Title title="7日入磐客流趋势"></Title>
						<div class="b">
							<Line_one :data="visitor_data" :show_legend="false" :colorList="colorList1" :showTitle="false" :area="true" :isAreaShow="true"></Line_one>
						</div>
					</div>
		        </Col>
		    </Row>
		    <Row>
		        <Col span="12" class="pd">
	        		<Title title="昨日与历史客流对比"></Title>
	        		<div class="clearfix b">
						<div style="width: 70%;" class="l">
							<Line_one :data="history_visitor_data" :isSmooth="true" :showTitle="false"></Line_one>
						</div>
						<div class="l" style="width: 29%;">
							<Cchart :data="reside_data" position="inner" :colorList="colorList" :show_legend="false" position_formatter="{b}:{c}"></Cchart>
							<!--<Circle_two :data="reside_data" position="inner" :colorList="colorList" :show_legend="false"></Circle_two>-->
						</div>
	        		</div>
		        </Col>
		        <Col span="12" class="pd">
	        		<Title title="2018年客源累计Top10"></Title>
	        		<div class="b">
	        			<Bar_four :data="sum_visitor_data" :barMaxWidth='60' :show_legend="false" style="margin-top: 10px;"></Bar_four>
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
	import Bar_four from "@/base/bar/Bar_four.vue";
	import Bar_three from "@/base/bar/bar_three.vue";
	import Line_one from "@/base/line/line_one.vue";
	import Test from "@/components/test.vue";
	import Bchart from "@/base/Bchart.vue";
	import Cchart from "@/base/cchart.vue";
	import Jchart from "@/base/jchart.vue";
	
	
	
	

	export default {
		data() {
			return {
				reside_data: null,
				visitor_data: null,
				history_visitor_data: null,
				source_visitor_data: null,
				sum_visitor_data: null,
				colorList: ['#fe996a', '#944fe8', '#01c8f3'],
				colorList1: ['rgba(50,227,235,1)'],
				colorList2:['#67d0e4','#f9e659']
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
			Bar_four,
			Test,
			Bchart,
			Cchart,Jchart
		},
		methods: {
			getResideData() {
				this.reside_data = this.echarts_data.passenger_flow.data1;
			},
			getVisitorData() {
				this.visitor_data = this.echarts_data.passenger_flow.line_data;
			},
			getHistoryVisitorData() {
				this.history_visitor_data = this.echarts_data.passenger_flow.line_data1;
				this.history_visitor_data.data.map((item, index) => {
					item.color = [this.colorList[index], this.colorList[index]]
				})
			},
			getSourceVisitorData() {
				this.source_visitor_data = this.echarts_data.passenger_flow.bar_data;
			},
			getSumVisitorData() {
				this.sum_visitor_data = this.echarts_data.passenger_flow.bar_data1;
			},

		},
		created() {
			this.$nextTick(() => {
				this.getResideData();
				this.getVisitorData()
				this.getHistoryVisitorData();
				this.getSourceVisitorData();
				this.getSumVisitorData()
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
</style>