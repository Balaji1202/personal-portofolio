<template>
	<div>
		<a href="https://twitter.com/balajisv_" target="_blank">
			<div
				@mouseover="hookFunction"
				@mouseout="hookFunction"
				class="profile-handler">
				<div>
					<img class="profile-image" src="./../assets/balaji-pic-mini.jpg" alt="balajisv_">
				</div>
				<div class="profile-text">
					<span class="profile-name">
						Balaji Saravanan
					</span>
					<span class="profile-handle">
						@balajisv_
					</span>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	methods: {
		hookFunction(event) {
			const eventType = event.type;
			switch(eventType) {
				case 'mouseover': this.applyHoverStyle(event.currentTarget);
				break;
				case 'mouseout': this.removeHoverStyle(event.currentTarget);
				break;
			}
		},
		applyHoverStyle(eventTarget) {
			eventTarget.classList.add('profile-handler-hover');
		},
		removeHoverStyle(eventTarget) {
			eventTarget.classList.remove('profile-handler-hover');
		}
	}
}
</script>

<style scoped>
.profile-handler {
	position: absolute;
	bottom: 1rem;
	display: flex;
	border-radius: 9999px;
	padding: 0.5rem 0.7rem;
	cursor: pointer;
	text-decoration: none;
	color: #2c3e50;
}
.profile-handler-hover {
	background-color: rgba(29, 161, 242, 0.1);
	transition: 0.5s;
}
.profile-image {
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 9999px;
}
.profile-text {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 1rem;
}
.profile-name {
	font-size: 1rem;
	font-weight: bold;
	padding: 0.1rem;
}
.profile-handle {
	font-size: 0.9rem;
	padding: 0.1rem;
}
@media (max-width: 1000px) and (min-width: 0px) {
	.profile-text {
		display: none;
	}
}
@media (max-height: 640px) {
	.profile-handler {
		position: relative;
		margin-top: 2rem;
		width: fit-content;
	}
}
@media(max-width: 450px) {
	.profile-handler {
		position: relative;
		margin-top: 0.1rem;
		bottom: 0;
	}
}
</style>