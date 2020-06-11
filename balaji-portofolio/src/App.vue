<template>
	<div id="app">
		<NavigationPanel/>
		<div></div>
		<div></div>
	</div>
</template>

<script>
import NavigationPanel from './components/NavigationPanel.vue'
export default {
  components: {
		NavigationPanel
	},
	methods: {
		checkIsMobile() {
			const toMatch = [
					/Android/i,
					/webOS/i,
					/iPhone/i,
					/iPad/i,
					/iPod/i,
					/BlackBerry/i,
					/Windows Phone/i
			];
			return toMatch.some((toMatchItem) => {
					return navigator.userAgent.match(toMatchItem);
			});
		},
	},
	mounted() {
		this.$root.isMobile = this.checkIsMobile();
	},
}
</script>

<style>
	#app {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		display: flex;
		flex-direction: row;
	}
	.svg-theme-text {
		fill: black;
	}
	.svg-theme-background {
		fill: white;
	}
	.svg-theme-active {
		fill: rgb(29, 161, 242);
		transition: 0.5s;
	}
</style>
