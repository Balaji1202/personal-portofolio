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
					I'm a Front-End Web Developer who loves solving potential front-end problems, along with designing and developing creative UIs and applications.
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
				Currently working as a Front-End Engineer at Zoho Corporation, Chennai.
				<br/><br/>
				Zoho corporation has 45+ products powering various Enterprises and Businesses all over the world, with over an 50 Million users.
				Those products nearly act as an Operating System to those businesses.
				<br/><br/>
				Among those 45+ products, I'm currently working in a product, with a great team, solving potential front-end problems with ground-breaking, clean, and performance-oriented solutions.
			</Tweet>

			<Tweet
				id="education"
				pinnedMessage="Education"
				eventImg="education"
				eventDate="2016 - 2020">
				Did my Bachelors in Computer Science and Engineering in Kongu Engineering College, affliated to Anna University, Tamilnadu.
			</Tweet>

			<Tweet
				id="experience"
				pinnedMessage="Experience"
				eventDate="July, 2020 - Present">
				Member Technical Staff at Zoho Corporation.
				<br/><br/>
				Working in an interesting and fast paced product as a Front-End Engineer.
				<br/><br/>
				Standing in the shoes of a Front-end Software engineer at Zoho to solve and develop features to various problems, with an effort to bring good user experience and solutions to customers.
			</Tweet>

			<Tweet
				id="experience"
				eventDate="July, 2019 - July, 2020">
				Project Trainee at Zoho Corporation.
				<br/><br/>
				Got to train and hone myself in the various Front-end technologies and contributed to a great product in a great team.
				<br/><br/>
				Fell in love with front-end technologies.
			</Tweet>

			<Tweet
				eventDate="May, 2019 - July, 2019">
				Summer Intern at Zoho Corporation.
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
				<template
					class="coffee-container"
					v-if="!this.coffeeConfirmed">
					Got something great to discuss.
					Drop me a message, along with something to get back to you. Let's get that done over a cup of coffee.
					<CoffeeForm
						@formSubmitted="this.confirmCoffee"
					/>
				</template>
				<template
					class="coffee-container"
					v-if="this.coffeeConfirmed">
					<div>
						<p>
							Thanks for showing your interest in discussing with me about something that matters.
						</p>
						<p>
							I really appreciate your time and value.
							Will get back to you shortly.
						</p>
					</div>
					<div class="svg-column">
						<svg class="coffee-logo" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
							<g>
								<path d="m66 502c0 5.523 4.477 10 10 10h360c5.523 0 10-4.477 10-10s-4.477-10-10-10h-112.998c15.66-9.897 30.161-23.324 42.964-40h10.034c54.911 0 99.566-44.216 100-99.203.173-22.369-17.635-40.797-40-40.797h-20.676c.434-6.648.676-13.337.676-20 0-5.523-4.477-10-10-10h-105c-5.523 0-10 4.477-10 10s4.477 10 10 9.99h94.826c-.222 6.368-.654 12.715-1.292 18.975-.001.009-.002.018-.003.028-8.422 82.461-59.036 171.007-138.531 171.007-74.85 0-136.168-84.346-139.827-190h94.827c5.523 0 10-4.477 10-10s-4.477-10-10-10h-105c-5.523 0-10 4.477-10 10 0 97.065 43.706 168.853 92.971 200h-112.971c-5.523 0-10 4.477-10 10zm390-149.359c-.337 42.556-34.291 77.385-76.413 79.268 17.152-28.73 28.89-63.345 33.78-99.909h22.633c11.304 0 20.086 9.457 20 20.641z"/>
								<path d="m40 140h26v20c0 3.466 1.794 6.685 4.743 8.506 2.948 1.822 6.63 1.988 9.729.438l57.889-28.944h57.639c22.056 0 40-17.944 40-40v-60c0-22.056-17.944-40-40-40h-156c-22.056 0-40 17.944-40 40v60c0 22.056 17.944 40 40 40zm-20-100c0-11.028 8.972-20 20-20h156c11.028 0 20 8.972 20 20v60c0 11.028-8.972 20-20 20h-60c-1.552 0-3.083.361-4.472 1.056l-45.528 22.764v-13.82c0-5.523-4.477-10-10-10h-36c-11.028 0-20-8.972-20-20z"/>
								<path d="m316 200h57.639l57.889 28.944c3.107 1.553 6.787 1.381 9.729-.438 2.948-1.822 4.743-5.041 4.743-8.506v-20h26c22.056 0 40-17.944 40-40v-60c0-22.056-17.944-40-40-40h-156c-22.056 0-40 17.944-40 40v60c0 22.056 17.944 40 40 40zm-20-100c0-11.028 8.972-20 20-20h156c11.028 0 20 8.972 20 20v60c0 11.028-8.972 20-20 20h-36c-5.523 0-10 4.477-10 10v13.82l-45.528-22.764c-1.389-.694-2.92-1.056-4.472-1.056h-60c-11.028 0-20-8.972-20-20z"/>
								<path d="m76 80h90c5.523 0 10-4.477 10-10s-4.477-10-10-10h-90c-5.523 0-10 4.477-10 10s4.477 10 10 10z"/>
								<path d="m346 140h90c5.523 0 10-4.477 10-10s-4.477-10-10-10h-90c-5.523 0-10 4.477-10 10s4.477 10 10 10z"/>
								<circle cx="256" cy="292" r="10"/>
							</g>
						</svg>
					</div>
				</template>
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
	},
	data() {
		return {
			coffeeConfirmed: false
		}
	},
	methods: {
		confirmCoffee() {
			this.coffeeConfirmed = true;
		}
	},
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
	.coffee-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
	.svg-column {
		width: 100%;
		text-align: center;
		margin-top: 1rem
	}
	.coffee-logo {
		width: 5rem;
		height: 5rem;
		fill: var(--theme-base-text);
		transition: 0.5s;
		margin-left: auto;
	}
	@media (max-width: 839px) {
		.main-col-wrap {
			display: block;
		}
		.main-content {
			margin-bottom: 3rem;
		}
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>