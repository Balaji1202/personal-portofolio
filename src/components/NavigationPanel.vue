<template>
		<div class="navigation-column" :class="{'non-logo-margin': !this.$root.header.logo}">
			<div class="navigations navigation-wrapper">
				<PageLogo
					v-if="this.$root.header.logo"
					:logo="this.$root.header.logo"
				/>
				<NavigationItem
					v-for="(navigation, index) in this.$root.navigations" :key="index"
					:class="{'sub-navs': navigation.subnav}"
					:navName="navigation.name"
					:href="navigation.href">
					<NavigationSvg
						:icon="navigation.icon"
					/>
				</NavigationItem>
				<ContactButton
					v-if="this.$root.contacts"
				/>
				<ProfileHandler/>
			</div>
		</div>
</template>

<script>
import PageLogo from './PageLogo.vue';
import NavigationItem from './NavigationItem.vue';
import NavigationSvg from './NavigationSvg.vue';
import ContactButton from './ContactButton.vue'
import ProfileHandler from './ProfileHandler.vue';
export default {
	components: {
		PageLogo,
		NavigationItem,
		NavigationSvg,
		ProfileHandler,
		ContactButton
	}
}
</script>

<style scoped>
.navigation-column {
	margin-left: 27%;
	font-size: 19px;
}
.navigation-wrapper {
	display: flex;
	flex-direction: column;
	background-color: var(--theme-base-body);
	z-index: 2;
	transition: 0.5s;
}
.navigations {
	display: flex;
	flex-direction: column;
}
.non-logo-margin {
	margin-top: 2rem
}
@media (max-width: 1300px) {
	.navigation-column {
		margin-left: 15%;
	}
}
@media (max-width: 1050px) {
	.navigation-column {
		margin-left: 1rem;
	}
}
@media (max-width: 520px) {
	.navigation-wrapper {
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin: 0;
		height: 3.75rem;
		bottom: 0;
		width: 100%;
		position: fixed;
		overflow-y: hidden;
		border-top: 1px solid rgba(101, 119, 134, 0.5);
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	.sub-navs {
		display: none;
	}
	.sub-navs {
		display: none;
	}
	.navigation-column {
		margin-left: 0;
	}
}
</style>