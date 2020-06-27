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
				<div class="event-description">
					<slot></slot>
				</div>
				<TweetImage
					:eventImg="this.eventImg"/>
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
import EventActions from './EventActions.vue';

export default {
	components: {
		PinnedTweet,
		EventActions,
		TweetProfileHandler,
		TweetImage,
		TweetProfileText
	},
	props: {
		pinnedMessage: {
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
}
.tweet-container-wrapper:hover {
	background-color: var(--tweet-theme-hover);
	transition: 0.5s;
}
.tweet-container {
	border-bottom: 1px solid rgba(101, 119, 134, 0.2);
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