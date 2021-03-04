<template>
	<div
		@click="burstHeart"
		class="hearts-container">
		<div
			v-show="!this.heartsActive && !this.bursting"
			class="hearts-icon-wrapper icon-wrapper">
			<svg class="event-action-icons hearts-icon" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg">
				<path d="M10.05 18.914H10.036C7.453 18.866 0 12.132 0 5.754C0 2.69 2.525 0 5.403 0C7.693 0 9.233 1.58 10.049 2.73C10.863 1.582 12.403 0 14.694 0C17.574 0 20.098 2.69 20.098 5.755C20.098 12.131 12.644 18.865 10.061 18.912H10.05V18.914ZM5.404 1.501C3.324 1.501 1.501 3.489 1.501 5.756C1.501 11.496 8.535 17.352 10.051 17.414C11.569 17.352 18.601 11.497 18.601 5.756C18.601 3.489 16.778 1.501 14.698 1.501C12.17 1.501 10.758 4.437 10.746 4.466C10.516 5.028 9.59 5.028 9.359 4.466C9.345 4.436 7.933 1.501 5.404 1.501Z"/>
			</svg>
		</div>
		<div
			v-show="this.bursting"
			class="heart"></div>
		<div
			v-show="this.heartsActive && !this.bursting"
			class="hearts-icon-wrapper icon-wrapper">
			<svg class="event-action-icons hearts-icon" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg">
				<path d="M10.05 18.914H10.036C7.453 18.866 0 12.132 0 5.754C0 2.69 2.525 0 5.403 0C7.693 0 9.233 1.58 10.049 2.73C10.863 1.582 12.403 0 14.694 0C17.574 0 20.098 2.69 20.098 5.755C20.098 12.131 12.644 18.865 10.061 18.912H10.05V18.914ZM5.404 1.501C3.324 1.501 1.501 3.489 1.501 5.756C1.501 11.496 8.535 17.352 10.051 17.414C11.569 17.352 18.601 11.497 18.601 5.756C18.601 3.489 16.778 1.501 14.698 1.501C12.17 1.501 10.758 4.437 10.746 4.466C10.516 5.028 9.59 5.028 9.359 4.466C9.345 4.436 7.933 1.501 5.404 1.501Z" fill="#E0245E"/>
				<path d="M5.404 1.501C3.324 1.501 1.501 3.489 1.501 5.756C1.501 11.496 8.535 17.352 10.051 17.414C11.569 17.352 18.601 11.497 18.601 5.756C18.601 3.489 16.778 1.501 14.698 1.501C12.17 1.501 10.758 4.437 10.746 4.466C10.516 5.028 9.59 5.028 9.359 4.466C9.345 4.436 7.933 1.501 5.404 1.501Z" fill="#E0245E"/>
			</svg>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			heartsActive: false,
			bursting: false
		}
	},
	methods: {
		burstHeart(event) {
			if(!this.heartsActive) {
				this.$emit('heartBursting');
				this.bursting = true;
				let targetHeart = event.currentTarget.querySelector('.heart');
				targetHeart.classList.add('is_animating', _this);
				let _this = this;
				setTimeout(() => {
					targetHeart.classList.remove('is_animating')
					_this.heartsActive = true;
					_this.bursting = false;
					_this.$emit('heartBursted', _this);
				}, 800)
			} else {
				this.heartsActive = false
			}
		}
	}
}
</script>
<style lang="css" scoped>
.icon-wrapper {
	padding: 1.6px 8px;
	cursor: pointer;
	border-radius: 9999px;
}
.event-action-icons {
	width: 16px;
	height: 16px;
	fill: rgb(101, 119, 134);
}
.hearts-icon-wrapper:hover {
	background-color: rgba(224, 36, 94, 0.1);
	color: rgb(224, 36, 94);
	transition: 0.5s;
}
.hearts-icon-wrapper:hover > .event-action-icons {
	fill: rgb(224, 36, 94);
	transition: 0.5s;
}
.heart {
 cursor: pointer;
 height: 57px;
 width: 57px;
 background-image: url('./../assets/bursting-heart.png');
 background-position: left;
 background-repeat: no-repeat;
 background-size: 2900%;
 animation: heart-burst 1s infinity;
}
.is_animating {
  animation: heart-burst .8s steps(28) 1;
}
@keyframes heart-burst {
 from {background-position: left;}
 to { background-position: right;}
}
</style>