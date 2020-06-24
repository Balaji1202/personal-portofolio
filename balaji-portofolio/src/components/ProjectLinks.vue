<template>
	<div class="project-links">
		<TweetExternalLink
			href="https://balaji1202.github.io/WeatherApp/src/index.html"
			display="Live"
		/>
		<TweetExternalLink
			href="https://github.com/Balaji1202/WeatherApp"
			display="Code"
		/>
	</div>
</template>

<script>
import TweetExternalLink from './TweetExternalLink.vue';
export default {
	components: {
		TweetExternalLink
	}
}
</script>

<style lang="css" scoped>
.project-links {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
}
</style>