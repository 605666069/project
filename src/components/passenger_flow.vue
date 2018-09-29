<template>
	<div class="bg clearfix">
		<Top title="磐安全域旅游大数据中心"></Top>
		<div class="top clearfix">
			<div class="l line-1">
				<Title title="入磐总客流数" ></Title>
				<div class="sub_title">
					今日入磐
				</div>
				<div>
					<Num data="9123796"></Num>
				</div>
				<div class="sub_title">
					2018累积入磐
				</div>
				<div>
					<Num data="2094"></Num>
				</div>
				<Title title="昨日游客驻留情况" ></Title>
				<Circle_two :data="reside_data"></Circle_two>
			</div>
			<div class="line-right r">
				<Title title="游客来源增幅TOP10(市)" ></Title>
				<Bar_two></Bar_two>
			</div>
			<div class="line-2">
				<Title title="游客来访地图" ></Title>
				<Passenger_map></Passenger_map>
			</div>
		</div>
		<div class="l">
			
		</div>
		
	</div>
</template>

<script>
	import Top from "@/base/top.vue";
	import Num from "@/base/num.vue";
	import Passenger_map from "@/base/center/Passenger_map.vue";
	import Circle_two from "@/base/circle/circle_two.vue";
	import Bar_two from "@/base/bar/bar_two.vue";
	
	
	
	export default {
        data() {
        	return {
        		reside_data:null
        	}
        },
        computed:{
        },
        components: {
        	Top,Num,Passenger_map,Circle_two,Bar_two
        },
        methods:{
        	getResideData() {
        		this.reside_data =  this.echarts_data.passenger_flow.data1;
        	}
        	
        },
        created() {
        	this.$nextTick(() => {
				this.getResideData()
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
</style>
