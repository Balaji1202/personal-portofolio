<template>
	<div id="app">
		<LeftNavigation/>
		<div></div>
		<div></div>
	</div>
</template>

<script>
import LeftNavigation from './components/LeftNavigation.vue'
export default {
  components: {
		LeftNavigation
	}
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
</style>
