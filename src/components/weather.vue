<template>
	<div class="bg clearfix">
		<Top title="磐安全域旅游大数据中心"></Top>
		<div style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;">
			<iframe src="http://220.191.230.13:8082" width="100%" height="100%"></iframe>
		</div>
	</div>
</template>

<script>
	import Top from "@/base/top.vue";
	
	
	
	
	export default {
		data() {
			return {
				
			}
		},
		computed: {},
		components: {
			Top,
		},
		methods: {
			getData() {}
        		

		},
		created() {
			this.$nextTick(() => {
				this.getData();
			})
		},

	}
</script>

<style>
</style>