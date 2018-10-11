<template>
	<div class="wrap">
		<Row>
	        <Col span="24" class="pd" style="padding-bottom: 20px;">
	        		<div class="num-title">
	        			总关注
	        		</div>
	        		<div class="num-text">
	        			<span class="num-text-1">88742</span>
	        			<span class="num-text-2">人</span>
	        		</div>
	        </Col>
	    </Row>
	    <Row>
	        <Col span="12" class="pd num-after">
	        		<div class="num-title">
	        			今日新增
	        		</div>
	        		<div class="num-text">
	        			<span class="num-text-1">131</span>
	        			<span class="num-text-2">人</span>
	        		</div>
	        </Col>
	         <Col span="12" class="pd">
	         	<div class="num-title">
	        			本周新增
	        		</div>
	        		<div class="num-text">
	        			<span class="num-text-1">1334</span>
	        			<span class="num-text-2">人</span>
	        		</div>
	        </Col>
	    </Row>
	</div>
</template>

<script>
	export default {
        data() {
	        	return {
	        	}
        },
        props:{
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
	.wrap {
		text-align: center;
		height: 240px;
		width: 100%;
	}
	.num-title {
		font-size: 20px;
	    color: #f7cd46;
	    text-align: center;
	}
	.num-text-1 {
		font-size: 35px;
	}
	.num-text-2 {
		font-size: 18px;
	}
	.pd {
		position: relative;
	}
	.num-after::after {
		content: '';
	    position: absolute;
	    top: 30%;
	    right: 0;
	    bottom: 30%;
	    width: 1px;
	    background-color: rgba(255,255,255,.4);
	}
</style>