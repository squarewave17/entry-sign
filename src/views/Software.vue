<template>
  <Header msg="Software" />
  <PageButtons
    previousPage="Access Door Control"
    nextPage="Infection Control Packages"
  />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
export default {
  name: "Software",
  components: {
    Header,
    PageButtons,
  },
};
</script>

<style scoped></style>
