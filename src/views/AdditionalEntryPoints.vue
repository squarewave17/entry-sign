<template>
  <Header msg="Additional Entry Points" />
  <PageButtons previousPage="Customise" nextPage="Access Door Control" />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
export default {
  name: "Additional Entry Points",
  components: {
    Header,
    PageButtons,
  },
};
</script>

<style scoped></style>
