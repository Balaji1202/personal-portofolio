<template>
	<div
		class="theme-switcher nav-links-list">
		<a class="links">
			<img
				@mouseover="startRotation"
				@mouseout="stopRotation"
				v-if="this.theme==='light'"
				src="./../assets/moon.svg" alt="theme" class="theme-switcher-img">
			<img
				@mouseover="startRotation"
				@mouseout="stopRotation"
				v-else
				src="./../assets/sun.svg" alt="theme" class="theme-switcher-img">
		</a>
	</div>
</template>

<script>
export default {
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
		switchImageThemes() {
			let textDisplay = this.darkTheme ? 'white': 'black'
			let bodyDisplay = this.darkTheme ? 'black': 'white'
			document.getElementById('ham-line1').setAttribute('fill', textDisplay);
			document.getElementById('ham-line2').setAttribute('fill', textDisplay);
			document.getElementById('ham-line3').setAttribute('fill', textDisplay);
			document.getElementById('footer-text').setAttribute('fill', textDisplay);
			document.getElementById('scroll-arrow').setAttribute('fill', textDisplay);
			document.getElementById('top-code').children.forEach(node => node.setAttribute('fill', textDisplay));
			document.getElementById('bottom-code').children.forEach(node => node.setAttribute('fill', textDisplay));
			document.getElementById('class-code').setAttribute('fill', textDisplay);
			document.getElementById('laptop-screen').setAttribute('fill', bodyDisplay);
			document.getElementById('laptop-back').setAttribute('fill', bodyDisplay);
			document.querySelectorAll('#instagram-2').forEach(node => node.setAttribute('fill', textDisplay));
			document.querySelectorAll('#instagram-1').forEach(node => node.setAttribute('fill', textDisplay));
			document.querySelectorAll('#linkedin').forEach(node => node.setAttribute('fill', textDisplay));
			document.querySelectorAll('#facebook').forEach(node => node.setAttribute('fill', textDisplay));
			document.querySelectorAll('#twitter').forEach(node => node.setAttribute('fill', textDisplay));
		},
		switchBoxShadows(root) {
			let shadow = `--shadow-theme-${this.theme}`;
			let headerShadow = `--shadow-header-${this.theme}`;
			let theme = getComputedStyle(root).getPropertyValue(shadow);
			let headerTheme = getComputedStyle(root).getPropertyValue(headerShadow);
			root.style.setProperty('--shadow-theme', theme);
			root.style.setProperty('--shadow-header', headerTheme);
		},
		switchTheme() {
			this.darkTheme = !this.darkTheme;
			let root = document.documentElement;
			let tempTheme = this.theme;
			this.theme = this.otherTheme
			this.otherTheme = tempTheme
			this.switchTextTheme(root);
			this.switchBodyTheme(root);
			this.switchBoxShadows(root);
			this.switchImageThemes();
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
		width: 5rem;
		height: 2rem;
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