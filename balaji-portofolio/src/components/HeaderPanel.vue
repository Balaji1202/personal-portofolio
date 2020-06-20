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
		background-color: var(--theme-base-body);
		width: 100%;
		height: 3.5rem;
		white-space: nowrap;
		overflow: hidden;
		transition: 0.5s;
	}
	.header-panel{
		display: flex;
		align-items: center;
		width: 100%;
	}
	.header-avatar-div {
		padding: 0.3rem;
	}
	.header-avatar {
		width: 40px;
		height: 40px;
		border-radius: 9999px;
	}
	.main-text {
		display: flex;
		flex-direction: column;
		margin-left: 0.5rem;
		color: var(--theme-base-text);
	}
	.sub-text {
		padding: 0.2rem 0;
		font-size: 0.8rem;
		color: rgb(101, 119, 134);
	}
	.name-text {
		padding: 0.1rem 0;
		font-weight: bold;
		font-size: 1.15rem;
	}
	.theme-switcher {
		margin-left: auto;
	}
</style>