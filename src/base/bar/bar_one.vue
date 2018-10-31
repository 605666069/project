<template>
	<div>
		<div  style="width: 100%;height:480px;" ref="my_chart"></div>		
	</div>
</template>

<script>
	
	export default {
        data() {
        	return {
        		option:{},
        		echart_one:null,
        		data:null
        	}
        },
        computed:{
        },
        components: {
        },
        methods:{
        	initOpction() {
        		this.option = {
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'shadow'
				        },
				        color:'#fff'
				    },
				    grid: {
				        left: '-120',
				        right: '4%',
				        bottom: '3%',
				        top:"0%",
				        containLabel: true
				    },
				    xAxis: {
				        type: 'value',
				        boundaryGap: [0, 0.01],
				        show:false,
				        splitLine: {
				            show: false
				        },
				        
				    },
				    yAxis: {
				        type: 'category',
				        data: this.data.product,
				        axisLine:{
				        	show:false
				        },
				        axisTick:{
				        	show:false
				        },
				        inverse:true,
				        axisLabel:{
				        		color:'#fff',
				        		align:'left',
				        		margin:150,
				        		fontSize:16
				        },
				    },
				    series: [
				        {
				            name: this.data.name,
				            type: 'bar',
				            data: this.data.data,
				            barMaxWidth:20,
				            label: {
				                normal: {
				                    show: true,
				                    position: 'right',
				                    color:'#fff',
				                    fontSize:14
				                },
				                
				            },
				            itemStyle: {
				                normal: {
				                    color:{
				                    	 colorStops: [{
				                            offset: 0,
				                            color: '#37C4DA' // 0% 处的颜色
				                        }, {
				                            offset: 1,
				                            color: '#6474F0' // 100% 处的颜色
				                        }],
				                    }
				                    
				                },
				            },
				        },
				      
				    ]
        		}
        		
        	},
        	creatChart() {
        		
        		this.initOpction();
        		this.echart_one && this.echart_one.dispose();
				this.echart_one = this.echarts.init(this.$refs.my_chart);
        		this.echart_one.setOption(this.option);
        	},
        	getData() {
        		this.$ajax.post('/admin/api/DeviceYearInfo').then(data=>{
        			let product = [];
    				let dataList = [];
    				data.data.map((item,index)=>{
    					product.push(index+1+'.'+item.name);
    					dataList.push(item.totalNum)
    				})
    				this.data =  {
					product:product,
					name:'网络访问量',
					data:dataList
    				}
        			this.creatChart()
    			})
        		
        	}
        	
        	
        },
        created() {
        	this.$nextTick(()=>{
        		this.getData();
        	})
        },
       beforeDestroy () {
		this.echart_one.clear()
		},
       
    }
</script>

<style>
</style>