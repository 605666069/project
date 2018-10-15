<template>
	<div class="bg clearfix">
		<Top title="磐安全域旅游大数据中心"></Top>
		<div class="content clearfix">
			<Row>
		        <Col span="18" class="pd">
		        		<div class="" style="position: relative;height: 550px;">
			        		<Title title="微信粉丝分布图"></Title>
						<Apassenger_map></Apassenger_map>
						<Btable class="wx-table" ></Btable>
		        		</div>
		        </Col>
		        <Col span="6" class="pd">
			        	<div class="chunk center" style="position: relative;">
			        		<Title title="微信粉丝指标"></Title>
						<Anum class="v-center"></Anum>
			        	</div>
			        	<div class="chunk">
			        		<Title title="关注量TOP5"></Title>
			        		<div class="b">
			        			<Abar_two></Abar_two>
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
			        	<Title title="粉丝性别及年龄"></Title>
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
				this.wx_use_type = this.echarts_data.wx.line_data;
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