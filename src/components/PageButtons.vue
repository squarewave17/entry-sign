<template>
  <div class="page-buttons">
    <!-- previous link -->
    <router-link
      :to="{ name: previousPage }"
      class="of-button of-button-small of-button-default"
      rel="prev"
      v-if="previousPage"
      >Prev Page</router-link
    >
    <!-- Next link -->
    <router-link
      :to="{ name: nextPage }"
      class="of-button of-button-small of-button-default"
      rel="prev"
      v-if="nextPage"
      >{{ nextText || "Next Page" }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: "PageButtons",
  props: {
    nextPage: String,
    nextText: String,
    previousPage: String,
  },
};
</script>

<style scoped></style>
