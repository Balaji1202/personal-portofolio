<template>
	<div class="main-panel">
		<HeaderPanel/>
		<div class="main-content">
			<div id="home" class="header-banner">
				<img class="header-image" src="./../assets/header-background.jpg" alt="">
			</div>
			<ProfileMainAvatar/>
			<MainProfileInfo id="explore"/>
			<Tweet
				id="about"
				pinnedMessage="About"
				eventDate="Forever">
					I'm a front-end software engineer who loves to solve potential front-end problems, along with designing and developing creative UIs.
					<br><br>
					Loves to blog, read, and speak on stages.
					<br><br>
					Would love to build something daily on Vue JS.
					<br/><br/>
					Very inquisitive on creating good designs and optimized webapps and websites.
			</Tweet>

			<Tweet
				id="work"
				pinnedMessage="Work"
				eventImg="zoho"
				eventDate="May 2019 - Present"
				tweetImageHref="https://www.youtube.com/watch?v=j-DV1KZZmwc">
				Currently working as a front-end developer Project trainee at Zoho Corporation, Chennai.
				<br/><br/>
				Zoho Corporation gave a head start to my front-end career.
				<br/><br/>
				I'm currently working in a team solving potential problems with groundbreaking, clean, and performance-oriented solutions.
				<br/><br/>
				I &hearts; Zoho.
			</Tweet>

			<Tweet
				id="education"
				pinnedMessage="Education"
				eventImg="education"
				eventDate="2016 - 2020">
				Did my Bachelors of Engineering in Computer science in Kongu Engineering College, affliated to Anna University, Tamilnadu.
			</Tweet>

			<Tweet
				id="experience"
				pinnedMessage="Experience"
				eventDate="July, 2019 - Present">
				Front-end engineering Project trainee at Zoho Corporation.
				<br/><br/>
				Got to work in an interesting and fast paced product as a front-end developer.
				<br>
				Started to fall in love with front-end technologies and contributing to a great product in a great team.
			</Tweet>

			<Tweet
				eventDate="May, 2019 - July, 2019">
				Summer intern at Zoho Corporation.
				<br/><br/>
				Joined Zoho, the Indian Software giant, as a Summer intern where I spent some beautiful days with..... HTML, CSS, JS, and other front-end tech and tools.
				<br>					
				Came to know about interesting software engineering and project management process.
			</Tweet>

			<Tweet
				id="projects"
				pinnedMessage="Projects"
				eventDate="I can do this all day">
				Some clutters in the name of personal and pet projects really helped in honing my knowledge of front-end technologies and in having some grasp on full stack technologies.
				<br/><br/>
				Have a look at those in the repo.
				<ProjectLinks
					codeName="Github"
					codeHref="https://github.com/Balaji1202"
				/>
			</Tweet>

			<Tweet
				pinnedMessage="Coffee?"
				id="coffee"
				eventDate="Always">
					Got something to say.
					Always open to discussions about great things.
					<CoffeeForm/>
					Drop me a message, along with something to get back to you. Let's get that done over a cup of coffee.
			</Tweet>

			<Tweet
				pinnedMessage="Contact"
				id="contact"
				eventDate="Anytime">
				<div>
					You can find and reach out to me through some mediums here!
					<ContactTweet/>
				</div>
			</Tweet>
		</div>
		
		<ExtrasPanel
			class="main-col-wrap"
		/>
	</div>
</template>

<script>
import HeaderPanel from './HeaderPanel.vue';
import ProfileMainAvatar from './ProfileMainAvatar.vue';
import MainProfileInfo from './MainProfileInfo.vue';
import Tweet from './Tweet.vue';
import ProjectLinks from './ProjectLinks.vue';
import CoffeeForm from './CoffeeForm.vue';
import ContactTweet from './ContactTweet.vue';
import ExtrasPanel from './ExtrasPanel.vue'
export default {
	components: {
		HeaderPanel,
		ProfileMainAvatar,
		MainProfileInfo,
		Tweet,
		CoffeeForm,
		ContactTweet,
		ProjectLinks,
		ExtrasPanel
	}
}
</script>

<style scoped>
	.main-panel {
		display: flex;
		flex-direction: column;
	}
	.main-content {
		background-color: var(--theme-base-body);
		transition: 0.5s;
		margin-bottom: 5rem;
	}
	.header-image {
		width: 100%;
	}
	.project-sub-text {
		color: rgb(101, 119, 134);
		font-size: 15.2px;
	}
	.main-col-wrap {
		display: none;
	}
	@media (max-width: 839px) {
		.main-col-wrap {
			display: block;
		}
		.main-content {
			margin-bottom: 3rem;
		}
	}
</style>