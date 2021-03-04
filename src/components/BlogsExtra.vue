<template>
	<div class="blogs-extra">
		<BlogContentContainer
			style="border-top-right-radius:1rem; border-top-left-radius:1rem; pointer-events:none">
			<ExtrasHeader
				title="Blogs"
			/>
		</BlogContentContainer>
		<BlogContentContainer
			eventImg=""
			eventDate=""
			contentImageHref="">
			<span style="font-weight:600; font-size: 17px;color: rgb(101, 119, 134);"></span>
			<p>
			<br>
				
			</p>
			<ExtrasLink
				blogHref=""
				blogName="Read"
			/>
		</BlogContentContainer>
		<a href="" target="_blank" style="text-decoration: none">
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
import ExtrasLink from './ExtrasLink.vue';
import ExtrasHeader from './ExtrasHeader.vue';
export default {
	components: {
		BlogContentContainer,
		ExtrasLink,
		ExtrasHeader
	}
}
</script>

<style lang="css" scoped>
.blogs-extra {
	margin-top: 2rem;
}
</style>