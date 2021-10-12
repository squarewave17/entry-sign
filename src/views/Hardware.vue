<template>
  <Header msg="Hardware" />
  <div class="of-container">
    <div class="of-flex of-flex-center">
      <ImgRadio
        v-model="info.hardwareOption"
        value="Desk Mount"
        label="Desk Mount"
        img="logo.png"
        @click="updateHardwareType"
      />
      <ImgRadio
        v-model="info.hardwareOption"
        value="Wall Mount"
        label="Wall Mount"
        img="logo.png"
        @click="updateHardwareType"
      />
    </div>
    <div class="of-flex of-flex-row of-flex-center">
      <div class="of-p-7">
        <ListItem icon="logo.png" text="Contacless ID Card/Fob Bolt On" />
        <ListItem icon="logo.png" text="All-In-One Touchscreen" />
        <ListItem icon="logo.png" text="1 ID Card Artwork Design" />
        <ListItem icon="logo.png" text="Entrysign Software" />
        <ListItem icon="logo.png" text="Thermal Label Printer" />
      </div>
      <div class="of-p-7">
        <ListItem icon="logo.png" text="Back Office Suite Software" />

        <ListItem icon="logo.png" text="Remote Configuration And Training" />
        <ListItem
          icon="logo.png"
          text="12 Months Entrysign Live Subscription"
        />
        <ListItem icon="logo.png" text="1 Main Screen Artwork Design" />
        <ListItem icon="logo.png" text="1 Year Solution Support" />
      </div>
    </div>
  </div>
  <PageButtons previousPage="System Type" nextPage="Customise" />
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
      info: {
        hardwareOption: "",
      },
    };
  },
  methods: {
    updateHardwareType(e) {
      this.$store.commit("updateHardwareType", e.target.value);
    },
  },
};
</script>

<style scoped></style>
