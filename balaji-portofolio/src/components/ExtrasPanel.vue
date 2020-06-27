<template>
	<div class="main-panel">
		<div class="main-content">
			<HeaderPanel/>
			<div id="header-banner" class="header-banner">
				<img class="header-image" src="./../assets/header-background.jpg" alt="">
			</div>
			<ProfileMainAvatar/>
			<MainProfileInfo/>

			<Tweet
				pinnedMessage="About"
				eventDate="Forever"
				eventImg="paint">
					Vue JS enthusiast.
					<br>
					Would love to build something daily on Vue JS.
					<br/><br/>
					Very inquisitive on creating good designs and optimized webapps and websites.
			</Tweet>

			<Tweet
				pinnedMessage="Work"
				eventImg="zoho"
				eventDate="May 2019 - Present">
				Front end developer Project trainee at Zoho Corporation, Chennai.
				<br/><br/>
				Zoho Corporation gave a head start to my front-end career.
				<br/><br/>
				I'm currently working in a team solving potential problems with groundbreaking, clean, and performance-oriented solutions.
				<br/><br/>
				I &hearts; Zoho.
			</Tweet>

			<Tweet
				pinnedMessage="Education"
				eventImg="education"
				eventDate="2016 - 2020">
				Did my Bachelors of Engineering in Computer science in Kongu Engineering College, affliated to Anna University, Tamilnadu.
			</Tweet>

			<Tweet
				pinnedMessage="Experience"
				eventDate="Jul, 2019 - Present">
					Front end engineering Project trainee at Zoho Corporation.
					<br/>
					Got to work in an interesting and fast paced product as a front-end engineer.
					<br>
					Started to fall in love with front-end technologies and contributing to a great product in a great team.
			</Tweet>

			<Tweet
				eventDate="May, 2019 - Jul, 2019">
					Summer intern at Zoho Corporation.
					<br/>
					Joined Zoho, the Indian Software giant, as a Summer intern where I spent some beautiful days with..... HTML, CSS, JS, and other frontend tech and tools.
					<br>					
					Came to know about interesting software engineering and project management process.
			</Tweet>

			<Tweet
				pinnedMessage="Projects"
				eventImg="mockapis"
				eventDate="May 2020">
				Thousands of mocked data over various categories absolutely free for development purpose without any restrictions.
				<br/><br/>
				<TagSvg/>
				<span class="project-sub-text">
					JavaScript(VueJS) | HTML | CSS | NodeJS | MongoDB | Hosted on Heroku
				</span>
				<ProjectLinks
					livehref="https://mock-apis-balaji.herokuapp.com/"
					codehref="https://github.com/Balaji1202/mock-apis"
				/>
			</Tweet>
			
			<Tweet
				eventImg="tictactoe"
				eventDate="April 2020">
				A simple Tic-Tac-Toe game where you could play with your friend or with the inbuilt AI friend.
				<br/><br/>
				<TagSvg/>
				<span class="project-sub-text">
					JavaScript(VueJS) | HTML | CSS | Hosted on Github pages
				</span>
				<ProjectLinks
					livehref="https://balaji1202.github.io/TicTacToe/src/index.html"
					codehref="https://github.com/Balaji1202/TicTacToe"
				/>
			</Tweet>

			<Tweet
				eventImg="weather"
				eventDate="March 2020">
				A simple weather app which lets you know your location's current weather in an animated format.
				<br/><br/>
				<TagSvg/>
				<span class="project-sub-text">
					JavaScript(VueJS) | HTML | CSS | Weatherbit API | Hosted on Github pages
				</span>
				<ProjectLinks
					livehref="https://balaji1202.github.io/WeatherApp/src/index.html"
					codehref="https://github.com/Balaji1202/WeatherApp"
				/>
			</Tweet>

			<Tweet
				eventDate="Anytime">
					Got something to say.
					Always open to any discussions about great things.
					<CoffeeForm/>
					Drop me a message, along with something to get back to you. Let's get that done over a cup of coffee.
			</Tweet>
		</div>
	</div>
</template>

<script>
import HeaderPanel from './HeaderPanel.vue';
import ProfileMainAvatar from './ProfileMainAvatar.vue';
import MainProfileInfo from './MainProfileInfo.vue';
import Tweet from './Tweet.vue';
import ProjectLinks from './ProjectLinks.vue';
import TagSvg from './TagSvg.vue';
import CoffeeForm from './CoffeeForm.vue'
export default {
	components: {
		HeaderPanel,
		ProfileMainAvatar,
		MainProfileInfo,
		Tweet,
		ProjectLinks,
		TagSvg,
		CoffeeForm
	}
}
</script>

<style scoped>
	.main-panel {
		display: flex;
		flex-direction: column;
		margin-bottom: 5rem;
	}
	.main-content {
		background-color: var(--theme-base-body);
		transition: 0.5s;
	}
	.header-image {
		width: 100%;
	}
	.project-sub-text {
		color: rgb(101, 119, 134);
		font-size: 0.95rem;
	}
</style>