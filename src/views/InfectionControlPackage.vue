<template>
  <Header msg="Infection Control Package" />
  <PageButtons previousPage="Software" nextPage="Product Addons" />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
export default {
  name: "Infection Control Package",
  components: {
    Header,
    PageButtons,
  },
};
</script>

<style scoped></style>
