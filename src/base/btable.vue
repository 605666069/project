<template>
	<div class="wrap">
		<div class="d-table">
			<div class="d-table-title">
				<Row>
			        <Col span="4">
			        		序号
			        </Col>
			         <Col span="10" >
			        		省份
			        </Col>
			         <Col span="10" >
			        		关注人数
			        </Col>
			    </Row>
			</div>
			<div class="slide-wrap">
				<swiper :options="swiperOption">
			      	<swiper-slide v-for="(d,index) in data" :key="d.name">
				      	<Row class="slide-item">
					        <Col span="4">
					        		{{index+1}}
					        </Col>
					         <Col span="10" >
					        		{{d.name}}
					        </Col>
					         <Col span="10" >
					        		{{d.value}}
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
			}
		},
		props: ['data'],
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
		height: 210px;
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