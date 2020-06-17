<template>
	<div class="main-panel">
		<div class="main-content">
			<HeaderPanel/>
			<img class="header-image" src="./../assets/header-background.jpg" alt="">
		</div>
		<ExtrasPanel/>
	</div>
</template>

<script>
import HeaderPanel from './HeaderPanel.vue'
import ExtrasPanel from './ExtrasPanel.vue';
export default {
	components: {
		ExtrasPanel,
		HeaderPanel
	}
}
</script>

<style scoped>
	.main-panel {
		max-width: 600px;
		overflow: auto;
	}
	.main-content {

	}
	.header-image {
	}
</style>