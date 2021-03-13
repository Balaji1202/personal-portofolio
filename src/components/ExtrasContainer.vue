<template>
  <div class="extras-wrapper">
    <ExtrasHeader :headerTitle="headerTitle" :image="image" />
    <template
		v-if="type==='projects'">
		<ProjectContentContainer
			v-for="(content, index) in contents"
			:key="index"
			:contentImageHref="content.imageHref"
			:eventDate="content.date"
			:eventImg="content.image"
			:content="content.content"
			:links="content.links"
			:tags="content.tags"
			:title="content.title"
		/>
	</template>
	<template
		v-else-if="type==='blogs'">
		<BlogContentContainer
			v-for="(content, index) in contents"
			:key="index"
			:contentImageHref="content.imageHref"
			:eventDate="content.date"
			:eventImg="content.image"
			:content="content.content"
			:links="content.links"
			:tags="content.tags"
			:title="content.title"
		/>
	</template>
    <ExtrasFooter :footerTitle="footerTitle"
	:footerLink="footerLink" />
  </div>
</template>

<script>
import ExtrasHeader from "./ExtrasHeader.vue";
import ProjectContentContainer from "./ProjectContentContainer.vue";
import BlogContentContainer from './BlogContentContainer.vue'
import ExtrasFooter from "./ExtrasFooter.vue";
export default {
  components: {
    ExtrasHeader,
    ProjectContentContainer,
	BlogContentContainer,
    ExtrasFooter
  },
  props: {
	image: {
		type: String,
		required: false
	},
    headerTitle: {
      type: String,
      required: true
    },
    contents: {
      type: Array,
      required: true
    },
    footerTitle: {
      type: String,
      required: true
    },
	type: {
		type: String,
		required: true
	},
	footerLink: {
		type: String,
		required: true
	}
  }
};
</script>

<style lang="css" scoped>
.extras-wrapper {
  margin-top: 2rem;
}
</style>