<template>
		<a :href="this.tweetImageHref" target="_blank">
			<div class="tweet-image-container">
				<img
					loading="lazy"
					class="event-image"
					v-if="eventImg"
					:src="this.getImgUrl(eventImg)" alt="event-image">
			</div>
		</a>
</template>

<script>
export default {
	props: {
		eventImg: {
			type: String,
			required: false
		},
		tweetImageHref: {
			type: String,
			required: false
		}
	},
	methods: {
		getImgUrl(imageSrc) {
			imageSrc = imageSrc.toLowerCase();
			var images = require.context('../assets/', false, /\.jpg$/)
			return images('./' + imageSrc + ".jpg")
		}
	}
}
</script>

<style lang="css" scoped>
.tweet-image-container {
	display: flex;
	justify-content: center;
}
.event-image {
	margin-bottom: 1.5rem;
	width: 100%;
	height: 100%;
	box-shadow: var(--shadow-header-theme);
	border-radius: 10px;
}
</style>