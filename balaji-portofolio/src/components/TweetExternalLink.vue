<template>
	<a class="slot-link"
		:href="this.href" target="_blank">
		<slot></slot>
		<span class="slot-link-text">
			{{this.display}}
		</span>
	</a>
</template>

<script>
export default {
	props: {
		href: {
			type: String,
			required: true
		},
		display: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="css" scoped>
.slot-link {
	text-decoration:none;
	color:white;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	padding: 0.4rem 0.5rem 0.4rem 1rem;
	background-color: rgb(29, 161, 242);
	transition: 0.5s;
	margin: 1rem 1rem 0rem 0rem;
	width: fit-content;
	border-radius: 9999px;
}
.slot-link:hover {
	background-color: rgb(26, 145, 218);
	transition: 0.5s;
}
.slot-link-text {
	padding: 0 0.5rem;
	letter-spacing: 0.1rem;
}
</style>