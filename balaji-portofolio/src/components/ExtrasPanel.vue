<template>
	<div class="main-panel" id="More">
		<div class="main-content">
		</div>
	</div>
</template>

<script>
export default {
	components: {
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