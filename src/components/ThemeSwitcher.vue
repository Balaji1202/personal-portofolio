<template>
	<div
		class="theme-switcher nav-links-list">
		<a class="links">
			<img
				@click="switchTheme"
				@mouseover="startRotation"
				@mouseout="stopRotation"
				v-if="this.theme==='light'"
				src="./../assets/moon.svg" alt="theme" class="theme-switcher-img">
			<img
				@click="switchTheme"
				@mouseover="startRotation"
				@mouseout="stopRotation"
				v-else
				src="./../assets/sun.svg" alt="theme" class="theme-switcher-img">
		</a>
	</div>
</template>

<script>
export default {
	data() {
		return {
			theme: 'light',
			otherTheme: 'dark',
			darkTheme: false
		}
	},
	methods: {
		stopRotation(event) {
			event.currentTarget.classList.remove('theme-switcher-rotating');
		},
		startRotation(event) {
			event.currentTarget.classList.add('theme-switcher-rotating');
		},
		switchBodyTheme(root) {
			let display = `--${this.theme}-theme-body`;
			let value = this.darkTheme? 0: 255;
			let theme = getComputedStyle(root).getPropertyValue(display);
			root.style.setProperty('--theme-base-body', theme);
			root.style.setProperty('--theme-bg', value);
		},
		switchTextTheme(root) {
			let display = `--${this.theme}-theme-text`;
			let theme = getComputedStyle(root).getPropertyValue(display);
			root.style.setProperty('--theme-base-text', theme);
		},
		switchHoverTheme(root) {
			let display = `--${this.theme}-theme-hover`;
			let tweetDisplay = `--tweet-${this.theme}-theme-hover`
			let theme = getComputedStyle(root).getPropertyValue(display);
			let tweetTheme = getComputedStyle(root).getPropertyValue(tweetDisplay);
			root.style.setProperty('--theme-base-hover', theme);
			root.style.setProperty('--tweet-theme-hover', tweetTheme);
		},
		switchBoxShadows(root) {
			let headerShadow = `--shadow-header-${this.theme}`;
			let headerTheme = getComputedStyle(root).getPropertyValue(headerShadow);
			root.style.setProperty('--shadow-header-theme', headerTheme);
		},
		switchExtrasTheme(root) {
			let titleDisplay = `--extras-${this.theme}-theme-box`;
			let titleTheme = getComputedStyle(root).getPropertyValue(titleDisplay);
			root.style.setProperty('--extras-theme-box', titleTheme);
			let contentDisplay = `--extras-${this.theme}-theme-content`;
			let contentTheme = getComputedStyle(root).getPropertyValue(contentDisplay);
			root.style.setProperty('--extras-theme-content', contentTheme);
		},
		switchTheme() {
			this.darkTheme = !this.darkTheme;
			let root = document.documentElement;
			let tempTheme = this.theme;
			this.theme = this.otherTheme
			this.otherTheme = tempTheme
			this.switchTextTheme(root);
			this.switchBodyTheme(root);
			this.switchHoverTheme(root);
			this.switchExtrasTheme(root);
			// this.switchBoxShadows(root);
			localStorage.setItem('userLastPreferedTheme', this.theme);
		}
	},
	mounted() {
		let lastPreferredTheme = localStorage.getItem('userLastPreferedTheme');
		if(lastPreferredTheme && this.theme !== lastPreferredTheme) {
			this.switchTheme();
		}
	},
}
</script>

<style scoped>
	.theme-switcher {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
	}
	.theme-switcher-img {
		height: 2.5rem;
		padding: 0.5rem;
		animation: rotate-switcher 3s linear infinite;
		animation-play-state: paused;
	}
	.theme-switcher-rotating {
		animation-play-state: running;
	}
	.links {
		text-decoration: none;
		cursor: pointer;
	}
	@keyframes rotate-switcher {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}	
</style>