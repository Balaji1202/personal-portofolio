<template>
	<div class="profile-handler-row">
		<div
			@click="hookFunction"
			@mouseover="hookFunction"
			@mouseout="hookFunction"
			class="profile-handler">
			<img class="profile-image" src="./../assets/balaji-pic-mini.jpg" alt="balajisv_">
			<div class="profile-text">
				<span class="profile-name">
					Balaji Saravanan
				</span>
				<span class="profile-handle">
					@balajisv_
				</span>
			</div>
			<div class="profile-link">
				<svg width="15" height="15" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="external-link">
					<path class="external-link-fill" d="M307.143 233.33H292.856C290.77 233.33 289.057 234.11 287.725 235.677C286.382 237.235 285.714 239.231 285.714 241.663V324.996C285.714 336.455 282.219 346.263 275.226 354.424C268.232 362.583 259.823 366.659 250.001 366.659H64.2843C54.4631 366.659 46.0546 362.583 39.0597 354.424C32.0663 346.264 28.57 336.456 28.57 324.996V108.328C28.57 96.8693 32.0655 87.063 39.0597 78.9031C46.0546 70.7422 54.4631 66.6641 64.2843 66.6641H221.425C223.512 66.6641 225.224 65.8806 226.562 64.3199C227.9 62.7574 228.568 60.7626 228.568 58.3299V41.6607C228.568 39.2326 227.9 37.2341 226.562 35.6744C225.224 34.1119 223.512 33.332 221.425 33.332H64.2843C46.5777 33.332 31.4354 40.6674 18.8591 55.3372C6.28739 70.0061 0 87.6723 0 108.33V325C0 345.657 6.28739 363.326 18.8598 377.99C31.4362 392.661 46.5785 400 64.2851 400H250.001C267.707 400 282.851 392.661 295.425 377.99C308.001 363.326 314.288 345.658 314.288 325V241.669C314.288 239.235 313.619 237.237 312.276 235.677C310.937 234.11 309.224 233.33 307.143 233.33Z"/>
					<path class="external-link-fill" d="M395.756 4.9474C392.928 1.64822 389.576 0 385.71 0H271.425C267.557 0 264.207 1.64822 261.381 4.9474C258.553 8.24476 257.137 12.1514 257.137 16.6656C257.137 21.1797 258.553 25.0873 261.381 28.3865L300.665 74.2193L155.132 244.014C153.642 245.749 152.899 247.747 152.899 250C152.899 252.261 153.644 254.258 155.132 255.994L180.578 285.678C182.066 287.414 183.778 288.279 185.713 288.279C187.647 288.279 189.36 287.415 190.847 285.678L336.381 115.886L375.668 161.719C378.494 165.018 381.843 166.668 385.712 166.668C389.581 166.668 392.931 165.018 395.759 161.719C398.587 158.421 400 154.515 400 150.001V16.6656C399.999 12.1487 398.582 8.24476 395.756 4.9474Z"/>
				</g>
				</svg>
			</div>
		</div>
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
				case 'click': this.openTwitter();
			}
		},
		applyHoverStyle(eventTarget) {
			if(!eventTarget || eventTarget.classList.contains('link-active-style') || this.$root.isMobile) {
				return;
			}
			eventTarget.classList.add('profile-handler-hover');
		},
		removeHoverStyle(eventTarget) {
			eventTarget.classList.remove('profile-handler-hover');
		},
		openTwitter() {
			window.open('https://twitter.com/balajisv_' ,'_blank')
		}
	}
}
</script>

<style scoped>

.profile-handler-row {
	width: max-content;
	position: absolute;
	bottom: 1rem;
}
.profile-handler {
	display: flex;
	flex-direction: row;
	align-items: center;
	border-radius: 9999px;
	padding: 0.5rem;
	cursor: pointer;
	text-decoration: none;
	color: var(--theme-base-text);
}
.profile-handler-hover {
	background-color: var(--theme-base-hover);
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
	padding-left: .5rem;
}
.profile-name {
	font-size: 0.9rem;
	font-weight: bold;
	padding: 0.1rem;
}
.profile-handle {
	font-size: 0.9rem;
	padding: 0.1rem;
	color: rgb(101, 119, 134);
}
.profile-link{
	padding: 0 0.2rem 0 1.7rem;
}
.external-link-fill {
	fill: var(--theme-base-text);
}
@media (max-width: 1050px) and (min-width: 0px) {
	.profile-text {
		display: none;
	}
	.profile-link {
		display: none;
	}
}
@media (max-height: 620px) {
	.profile-handler-row {
		position: inherit;
		margin-top: 1.5rem;
		padding-bottom: 1rem;
	}
}
@media(max-width: 520px) {
	.profile-handler-row {
		position: relative;
		margin-top: 0;
		bottom: 0;
		padding-bottom: 0rem;
	}
}
</style>