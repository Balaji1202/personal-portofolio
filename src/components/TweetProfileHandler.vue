<template>
	<img class="profile-image" :src="this.getImgUrl(this.$root.profileHandler.image)" :alt="this.$root.profileHandler.handle">
</template>

<script>
export default {
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
.profile-image {
	width: 3.1rem;
	height: 3.1rem;
	border-radius: 9999px;
}
</style>