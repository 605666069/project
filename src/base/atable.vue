<template>
	<div class="wrap">
		<div class="d-table">
			<div class="d-table-title">
				<Row>
			        <Col span="3">
			        		排序
			        </Col>
			         <Col span="7" >
			        		关键字
			        </Col>
			         <Col span="7" >
			        		总搜索
			        </Col>
			         <Col span="7">
			        		移动搜索
			        </Col>
			    </Row>
			</div>
			<div class="slide-wrap">
				<swiper :options="swiperOption">
			      	<swiper-slide v-for="(d,index) in data" :key="index">
				      	<Row class="slide-item">
					        <Col span="3">
					        		{{index}}
					        </Col>
					         <Col span="7" >
					        		{{d.name}}{{index}}
					        </Col>
					         <Col span="7" >
					        		{{d.all}}
					        </Col>
					         <Col span="7">
					        		{{d.phone}}
					        </Col>
					    </Row>
			      </swiper-slide>
			
			    </swiper>
			        
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				swiperOption: {
				    autoplay: true,
				    speed: 500,
				    disableOnInteraction:false,
				    slidesPerView:7,
				    height:210,
				    delay:500,
				    direction:'vertical',
				    observer:true,//修改swiper自己或子元素时，自动初始化swiper
		       		observeParents:true//修改swiper的父元素时，自动初始化swiper
				},
				data:[
					{name:'百度',all:this.global.getRandomData(1)[0],phone:this.global.getRandomData(1)[0]},
					{name:'百度',all:this.global.getRandomData(1)[0],phone:this.global.getRandomData(1)[0]},
					{name:'百度',all:this.global.getRandomData(1)[0],phone:this.global.getRandomData(1)[0]},
					{name:'百度',all:this.global.getRandomData(1)[0],phone:this.global.getRandomData(1)[0]},
					{name:'百度',all:this.global.getRandomData(1)[0],phone:this.global.getRandomData(1)[0]},
					{name:'百度',all:this.global.getRandomData(1)[0],phone:this.global.getRandomData(1)[0]},
					{name:'百度',all:this.global.getRandomData(1)[0],phone:this.global.getRandomData(1)[0]},
					{name:'百度',all:this.global.getRandomData(1)[0],phone:this.global.getRandomData(1)[0]},
					{name:'百度',all:this.global.getRandomData(1)[0],phone:this.global.getRandomData(1)[0]},
					{name:'百度',all:this.global.getRandomData(1)[0],phone:this.global.getRandomData(1)[0]},
				]
			}
		},
		props: {

		},
		computed: {},
		components: {},
		methods: {},
		created() {
		},

	}
		
</script>

<style scoped>
	.wrap {
		height: 100%;
		text-align: center;
	}
	.slide-wrap {
		height: 220px;
		overflow: hidden;
		
	}
	.d-table-title {
		background-color: #424d5f;
		font-size: 13px;
	    font-weight: 700;
	    color: #fff;
	}
	.slide-item {
		height: 30px;
		line-height: 30px;
		font-size: 12px;
    		color: #fff;
	}
</style>