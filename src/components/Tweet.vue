<template>
	<div class="tweet-container-wrapper">
		<PinnedTweet
			v-if="this.pinnedMessage"
			:pinnedMessage="this.pinnedMessage"
		/>
		<div class="tweet-container">
			<TweetProfileHandler/>
			<div class="event-container">
				<TweetProfileText
					:eventDate="this.eventDate"
				/>
				<div class="event-description" v-html="content"></div>
				<div
					v-if="this.extra"
					class="event-description">
					<ExtrasLink
						v-if="this.extra === 'project'"
						:links="[{
							name: 'Github',
							href: 'https://github.com/Balaji1202',
							type: 'code'
						}]"/>
					<CoffeeWrapper
						v-if="this.extra === 'coffee'"/>
					<ContactTweet
						v-if="this.extra === 'contact'"/>
				</div>
				<TweetImage
					v-if="this.eventImg"
					:eventImg="this.eventImg"
					:tweetImageHref="this.tweetImageHref"/>
				<EventActions/>
			</div>
		</div>
	</div>
</template>
<script>
import PinnedTweet from './PinnedTweet.vue';
import TweetProfileHandler from './TweetProfileHandler.vue';
import TweetProfileText from './TweetProfileText.vue';
import TweetImage from './TweetImage.vue';
import ExtrasLink from './ExtrasLink.vue';
import CoffeeWrapper from './CoffeeWrapper.vue'
import ContactTweet from './ContactTweet.vue';
import EventActions from './EventActions.vue';

export default {
	components: {
		PinnedTweet,
		EventActions,
		TweetProfileHandler,
		TweetImage,
		TweetProfileText,
		ExtrasLink,
		CoffeeWrapper,
		ContactTweet
	},
	props: {
		pinnedMessage: {
			type: String,
			required: false
		},
		content: {
			type: String,
			required: false
		},
		eventDate : {
			required: true,
			type: String
		},
		eventImg: {
			required: false,
			type: String
		},
		tweetImageHref: {
			required: false,
			type: String
		},
		extra: {
			required: false,
			type: String
		}
	}
}
</script>
<style scoped>
.tweet-container-wrapper {
	display: flex;
	flex-direction: column;
	cursor: pointer;
	transition: 0.5s;
	border-bottom: 1px solid rgba(101, 119, 134, 0.3);
}
.tweet-container-wrapper:hover {
	background-color: var(--tweet-theme-hover);
	transition: 0.5s;
}
.tweet-container {
	padding: 1rem 0.5rem;
	color: var(--theme-base-text);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
}
.event-container {
	padding: 0 0.8rem;
	width: 100%;
}
.event-description {
	font-size: 16px;
	line-height: 1.5rem;
}
</style>