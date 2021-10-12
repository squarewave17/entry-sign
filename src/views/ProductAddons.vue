<template>
  <Header msg="Product Addons" />
  <PageButtons previousPage="Infection Control Packages" nextPage="Summary" />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
export default {
  name: "Product Addons",
  components: {
    Header,
    PageButtons,
  },
};
</script>

<style scoped></style>
