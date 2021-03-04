<template>
  <div>
    <span
      style="font-weight: 600; font-size: 17px; color: rgb(101, 119, 134)"
      >{{ title }}</span
    >
    <p style="margin-top: 0.5rem">{{ content }}</p>
    <template v-if="tags">
      <TagSvg />
      <span class="project-sub-text">
        {{ tags }}
      </span>
    </template>
    <ExtrasLink
      :links="links"
    />
  </div>
</template>

<script>
import TagSvg from "./TagSvg.vue";
import ExtrasLink from "./ExtrasLink.vue";
export default {
  components: {
    TagSvg,
    ExtrasLink
  },
  props: {
      title: {
          type: String,
          required: true
      },
      content: {
          type: String,
          required: true
      },
      tags: {
          type: String,
          required: false
      },
      links: {
          type: Array,
          required: true
      }
  }
};
</script>

<style scoped>
.project-sub-text {
  color: rgb(101, 119, 134);
  font-size: 15.2px;
}
</style>