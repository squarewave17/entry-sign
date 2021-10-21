<template>
  <Header msg="Additional Entry Points" />
  <PageButtons previousPage="Customise" :nextPage="setButtonRoute" />
  <div class="of-container">
    <div>
      <h4 class="of-bolder">
        Would you like to have the ability to sign people in or out at
        additional entry and exit points in your organisation?
      </h4>
      <p>
        This is usually a staff entrance from a car park or another reception
        area. This could be another building or location provided they are on
        the same site and network.
      </p>
    </div>
    <div of-grid class="of-child-width-expand@s of-text-center">
      <div class="of-flex of-flex-column of-flex-between">
        <img class="of-p-8" src="@/assets/RFID-Terminal.png" />
        <NumberInput
          label="RFID Terminal"
          v-model="additionalRFID"
          type="number"
          @input="updateAdditionalRFID($event)"
        />
      </div>
      <div class="of-flex of-flex-column of-flex-between">
        <img class="of-p-8" src="@/assets/System-Desk-Mount.png" />
        <NumberInput
          label="Desk Mount"
          v-model="additionalDM"
          type="number"
          @input="updateAdditionalDesk($event)"
        />
      </div>
      <div class="of-flex of-flex-column of-flex-between">
        <img class="of-p-8" src="@/assets/System-Wall-Mount.png" />
        <NumberInput
          label="Wall Mount"
          v-model="additionalWM"
          type="number"
          @input="updateAdditionalWall($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
import NumberInput from "@/components/NumberInput.vue";
export default {
  name: "Additional Entry Points",
  components: {
    Header,
    PageButtons,
    NumberInput,
  },
  data() {
    return {
      additionalRFID: "",
      additionalDM: "",
      additionalWM: "",
    };
  },
  computed: {
    setButtonRoute: function () {
      return this.$store.getters.orgType == "Education"
        ? "Software"
        : "Access Door Control";
    },
  },
  mounted() {
    if (this.$store.getters.additionalRFID) {
      this.additionalRFID = this.$store.getters.additionalRFID;
    }
    if (this.$store.getters.additionalDesk) {
      this.additionalDM = this.$store.getters.additionalDesk;
    }
    if (this.$store.getters.additionalWall) {
      this.additionalWM = this.$store.getters.additionalWall;
    }
  },
  methods: {
    updateAdditionalRFID(v) {
      this.additionalRFID = v;
    },
    updateAdditionalDesk(v) {
      this.additionalDM = v;
    },
    updateAdditionalWall(v) {
      this.additionalWM = v;
    },
  },
  watch: {
    additionalRFID() {
      this.$store.commit("updateAdditionalRFID", this.additionalRFID);
    },
    additionalDM() {
      this.$store.commit("updateAdditionalDesk", this.additionalDM);
    },
    additionalWM() {
      this.$store.commit("updateAdditionalWall", this.additionalWM);
    },
  },
};
</script>

<style scoped>
img {
  user-select: none;
}
</style>
