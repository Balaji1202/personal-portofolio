<template>
	<div class="main-logo-row">
		<div class="main-logo">
			<svg
				v-if="logo.type==='b'"
				viewBox="0 0 316 221" fill="rgb(29, 161, 242)">
				<path d="M263.715 219.907L315.806 125.903L264.1 31.0933L252.379 52.5126L291.479 125.117L251.759 197.707L263.715 219.907Z"/>
				<path d="M158.203 0.0625C198.047 0.25 218.344 15.1562 219.094 44.7812C218.906 69.9063 210.469 89.0312 193.781 102.156C218.906 109.75 231.516 126.391 231.609 152.078C230.953 162.484 228.75 171.766 225 179.922C212.344 207.297 182.719 220.984 136.125 220.984C130.5 220.984 122.062 220.656 110.812 220C108.562 220 106.5 219.391 104.625 218.172C100.969 215.547 99.1406 211.609 99.1406 206.359L124.734 12.7188C124.828 11.125 125.203 9.57813 125.859 8.07812C127.828 3.85938 131.203 1.75 135.984 1.75C143.766 0.625 151.172 0.0625 158.203 0.0625ZM134.016 118.609C134.016 118.609 130.5 145.141 123.469 198.203C128.812 198.578 132.984 198.766 135.984 198.766C150.703 198.766 163.594 197.031 174.656 193.562C197.625 186.25 209.109 172.422 209.109 152.078C209.016 138.203 199.828 128.688 181.547 123.531C171.703 120.906 155.859 119.266 134.016 118.609ZM145.969 21.5781L136.688 95.4062C139.781 95.4062 142.641 95.3125 145.266 95.125C179.578 93.25 196.734 76.6094 196.734 45.2031C196.641 37.5156 193.5 31.6094 187.312 27.4844C180.562 23.2656 169.031 21.1562 152.719 21.1562C150.562 21.1562 148.312 21.2969 145.969 21.5781Z"/>
				<path d="M51.8986 31L0 125.408L51.8986 219.816L63.5756 198.305L24.3278 126.005L63.8997 53.1075L51.8986 31Z"/>
			</svg>
			<img v-else :src="this.getImgUrl(this.$root.header.image)" alt="" class="header-avatar">
		</div>
	</div>
</template>

<script>
export default {
	props: {
		logo: {
			required: true,
			type: Object
		}
	},
	methods: {
		getImgUrl(imageSrc) {
			imageSrc = imageSrc.toLowerCase();
			var images = require.context('../assets/', false, /\.jpg$/)
			return images('./' + imageSrc + ".jpg")
		}
	}
}
</script>

<style scoped>
	.main-logo-row {
		display: inline;
	}
	.main-logo {
		width: 3.2rem;
		cursor: pointer;
		border-radius: 9999px;
		padding: 0.5rem;
		padding-top: 0.7rem;
		margin: 0.1rem 0 0.2rem 0;
	}
	.main-logo:hover {
		background-color: var(--theme-base-hover);
		transition: 0.5s;
	}
	.header-avatar-div {
		padding: 0.3rem;
	}
	.header-avatar {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 9999px;
	}
	@media (max-width: 520px) {
		.main-logo {
			margin-top: 0.4rem
		}	
	}
</style>