<template>
	<div class="projects-extra">
		<ProjectContentContainer
		style="border-top-right-radius:1rem; border-top-left-radius:1rem; pointer-events:none">
			<span style="font-size: 20px; font-weight:600">
				Projects
			</span>
		</ProjectContentContainer>

		<ProjectContentContainer
			eventImg="mockapis"
			eventDate="May 2020"
			contentImageHref="https://mock-apis-balaji.herokuapp.com/">
			<span style="font-weight:600; font-size: 17px;color: rgb(101, 119, 134);">Mocked APIs</span>
			<p>
				Thousands of mocked data over various categories absolutely free for development purpose without any restrictions.
			</p>
			<br/>
			<TagSvg/>
			<span class="project-sub-text">
				JavaScript(VueJS) | HTML | CSS | NodeJS | MongoDB | Hosted on Heroku
			</span>
			<ProjectLinks
				liveHref="https://mock-apis-balaji.herokuapp.com/"
				codeHref="https://github.com/Balaji1202/mock-apis"/>
		</ProjectContentContainer>
	
		<ProjectContentContainer
			eventImg="tictactoe"
			eventDate="April 2020"
			contentImageHref="https://balaji1202.github.io/TicTacToe/src/index.html">
			<span style="font-weight:600; font-size: 17px;color: rgb(101, 119, 134);">Tic-Tac-Toe</span>
			<p>
				A paperless Tic-Tac-Toe game where you could play with your friend or with the inbuilt AI friend.
			</p>
			<br/>
			<TagSvg/>
			<span class="project-sub-text">
				JavaScript(VueJS) | HTML | CSS | Hosted on Github pages
			</span>
			<ProjectLinks
				liveHref="https://balaji1202.github.io/TicTacToe/src/index.html"
				codeHref="https://github.com/Balaji1202/TicTacToe"/>
		</ProjectContentContainer>

		<ProjectContentContainer
			eventImg="weather"
			eventDate="March 2020"
			contentImageHref="https://balaji1202.github.io/WeatherApp/src/index.html">
			<span style="font-weight:600; font-size: 17px;color: rgb(101, 119, 134);">Your weather</span>
			<p>
				A weather app which lets you know your location's current weather in an animated format.
			</p>
			<br/>
			<TagSvg/>
			<span class="project-sub-text">
				JavaScript(VueJS) | HTML | CSS | Weatherbit API | Hosted on Github pages
			</span>
			<ProjectLinks
				liveHref="https://balaji1202.github.io/WeatherApp/src/index.html"
				codeHref="https://github.com/Balaji1202/WeatherApp"/>
		</ProjectContentContainer>
		<a href="https://github.com/Balaji1202?tab=repositories" target="_blank" style="text-decoration: none">
			<ProjectContentContainer
			style="border-bottom-right-radius:1rem; border-bottom-left-radius:1rem">
				<span style="font-size: 16px; font-weight:600; color: rgb(29, 161, 242)">
						More
				</span>
			</ProjectContentContainer>
		</a>
	</div>
</template>

<script>
import ProjectContentContainer from './ProjectContentContainer.vue';
import ProjectLinks from './ProjectLinks.vue';
import TagSvg from './TagSvg.vue';
export default {
	components: {
		ProjectContentContainer,
		ProjectLinks,
		TagSvg
	}
}
</script>

<style lang="css" scoped>
.projects-extra {
	margin-top: 2rem;
}
</style>