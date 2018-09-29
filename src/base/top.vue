<template>
	<div class="clearfix top" >
		<div class="l font-1">2018/10/09</div>
		<div class="r font-1">链接</div>
		<div class="center font-1">
			{{title}}
		</div>
		<div class="top-line">
			<img src="../assets/top.png"/>
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
	}
	.top .top-line img {
		width: 100%;
		height: 100%;
	}
</style>