<template>
	<div class="clearfix top" >
		<div class="l font-1">2018/10/09</div>
		<div class="r">
			<Dropdown> 
		        <a href="javascript:void(0)" class="font-1 pointer">
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
        	}
        },
        props:{
        	title:{
        		default:''
        	}
        },
        computed:{
        },
        components: {
        },
        methods:{
        },
        created() {
        		
        },
       
       
    }
</script>

<style scoped>
	.top {
		position: relative;
		background: url(../assets/top.png) 0 0;
		background-size: 100% 100%;
	}
	.font-1 {
		font-size: 30px;
		color: #FFFFFF;
	}
	.top .l {
		padding-left: 140px;
	}
	.top .r {
		padding-right: 140px;
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
</style>