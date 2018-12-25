<template>
	<div class="bg clearfix">
		<Top title="磐安全域旅游大数据中心"></Top>
		<div class="content">
			<Tabs v-model="tab" @on-click="changeTab">
		        <TabPane :label="d.unitName" :name="d.auditUnitID" v-for="d in tab_list"></TabPane>
		    </Tabs>
			<Row>
		        <Col span="8"   class="pd">
	        			<div class="chunk">
						<Title title="磐安总售票额"></Title>
						<div class="b">
							<div class="sub_title m-t">
								当日售票额
							</div>
							<div>
								<Num :data="num_data.dayData"></Num>
							</div>
							<div class="sub_title m-t">
								全年累计售票额
							</div>
							<div>
								<Num :data="num_data.yearData"></Num>
							</div>
							
						</div>
					</div>
	        			
		        </Col>
		        <Col span="8" class="pd">
		        		<div class="chunk">
						<Title title="团散比分析"></Title>
						<div class="b">
							<Circle_two :data="data1" position_formatter="{b}: {d}%"  :radius="['55%', '75%']"  :colorList="colorList2" :center="['40%','60%']"></Circle_two>
						</div>
					</div>
		        </Col>
		        <Col span="8"  class="pd">
					<Title title="销售渠道分析"></Title>
		        		<div class="b">
						<Circle_two :data="data2" position_formatter="{b}: {d}%"  :radius="['0','75%']" :show_legend="false" :center="['50%','60%']"></Circle_two>
					</div>
				
		        </Col>
		    </Row>
		    <Row>
		        <Col span="8"   class="pd">
	        			<div class="chunk">
						<Title title="本周日售票额统计"></Title>
						<div class="b">
		        				<Line_one :data="data3"  :isAreaShow="true"  :showTitle="false" :dataZoom="true" :colorList="colorList1"></Line_one>
		        			</div>
					</div>
	        			
		        </Col>
		        <Col span="8"  class="pd">
		        		<div class="chunk">
						<Title title="本月周售票额统计"></Title>
						<div class="b">
		        				<Ticketing_bar :data="data4"></Ticketing_bar>
		        			</div>
					</div>
		        </Col>
		        <Col span="8"  class="pd">
		        		<div class="chunk">
						<Title title="全年月售票额统计"></Title>
						<div class="b">
							<Bar_two :data="data5"  :show_legend="false" :inverse="false"></Bar_two>
						</div>
					</div>
		        </Col>
		    </Row>
		</div>
	
		
		
	</div>
	
</template>

<script>
	import Top from "@/base/top.vue";
	import Num from "@/base/num.vue";
	import Circle_two from "@/base/circle/circle_two.vue";
	import Line_one from "@/base/line/line_one.vue";
	import Ticketing_bar from "@/base/bar/ticketing_bar.vue";
	import Bar_two from "@/base/bar/bar_two.vue";
	
	
	
	
	
	
	
	
	export default {
        data() {
	        	return {
	        		data1:null,
	        		data2:null,
	        		data3:null,
	        		data4:null,
	        		data5:null,
				colorList1:['rgba(84,116,238,1)','rgba(98,193,214,1)'],
				colorList2:['#f68b2d ','#3c9eff','#32e3eb'],
				tab:'',
				tab_list:[],
				num_data:{
					dayData:0,
					yearData:0
				}
	        		
	        	}
        },
        computed:{
        },
        components: {
        		Top,Num,Circle_two,Line_one,Ticketing_bar,Bar_two
        },
        methods:{
        		changeTab(tab) {
        			let _tab = tab?tab:'';
        			this.$ajax.post('/admin/api/TicketStatistics?scenicId=' + _tab).then(data=>{
        				this.num_data = data.data;
        			})
        			this.$ajax.post('/admin/api/TicketGroupIndividual?scenicId=' + _tab).then(data=>{
        				this.data1 = {
						name:'团散比分析',
						data:data.data
					}
        			})
        			this.$ajax.post('/admin/api/TicketMarketing?scenicId=' + _tab).then(data=>{
        				this.data2 = {
						name:'销售渠道分析',
						data:data.data
					}
        			})
        			this.$ajax.post('/admin/api/TicketWeek?scenicId=' + _tab).then(data=>{
        				this.data3 = data.data;
        			})
        			this.$ajax.post('/admin/api/TicketMonth?scenicId=' + _tab).then(data=>{
        				this.data4 = data.data;
        			})
        			this.$ajax.post('/admin/api/TicketYear?scenicId=' + _tab).then(data=>{
        				this.data5 = data.data;
        			})
        			
        		},
        		getData() {
//      			this.data1 = this.echarts_data.ticketing_data.data1;
//      			this.data2 = this.echarts_data.ticketing_data.data2;
				this.data3 = this.echarts_data.ticketing_data.data3;
				this.data5 = this.echarts_data.ticketing_data.data5;
        			this.data5.data.map(item=>{
        				item.color = ['#00d4be','#01c8f4']
        			})
        			//
        			this.$ajax.post('/admin/api/DispalyTicketSystem').then(data=>{
        				let list = data.data||[];
        				list.map(item=>{
        					item.auditUnitID = String(item.auditUnitID);
        				});
        				let _data = {
        					auditUnitID:'',
        					unitName:'全部'
        				}
        				list.unshift(_data);
        				this.tab_list = list;
        				this.changeTab('')
        			})
        			
        		}
        },
        created() {
        		this.$nextTick(() => {
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
	.content >>> .ivu-tabs-nav .ivu-tabs-tab{
		color: #fff;
		font-size: 18px;
	}
	.content >>> .ivu-tabs-nav .ivu-tabs-tab-active {
		color: #2d8cf0;
	}
</style>