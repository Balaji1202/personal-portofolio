<template>
	<div class="header-row" ref="headerRow">
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
		height: 3.2rem;
		white-space: nowrap;
		overflow: hidden;
		transition: 0.5s;
		position: sticky;
		top: 0;
		width: inherit;
		max-width: inherit;
		border-bottom: 1px solid rgba(230, 236, 240, 0.5);
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	.header-shadow {
		box-shadow: var(--shadow-header-theme);
	}
	.header-panel{
		display: flex;
		align-items: center;
		width: 100%;
		padding: 0 0.5rem;
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
		padding: 0.1rem 0 0.2rem 0;
		font-size: 0.7rem;
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