<template>
	<div class="app">
		<div class="col1"><NavigationPanel/></div>
		<div class="col2"><MainPanel/></div>
	</div>
</template>

<script>
import NavigationPanel from './components/NavigationPanel.vue';
import MainPanel from './components/MainPanel.vue';
export default {
  components: {
		NavigationPanel,
		MainPanel
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

<style scoped>
	.app {
		display: flex;
		flex-direction: row;
		height: 100vh;
		position: fixed;
	}
	.col1 {
		flex: 1 0 22.7rem;
		box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19) !important;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		overflow: auto;
		background: white;
	}
	.col2 {
		flex: 15 0 auto;
		overflow: auto;
	}
	@media (max-width: 1000px) {
		.col1 {
			flex: 0 0 5rem;
			align-items: center;
		}
	}
	@media (max-width: 450px) {
		.app {
			flex-direction: column-reverse;
		}
		.col1 {
			flex: 0 0 3.7rem;
			flex-direction: row;
		}
	}
</style>
