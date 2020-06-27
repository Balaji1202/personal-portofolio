<template>
	<div class="pinned-message-container">
		<div class="pinned-icon-container">
			<svg class="pinned-icon" viewBox="0 0 17 21" xmlns="http://www.w3.org/2000/svg">
				<path d="M16.4822 12.505C16.1072 10.76 14.1402 8.999 12.4722 8.38L11.9282 3.432L13.4232 1.19C13.5802 0.954 13.5952 0.652 13.4602 0.403C13.3262 0.153 13.0682 0 12.7852 0H3.64523C3.36123 0 3.10323 0.154 2.96923 0.403C2.83523 0.653 2.84923 0.956 3.00723 1.191L4.50523 3.438L4.02123 8.381C2.35323 9.001 0.388233 10.761 0.0172328 12.497C-0.0227672 12.657 0.0012328 12.901 0.149233 13.091C0.252233 13.223 0.453233 13.381 0.829233 13.381H4.88723L7.79123 20.093C7.86923 20.277 8.05123 20.395 8.24923 20.395C8.44723 20.395 8.62923 20.277 8.70923 20.093L11.6122 13.38H15.6692C16.0452 13.38 16.2452 13.224 16.3492 13.094C16.4952 12.906 16.5212 12.66 16.4842 12.504L16.4822 12.505Z"/>
			</svg>
		</div>
		<div class="pinned-message">
		{{this.pinnedMessage}}
		</div>
	</div>
</template>
<script>
export default {
	props: {
		pinnedMessage: {
			type: String,
			required: true
		}
	}
}
</script>
<style lang="css" scoped>
.pinned-message-container {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding: 0rem 3rem;
	margin-bottom: -1rem;
	cursor: pointer;
}
.pinned-icon {
	width: 0.8rem;
	height: 0.8rem;
	fill: rgb(101, 119, 134);
}
.pinned-message {
	color: rgb(101, 119, 134);
	font-size: 12.8px;
	padding: 0.5rem;
}
</style>