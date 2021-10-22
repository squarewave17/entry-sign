<template>
  <Header msg="Labels & Business Cards" />
  <router-link class="back-button" to="/product-addons">Back</router-link>
  <div class="of-container of-py-6 ac-nav-container">
    <Addon
      image="entrysign-brother-labels.png"
      label="Entrysign Brother Labels"
      storeItem="EntrysignBrotherLabels"
    />
    <Addon
      image="entrysign-seiko-labels.png"
      label="Entrysign Seiko Labels"
      storeItem="EntrysignSeikoLabels"
    />
    <Addon
      image="seiko-business-cards.png"
      label="Seiko Business Cards"
      storeItem="SeikoBusinessCards"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Addon from "@/components/Addon.vue";

export default {
  name: "Labels & Business Cards",
  components: {
    Header,
    Addon,
  },
};
</script>

<style scoped>
.ac-nav-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
