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
			<swiper :options="swiperOption" ref="mySwiper"  class="swiper-no-swiping">
		      	<swiper-slide >
					<Aslide></Aslide>
		     	 </swiper-slide>
		     	 <swiper-slide >
		      		<Bslide></Bslide>
		     	 </swiper-slide>
		     	 <swiper-slide >
		      		<Cslide></Cslide>
		     	 </swiper-slide>
		     	 <swiper-slide >
		      		<div class="clearfix">
		      			<div style="width: 50%;" class="l">
			      			<Dslide></Dslide>
			      		</div>
			      		<div style="width: 50%;"  class="l">
			      			<Dslide1></Dslide1>
			      		</div>
		      		</div>
		     	 </swiper-slide>
		     	 <swiper-slide >
		     	 	<div class="clearfix">
		      			<div style="width: 33%;" class="l" v-for="d in pleasure_data">
		      				<Eslide :title="d.name" :data="d.value"></Eslide>
			      		</div>
		      		</div>
		     	 </swiper-slide>
		     	 <swiper-slide >
		     	 	<div class="clearfix">
		      			<div style="width: 33%;" class="l" v-for="d in shopping_data" >
		      				<Fslide :title="d.name" :color="d.color" :data="d.value" :total="shopping_data_total"></Fslide>
			      		</div>
		      		</div>
		     	 </swiper-slide>
		    </swiper>
		</div>
	
	</div>
</template>

<script>
	import Circle_one from "@/base/circle/circle_one.vue";
	import Aslide from "@/base/slide/aslide.vue";
	import Bslide from "@/base/slide/bslide.vue";
	import Cslide from "@/base/slide/cslide.vue";
	import Dslide from "@/base/slide/dslide.vue";
	import Dslide1 from "@/base/slide/dslide1.vue";
	import Eslide from "@/base/slide/eslide.vue";
	import Fslide from "@/base/slide/fslide.vue";
	
	
	
	
	
	
	export default {
        data() {
        	return {
        		index:0,
        		data:[],
        		swiperOption:{
				    disableOnInteraction:false,
				    observer:true,//修改swiper自己或子元素时，自动初始化swiper
		       		observeParents:true,//修改swiper的父元素时，自动初始化swiper
        		},
        		pleasure_data:[],
        		shopping_data:[],
        		shopping_data_total:0,
        	}
        },
        computed: {
	      	swiper() {
	        	return this.$refs.mySwiper.swiper
	      	}
	    },
        components: {
        		Circle_one,Aslide,Bslide,Cslide,Dslide,Eslide,Fslide,Dslide1
        },
        methods:{
        	changeIndex(index) {
        		this.index = index;
        		this.swiper.slideTo(index)
        	},
	        	
        },
        created() {
        		this.$nextTick(() => {
        			this.$ajax.post('/admin/api/Pleasure').then(data=>{
        				this.pleasure_data = data.data;
        			})
        			this.$ajax.post('/admin/api/Shopping').then(data=>{
        				let total = 0;
        				let colorList = ['#e7c666','#ccf196','#569ef8'];
        				 data.data.map((item,index)=>{
        					total+=item.value;
        					item.color = colorList[index];
        				})
        				this.shopping_data  =  data.data;
        				this.shopping_data_total = total
        			})
        		
//      			this.changeIndex(0)
			})
        },
        mounted() {
        	var _this = this; 
        	this.$nextTick(() => {
    			this.timer = setInterval(function(){   
	        		var index = _this.index + 1 > 5? 0 : _this.index + 1 ;
	        		_this.changeIndex(index)
	        	},10000);
			})
        },
        beforeDestroy:function(){
	        if(this.timer){
	            clearInterval(this.timer);  
	        }
     	},
       
       
    }
	
</script>

<style scoped>
	.nav {
		width: 370px;
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
		margin-left: 370px;
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