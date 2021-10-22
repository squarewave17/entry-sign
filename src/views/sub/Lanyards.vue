<template>
  <Header msg="Lanyards" />
  <router-link class="back-button" to="/product-addons">Back</router-link>
  <div class="of-container of-py-6 ac-nav-container">
    <Addon
      image="lanyard-black.png"
      label="Lanyard Black"
      storeItem="LanyardBlack"
    />
    <Addon
      image="lanyard-dark-green.png"
      label="Lanyard Dark Green"
      storeItem="LanyardDarkGreen"
    />
    <Addon
      image="lanyard-governor.png"
      label="Lanyard Governor"
      storeItem="LanyardGovernor"
    />
    <Addon
      image="lanyard-grey.png"
      label="Lanyard Grey"
      storeItem="LanyardGrey"
    />
    <Addon
      image="lanyard-navy.png"
      label="Lanyard Navy"
      storeItem="LanyardNavy"
    />
    <Addon
      image="lanyard-orange.png"
      label="Lanyard Orange"
      storeItem="LanyardOrange"
    />
    <Addon image="lanyard-red.png" label="Lanyard Red" storeItem="LanyardRed" />
    <Addon
      image="lanyard-royal-blue.png"
      label="Lanyard Royal Blue"
      storeItem="LanyardRoyalBlue"
    />
    <Addon
      image="lanyard-staff.png"
      label="Lanyard Staff"
      storeItem="LanyardStaff"
    />
    <Addon
      image="lanyard-visitor.png"
      label="Lanyard Visitor"
      storeItem="LanyardVisitor"
    />
    <Addon
      image="lanyard-yellow.png"
      label="Lanyard Yellow"
      storeItem="LanyardYellow"
    />
    <Addon
      image="yo-yo-reel-oval.png"
      label="Yo-Yo Reel Oval"
      storeItem="YoYoReelOval"
    />
    <Addon
      image="yo-yo-reel-round.png"
      label="Yo Yo Reel Round"
      storeItem="YoYoReelRound"
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
