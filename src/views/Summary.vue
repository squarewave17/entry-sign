<template>
  <Header msg="Summary" />
  <PageButtons previousPage="Product Addons" />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
export default {
  name: "Summary",
  components: {
    Header,
    PageButtons,
  },
};
</script>

<style scoped></style>
