<template>
	<div>
	<h3 @click="doMethod">xx</h3>
	{{message}}
	</div>
</template>

<script>
	 export default  {
		data() {
			return {
				message: 'welcome Index'
			}
		},
		methods: {
			doMethod() {
			}

		}

	}
</script>

<style lang="less">
	#app {
		h3 {
			font-size: 22px;
		}
	}
</style>
