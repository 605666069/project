<template>
	<div class="wrap">
		
		<div class="text-wrap" v-for="(d,index) in data" v-bind:class="{'text-wrap-low':(index+1)%2==0,'text-wrap-hight':(index+1)%2!=0}" v-bind:style="{left:100/data.length * index + '%'}"> 
			<div class="">
				<div class="top-text-wrap" >
					<div class="">
					 	今日：{{d.today_data}}人
					</div>
					<div class="top-text">
					 	实时：{{d.current_data}}人
					</div>
				</div>
				<div class="sub_title border">{{d.name}}</div>
			</div>
			<div class="wrap-line">
				<img src="../../assets/home_line_top.png" class="line-top"/>
				<img src="../../assets/home_line.png" class="line-img"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
        data() {
        	return {
        		data:[]
        	}
        },
        computed:{
        },
        components: {
        },
        methods:{
        	getData() {
				this.data = this.echarts_data.home_data.home_center;
        	}
        },
        created() {
			this.getData();        		
        },
       
       
    }
</script>

<style scoped>
	.wrap {
		padding: 0 10px;
		width: 100%;
		height: 530px;
		background: url(../../assets/home_bg.png)  0 0;
		background-size:100% 100%;
		position: relative;
		/*background-color: #000000;*/
	}
	.text-wrap {
		text-align: center;
		width: 140px;
		position: absolute;
	}
	.text-wrap-low {
		bottom: 160px;
	}
	.text-wrap-hight {
		bottom: 200px;
	}
	.line-img {
		width: 8px;
	}
	.line-top {
		width: 64px;
	}
	.wrap-line {
		width: 64px;
		display: inline-block;
	}
	.text-wrap .sub_title {
		display: inline-block;
		width: 100%;
		overflow: hidden;
		border: 1px solid rgba(255,255,255,0);
	}
	.top-text-wrap {
		display: none;
	}
	.text-wrap:hover .top-text-wrap {
		display: block;
	}
	.text-wrap:hover .sub_title {
		border: 1px solid rgba(255,255,255,.6);
		background-color:rgba(255,255,255,.3);
		border-radius: 5px;
	}
</style>