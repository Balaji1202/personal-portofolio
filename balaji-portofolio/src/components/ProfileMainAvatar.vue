<template>
	<div class="main-avatar-wrapper">
		<div class="avatar-wrapper">
			<img class="main-avatar" src="./../assets/balaji-pic.jpg" alt="avatar-main">
		</div>
		<a
			@click="openFollowIntent"
			class="follow-anchor">
			<div class="follow-link">
				<span>Follow</span>
			</div>
		</a>
	</div>
	
</template>

<script>
export default {
	methods: {
		openFollowIntent() {
			window.open('https://twitter.com/intent/follow?screen_name=balajisv_', '_blank')
		}
	}
}
</script>

<style scoped>
	.main-avatar-wrapper {
		display: flex;
		justify-content: flex-start;
	}
	.main-avatar {
		width: 40%;
		border-radius: 9999px;
		border: 4px solid white;
	}
	.avatar-wrapper {
		width: fit-content;
		margin-top: -13%;
		margin-left: 0.5rem;
	}
	.follow-anchor {
		margin-left: auto;
		font-size: 16px;
		font-weight: 600;
		text-decoration: none;
		margin-right: 1rem;
		margin-top: 0.5rem;
		color: rgb(29, 161, 242);
		width: fit-content;
		cursor: pointer;
		height: fit-content;
	}
	.follow-link {
		padding: 0.5rem 1rem;
		border-radius: 9999px;
		border: 1px solid rgb(29, 161, 242);
		transition: 0.5s;
	}
	.follow-link:hover {
		background-color: var(--theme-base-hover);
		transition: 0.5s;
	}
	@media (max-width: 520px) {
		.linkedin-profile-svg {
			width: 2rem;
			height: 2rem;
		}
	}
	@media (max-width: 400px) {
		.main-avatar {
			width: 45%;
		}
	}
</style>