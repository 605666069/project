<template>
	<div class="wrap">
		<transition-group   enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
			<div class="text-wrap" v-for="(d,index) in data"  v-bind:style="{left:d.left,bottom:d.bottom}" v-show="isShowOdd?index%2==0:index%2!=0" :key="index"> 
				<div class="">
					<div class="top-text-wrap" >
						<div class="">
						 	今日：{{d.total_visitor}}人
						</div>
						<div class="top-text">
						 	实时：{{d.curr_visitor}}人
						</div>
					</div>
					<div class="sub-title border">{{d.name}}</div>
				</div>
				<div class="wrap-line">
					<img src="../../assets/home_line_top.png" class="line-top"/>
					<img src="../../assets/home_line.png" class="line-img"/>
				</div>
			</div>
		</transition-group>	
	</div>
</template>

<script>
	export default {
        data() {
        	return {
        		isShowOdd:true
        	}
        },
        props:['data'],
        computed:{
        },
        components: {
        },
        methods:{
        	getData() {
			this.data.map((item,index)=>{
		 	 	item.left = 90/this.data.length * index + "%";
		 	 	item.bottom = this.randomFunction(100,240) + 'px'
		 	})
        	},
        	randomFunction(min , max){
				return parseInt(Math.random() * (max - min)) + min;
			},
			

        },
        created() {
			this.getData();        		
        },
        mounted() {
        	var _this = this; 
        	this.$nextTick(() => {
    			this.timer = setInterval(function(){   
	        		_this.isShowOdd = !_this.isShowOdd
	        	},5000);
			})
        },
        beforeDestroy:function(){
	        if(this.timer){
	            clearInterval(this.timer);  
	        }
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
	.text-wrap .sub-title {
		display: inline-block;
		width: 100%;
		overflow: hidden;
		border: 1px solid rgba(255,255,255,0);
	}
	.top-text-wrap {
		display: block;
		font-size: 14px;
	}
	.text-wrap:hover .top-text-wrap {
		display: block;
	}
	.sub-title {
		font-size: 20px;
		font-weight:700;
	}
	.text-wrap:hover .sub-title {
		border: 1px solid rgba(255,255,255,.6);
		background-color:rgba(255,255,255,.3);
		border-radius: 5px;
	}
	
</style>