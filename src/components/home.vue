<template>
	<div class="bg clearfix">
		<Card class="l line-1">
			<Bar_one></Bar_one>
		</Card>
		<Card class="l line-2">
			<Slider_chart></Slider_chart>
		</Card>
		<!--<Top></Top>-->
		
	</div>
</template>

<script>
	import Top from "@/base/top.vue";
	import Bar_one from "@/base/bar/bar_one.vue";
	import Slider_chart from "@/base/slider_chart.vue";
	
	export default {
        data() {
        	return {
        	}
        },
        computed:{
        },
        components: {
        	Top,Bar_one,Slider_chart
        },
        methods:{
        },
        created() {
        },
       
       
    }
</script>

<style scoped>
	.line-1 {
		width: 20%;
	}
	.line-2 {
		width: 100%;
	}
	
</style>