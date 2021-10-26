<template>
  <Header msg="Summary" />
  <div>
    <h4 class="of-bolder">Here's a summary of your EntrySign solution</h4>
    <p>Review your system below</p>
  </div>
  <PageButtons previousPage="Contact Details" />
  <div class="of-container">
    <div class="of-grid-2-col">
      <div class="system-left">
        <img src="@/assets/System-Desk-Mount.png" />
        <div style="text-align: left">
          <p>Includes:</p>
          <div class="of-flex of-flex-row of-flex-center">
            <div>
              <ListItem
                icon="aio-touchscreen.png"
                text="All-In-One Touchscreen"
              />
              <ListItem
                icon="Contactless.png"
                text="Contacless ID Card/Fob Bolt On"
              />

              <ListItem icon="idCard.png" text="1 ID Card Artwork Design" />
              <ListItem icon="Software.png" text="Entrysign Software" />
              <ListItem icon="Thermal.png" text="Thermal Label Printer" />
            </div>
            <div class="list-right">
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
      </div>
      <div>
        <div class="system-build">
          <h4>Your System</h4>
          Organisation Type: {{ $store.getters.orgType }}
          <br />
          Organisation Size: {{ $store.getters.orgSize }}
          <br />
          Your Name: {{ $store.getters.firstName }}
          <br />
          Your Last Name: {{ $store.getters.lastName }}
          <br />
          Organisation Name: {{ $store.getters.orgName }}
          <br />
          Postcode: {{ $store.getters.postcode }}
          <br />
          Email {{ $store.getters.contactEmail }}
          <br />
          Phone {{ $store.getters.contactNumber }}
          <br />
          Mount Type: {{ $store.getters.hardwareType }}
          <br />
          <strong>Customisation</strong>
          <br />
          Layout: {{ $store.getters.layout }}
          <br />
          Button Style: {{ $store.getters.buttonFill }}
          <br />
          Border Radius: {{ $store.getters.buttonShape }}
          <br />
          Page Style: {{ $store.getters.themeStyle }}
          <br />
          Logo: {{ $store.getters.logoUpload }}
          <br />
          Theme Colour: {{ $store.getters.themeColour }}
          <br />
          Kiosk Colour: {{ $store.getters.kioskColor }}
          <br />
          <strong>Additional Entry Points</strong>
          <br />
          RFID: {{ $store.getters.additionalRFID }}
          <br />
          Desk: {{ $store.getters.additionalDesk }}
          <br />
          Wall: {{ $store.getters.additionalWall }}
          <br />
          <strong>Access Door Control</strong>
          <br />
          ADC: {{ $store.getters.accessDoorControl }}
          <br />
          <strong>Software</strong>
          <br />
          MIS: {{ $store.getters.misSystem }}
          <br />
          <strong>Infection Control Packages</strong>
          <br />
          TFS: {{ $store.getters.ICP }}
          <br />
          <strong>EntrySign Addons</strong>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
import ListItem from "@/components/ListItem.vue";
export default {
  name: "Summary",
  components: {
    Header,
    PageButtons,
    ListItem,
  },
  data() {
    return {
      VMSSystem: "",
    };
  },
  mounted() {
    if (this.$store.getters.hardwareType) {
      this.VMSSystem = this.$store.getters.hardwareType;
    }
  },
};
</script>

<style scoped>
.system-build {
  text-align: left;
  min-height: 300px;
  width: 100%;
  background: var(--of-light);
  border-radius: 10px;
  padding: 50px;
  margin: 10px;
}

.system-left {
  padding: 10px;
  margin: 10px;
}

.system-left > img {
  padding-bottom: 50px;
}

.list-right {
  padding-left: 50px;
}
</style>
