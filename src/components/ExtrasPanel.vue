<template>
	<div class="extras-panel">
		<ExtrasPanelTitle/>
		<ExtrasContainer
			v-for="(extra, index) in this.$root.extras" :key="index"
			:contents="extra.contents"
			:footerTitle="extra.footerTitle"
			:footerLink="extra.footerLink"
			:headerTitle="extra.headerTitle"
			:type="extra.type"
		/>
		<Disclaimer/>
	</div>
</template>

<script>
import ExtrasPanelTitle from './ExtrasPanelTitle.vue';
import ExtrasContainer from './ExtrasContainer.vue';
import Disclaimer from './Disclaimer.vue'
export default {
	components: {
		ExtrasPanelTitle,
		ExtrasContainer,
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