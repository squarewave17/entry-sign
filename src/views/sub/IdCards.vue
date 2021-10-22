<template>
  <Header msg="ID Cards" />
  <router-link class="back-button" to="/product-addons">Back</router-link>
  <div class="of-container of-py-6 ac-nav-container">
    <Addon
      image="a7-plastic-wallet.png"
      label="A7 Plastic Wallet"
      storeItem="A7PlasticWallet"
    />
    <Addon
      image="card-holder-close-face.png"
      label="Card Holder Close Face"
      storeItem="CardHolderCloseFace"
    />
    <Addon
      image="card-holder-open-black.png"
      label="Card Holder Open Black"
      storeItem="CardHolderOpenBlack"
    />
    <Addon
      image="card-holder-open-clear.png"
      label="Card Holder Open Clear"
      storeItem="CardHolderOpenClear"
    />
    <Addon
      image="card-holder-open-navy.png"
      label="Card Holder Open Navy"
      storeItem="CardHolderOpenNavy"
    />
    <Addon
      image="card-holder-open-orange.png"
      label="Card Holder Open Orange"
      storeItem="CardHolderOpenOrange"
    />
    <Addon
      image="card-holder-open-portrait.png"
      label="Card Holder Open Portrait"
      storeItem="CardHolderOpenPortrait"
    />
    <Addon
      image="card-holder-open-red.png"
      label="Card Holder Open Red"
      storeItem="CardHolderOpenRed"
    />
    <Addon
      image="card-holder-open-royal.png"
      label="Card Holder Open Royal"
      storeItem="CardHolderOpenRoyal"
    />
    <Addon
      image="easy-door-card-holder.png"
      label="Easy Door Card Holder"
      storeItem="EasyDoorCardHolder"
    />
    <Addon
      image="mifare-cards.png"
      label="Mifare Cards"
      storeItem="MifareCards"
    />
    <Addon
      image="paxton-cards.png"
      label="Paxton Cards"
      storeItem="PaxtonCards"
    />
    <Addon
      image="pvc-iso-card.png"
      label="PVC ISO Cards"
      storeItem="PVCISOCards"
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
