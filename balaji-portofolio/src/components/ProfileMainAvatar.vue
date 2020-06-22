<template>
	<div class="main-avatar-wrapper">
		<div class="avatar-wrapper">
			<img class="main-avatar" src="./../assets/balaji-pic1.jpg" alt="avatar-main">
		</div>
	</div>
	
</template>

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
	@media (max-width: 520px) {
		.linkedin-profile-svg {
			width: 2rem;
			height: 2rem;
		}
		.main-avatar {
			width: 30%;
		}
	}
</style>