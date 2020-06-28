<template>
	<div class="blogs-extra">
		<ExtrasContentContainer
		style="border-top-right-radius:1rem; border-top-left-radius:1rem; pointer-events:none">
			<span style="font-size: 20px; font-weight:600">
				Blogs
			</span>
		</ExtrasContentContainer>

		<ExtrasContentContainer
			eventImg="mockapis"
			eventDate="May 2020"
			contentImageHref="https://mock-apis-balaji.herokuapp.com/">
			<span style="font-weight:600; font-size: 17px;color: rgb(101, 119, 134);">Your weather</span>
			<p>
				A simple weather app which lets you know your location's current weather in an animated format.
			</p>
			<ProjectLinks
				livehref="https://mock-apis-balaji.herokuapp.com/"
				codehref="https://github.com/Balaji1202/mock-apis"
			/>
		</ExtrasContentContainer>
	
		<ExtrasContentContainer
			eventImg="tictactoe"
			eventDate="April 2020"
			contentImageHref="https://balaji1202.github.io/TicTacToe/src/index.html">
			<span style="font-weight:600; font-size: 17px;color: rgb(101, 119, 134);">Your weather</span>
			<p>
				A simple weather app which lets you know your location's current weather in an animated format.
			</p>
			<ProjectLinks
				livehref="https://balaji1202.github.io/TicTacToe/src/index.html"
				codehref="https://github.com/Balaji1202/TicTacToe"
			/>
		</ExtrasContentContainer>

		<ExtrasContentContainer
			eventImg="weather"
			eventDate="March 2020"
			contentImageHref="https://balaji1202.github.io/WeatherApp/src/index.html">
			<span style="font-weight:600; font-size: 17px;color: rgb(101, 119, 134);">Your weather</span>
			<p>
				A simple weather app which lets you know your location's current weather in an animated format.
			</p>
			<ProjectLinks
				livehref="https://balaji1202.github.io/WeatherApp/src/index.html"
				codehref="https://github.com/Balaji1202/WeatherApp"
			/>
		</ExtrasContentContainer>
		<a href="" style="text-decoration: none">
			<ExtrasContentContainer
			style="border-bottom-right-radius:1rem; border-bottom-left-radius:1rem">
				<span style="font-size: 16px; font-weight:600; color: rgb(29, 161, 242)">
						More
				</span>
			</ExtrasContentContainer>
		</a>
	</div>
</template>

<script>
import ExtrasContentContainer from './ExtrasContentContainer.vue';
import ProjectLinks from './ProjectLinks.vue';
export default {
	components: {
		ExtrasContentContainer,
		ProjectLinks,
	}
}
</script>

<style lang="css" scoped>
.blogs-extra {
	margin-top: 2rem;
}
</style>