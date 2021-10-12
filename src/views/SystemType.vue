<!-- SYSTEM CONFIGUTATOR -->
<template>
  <Header msg="System Type" />

  <h5>Is your organisation Education or Corporate</h5>

  <div class="of-flex of-flex-center">
    <ImgRadio
      v-model="info.orgSize"
      value="Single"
      label="Single"
      img="logo.png"
      @click="updateOrgSize"
    />
    <ImgRadio
      v-model="info.orgSize"
      value="Multi"
      label="Multi"
      img="logo.png"
      @click="updateOrgSize"
    />
  </div>
  <PageButtons previousPage="Start" nextPage="Hardware" />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
import ImgRadio from "@/components/ImgRadio.vue";
export default {
  name: "System Type",
  components: {
    Header,
    PageButtons,
    ImgRadio,
  },
  data() {
    return {
      info: {
        orgSize: "",
      },
    };
  },
  methods: {
    updateOrgSize(e) {
      this.$store.commit("updateOrgSize", e.target.value);
    },
  },
};
</script>

<style scoped></style>
