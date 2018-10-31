<template>
	<div class="wrap">
		<Row>
	        <Col span="24" class="pd" style="padding-bottom: 20px;">
	        		<div class="num-title">
	        			<img src="../assets/b.png" class="atip"/> 
	        			<span class="text">总关注</span>
	        		</div>
	        		<div class="num-text">
	        			<span class="num-text-1">{{data.totalFollow}}</span>
	        			<span class="num-text-2">人</span>
	        		</div>
	        </Col>
	    </Row>
	    <Row>
	        <Col span="12" class="pd num-after">
	        		<div class="num-title">
	        			<img src="../assets/a.png" class="tip"/>
	        			<span class="text">今日新增</span>
	        		</div>
	        		<div class="num-text">
	        			<span class="num-text-1">{{data.todayFollow}}</span>
	        			<span class="num-text-2">人</span>
	        		</div>
	        </Col>
	         <Col span="12" class="pd">
	         	<div class="num-title">
	        			<img src="../assets/a.png" class="tip"/>
	        			<span class="text">本周新增</span>
	        			
	        		</div>
	        		<div class="num-text">
	        			<span class="num-text-1">{{data.weekFollow}}</span>
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
	        		data:{}
	        	}
        },
        props:{
        },
        computed:{
        },
        components: {
        },
        methods:{
        		getData () {
        			this.$ajax.post('/admin/api/WeixinUser').then(data=>{
        				this.data=data.data
        			})
        			
        		}
        },
        created() {
        		this.getData()
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
		font-size: 40px;
		font-weight: 700;
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
	.tip {
		width: 25px;
		vertical-align: middle;
		
	}
	.atip {
		width: 30px;
		vertical-align: middle;
	}
	.text {
		vertical-align: middle;
	}
</style>