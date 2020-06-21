<template>
	<div class="app">
		<div class="col1"><NavigationPanel/></div>
		<div class="main-col">
			<div class="col2"><MainPanel/></div>
			<div class="col3"><ExtrasPanel/></div>
		</div>
	</div>
</template>

<script>
import NavigationPanel from './components/NavigationPanel.vue';
import MainPanel from './components/MainPanel.vue';
import ExtrasPanel from './components/ExtrasPanel.vue';
export default {
  components: {
		NavigationPanel,
		MainPanel,
		ExtrasPanel
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
		width: 100vw;
		position: fixed;
	}
	.col1 {
		flex: 1 0 22.7rem;
		border-right: 1px solid rgb(230, 236, 240);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		overflow: auto;
		background-color: var(--theme-base-body);
		transition: 0.5s;
		scroll-behavior: smooth;
	}
	.col2 {
		flex: 15 0 27.5rem;
		border-right: 1px solid rgb(230, 236, 240);
		background-color: var(--theme-base-body);
		transition: 0.5s;
		overflow: auto;
		scroll-behavior: smooth;
	}
	.col3 {
		flex: 15 0 20rem;
		background-color: var(--theme-base-body);
		transition: 0.5s;
		overflow: auto;
		scroll-behavior: smooth;
	}
	.main-col {
		display: flex;
	}
	@media (max-width: 1300px) {
		.col1 {
			flex: 0 0 18rem;
		}
	}
	@media (max-width: 1050px) {
		.col1 {
			flex: 0 0 5rem;
			align-items: center;
		}
	}
	@media (max-width: 850px) {
		.main-col {
			flex-wrap: wrap;
			overflow: auto;
		}
		.col2 {
			overflow: initial;
		}
		.col3 {
			overflow: initial;
		}
	}
	@media (max-width: 500px) {
		.app {
			flex-direction: column-reverse;
		}
		.main-col {
			display: initial;
		}
		.col1 {
			flex: 0 0 3.7rem;
			flex-direction: row;
		}
		.col2 {
			flex-basis: 0;
		}
	}

</style>