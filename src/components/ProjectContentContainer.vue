<template>
	<div class="content-container-wrapper">
		<div class="content-container">
			<div class="event-container">
				<div class="event-description">
					<ExtrasContent
						:content="content"
						:links="links"
						:tags="tags"
						:title="title"
					/>
				</div>
				<TweetImage
					:eventImg="this.eventImg"
					:tweetImageHref="this.contentImageHref"/>
				<div
					v-if="this.eventDate"
					class="event-date">
					<span>{{this.eventDate}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import TweetImage from './TweetImage.vue';
import ExtrasContent from './ExtrasContent.vue';
export default {
	components: {
		TweetImage,
		ExtrasContent
	},
	props: {
		eventDate : {
			required: false,
			type: String
		},
		eventImg: {
			required: false,
			type: String
		},
		contentImageHref: {
			required: false,
			type: String
		},
		title: {
          type: String,
          required: true
		},
		content: {
			type: String,
			required: true
		},
		tags: {
			type: String,
			required: false
		},
		links: {
			type: Array,
			required: true
		}
	}
}
</script>
<style scoped>
.content-container-wrapper {
	display: flex;
	flex-direction: column;
	cursor: pointer;
	transition: 0.5s;
	background-color: var(--extras-theme-content);
	border: 1px solid var(--theme-base-body);
}
.content-container-wrapper:hover {
	transition: 0.5s;
	background-color: rgba(255, 255, 255, 0.03);
	border: 1px solid rgb(29, 161, 242);
	border-radius: 1rem;
}
.content-container {
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
.event-date {
	color: rgb(101, 119, 134);
	font-size: 15px;
	margin-top: 1rem;
}
</style>