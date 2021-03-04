<template>
  <div
    class="content-container-wrapper"
    style="
      border-top-right-radius: 1rem;
      border-top-left-radius: 1rem;
      pointer-events: none;
    "
  >
    <div class="content-container">
      <div class="event-container">
        <div class="event-description">
          <span style="font-size: 20px; font-weight: 600">
            {{ headerTitle }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        headerTitle: {
            type: String,
            required: true
        }
    }
}
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