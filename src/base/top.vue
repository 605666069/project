<template>
	<div class="clearfix top" >
		<div class="l font-2 left-text clearfix">
			<div  class="l">
				{{date_string}}<br />
				{{time_string}}
			</div>
			<div  class="l">
				<img src="../assets/clod.png"/>
			</div>
			<div  class="l">
				{{data.weather}} {{data.temperatures}}<br />
				
				空气质量: {{data.pM25}}
			</div>
		</div>
		<div class="font-1 pointer right-text r" @click="back">
			返回首页>>
		</div>
		<div class="r" style="height: 100%;">
			<Dropdown> 
		        <a href="javascript:void(0)" class="font-1 pointer right-text">
		            {{$route.name||'菜单'}}
		        </a>
		        <DropdownMenu slot="list">
		           <a href="#/home"><DropdownItem>数据总览</DropdownItem></a>
		           <a href="#/passenger_flow"> <DropdownItem>客流数据</DropdownItem></a>
		           <a href="#/scenic_area"> <DropdownItem>景区数据</DropdownItem></a>
		           <a href="#/hotel"> <DropdownItem>酒店住宿</DropdownItem></a>
		           <a href="#/car"> <DropdownItem>交通数据</DropdownItem></a>
		           <a href="#/wx_operation"> <DropdownItem>微信运营</DropdownItem></a>
		           <a href="#/map_data"> <DropdownItem>基础资源</DropdownItem></a>
		           <a href="#/weather"> <DropdownItem>气象环保</DropdownItem></a>
		           <a href="#/ticketing"> <DropdownItem>票务数据</DropdownItem></a>
		           
		           
		           
		           <!--<a href="#/hot_search"> <DropdownItem>网络热搜</DropdownItem></a>-->
		        </DropdownMenu>
		    </Dropdown>
		</div>
		
		<div class="center font-1">
			<img src="../assets/title.png" class="title-img"/>
		</div>
	</div>
</template>

<script>
	export default {
        data() {
        	return {
        		date_string:this.global.timespanToString(new Date(),'yyyy/MM/dd'),
        		time_string:this.global.timespanToString(new Date(),'hh:mm:ss'),
        		timer:null,
        		data:{}
        	}
        },
        props:{
        		title:{
        			default:""
        		},
        		isBg:{
        			default:false
        		}
        },
        computed:{
        		
        },
        components: {
        },
        methods:{
        		back() {
        			location.href='http://' + window.location.host + '/panan/index.html';
        		},
        		getData() {
        			this.$ajax.post('/api/weather').then(data=>{
        				this.data = data.data;
        			})
        		}
        },
        mounted() {
        	var _this = this; 
        	this.timer = setInterval(function(){      
        	 	_this.time_string = _this.global.timespanToString(new Date(),'hh:mm:ss');
        	},1000);
        },
        beforeDestroy:function(){
	        if(this.timer){
	            clearInterval(this.timer);  
	        }
     	},
        created() {
        		this.getData()
        },
       
    }
</script>

<style scoped>
	.top {
		position: relative;
		background: url(../assets/top_bg1.png) 0 0;
		background-size: 100% 100%;
		padding-bottom: 15px;
		z-index: 100;
	}
	/*.top1 {
		background: url(../assets/top_bg1.png) 0 0;
	}*/
	.font-1 {
		font-size: 20px;
		color: #FFFFFF;
	}
	.font-2 {
		font-size: 16px;
		padding-top: 10px;
	}
	.top .l {
		padding-left: 20px;
	}
	.top .r {
		padding-right: 20px;
	}
	.top .center {
		/*font-size: 40px;*/
		text-align: center;
		
	}
	.top .top-line {
		position: absolute;
		left: 0;top: 0;bottom: 0;right: 0;
		z-index: -1;
	}
	.top .top-line img {
		width: 100%;
		height: 100%;
	}
	.right-text {
		line-height: 50px;
	}
	.left-text {
		line-height: 1;
	}
	.title-img {
		margin-top: 10px;
		width: 30%;
		display: inline-block;
	}
</style>