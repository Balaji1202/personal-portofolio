<template>
	<div class="main-panel">
		<div class="main-content">
			<HeaderPanel/>
			<div class="header-banner">
				<img class="header-image" src="./../assets/header-background.jpg" alt="">
			</div>
			<ProfileMainAvatar/>
			<MainProfileInfo/>
			<Tweet
				eventImg="zoho1"
				eventDate="May 2019 - Present">
				Front end developer Project trainee at Zoho Corporation, Chennai.
				<br/><br/>
				Zoho Corporation gave a kick start to my front-end career.
				<br/><br/>
				I'm currently working in a team solving potential problems with groundbreaking, clean, and performance-oriented solutions.
				<br/><br/>
				I &hearts; Zoho.
			</Tweet>
		</div>
	</div>
</template>

<script>
import HeaderPanel from './HeaderPanel.vue';
import ProfileMainAvatar from './ProfileMainAvatar.vue';
import MainProfileInfo from './MainProfileInfo.vue';
import Tweet from './Tweet.vue'
export default {
	components: {
		HeaderPanel,
		ProfileMainAvatar,
		MainProfileInfo,
		Tweet
	}
}
</script>

<style scoped>
	.main-panel {
		display: flex;
		flex-direction: column;
		margin-bottom: 3rem;
	}
	.main-content {
		background-color: var(--theme-base-body);
		transition: 0.5s;
	}
	.header-image {
		width: 100%;
	}
</style>