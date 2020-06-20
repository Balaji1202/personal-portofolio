<template>
	<div class="main-panel">
		<div class="main-content">
			<HeaderPanel/>
			<img class="header-image" src="./../assets/header-background.jpg" alt="">
			<HeaderPanel/>
			<img class="header-image" src="./../assets/header-background.jpg" alt="">
			<HeaderPanel/>
			<img class="header-image" src="./../assets/header-background.jpg" alt="">
			<HeaderPanel/>
			<img class="header-image" src="./../assets/header-background.jpg" alt="">
			<HeaderPanel/>
			<img class="header-image" src="./../assets/header-background.jpg" alt="">
			<HeaderPanel/>
			<img class="header-image" src="./../assets/header-background.jpg" alt="">
			<HeaderPanel/>
			<img class="header-image" src="./../assets/header-background.jpg" alt="">
			<HeaderPanel/>
			<img class="header-image" src="./../assets/header-background.jpg" alt="">
		</div>
	</div>
</template>

<script>
import HeaderPanel from './HeaderPanel.vue'
export default {
	components: {
		HeaderPanel
	}
}
</script>

<style scoped>
	.main-panel {
		display: flex;
		flex-direction: column;
		overflow: auto;
	}
	.main-content {
		background-color: var(--theme-base-body);
		transition: 0.5s;
	}
	.header-image {
		width: 100%;

	}
</style>