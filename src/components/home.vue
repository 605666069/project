<template>
	<div class="bg clearfix">
		<Top title="磐安全域旅游大数据中心"></Top>
		<div style="padding: 0 20px;">
			<div class="l line-left">
				<Title title="景区累计客流数" ></Title>
				<Bar_one></Bar_one>
			</div>
			
			<div class="r line-right">
				<div class="">
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
					<Line_one :data="visit_data"  class="sub-line" :colorList="colorList"></Line_one>
					<Title title="入县车型统计" ></Title>
					<Bar_two :data="car_data" :colorList="barColorList"></Bar_two>
					
					<!--<Line_one :data="car_data"  class="sub-line"></Line_one>-->
				</div>
			</div>
			<div class="line-center">
				<Title title="实时客流分布地图" ></Title>
				<Home_center></Home_center>
			</div>
			<div class="line-bottom-left clearfix">
				<div class="line-2">
					<Title title="旅游要素" :vertical="true" class="l bottom-title"></Title>
					<Slider_chart></Slider_chart>
				</div>
			</div>
			
		</div>
	
		
		
	</div>
	
</template>

<script>
	import Top from "@/base/top.vue";
	import Bar_one from "@/base/bar/bar_one.vue";
	import Bar_two from "@/base/bar/bar_two.vue";
	import Slider_chart from "@/base/slider_chart.vue";
	import Line_one from "@/base/line/line_one.vue";
	import Num from "@/base/num.vue";
	import Home_center from "@/base/center/home_center.vue";
	
	
	
	
	
	export default {
        data() {
	        	return {
	        		visit_data:null,
	        		car_data:null,
	        		colorList:['#2ab1a8','#faae3c'],
	        		barColorList:['#01c6fd','#8d53ea']
	        	}
        },
        computed:{
        },
        components: {
        	Top,Bar_one,Slider_chart,Line_one,Num,Home_center,Bar_two
        },
        methods:{
        		getVisit() {
        			this.visit_data  = this.echarts_data.home_data.line_data;
//      			this.visit_data.data.map(item=>{
//      				item.color = [this.color(),this.color()]
//      			})
        		},
        		getCar() {
        			this.car_data = this.echarts_data.home_data.line_data_1;
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
		width: 300px;
		padding: 0 5px;
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
		width: 400px;
	}
	.line-left {
		width: 400px;
		position: relative;
	}
	.sub-line {
		margin-top: 20px;
	}
	.line-center {
		margin-left: 400px;
		margin-right: 400px;
	}
	.line-bottom-left {
		margin-right: 400px;
	}
	.sub_title {
		padding-top: 30px;
	}
</style>