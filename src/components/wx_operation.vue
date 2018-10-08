<template>
	<div class="bg clearfix">
		<Top title="磐安全域旅游大数据中心"></Top>
		<div class="top clearfix">
			<div class="r line-1 text-top">
				<div class="clearfix">
					<Title title="微信粉丝指标"></Title>
					<div class="sub_title">
						总关注：3104人
					</div>
					<div class="sub_title">
						<div class="bottom-line l">
							<span class="">
								今日新增<br />
								2300人
							</span>
						</div>
						<div class="bottom-line l">
							<span class="">
								本周新增<br />
								2300人
							</span>
						</div>
					</div>
				</div>
				<div>
					<Title title="关注量TOP5"></Title>
					<Bar_two :data="wx_attention" :isAcross='true'></Bar_two>
				</div>
				
			</div>
		</div>
		<div class="clearfix" style="width: 100%;">
			<div class="line line-1 r">
				<Title title="粉丝性别及年龄"></Title>
				<Bar_two :data="wx_age"  stack="总量"></Bar_two>
				
			</div>
			<div class="line-left">
				<Title title="图文消息趋势"></Title>
				<Line_one :data="wx_use_type"  :isSmooth="true" :showTitle="false" class="sub-line"></Line_one>
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
				wx_attention: null,
				wx_age:null,
				wx_use_type:null,
				comfort_data:null,
				sum_visitor_data:null
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
</style>