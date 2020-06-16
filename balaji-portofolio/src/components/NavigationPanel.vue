<template>
		<div class="navigation-column">
			<div class="navigation-wrapper navigations">
				<PageLogo/>
				<NavigationBar/>
				<ContactButton/>
				<ProfileHandler/>
			</div>
		</div>
</template>

<script>
import PageLogo from './PageLogo.vue';
import NavigationBar from './NavigationBar.vue';
import ProfileHandler from './ProfileHandler.vue';
import ContactButton from './ContactButton.vue'
export default {
	components: {
		PageLogo,
		NavigationBar,
		ProfileHandler,
		ContactButton
	}
}
</script>

<style scoped>
.navigation-column {
	margin-left: 29%;
	height: 100vh;
	font-size: 1.18rem;
}
.navigation-wrapper {
	display: flex;
	flex-direction: column;
}
@media (max-width: 1000px) {
	.navigation-column {
		margin-left: 0rem;
	}
}
@media (max-width: 450px) {
	.navigation-wrapper {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		margin: 0;
		height: 60px;
		width: 100%;
		bottom: 0;
		overflow-y: hidden;
	}
	.sub-navs {
		display: none;
	}
}
</style>
