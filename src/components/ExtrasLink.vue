<template>
	<div class="project-links">

		<TweetExternalLink
			v-for="(link, index) in links" :key="index"
			:href="link.href"
			:display="link.name">
			<LinkSvg
				:type="link.type"
			/>
		</TweetExternalLink>

	</div>
</template>

<script>
import TweetExternalLink from './TweetExternalLink.vue';
import LinkSvg from './LinkSvg.vue'
export default {
	components: {
		TweetExternalLink,
		LinkSvg
	},
	props: {
		links: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>
.project-links {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	width: fit-content;
}
</style>