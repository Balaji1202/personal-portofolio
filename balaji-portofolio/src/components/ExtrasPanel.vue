<template>
	<div class="extras-panel">
		<ExtrasPanelTitle/>
		<ProjectsExtras/>
		<BlogsExtra/>
		<Disclaimer/>
	</div>
</template>

<script>
import ExtrasPanelTitle from './ExtrasPanelTitle.vue';
import ProjectsExtras from './ProjectsExtras.vue';
import BlogsExtra from './BlogsExtra.vue';
import Disclaimer from './Disclaimer.vue'
export default {
	components: {
		ExtrasPanelTitle,
		ProjectsExtras,
		BlogsExtra,
		Disclaimer
	}
}
</script>

<style scoped lang="css">
	.extras-panel {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		margin: 0 10%;
		transition: 0.5s;
		margin-bottom: 5rem;
	}
</style>