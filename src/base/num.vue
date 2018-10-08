<template>
	<div>
		<span v-for="d in data">
			<span class="iconfont icon-shuzi9" v-if="d==9"></span>
			<span class="iconfont icon-shuzi1" v-if="d==1"></span>
			<span class="iconfont icon-shuzi2" v-if="d==2"></span>
			<span class="iconfont icon-shuzi3" v-if="d==3"></span>
			<span class="iconfont icon-shuzi4" v-if="d==4"></span>
			<span class="iconfont icon-shuzi5" v-if="d==5"></span>
			<span class="iconfont icon-shuzi6" v-if="d==6"></span>
			<span class="iconfont icon-shuzi7" v-if="d==7"></span>
			<span class="iconfont icon-shuzi8" v-if="d==8"></span>
			<span class="iconfont icon-shuzi0" v-if="d==0"></span>
		</span>
	</div>
</template>

<script>
	export default {
        data() {
	        	return {
	        	}
        },
        props:{
        		data:{
        			default:''
        		}
        },
        computed:{
        		dataList() {
        			return toString(data).splice('')
        		}
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
	.iconfont {
		font-size: 50px;
		color: #02DFFF;
	}
</style>