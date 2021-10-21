<template>
  <Header msg="Hardware" />
  <h4 class="of-text-weight-bold">Let's start building your system</h4>

  <h5>Choose from one of the following</h5>
  <PageButtons
    previousPage="Details"
    nextPage="Customise"
    :nextText="setButtonText"
  />
  <div class="of-container">
    <div class="of-grid-3-col">
      <ImgRadio
        v-model="hardwareOption"
        value="Desk Mount"
        label="Desk Mount"
        img="System-Desk-Mount.png"
        @click="updateHardwareType"
      />
      <ImgRadio
        v-model="hardwareOption"
        value="Wall Mount"
        label="Wall Mount"
        img="System-Wall-Mount.png"
        @click="updateHardwareType"
      />
      <ImgRadio
        v-model="hardwareOption"
        value="Kiosk"
        label="Kiosk"
        img="Kiosk-Black.png"
        @click="updateHardwareType"
      />
    </div>
    <div class="of-flex of-flex-row of-flex-center">
      <div class="of-p-7">
        <ListItem icon="aio-touchscreen.png" text="All-In-One Touchscreen" />
        <ListItem
          icon="Contactless.png"
          text="Contacless ID Card/Fob Bolt On"
        />

        <ListItem icon="idCard.png" text="1 ID Card Artwork Design" />
        <ListItem icon="Software.png" text="Entrysign Software" />
        <ListItem icon="Thermal.png" text="Thermal Label Printer" />
      </div>
      <div class="of-p-7">
        <ListItem
          icon="iconMainScreen3.png"
          text="Back Office Suite Software"
        />

        <ListItem
          icon="iconMainScreen2.png"
          text="Remote Configuration And Training"
        />
        <ListItem
          icon="entrysign.png"
          text="12 Months Entrysign Live Subscription"
        />
        <ListItem icon="pencil.png" text="1 Main Screen Artwork Design" />
        <ListItem icon="1year.png" text="1 Year Solution Support" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
import ImgRadio from "@/components/ImgRadio.vue";
import ListItem from "@/components/ListItem.vue";
export default {
  name: "Hardware",
  components: {
    Header,
    PageButtons,
    ListItem,
    ImgRadio,
  },
  data() {
    return {
      hardwareOption: "",
    };
  },
  mounted() {
    if (this.$store.getters.hardwareType) {
      this.hardwareOption = this.$store.getters.hardwareType;
    }
  },
  computed: {
    setButtonText: function () {
      return this.hardwareOption == "" ? "Decide Later" : "";
    },
  },
  methods: {
    updateHardwareType(e) {
      this.$store.commit("updateHardwareType", e.target.value);
    },
  },
};
</script>

<style scoped></style>
