<template>
  <Header msg="Access Door Control" />
  <h5>
    Would you like EntrySign to integrate with a door access control solution?
  </h5>

  <PageButtons
    :previousPage="setButtonRoute"
    nextPage="Infection Control Packages"
    :nextText="setButtonText"
  />
  <div class="of-container of-grid-2-col">
    <BaseSelect
      :options="adcoptions"
      v-model="doorAccess"
      label="Select Something"
      @input="updateAccessDoorControl"
    />
    <div class="graphic-container">
      <img
        v-if="
          this.$store.getters.accessDoorControl == 'Other' ||
          this.$store.getters.accessDoorControl == null
        "
        class="of-p-8"
        src="@/assets/Door-Access-Control.png"
      />
      <img
        v-if="this.$store.getters.accessDoorControl == 'Paxton'"
        class="of-p-8"
        src="@/assets/paxton.png"
      />
      <img
        v-if="this.$store.getters.accessDoorControl == 'Stanley'"
        class="of-p-8"
        src="@/assets/stanley.png"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
import BaseSelect from "@/components/BaseSelect.vue";
export default {
  name: "Access Door Control",
  components: {
    Header,
    PageButtons,
    BaseSelect,
  },
  data() {
    return {
      adcoptions: ["Paxton", "Stanley", "Other"],

      doorAccess: "",
    };
  },
  computed: {
    setButtonRoute: function () {
      return this.$store.getters.orgType == "Education"
        ? "Software"
        : "Additional Entry Points";
    },
    setButtonText: function () {
      return this.doorAccess == "" ? "Decide Later" : "";
    },
  },
  methods: {
    updateAccessDoorControl(e) {
      this.$store.commit("updateAccessDoorControl", e.target.value);
    },
  },
};
</script>

<style scoped>
.graphic-container {
  min-height: 300px;
  width: 100%;
  background: var(--of-light);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
}
</style>
