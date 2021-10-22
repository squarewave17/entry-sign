<template>
  <Header msg="MIS" />
  <h4>
    Would you like EntrySign to integrate with your school management system?
  </h4>
  <h5>
    Please select the MIS your organisation currently uses below. If you would
    not like MIS integration, select “None”.
  </h5>
  <PageButtons
    previousPage="Additional Entry Points"
    nextPage="Access Door Control"
  />
  <div class="of-container">
    <BaseSelect
      :options="misoptions"
      v-model="misSystem"
      label="MIS System"
      @input="updateMisSystem"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
import BaseSelect from "@/components/BaseSelect.vue";
export default {
  name: "Software",
  components: {
    Header,
    PageButtons,
    BaseSelect,
  },
  data() {
    return {
      misoptions: [
        "Capita SIMS",
        "Arbor",
        "isams",
        "Advanced Progresso",
        "ScholarPack",
        "BromCom",
        "RM Integris",
        "Other",
        "None",
      ],

      misSystem: "",
    };
  },
  methods: {
    updateMisSystem(e) {
      this.$store.commit("updateMisSystem", e.target.value);
    },
  },
  mounted() {
    if (this.$store.getters.misSystem) {
      this.misSystem = this.$store.getters.misSystem;
    }
  },
};
</script>

<style scoped></style>
