<!-- SYSTEM CONFIGUTATOR -->
<template>
  <Header msg="System Type" />

  <h5>Is your organisation Education or Corporate</h5>
  <PageButtons previousPage="Start" nextPage="Details" />
  <div class="of-container">
    <div class="of-grid-2-col">
      <ImgRadio
        v-model="orgSize"
        value="Single"
        label="Single"
        img="Single-Organisation.png"
        @click="updateOrgSize"
      />
      <ImgRadio
        v-model="orgSize"
        value="Multi"
        label="Multi"
        img="MAT.png"
        @click="updateOrgSize"
      />
    </div>
  </div>
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
      orgSize: "",
    };
  },
  mounted() {
    if (this.$store.getters.orgSize) {
      this.orgSize = this.$store.getters.orgSize;
    }
  },
  methods: {
    updateOrgSize(e) {
      this.$store.commit("updateOrgSize", e.target.value);
    },
  },
};
</script>

<style scoped></style>
