<template>
	<div class="header-row" ref="headerRow">
		<div class="header-panel">
			<div class="header-avatar-div">
				<img :src="this.getImgUrl(this.$root.header.image)" alt="" class="header-avatar">
			</div>
			<div class="main-text">
				<span class="name-text">{{this.$root.header.name}}</span>
				<span class="sub-text">{{this.$root.header.subText}}</span>
			</div>
			<div class="theme-switcher">
				<ThemeSwitcher/>
			</div>
		</div>
	</div>
</template>

<script>
import ThemeSwitcher from './ThemeSwitcher.vue'
export default {
	components: {
		ThemeSwitcher
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
<style scoped>
	.header-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: var(--theme-base-body);
		height: 3.4rem;
		white-space: nowrap;
		overflow: hidden;
		transition: 0.5s;
		position: sticky;
		top: 0;
		width: inherit;
		max-width: inherit;
		border-bottom: 1px solid rgba(101, 119, 134, 0.5);
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		z-index: 1;
	}
	.header-shadow {
		box-shadow: var(--shadow-header-theme);
	}
	.header-panel {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 0 0.5rem;
	}
	.header-avatar-div {
		padding: 0.3rem;
	}
	.header-avatar {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 9999px;
	}
	.main-text {
		display: flex;
		flex-direction: column;
		margin-left: 0.5rem;
		color: var(--theme-base-text);
	}
	.sub-text {
		padding: 0.1rem 0 0.2rem 0;
		font-size: 13px;
		color: rgb(101, 119, 134);
	}
	.name-text {
		padding: 0.1rem 0;
		font-weight: bold;
		font-size: 19px;
	}
	.theme-switcher {
		margin-left: auto;
	}
</style>