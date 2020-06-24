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
				pinnedMessage="Work"
				eventImg="zoho1"
				eventDate="May 2019 - Present">
				Front end developer Project trainee at Zoho Corporation, Chennai.
				<br/><br/>
				Zoho Corporation gave a head start to my front-end career.
				<br/><br/>
				I'm currently working in a team solving potential problems with groundbreaking, clean, and performance-oriented solutions.
				<br/><br/>
				I &hearts; Zoho.
			</Tweet>

			<Tweet
				pinnedMessage="Education"
				eventImg="education"
				eventDate="2016 - 2020">
				Did my Bachelors of Engineering in Computer science in Kongu Engineering College, affliated to Anna University, Tamilnadu.
			</Tweet>

			<Tweet
				pinnedMessage="Projects"
				eventImg="weather"
				eventDate="March 2020">
				A simple weather app which lets you know your location's current weather in an animated format.
				<ProjectLinks/>
			</Tweet>
		</div>
	</div>
</template>

<script>
import HeaderPanel from './HeaderPanel.vue';
import ProfileMainAvatar from './ProfileMainAvatar.vue';
import MainProfileInfo from './MainProfileInfo.vue';
import Tweet from './Tweet.vue';
import ProjectLinks from './ProjectLinks.vue'
export default {
	components: {
		HeaderPanel,
		ProfileMainAvatar,
		MainProfileInfo,
		Tweet,
		ProjectLinks
	}
}
</script>

<style scoped>
	.main-panel {
		display: flex;
		flex-direction: column;
		margin-bottom: 5rem;
	}
	.main-content {
		background-color: var(--theme-base-body);
		transition: 0.5s;
	}
	.header-image {
		width: 100%;
	}
</style>