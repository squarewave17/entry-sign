<template>
  <Header msg="Entry Sign Addons" />
  <router-link class="back-button" to="/product-addons">Back</router-link>
  <div class="of-container of-py-6 ac-nav-container">
    <Addon
      image="QR-code-scanner.png"
      label="QR Code Scanner"
      storeItem="QRCodeScanner"
    />
    <Addon
      image="Fire-Alarm-Interface.png"
      label="Fire Alarm Interface"
      storeItem="FireAlarmInterface"
    />
    <Addon
      image="evolis-ribbon.png"
      label="Evolis Ribbon"
      storeItem="EvolisRibbon"
    />
    <Addon
      image="card-printer.png"
      label="Card Printer"
      storeItem="CardPrinter"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Addon from "@/components/Addon.vue";

export default {
  name: "Entry Sign Addons",
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
