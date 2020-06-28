<template>
	<div class="extras-panel">
		<ExtrasPanelTitle/>
		<ProjectsExtras/>
		<BlogsExtra/>
	</div>
</template>

<script>
import ExtrasPanelTitle from './ExtrasPanelTitle.vue';
import ProjectsExtras from './ProjectsExtras.vue';
import BlogsExtra from './BlogsExtra.vue';
export default {
	components: {
		ExtrasPanelTitle,
		ProjectsExtras,
		BlogsExtra
	}
}
</script>

<style scoped lang="css">
	.extras-panel {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		margin: 0.5rem 10% 0 10%;
		transition: 0.5s;
		margin-bottom: 5rem;
	}
</style>