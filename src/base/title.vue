<template>
	<div>
		<div class="title " v-if="!vertical">
			<div class="line-title-top">
				<img src="../assets/chunk.png" class="line-title-1"/>
				<span class="line-title-2"></span>
				<!--<img src="../assets/line.png" class="line-title-2"/>-->
				<img src="../assets/chunk.png" class="line-title-3"/>
			</div>
			<div class="line-title-bottom">
				<img src="../assets/chunk.png" class="line-title-1"/>
				<span class="line-title-2"></span>
				<!--<img src="../assets/line.png" class="line-title-2"/>-->
				<img src="../assets/chunk.png" class="line-title-3"/>
			</div>
			{{title}}
				
		</div>
		<div class="title flex title-vertical"  v-if="vertical">
			<div class="line-title-left">
				<img src="../assets/chunk.png" class="line-title-6"/>
				<img src="../assets/line.png" class="line-title-4"/>
				<img src="../assets/chunk.png" class="line-title-5"/>
			</div>
			<div class="line-title-right">
				<img src="../assets/chunk.png" class="line-title-6"/>
				<img src="../assets/line.png" class="line-title-4"/>
				<img src="../assets/chunk.png" class="line-title-5"/>
			</div>
			<span style="align-self: center;">{{title}}</span>
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
        		},
        		vertical:{
        			default:false
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
	.title {
		color: #33cccc;
		font-size: 25px;
		line-height: 52px;
		justify-content: center;
		text-align: center;
		position: relative;
	}
	.title-across {
		width: 100%;
	}
	.title-across::before,
	.title-across::after {
		display:block;
		content: '';
		background: url(../assets/line.png) 0 0 no-repeat;
		background-size: 100% 100%;
		height: 6px;
		width: 100%;
	}
	.title-vertical {
		width: 52px;
		padding: 0 5px;
		position: absolute;
		top: 0;
		bottom: 0;
		
	}
	.title span {
	}
	/*.title-vertical::before,
	.title-vertical::after {
		display:block;
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		background: url(../assets/line_vertical.png) 0 0 no-repeat;
		background-size: 100% 100%;
		width: 6px;
	}
	.title-vertical::after {
		right: 0;
		left: auto;
	}*/
	.line-title-top,
	.line-title-bottom{
		position: absolute;
		left: 0;
		right: 0;
		height: 6px;
	}
	.line-title-top{
		top: 0;
	}
	.line-title-bottom{
		bottom: 0;
	}
	.line-title-1 {
		position: absolute;
		left: 10px;
	}
	.line-title-3 {
		position: absolute;
		right: 10px;
	}
	.line-title-2 {
		background: url(../assets/line.png) no-repeat 0 0;
		background-size:100% 100%;
		position: absolute;
		right: 10px;
		left: 10px;
		bottom: 0;
		top: 0;
		margin: auto;
		height: 1px;
	}
	.line-title-left,
	.line-title-right {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 6px;
	}
	.line-title-left  {
		left: 0;
	}
	.line-title-right  {
		right: 0;
	}
	.line-title-4 {
		position: absolute;
		height: 100%;
		width: 1px;
		top: 0;
		left: 0;right: 0;
		margin: auto;
	}
	.line-title-5 {
		position: absolute;
		top: 0;
		left: -3px;
		transform: rotateZ(90deg);
	}
	.line-title-6 {
		position: absolute;
		bottom: 0;
		left: -3px;
		transform: rotateZ(90deg);
	}
</style>