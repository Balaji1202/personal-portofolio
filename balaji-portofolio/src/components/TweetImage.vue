<template>
	<div class="tweet-image-container">
		<img
			loading="lazy"
			class="event-image"
			v-if="eventImg"
		:src="this.getImgUrl(eventImg)" alt="event-image">
	</div>
</template>

<script>
export default {
	props: {
		eventImg: {
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
	margin-top: 1.5rem;
	width: 100%;
	height: 100%;
	box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
	border-radius: 10px;
}
</style>