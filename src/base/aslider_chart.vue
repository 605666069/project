<template>
	<div class="clearfix wrap">
		<div class="nav l clearfix v-middle">
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
			<swiper :options="swiperOption" ref="mySwiper">
		      	<swiper-slide >
		      		<!--<Dslide></Dslide>-->
					<Aslide></Aslide>
		     	 </swiper-slide>
		     	 <swiper-slide >
		      		<Bslide></Bslide>
		     	 </swiper-slide>
		     	 <swiper-slide >
		      		<Cslide></Cslide>
		     	 </swiper-slide>
		     	 <swiper-slide >
		      		<Cslide></Cslide>
		     	 	
		      		<!--<Dslide></Dslide>-->
		     	 </swiper-slide>
		     	 <swiper-slide >
		      		<Cslide></Cslide>
		     	 	
		      		<!--<Eslide></Eslide>-->
		     	 </swiper-slide>
		     	 <swiper-slide >
		      		<Cslide></Cslide>
		     	 	
		      		<!--<Fslide></Fslide>-->
		     	 </swiper-slide>
		    </swiper>
		</div>
	
	</div>
</template>

<script>
	import Aslide from "@/base/slide/slide1/aslide.vue";
	import Bslide from "@/base/slide/slide1/bslide.vue";
	import Cslide from "@/base/slide/slide1/cslide.vue";
	import Dslide from "@/base/slide/slide1/dslide.vue";
	import Eslide from "@/base/slide/slide1/eslide.vue";
	import Fslide from "@/base/slide/slide1/fslide.vue";
	
	
	
	
	
	
	export default {
        data() {
	        	return {
	        		index:0,
	        		data:[],
	        		swiperOption:{
				    disableOnInteraction:false,
				    observer:true,//修改swiper自己或子元素时，自动初始化swiper
		       		observeParents:true//修改swiper的父元素时，自动初始化swiper
				
	        		}
	        	}
        },
        computed: {
	      	swiper() {
	        		return this.$refs.mySwiper.swiper
	      	}
	    },
        components: {
        		Aslide,Bslide,Cslide,Dslide,Eslide,Fslide
        },
        methods:{
	        	changeIndex(index) {
	        		this.index = index;
	        		this.swiper.slideTo(index)
	        	},
	        	
        },
        created() {
        		this.$nextTick(() => {
//      			this.changeIndex(0)
			})
        },
       
       
    }
	
</script>

<style scoped>
	.nav {
		width: 270px;
		padding-top: 40px;
	}
	.nav .nav-line {
		margin:20px 10px;
		display: inline-block;
		text-align: center;
		cursor: pointer;
	}
	.nav .nav-line img{
		margin-top: 12.5px;
		width: 60px;
		display: inline-block;
	}
	.nav .nav-line .nav-img {
		height: 85px;
		width: 85px;
	}
	.content {
		margin-left: 270px;
	}
	
	.demo-carousel {
		position: relative;
		width: 100%;
	}
	.wrap {
		height: 100%;
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