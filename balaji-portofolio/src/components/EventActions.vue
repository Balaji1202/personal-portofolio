<template>
	<div class="event-action-container">
		<div class="comment-container">
			<div class="comment-icon-wrapper icon-wrapper">
				<svg class="event-action-icons comment-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11.95 0.00999999L7.802 0H7.8C3.426 0 0 3.427 0 7.802C0 11.9 3.186 15.008 7.465 15.172V19C7.465 19.108 7.509 19.286 7.585 19.403C7.727 19.628 7.969 19.75 8.217 19.75C8.355 19.75 8.494 19.712 8.619 19.632C8.883 19.464 15.092 15.492 16.707 14.126C18.609 12.516 19.747 10.156 19.75 7.814V7.797C19.744 3.43 16.32 0.00999982 11.95 0.00899982V0.00999999ZM15.737 12.982C14.603 13.942 10.875 16.387 8.965 17.625V14.438C8.965 14.024 8.63 13.688 8.215 13.688H7.819C4.159 13.688 1.501 11.212 1.501 7.802C1.501 4.268 4.269 1.5 7.801 1.5L11.948 1.51H11.95C15.482 1.51 18.25 4.276 18.252 7.806C18.249 9.716 17.309 11.65 15.737 12.982Z"/>
				</svg>
			</div>
		</div>
		<div class="retweet-container">
			<div class="retweet-icon-wrapper icon-wrapper">
				<svg class="event-action-icons retweet-icon" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
					<path d="M23.6147 12.4772C23.1447 12.0072 22.3847 12.0072 21.9177 12.4772L20.5917 13.8032V4.40022C20.5917 2.22222 18.8197 0.450219 16.6417 0.450219H11.4417C10.7787 0.450219 10.2417 0.988219 10.2417 1.65022C10.2417 2.31222 10.7787 2.85022 11.4417 2.85022H16.6417C17.4957 2.85022 18.1917 3.54522 18.1917 4.40022V13.8032L16.8657 12.4772C16.3957 12.0072 15.6357 12.0072 15.1687 12.4772C14.7017 12.9472 14.6987 13.7072 15.1687 14.1742L18.5427 17.5492C18.7767 17.7822 19.0847 17.8992 19.3927 17.8992C19.7007 17.8992 20.0057 17.7832 20.2407 17.5492L23.6157 14.1732C24.0827 13.7032 24.0827 12.9432 23.6137 12.4762L23.6147 12.4772ZM12.5617 15.5002H7.36166C6.50766 15.5002 5.81166 14.8052 5.81166 13.9502V4.54722L7.13766 5.87322C7.37166 6.10822 7.67966 6.22522 7.98566 6.22522C8.29166 6.22522 8.59966 6.10822 8.83566 5.87322C9.30366 5.40322 9.30366 4.64322 8.83566 4.17622L5.45966 0.800219C4.98966 0.332219 4.22966 0.332219 3.76266 0.800219L0.387656 4.17722C-0.0823438 4.64722 -0.0823438 5.40722 0.387656 5.87422C0.857656 6.34122 1.61766 6.34422 2.08466 5.87422L3.40966 4.54722V13.9502C3.40966 16.1282 5.18266 17.9002 7.35966 17.9002H12.5597C13.2237 17.9002 13.7597 17.3622 13.7597 16.7002C13.7597 16.0382 13.2247 15.5002 12.5617 15.5002Z"/>
				</svg>
			</div>
		</div>
		<div class="hearts-container">
			<div class="hearts-icon-wrapper icon-wrapper">
				<svg class="event-action-icons hearts-icon" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.05 18.914H10.036C7.453 18.866 0 12.132 0 5.754C0 2.69 2.525 0 5.403 0C7.693 0 9.233 1.58 10.049 2.73C10.863 1.582 12.403 0 14.694 0C17.574 0 20.098 2.69 20.098 5.755C20.098 12.131 12.644 18.865 10.061 18.912H10.05V18.914ZM5.404 1.501C3.324 1.501 1.501 3.489 1.501 5.756C1.501 11.496 8.535 17.352 10.051 17.414C11.569 17.352 18.601 11.497 18.601 5.756C18.601 3.489 16.778 1.501 14.698 1.501C12.17 1.501 10.758 4.437 10.746 4.466C10.516 5.028 9.59 5.028 9.359 4.466C9.345 4.436 7.933 1.501 5.404 1.501Z"/>
				</svg>
			</div>
		</div>
	</div>
</template>

<style lang="css" scoped>
.event-action-container {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	margin-top: 1rem;
}
.icon-wrapper {
	padding: 0.1rem 0.5rem;
	cursor: pointer;
	border-radius: 9999px;
}
.event-action-icons {
	width: 1rem;
	height: 1rem;
	fill: rgb(101, 119, 134);
}
.comment-icon-wrapper:hover {
	background-color: rgba(29, 161, 242, 0.1);
	transition: 0.5s;
}
.retweet-icon-wrapper:hover {
	background-color: rgba(23, 191, 99, 0.1);
	transition: 0.5s;
}
.hearts-icon-wrapper:hover {
	background-color: rgba(224, 36, 94, 0.1);
	transition: 0.5s;
}
.comment-icon-wrapper:hover > .event-action-icons {
	fill: rgb(29, 161, 242);
	transition: 0.5s;
}
.retweet-icon-wrapper:hover > .event-action-icons {
	fill: rgb(23, 191, 99);
	transition: 0.5s;
}
.hearts-icon-wrapper:hover > .event-action-icons {
	fill: rgb(224, 36, 94);
	transition: 0.5s;
}

</style>