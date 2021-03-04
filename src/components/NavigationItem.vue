<template>
	<div class="nav-items">
		<a
			@click="hookFunction"
			@mouseover="hookFunction"
			@mouseout="hookFunction"
			:id="this.href + '-navigation'" class="nav-link">
			<slot></slot>
			<span class="nav-text">{{this.navName}}</span>
		</a>
	</div>
</template>

<script>
export default {
	props: {
		navName: {
			type: String,
			required: true
		},
		href: {
			type: String,
			required: true
		}
	},
	methods: {
		hookFunction(event) {
			const eventType = event.type;
			switch (eventType) {
				case 'click': this.navLinkClicked(event.currentTarget);
				break;
				case 'mouseover': this.applyHoverStyles(event.currentTarget);
				break;
				case 'mouseout': this.removeHoverStyles(event.currentTarget);
				break;
			}
		},
		applyHoverStyles(eventTarget) {
			if(!eventTarget || this.$root.isMobile) {
				return;
			}
			eventTarget.classList.add('link-hover-style');
			if(eventTarget.classList.contains('link-active-style')) {
				return;
			}
			eventTarget.querySelectorAll('.svg-theme-text').forEach(node => {
				node.classList.add('svg-theme-active');
			});
		},
		removeHoverStyles(eventTarget) {
			eventTarget.classList.remove('link-hover-style');
			eventTarget.querySelectorAll('.svg-theme-text').forEach(node => {
				node.classList.remove('svg-theme-active');
			});
		},
		scrollIntoSection(eventTarget)  {
			let id = eventTarget.getAttribute('id');
			let navigationIndex = id.indexOf('-');
			id = id.slice(0, navigationIndex);
			let idDom = document.getElementById(id);
			let blockPosition = 'center'
			idDom.scrollIntoView({block: blockPosition, behavior: "smooth"});
		},
		navLinkClicked(eventTarget) {
			this.scrollIntoSection(eventTarget);
			if(!eventTarget || eventTarget.classList.contains('link-active-style')) {
				return;
			}
			let prevActiveNode = eventTarget.closest('.navigations').querySelector('.link-active-style');
			if(prevActiveNode) {
				prevActiveNode.classList.remove('link-active-style');
				prevActiveNode.querySelectorAll('.svg-theme-background').forEach(node => {
					node.classList.remove('svg-theme-active');
				});
			}
			eventTarget.classList.add('link-active-style');
			eventTarget.querySelectorAll('.svg-theme-background').forEach(node => {
				node.classList.add('svg-theme-active');
			});
			this.removeHoverStyles(eventTarget);
		}
	},
	mounted() {
		let homeNavTarget = document.getElementById('home-navigation');
		this.navLinkClicked(homeNavTarget);
	},
}
</script>

<style scoped>
	.nav-items {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0.3rem 0.3rem 0.3rem 0.1rem;
		margin-left: -0.3rem;
	}
	.nav-link {
		text-decoration: none;
		display: flex;
		align-items: center;
		padding: 0.17rem 0rem 0.17rem 0.5rem;
		border-radius: 9999px;
		color: var(--theme-base-text);
		cursor: pointer;
		transition: 0.5s;
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
	@media (max-width: 520px) {
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