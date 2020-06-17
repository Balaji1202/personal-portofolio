<template>
	<div class="header-row">
		<div class="header-panel">
			<div class="header-avatar-div">
				<img src="./../assets/balaji-hi.jpeg" alt="" class="header-avatar">
			</div>
			<div class="main-text">
				<span class="name-text">Balaji Saravanan</span>
				<span class="sub-text">Software Engineer</span>
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
	}
}
</script>
<style scoped>
	.header-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		position: fixed;
		width: 600px;
		height: 3.5rem;
	}
	.header-panel{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	.header-avatar-div {
		padding: 0.3rem;
	}
	.header-avatar {
		width: 50px;
		height: 50px;
		border-radius: 9999px;
	}
	.main-text {
		display: flex;
		flex-direction: column;
		margin-left: -18rem;
	}
	.sub-text {
		padding: 0.1rem;
		font-size: 0.8rem;
	}
	.name-text {
		padding: 0.1rem;
		font-weight: bold;
		font-size: 1.2rem;
	}
	.theme-switcher {
	}
</style>