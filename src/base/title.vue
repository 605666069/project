<template>
	<div>
		<div class="title  title-across" v-if="!vertical">
				{{title}}
		</div>
		<div class="title flex title-vertical"  v-if="vertical">
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
		font-size: 30px;
		line-height: 40px;
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
		width: 55px;
		position: absolute;
		top: 0;
		bottom: 0;
		
	}
	.title span {
	}
	.title-vertical::before,
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
	}
</style>