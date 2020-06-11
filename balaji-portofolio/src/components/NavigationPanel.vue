<template>
	<div id="left-navigation" class="left-navigation">
		<div class="left-navigation-content">
			<PageLogo/>
			<NavigationBar/>
			<ContactButton/>
			<ProfileHandler/>
		</div>
	</div>
</template>

<script>
import NavigationBar from './NavigationBar.vue';
import ProfileHandler from './ProfileHandler.vue';
import PageLogo from './PageLogo.vue';
import ContactButton from './ContactButton.vue';
export default {
	components: {
		ProfileHandler,
		NavigationBar,
		PageLogo,
		ContactButton
	}
}
</script>

<style scoped>
	.left-navigation {
		position: fixed;
		overflow: auto;
		display: flex;
		flex-direction: column;
		width: 22.7rem;
		height: 100vh;
		box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19) !important;
		transition: 0.1s;
		font-size: 1.2rem;
	}
	.left-navigation-content {
		margin: 0.3rem 0 0 6.5rem;
	}

	@media (max-width: 1200px) {
		.left-navigation-content {
			margin: 0.3rem 0 0 3rem;
		}
		.left-navigation {
			width: 300px;
			transition: 0.1s;
		}
	}
	@media (max-width: 1000px) {
		.left-navigation-content {
			margin: 0.3rem 0 0 0.7rem;
		}
		.left-navigation {
			width: 80px;
			transition: 0.1s;
		}
	}
	@media (max-width: 450px) {
		.left-navigation {
			flex-direction: row;
			position: fixed;
			height: 60px;
			width: 100%;
			bottom: 0px;
		}
		.left-navigation-content {
			display: flex;
			margin: 0;
		}
	}
</style>
