<template>
  <a
    :href="footerLink"
    target="_blank"
    style="text-decoration: none"
  >
    <div
      class="content-container-wrapper"
      style="border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem"
    >
      <div class="content-container">
        <div class="event-container">
          <div class="event-description">
            <span
              style="
                font-size: 16px;
                font-weight: 600;
                color: rgb(29, 161, 242);
              "
            >
              {{ footerTitle }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    footerTitle: {
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
<style scoped>
.content-container-wrapper {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.5s;
  background-color: var(--extras-theme-content);
  border: 1px solid var(--theme-base-body);
}
.content-container-wrapper:hover {
  transition: 0.5s;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgb(29, 161, 242);
  border-radius: 1rem;
}
.content-container {
  padding: 1rem 0.5rem;
  color: var(--theme-base-text);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
.event-container {
  padding: 0 0.8rem;
  width: 100%;
}
.event-description {
  font-size: 16px;
  line-height: 1.5rem;
}
</style>