<template>
	<div class="nav-items">
		<a
			@click="hookFunction"
			@mouseover="hookFunction"
			@mouseout="hookFunction"
			:id="this.navName + '-navigation'" class="nav-link" :href="'#'+this.navName">
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
		navLinkClicked(eventTarget) {
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
		},
		triggerSelectedOnLoad() {
			const selectedSection = (window.location.hash).slice(1);
			const targetNavigation = document.getElementById(selectedSection+'-navigation');
			this.navLinkClicked(targetNavigation);
		}
	},
	mounted() {
		const _this = this;
		this.triggerSelectedOnLoad();
		window.addEventListener('hashchange', function() {
			_this.triggerSelectedOnLoad();
		}, false);
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
	}
	.nav-link {
		text-decoration: none;
		display: flex;
		align-items: center;
		padding: 0.3rem;
		transition: 0.5s;
		border-radius: 9999px;
		color: #14171a;
	}
	.nav-text {
		font-weight: bold;
		padding: 0 1rem 0 0.85rem;
	}
	.link-hover-style {
		background-color: rgba(29, 161, 242, 0.1);
		transition: 0.5s;
		color: rgb(29, 161, 242);
	}
	.link-active-style {
		color: rgb(29, 161, 242);
	}
	@media (max-width: 1000px) {
		.nav-text {
			display: none;
			padding: 0;
			font-size: 0;
		}
	}
</style>