<template>
	<div class="clearfix top" >
		<div class="l font-1 left-text">
			<div style="margin-top: 5px;">
				{{newDate}}<br />
				{{newTime}}
			</div>
		</div>
		<div class="r" style="height: 100%;">
			<Dropdown> 
		        <a href="javascript:void(0)" class="font-1 pointer right-text">
		            菜单
		        </a>
		        <DropdownMenu slot="list">
		           <a href="#/home"><DropdownItem>首页</DropdownItem></a>
		           <a href="#/passenger_flow"> <DropdownItem>客流数据</DropdownItem></a>
		           <a href="#/scenic_area"> <DropdownItem>景区数据</DropdownItem></a>
		           <a href="#/hotel"> <DropdownItem>酒店住宿</DropdownItem></a>
		           <a href="#/car"> <DropdownItem>交通数据</DropdownItem></a>
		           <a href="#/wx_operation"> <DropdownItem>微信运营</DropdownItem></a>
		           <a href="#/hot_search"> <DropdownItem>网络热搜</DropdownItem></a>
		        </DropdownMenu>
		    </Dropdown>
		</div>
		<div class="center font-1">
			{{title}}
		</div>
	</div>
</template>

<script>
	export default {
        data() {
	        	return {
	        		newDate:this.global.timespanToString(new Date(),'yyyy/MM/dd'),
	        	}
        },
        props:{
        		title:{
        			default:""
        		}
        },
        computed:{
        		newTime() {
        			return this.global.timespanToString(new Date(),'hh:mm:ss')
        		}
        },
        components: {
        },
        methods:{
        },
        created() {
        		
        },
        watch: {	
		  	$route: {
		    		handler: function(val, oldVal){
		      	console.log(val);
		    		},
		    		deep: true
		  	}
		},
       
       
    }
</script>

<style scoped>
	.top {
		position: relative;
		background: url(../assets/top.png) 0 0;
		background-size: 100% 100%;
		padding-bottom: 15px;
	}
	.font-1 {
		font-size: 20px;
		color: #FFFFFF;
	}
	.top .l {
		padding-left: 20px;
	}
	.top .r {
		padding-right: 20px;
	}
	.top .center {
		font-size: 40px;
		
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
</style>