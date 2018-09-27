<template>
	<div class="bg clearfix">
		<div class="l line-left">
			<div class="line-1 sub-line l">
				<Title title="景区实时客流数" ></Title>
				<div class="sub_title">
					排名列表
				</div>
				<Bar_one></Bar_one>
			</div>
			<div class="line-4 sub-line">
				<Title title="实时客流分布地图" ></Title>
				
			</div>
			<div class="l line-2">
				<Title title="旅游要素" :vertical="true" class="l bottom-title"></Title>
				<Slider_chart></Slider_chart>
			</div>
		</div>
		
		<div class="r line-right">
			<div class="sub-line">
				<Title title="入磐总客流数" ></Title>
				<div class="sub_title">
					总客流数
				</div>
				<div>
					<Num data="9123796"></Num>
				</div>
				<div class="sub_title">
					今日客流数
				</div>
				<div>
					<Num data="2094"></Num>
				</div>
			</div>
			
			<div>
				<Line_one :data="visit_data"  class="sub-line"></Line_one>
				<Line_one :data="car_data"  class="sub-line"></Line_one>
			</div>
		</div>
		
		<!--<Top></Top>-->
		
	</div>
</template>

<script>
	import Top from "@/base/top.vue";
	import Bar_one from "@/base/bar/bar_one.vue";
	import Slider_chart from "@/base/slider_chart.vue";
	import Line_one from "@/base/line/line_one.vue";
	import Num from "@/base/num.vue";
	
	
	
	
	export default {
        data() {
	        	return {
	        		visit_data:null,
	        		car_data:null
	        	}
        },
        computed:{
        },
        components: {
        	Top,Bar_one,Slider_chart,Line_one,Num
        },
        methods:{
        		getVisit() {
        			this.visit_data = 	this.data = this.echarts_data.home_data.line_data;
        		},
        		getCar() {
        			this.car_data = 	this.data = this.echarts_data.home_data.line_data_1;
        		}
        },
        created() {
        		this.$nextTick(() => {
				this.getVisit();
				this.getCar();
			})
        		
        },
       
       
    }
</script>

<style scoped>
	.line-1 {
		width: 400px;
	}
	.line-2 {
		position: relative;
		padding-left: 60px;
	}
	.bottom-title {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
	}
	.line-right {
		width: 20%;
	}
	.line-left {
		width: 80%;
		position: relative;
	}
	.sub-line {
		margin-top: 20px;
	}
	.line-4 {
		margin-left: 400px;
	}
</style>