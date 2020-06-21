<template>
	<div class="dropdown">
		<svg class="nav-logo" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="more">
				<g id="outline">
					<path class="svg-theme-text" d="M15.25 9C14.285 9 13.5 9.787 13.5 10.75C13.5 11.713 14.284 12.5 15.25 12.5C16.214 12.5 17 11.714 17 10.75C17 9.786 16.214 9 15.25 9ZM15.25 11.5C14.836 11.5 14.5 11.164 14.5 10.75C14.5 10.337 14.837 10 15.25 10C15.663 10 16 10.336 16 10.75C16 11.163 15.664 11.5 15.25 11.5ZM10.75 9C9.784 9 9 9.787 9 10.75C9 11.713 9.785 12.5 10.75 12.5C11.715 12.5 12.5 11.714 12.5 10.75C12.5 9.786 11.716 9 10.75 9ZM10.75 11.5C10.336 11.5 10 11.164 10 10.75C10 10.337 10.337 10 10.75 10C11.163 10 11.5 10.336 11.5 10.75C11.5 11.163 11.164 11.5 10.75 11.5ZM6.25 9C5.285 9 4.5 9.787 4.5 10.75C4.5 11.713 5.285 12.5 6.25 12.5C7.214 12.5 8 11.714 8 10.75C8 9.786 7.213 9 6.25 9ZM6.25 11.5C5.836 11.5 5.5 11.164 5.5 10.75C5.5 10.337 5.837 10 6.25 10C6.663 10 7 10.336 7 10.75C7 11.163 6.664 11.5 6.25 11.5Z"/>
					<path class="svg-theme-text" d="M10.75 21.5C4.822 21.5 0 16.678 0 10.75C0 4.822 4.822 0 10.75 0C16.678 0 21.5 4.822 21.5 10.75C21.5 16.678 16.678 21.5 10.75 21.5ZM10.75 1.5C5.65 1.5 1.5 5.65 1.5 10.75C1.5 15.85 5.65 20 10.75 20C15.85 20 20 15.85 20 10.75C20 5.65 15.85 1.5 10.75 1.5Z"/>
				</g>
				<g id="background">
					<path class="svg-theme-background" d="M6.25 11.5C5.836 11.5 5.5 11.164 5.5 10.75C5.5 10.337 5.837 10 6.25 10C6.663 10 7 10.336 7 10.75C7 11.163 6.664 11.5 6.25 11.5Z"/>
					<path class="svg-theme-background" d="M10.75 11.5C10.336 11.5 10 11.164 10 10.75C10 10.337 10.337 10 10.75 10C11.163 10 11.5 10.336 11.5 10.75C11.5 11.163 11.164 11.5 10.75 11.5Z"/>
					<path class="svg-theme-background" d="M15.25 11.5C14.836 11.5 14.5 11.164 14.5 10.75C14.5 10.337 14.837 10 15.25 10C15.663 10 16 10.336 16 10.75C16 11.163 15.664 11.5 15.25 11.5Z"/>
					<path class="svg-theme-background" fill-rule="evenodd" clip-rule="evenodd" d="M10.75 1.5C5.65 1.5 1.5 5.65 1.5 10.75C1.5 15.85 5.65 20 10.75 20C15.85 20 20 15.85 20 10.75C20 5.65 15.85 1.5 10.75 1.5ZM13.5 10.75C13.5 9.787 14.285 9 15.25 9C16.214 9 17 9.786 17 10.75C17 11.714 16.214 12.5 15.25 12.5C14.284 12.5 13.5 11.713 13.5 10.75ZM9 10.75C9 9.787 9.784 9 10.75 9C11.716 9 12.5 9.786 12.5 10.75C12.5 11.714 11.715 12.5 10.75 12.5C9.785 12.5 9 11.713 9 10.75ZM4.5 10.75C4.5 9.787 5.285 9 6.25 9C7.213 9 8 9.786 8 10.75C8 11.714 7.214 12.5 6.25 12.5C5.285 12.5 4.5 11.713 4.5 10.75Z"/>
				</g>
			</g>
		</svg>
		<ul></ul>
	</div>
</template>

<style scoped>
	.nav-items {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0.3rem 0.3rem 0.3rem 0.1rem;
		margin-left: -0.6rem;
	}
	.nav-link {
		text-decoration: none;
		display: flex;
		align-items: center;
		padding: 0.17rem 0.17rem 0.17rem 0.8rem;
		border-radius: 9999px;
		color: var(--theme-base-text);
	}
	.nav-text {
		font-weight: bold;
		padding: 0 1.5rem 0 0.8rem;
	}
	.link-hover-style {
		background-color: var(--theme-base-hover);
		color: rgb(29, 161, 242);
		transition: 0.5s;
	}
	.link-active-style {
		color: rgb(29, 161, 242);
	}
	@media (max-width: 1050px) {
		.nav-text {
			display: none;
			padding: 0;
			font-size: 0;
		}
		.nav-items {
			margin-left: 0;
		}
		.nav-link {
			padding: 0.17rem;
		}
		.nav-text {
			padding: 0.2 1.5rem 0 0.8rem;
		}
	}
	@media (max-width: 500px) {
		.nav-items {
			margin-left: 0;
		}
		.nav-link {
			padding: 0.17rem;
		}
		.nav-text {
			padding: 0.2 1.5rem 0 0.8rem;
		}
	}
</style>