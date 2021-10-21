<template>
  <Header msg="Fobs & Tokens" />
  <router-link class="back-button" to="/product-addons">Back</router-link>
  <div class="of-container of-py-6 ac-nav-container">
    <Addon
      image="mifare-coin-tag.png"
      label="QR Code Scanner"
      storeItem="updateQRCodeScanner"
    />
    <Addon
      image="mifare-fob.png"
      label="Fire Alarm Interface"
      storeItem="updateTestAddon"
    />
    <Addon
      image="mifare-sticker.png"
      label="Evolis Ribbon"
      storeItem="updateTestAddon"
    />
    <Addon
      image="paxton-10-fobs.png"
      label="Card Printer"
      storeItem="updateTestAddon"
    />
    <Addon
      image="mifare-wristband.png"
      label="Card Printer"
      storeItem="updateTestAddon"
    />
    <Addon
      image="mifare-wristband-blue.png"
      label="Card Printer"
      storeItem="updateTestAddon"
    />
    <Addon
      image="mifare-wristband-yellow.png"
      label="Card Printer"
      storeItem="updateTestAddon"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Addon from "@/components/Addon.vue";

export default {
  name: "Fobs & Tokens",
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
