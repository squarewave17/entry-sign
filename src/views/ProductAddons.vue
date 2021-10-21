<template>
  <Header msg="Product Addons" />
  <PageButtons previousPage="Infection Control Packages" nextPage="Summary" />
  <div class="of-container of-py-6 ac-nav-container">
    <ImgLink
      label="Entrysign Add-ons"
      image="welcome-screen.png"
      route="/product-addons/entrysign-addons"
      width="50%"
    />
    <ImgLink
      label="Fobs & Tokens"
      image="mifare-wristband.png"
      route="/product-addons/fobs-and-tokens"
      width="50%"
    />
    <ImgLink
      label="Terminals"
      image="RFID-Terminal.png"
      route="/product-addons/terminals"
    />
    <ImgLink
      label="Labels & Buisiness Cards"
      image="entrysign-seiko-labels.png"
      route="/product-addons/labels-cards"
    />
    <ImgLink
      label="ID Cards & Holders"
      image="easy-door-card-holder.png"
      route="/product-addons/id-cards"
    />
    <ImgLink
      label="Lanyards & Yo-Yo Reels"
      image="yo-yo-reel-round.png"
      route="/product-addons/lanyards"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
import ImgLink from "@/components/ImgLink.vue";
export default {
  name: "Product Addons",
  components: {
    Header,
    PageButtons,
    ImgLink,
  },
};
</script>

<style scoped>
.ac-nav-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
