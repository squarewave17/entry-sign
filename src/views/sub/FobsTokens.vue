<template>
  <Header msg="Fobs & Tokens" />
  <router-link class="back-button" to="/product-addons">Back</router-link>
  <div class="of-container of-py-6 ac-nav-container">
    <Addon
      image="mifare-coin-tag.png"
      label="Mifare Coin Tag"
      storeItem="MifareCoinTag"
    />
    <Addon image="mifare-fob.png" label="Mifare Fob" storeItem="MifareFob" />
    <Addon
      image="mifare-sticker.png"
      label="Mifare Sticker"
      storeItem="MifareSticker"
    />
    <Addon
      image="paxton-10-fobs.png"
      label="Paxton 10 Fobs"
      storeItem="Paxton110Fobs"
    />
    <Addon
      image="mifare-wristband.png"
      label="Mifare Wristband"
      storeItem="MifareWristband"
    />
    <Addon
      image="mifare-wristband-blue.png"
      label="Mifare Wristband Blue"
      storeItem="MifareWristbandBlue"
    />
    <Addon
      image="mifare-wristband-yellow.png"
      label="Mifare Wristband Yellow"
      storeItem="MifareWristbandYellow"
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
