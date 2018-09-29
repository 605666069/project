<template>
	<div class="clearfix wrap">
		<div class="nav l clearfix">
			<div @click="changeIndex(0)" class="nav-line">
				<div class="nav-img" v-bind:class="{'nav-click':index==0}">
					<img src="../assets/p1.png"/>
				</div>
				<div class="nav-text">
					吃
				</div>
			</div>
			<div @click="changeIndex(1)" class="nav-line">
				<div class="nav-img " v-bind:class="{'nav-click':index==1}">
					<img src="../assets/p6.png"/>
				</div>
				<div class="nav-text">
					住
				</div>
			</div>
			<div @click="changeIndex(2)" class="nav-line">
				<div class="nav-img" v-bind:class="{'nav-click':index==2}">
					<img src="../assets/p3.png"/>
				</div>
				<div class="nav-text">
					行
				</div>
			</div>
			<div @click="changeIndex(3)" class="nav-line">
				<div class="nav-img" v-bind:class="{'nav-click':index==3}">
					<img src="../assets/p4.png"/>
				</div>
				<div class="nav-text">
					游
				</div>
			</div>
			<div @click="changeIndex(4)" class="nav-line">
				<div class="nav-img" v-bind:class="{'nav-click':index==4}">
					<img src="../assets/p5.png"/>
				</div>
				<div class="nav-text">
					娱
				</div>
			</div>
			<div @click="changeIndex(5)" class="nav-line">
				<div class="nav-img" v-bind:class="{'nav-click':index==5}">
					<img src="../assets/p2.png"/>
				</div>
				<div class="nav-text">
					购
				</div>
			</div>
		</div>
		<div class="content ">
			<Carousel v-model="index" dots="none" arrow="never">
		        <CarouselItem>
		            <div class="demo-carousel flex">
		            		<div class="flex-1" v-for="(d,index) in data">
		            			<Circle_one :data="d" :isShowLegend="index==data.length-1"></Circle_one>
		            		</div>
		            </div>
		        </CarouselItem>
		        <CarouselItem>
		            <div class="demo-carousel">
		            	 <div class="demo-carousel flex">
		            		<div class="flex-1" v-for="(d,index) in data">
		            			<Circle_one :data="d" :isShowLegend="index==data.length-1"></Circle_one>
		            		</div>
		           		</div>
		            </div>
		        </CarouselItem>
		        <CarouselItem>
		            <div class="demo-carousel">
		            	 <div class="demo-carousel flex">
		            		<div class="flex-1" v-for="(d,index) in data">
		            			<Circle_one :data="d" :isShowLegend="index==data.length-1"></Circle_one>
		            		</div>
		            	</div>
		            </div>
		        </CarouselItem>
		        <CarouselItem>
		            <div class="demo-carousel">
		            	 <div class="demo-carousel flex">
		            		<div class="flex-1" v-for="(d,index) in data">
		            			<Circle_one :data="d" :isShowLegend="index==data.length-1"></Circle_one>
		            		</div>
		           		 </div>
		            </div>
		        </CarouselItem>
		         <CarouselItem>
		            <div class="demo-carousel">
		            	 <div class="demo-carousel flex">
		            		<div class="flex-1" v-for="(d,index) in data">
		            			<Circle_one :data="d" :isShowLegend="index==data.length-1"></Circle_one>
		            		</div>
		            	</div>
		            </div>
		        </CarouselItem>
		         <CarouselItem>
		            <div class="demo-carousel">
		            	 <div class="demo-carousel flex">
		            		<div class="flex-1" v-for="(d,index) in data">
		            			<Circle_one :data="d" :isShowLegend="index==data.length-1"></Circle_one>
		            		</div>
		            	</div>
		            </div>
		        </CarouselItem>
		    </Carousel>
		</div>
	</div>
</template>

<script>
	import Circle_one from "@/base/circle/circle_one.vue";
	
	export default {
        data() {
	        	return {
	        		index:0,
	        		data:[]
	        	}
        },
        computed:{
        },
        components: {
        		Circle_one
        },
        methods:{
	        	changeIndex(index) {
	        		this.index = index
	        	},
	        	getData() {
					this.data = this.echarts_data.home_data.traffic;
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
	.nav {
		width: 250px;
	}
	.nav .nav-line {
		margin: 2px;
		display: inline-block;
		width: 71px;
		text-align: center;
		cursor: pointer;
	}
	.nav .nav-line img{
		width: 100%;
	}
	.content {
		margin-left: 250px;
		width: 800px;
	}
	
	.demo-carousel {
		position: relative;
		width: 100%;
	}
	.wrap {
	}
	.nav-text {
		font-size: 18px;
		color: #fff;
	}
	.nav-click {
		
	}
	.nav-click {
		background-color: rgba(255,255,255,.1);
		border: 1px solid  rgba(255,255,255,.6);
		border-radius: 5px;		
	}
</style>