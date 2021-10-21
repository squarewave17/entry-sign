<template>
  <Header msg="Lanyards" />
  <router-link class="back-button" to="/product-addons">Back</router-link>
  <div class="of-container of-py-6 ac-nav-container">
    <Addon
      image="lanyard-black.png"
      label="QR Code Scanner"
      storeItem="updateQRCodeScanner"
    />
    <Addon
      image="lanyard-dark-green.png"
      label="Fire Alarm Interface"
      storeItem="updateTestAddon"
    />
    <Addon
      image="lanyard-governor.png"
      label="Evolis Ribbon"
      storeItem="updateTestAddon"
    />
    <Addon
      image="lanyard-grey.png"
      label="Evolis Ribbon"
      storeItem="updateTestAddon"
    />
    <Addon
      image="lanyard-navy.png"
      label="Evolis Ribbon"
      storeItem="updateTestAddon"
    />
    <Addon
      image="lanyard-orange.png"
      label="Evolis Ribbon"
      storeItem="updateTestAddon"
    />
    <Addon
      image="lanyard-red.png"
      label="Evolis Ribbon"
      storeItem="updateTestAddon"
    />
    <Addon
      image="lanyard-royal-blue.png"
      label="Evolis Ribbon"
      storeItem="updateTestAddon"
    />
    <Addon
      image="lanyard-royal-blue.png"
      label="Evolis Ribbon"
      storeItem="updateTestAddon"
    />
    <Addon
      image="lanyard-visitor.png"
      label="Evolis Ribbon"
      storeItem="updateTestAddon"
    />
    <Addon
      image="lanyard-yellow.png"
      label="Evolis Ribbon"
      storeItem="updateTestAddon"
    />
    <Addon
      image="yo-yo-reel-oval.png"
      label="Evolis Ribbon"
      storeItem="updateTestAddon"
    />
    <Addon
      image="yo-yo-reel-round.png"
      label="Evolis Ribbon"
      storeItem="updateTestAddon"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Addon from "@/components/Addon.vue";

export default {
  name: "Lanyards",
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
