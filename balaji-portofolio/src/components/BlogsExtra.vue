<template>
	<div class="blogs-extra">
		<BlogContentContainer
			style="border-top-right-radius:1rem; border-top-left-radius:1rem; pointer-events:none">
			<span style="font-size: 20px; font-weight:600">
				Blogs
			</span>
		</BlogContentContainer>
		<BlogContentContainer
			eventImg="fallenice"
			eventDate="Jun 2020"
			contentImageHref="https://twobytwelve.blogspot.com/2020/06/committed-to-wrong-branch.html">
			<span style="font-weight:600; font-size: 17px;color: rgb(101, 119, 134);">Committed to the wrong branch</span>
			<p>
			<br>
				A blog on the mistakes I did soon after joining in my junior front-end role. Knowing these might help you in avoiding these common mistakes and help you to overcome it.
			</p>
			<ProjectLinks
				blogHref="https://twobytwelve.blogspot.com/2020/06/committed-to-wrong-branch.html"
				blogName="Read"
			/>
		</BlogContentContainer>
		<BlogContentContainer
			eventImg="es11"
			eventDate="April 2020"
			contentImageHref="https://twobytwelve.blogspot.com/2020/04/es11-js-show-part-2.html">
			<span style="font-weight:600; font-size: 17px;color: rgb(101, 119, 134);">ES11 - The JS Show - Part 2</span>
			<p>
			<br>
				The most desired features of ES2020 AKA ES11. Every JavaScript developer must be aware on the latest development evolving in their core tech. Here is a blog on the new features of JavaScript.
			</p>
			<ProjectLinks
				blogHref="https://twobytwelve.blogspot.com/2020/04/es11-js-show-part-2.html"
				blogName="Read"
			/>
		</BlogContentContainer>
		<BlogContentContainer
			eventImg="honey"
			eventDate="January 2020"
			contentImageHref="https://twobytwelve.blogspot.com/2019/12/a-drop-of-honey.html">
			<span style="font-weight:600; font-size: 17px;color: rgb(101, 119, 134);">A drop of honey</span>
			<p>
			<br>
				A writing which contrasts two different perspectives of two different famous authors on their thoughts on handling people.
			</p>
			<ProjectLinks
				blogHref="https://twobytwelve.blogspot.com/2019/12/a-drop-of-honey.html"
				blogName="Read"
			/>
		</BlogContentContainer>
		<a href="https://twobytwelve.blogspot.com/" target="_blank" style="text-decoration: none">
			<BlogContentContainer
				style="border-bottom-right-radius:1rem; border-bottom-left-radius:1rem">
				<span style="font-size: 16px; font-weight:600; color: rgb(29, 161, 242)">
						More
				</span>
			</BlogContentContainer>
		</a>
	</div>
</template>

<script>
import BlogContentContainer from './BlogContentContainer.vue';
import ProjectLinks from './ProjectLinks.vue';
export default {
	components: {
		BlogContentContainer,
		ProjectLinks,
	}
}
</script>

<style lang="css" scoped>
.blogs-extra {
	margin-top: 2rem;
}
</style>