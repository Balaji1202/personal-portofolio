<template>
	<div class="main-panel">
		<HeaderPanel/>
		<div class="main-content">
			<div id="home" class="header-banner">
				<img class="header-image" src="./../assets/header-background.jpg" alt="">
			</div>
			<ProfileMainAvatar/>
			<MainProfileInfo id="explore"/>
			<Tweet
				v-for="(tweet, index) in this.$root.tweets" :key="index"
				:id="tweet.id"
				:pinnedMessage="tweet.pinnedMsg"
				:eventDate="tweet.eventDate"
				:content="tweet.content"
				:eventImg="tweet.eventImg"
				:tweetImageHref="tweet.tweetImgHref"
				:extra="tweet.extra"
			>
			</Tweet>
		</div>
		<ExtrasPanel
			class="main-col-wrap"
		/>
	</div>
</template>

<script>
import HeaderPanel from './HeaderPanel.vue';
import ProfileMainAvatar from './ProfileMainAvatar.vue';
import MainProfileInfo from './MainProfileInfo.vue';
import Tweet from './Tweet.vue';
import ExtrasPanel from './ExtrasPanel.vue'
export default {
	components: {
		HeaderPanel,
		ProfileMainAvatar,
		MainProfileInfo,
		Tweet,
		ExtrasPanel
	}
}
</script>

<style scoped>
	.main-panel {
		display: flex;
		flex-direction: column;
	}
	.main-content {
		background-color: var(--theme-base-body);
		transition: 0.5s;
		margin-bottom: 5rem;
	}
	.header-image {
		width: 100%;
	}
	.project-sub-text {
		color: rgb(101, 119, 134);
		font-size: 15.2px;
	}
	.main-col-wrap {
		display: none;
	}
	.coffee-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
	.svg-column {
		width: 100%;
		text-align: center;
		margin-top: 1rem
	}
	.coffee-logo {
		width: 5rem;
		height: 5rem;
		fill: var(--theme-base-text);
		transition: 0.5s;
		margin-left: auto;
	}
	@media (max-width: 839px) {
		.main-col-wrap {
			display: block;
		}
		.main-content {
			margin-bottom: 3rem;
		}
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>