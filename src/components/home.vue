<template>
	<div class="bg clearfix">
		<Top title="磐安全域旅游大数据中心"></Top>
		<div class="content">
			<Row>
		        <Col span="6" class="pd">
	        		<Title title="景区累计客流数" ></Title>
	        		<div class="b" style="height: 550px;">
						<Bar_one style="margin-top: 20px;"></Bar_one>
	        		</div>
		        </Col>
		        <Col span="12" class="pd">
		        		<Title title="实时客流分布地图" ></Title>
					<Ahome_center :data="home_center_data" v-if="home_center_data"></Ahome_center>
		        </Col>
		        <Col span="6" class="pd">
		        	<div class="chunk">
						<Title title="入磐总客流数" ></Title>
						<div class="sub_title  m-t">
							总客流数
						</div>
						<div>
							<Num :data="num.totalNum"></Num>
						</div>
						<div class="sub_title  m-t">
							今日客流数
						</div>
						<div>
							<Num :data="num.today_total" v-if="num.today_total"></Num>
						</div>
					</div>
					<div class="chunk">
			        		<Title title="网络访问量" ></Title>
						<div class="b">
							<Line_one :data="visit_data"   :colorList="colorList" :showTitle="false"></Line_one>
						</div>
					</div>
				
		        </Col>
		    </Row>
		    <Row>
		        <Col span="18" class="pd">
	        		<div class="line-2 chunk">
		        		<Title title="旅游要素" :vertical="true" class="l bottom-title"></Title>
		        		<div class="b">
		        			<Slider_chart></Slider_chart>
		        		</div>
					</div>
		        </Col>
		        <Col span="6" class="pd">
	        			<div class="chunk">
						
						<Title title="入县车型统计" ></Title>
						<div class="b">
							<Bar_two :data="car_data" :colorList="barColorList" :top="50" :axisLineShow="true"></Bar_two>
						</div>
					</div>
		        </Col>
		    </Row>
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
	import Ahome_center from "@/base/center/ahome_center.vue";
	
	
	
	
	
	export default {
        data() {
	        	return {
	        		visit_data:null,
	        		car_data:null,
	        		colorList:['#2ab1a8','#faae3c'],
	        		barColorList:['#01c6fd','#8d53ea'],
	        		num:{},
	        		home_center_data:null
	        	}
        },
        computed:{
        },
        components: {
        		Top,Bar_one,Slider_chart,Line_one,Num,Ahome_center,Bar_two
        },
        methods:{
        		getVisit() {
//      			axios.post('/ApiZmkzt/api/getDingConfig',{
//			   		param:obj
//			   })
//      			this.visit_data  = this.echarts_data.home_data.line_data;
//      			this.visit_data.data.map(item=>{
//      				item.color = [this.color(),this.color()]
//      			})
        		},
        		getCar() {
        			this.car_data = this.echarts_data.home_data.line_data_1;
        		},
        		getData() {
        			//总客流数
        			this.$ajax.post('/admin/api/OperationalData').then(data=>{
        				this.num  = data.data;
        				this.$ajax.post('/admin/api/DeviceRealTimeInfo').then(data=>{
		    				this.home_center_data = data.data;
		    				let total = 0
	
		    				this.home_center_data.map(item=>{
		    					total+= item.total_visitor
		    				});
		    				this.$set(this.num,'today_total',String(total));
		    			});
        			})
        			
	    			//网络访问量
	    			this.$ajax.get('/admin/api/WeixinVisit?dayNum=7').then(data=>{
	    				let product = [];
	    				let dataList = [];
	    				data.data.map(item=>{
	    					product.push(this.global.timespanToString(item.date,'MM/dd'));
	    					dataList.push(item.visitNum)
	    				})
	    				this.visit_data =  {
						product:product,
						name:'网络访问量',
						data:[
							{
								name:'微信访问量',
								data:dataList
							},
						]
					
	    				}
        			})
        			
        		}
        },
        created() {
        		this.$nextTick(() => {
				this.getVisit();
				this.getCar();
				this.getData()
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
		padding-top: 10px;
	}
</style>