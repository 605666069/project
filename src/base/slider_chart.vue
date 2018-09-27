<template>
	<div class="clearfix">
		<div class="nav l">
			<span @click="changeIndex(0)">吃</span>
			<span @click="changeIndex(1)">住</span>
			<span @click="changeIndex(2)">行</span>
			<span @click="changeIndex(3)">游</span>
			<span @click="changeIndex(4)">娱</span>
			<span @click="changeIndex(5)">购</span>
		</div>
		<div class="content ">
			<Carousel v-model="index" dots="none">
		        <CarouselItem>
		            <div class="demo-carousel">11111111111111111</div>
		        </CarouselItem>
		        <CarouselItem>
		            <div class="demo-carousel">2222222222222222</div>
		        </CarouselItem>
		        <CarouselItem>
		            <div class="demo-carousel">33333333333333</div>
		        </CarouselItem>
		        <CarouselItem>
		            <div class="demo-carousel">4444444444444</div>
		        </CarouselItem>
		         <CarouselItem>
		            <div class="demo-carousel">5555555555555555</div>
		        </CarouselItem>
		         <CarouselItem>
		            <div class="demo-carousel">6666666666666666</div>
		        </CarouselItem>
		    </Carousel>
		</div>
	</div>
</template>

<script>
	export default {
        data() {
        	return {
        		index:0
        	}
        },
        computed:{
        },
        components: {
        },
        methods:{
        	changeIndex(index) {
        		this.index = index
        	}
        },
        created() {
        },
       
       
    }
	
</script>

<style scoped>
	.nav {
		width: 250px;
	}
	.nav>span {
		margin: 2px;
		display: inline-block;
		width: 71px;
		height: 71px;
		text-align: center;
		line-height: 71px;
		border: 1px solid #CCCCCC;
		cursor: pointer;
	}
	.content {
		margin-left: 250px;
		height: 100px;
	}
	
	.demo-carousel {
		width: 100%;
	}
</style>