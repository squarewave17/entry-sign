<!-- SYSTEM CONFIGUTATOR -->
<template>
  <Header msg="Start" />
  <div class="of-container">
    <h4 class="of-text-weight-bold">
      So that we can build your system, we need some information to create your
      solution.
    </h4>

    <h5>Is your organisation Education or Corporate</h5>

    <div class="of-flex of-flex-center">
      <ImgRadio
        v-model="orgType"
        value="Education"
        label="Education"
        img="logo.png"
        @click="updateOrgType"
      />
      <ImgRadio
        v-model="orgType"
        value="Corporate"
        label="Corporate"
        img="logo.png"
        @click="updateOrgType"
      />
    </div>
  </div>
  <PageButtons nextPage="System Type" />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
import ImgRadio from "@/components/ImgRadio.vue";
export default {
  name: "Start",
  components: {
    Header,
    PageButtons,
    ImgRadio,
  },
  data() {
    return {
      orgType: "",
    };
  },
  methods: {
    updateOrgType(e) {
      this.$store.commit("updateOrgType", e.target.value);
    },
  },
};
</script>

<style scoped></style>
