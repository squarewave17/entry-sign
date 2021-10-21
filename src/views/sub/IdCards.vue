<template>
  <Header msg="ID Cards" />
  <router-link class="back-button" to="/product-addons">Back</router-link>
  <div class="of-container of-py-6 ac-nav-container">
    <Addon
      image="a7-plastic-wallet.png"
      label="QR Code Scanner"
      storeItem="updateQRCodeScanner"
    />
    <Addon
      image="card-holder-close-face.png"
      label="Fire Alarm Interface"
      storeItem="updateTestAddon"
    />
    <Addon
      image="card-holder-open-black.png"
      label="Evolis Ribbon"
      storeItem="updateTestAddon"
    />
    <Addon
      image="card-holder-open-clear.png"
      label="Card Printer"
      storeItem="updateTestAddon"
    />
    <Addon
      image="card-holder-open-navy.png"
      label="Card Printer"
      storeItem="updateTestAddon"
    />
    <Addon
      image="card-holder-open-orange.png"
      label="Card Printer"
      storeItem="updateTestAddon"
    />
    <Addon
      image="card-holder-open-portrait.png"
      label="Card Printer"
      storeItem="updateTestAddon"
    />
    <Addon
      image="card-holder-open-red.png"
      label="Card Printer"
      storeItem="updateTestAddon"
    />
    <Addon
      image="card-holder-open-royal.png"
      label="Card Printer"
      storeItem="updateTestAddon"
    />
    <Addon
      image="card-printer.png"
      label="Card Printer"
      storeItem="updateTestAddon"
    />
    <Addon
      image="easy-door-card-holder.png"
      label="Card Printer"
      storeItem="updateTestAddon"
    />
    <Addon
      image="evolis-ribbon.png"
      label="Card Printer"
      storeItem="updateTestAddon"
    />
    <Addon
      image="mifare-cards.png"
      label="Card Printer"
      storeItem="updateTestAddon"
    />
    <Addon
      image="paxton-cards.png"
      label="Card Printer"
      storeItem="updateTestAddon"
    />
    <Addon
      image="pvc-iso-card.png"
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
  name: "ID Cards",
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
