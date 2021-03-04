<template>
	<div class="extras-title-wrapper">
		<span class="extras-title">You might also like</span>
	</div>
</template>

<style lang="css" scoped>

.extras-title-wrapper {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: var(--extras-theme-box);
	border: 1px solid var(--theme-base-body);
	border-radius: 9999px;
	transition: 0.5s;
	cursor: pointer;
	margin-top: 3rem;
}
.extras-title-wrapper:hover {
	border: 1px solid rgb(29, 161, 242);
	transition: 0.5s;
}
.extras-title {
	font-size: 1rem;
	color: rgb(101, 119, 134);
	padding: 1rem;
}
@media (max-width: 839px) {
	.extras-title-wrapper {
		margin-top: 0rem;
	}
}
</style>