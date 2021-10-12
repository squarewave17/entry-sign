<template>
  <Header msg="Access Door Control" />
  <PageButtons previousPage="Additional Entry Points" nextPage="Software" />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
export default {
  name: "Access Door Control",
  components: {
    Header,
    PageButtons,
  },
};
</script>

<style scoped></style>
