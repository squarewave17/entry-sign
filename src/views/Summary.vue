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
          <h4 class="of-text-bold">Your System</h4>
          <p>Organisation Type: {{ $store.getters.orgType }}</p>

          <p>Organisation Size: {{ $store.getters.orgSize }}</p>

          <p>Your Name: {{ $store.getters.firstName }}</p>

          <p>Your Last Name: {{ $store.getters.lastName }}</p>

          <p>Organisation Name: {{ $store.getters.orgName }}</p>

          <p>Postcode: {{ $store.getters.postcode }}</p>

          <p>Email: {{ $store.getters.contactEmail }}</p>

          <p>Phone: {{ $store.getters.contactNumber }}</p>

          <p>Mount Type: {{ $store.getters.hardwareType }}</p>

          <strong>Customisation</strong>

          <p>Layout: {{ $store.getters.layout }}</p>

          <p>Button Style: {{ $store.getters.buttonFill }}</p>

          <p>Border Radius: {{ $store.getters.buttonShape }}</p>

          <p>Page Style: {{ $store.getters.themeStyle }}</p>

          <p>Logo: {{ $store.getters.logoUpload }}</p>

          <p>Theme Colour: {{ $store.getters.themeColour }}</p>

          <p v-if="$store.getters.hardwareType == 'Kiosk'">
            Kiosk Colour: {{ $store.getters.kioskColor }}
          </p>

          <strong>Additional Entry Points</strong>

          <p>RFID: {{ $store.getters.additionalRFID }}</p>

          <p>Desk: {{ $store.getters.additionalDesk }}</p>

          <p>Wall: {{ $store.getters.additionalWall }}</p>

          <strong>Access Door Control</strong>

          <p>ADC: {{ $store.getters.accessDoorControl }}</p>

          <strong>Software</strong>

          <p>MIS: {{ $store.getters.misSystem }}</p>

          <strong>Infection Control Packages</strong>

          <p>Packages: {{ $store.getters.ICP }}</p>

          <strong>EntrySign Addons</strong>
          <p v-if="$store.getters.QRCodeScanner">
            QR Code Scanner: {{ $store.getters.QRCodeScanner }}
          </p>
          <p v-if="$store.getters.FireAlarmInterface">
            Fire Alarm Interface: {{ $store.getters.FireAlarmInterface }}
          </p>
          <p v-if="$store.getters.EvolisRibbon">
            Evolis Ribbon: {{ $store.getters.EvolisRibbon }}
          </p>
          <p v-if="$store.getters.CardPrinter">
            Card Printer: {{ $store.getters.CardPrinter }}
          </p>
          <!-- fobs and tokens -->
          <p v-if="$store.getters.MifareCoinTag">
            Mifare Coin Tag: {{ $store.getters.MifareCoinTag }}
          </p>
          <p v-if="$store.getters.MifareFob">
            Mifare Fob: {{ $store.getters.MifareFob }}
          </p>
          <p v-if="$store.getters.MifareSticker">
            Mifare Sticker: {{ $store.getters.MifareSticker }}
          </p>
          <p v-if="$store.getters.Paxton110Fobs">
            Paxton 10 Fobs: {{ $store.getters.Paxton110Fobs }}
          </p>
          <p v-if="$store.getters.MifareWristband">
            Mifare Wristband (black): {{ $store.getters.MifareWristbandr }}
          </p>
          <p v-if="$store.getters.MifareWristbandBlue">
            Mifare Wristband (blue): {{ $store.getters.MifareWristbandBlue }}
          </p>
          <p v-if="$store.getters.MifareWristbandYellow">
            Mifare Wristband (yellow):
            {{ $store.getters.MifareWristbandYellow }}
          </p>
          <!-- Labels and business cards -->
          <p v-if="$store.getters.EntrysignBrotherLabels">
            Entrysign Brother Labels:
            {{ $store.getters.EntrysignBrotherLabels }}
          </p>
          <p v-if="$store.getters.EntrysignSeikoLabels">
            Entrysign Seiko Labels:
            {{ $store.getters.EntrysignSeikoLabels }}
          </p>
          <p v-if="$store.getters.SeikoBusinessCards">
            Seiko Business Cards:
            {{ $store.getters.SeikoBusinessCards }}
          </p>
          <!-- ID Cards and Holders -->
          <p v-if="$store.getters.A7PlasticWallet">
            A7 Plastic Wallet:
            {{ $store.getters.A7PlasticWallet }}
          </p>
          <p v-if="$store.getters.CardHolderCloseFace">
            Card Holder Close Face:
            {{ $store.getters.CardHolderCloseFace }}
          </p>
          <p v-if="$store.getters.CardHolderOpenBlack">
            Card Holder Open Black:
            {{ $store.getters.CardHolderOpenBlack }}
          </p>
          <p v-if="$store.getters.CardHolderOpenClear">
            Card Holder Open Clear:
            {{ $store.getters.CardHolderOpenClear }}
          </p>
          <p v-if="$store.getters.CardHolderOpenNavy">
            Card Holder Open Navy:
            {{ $store.getters.CardHolderOpenNavy }}
          </p>
          <p v-if="$store.getters.CardHolderOpenOrange">
            Card Holder Open Orange:
            {{ $store.getters.CardHolderOpenOrange }}
          </p>
          <p v-if="$store.getters.CardHolderOpenPortrait">
            Card Holder Open Portrait:
            {{ $store.getters.CardHolderOpenPortrait }}
          </p>
          <p v-if="$store.getters.CardHolderOpenRed">
            Card Holder Open Red:
            {{ $store.getters.CardHolderOpenRed }}
          </p>
          <p v-if="$store.getters.CardHolderOpenRoyal">
            Card Holder Open Royal:
            {{ $store.getters.CardHolderOpenRoyal }}
          </p>
          <p v-if="$store.getters.EasyDoorCardHolder">
            Easy Door Card Holder:
            {{ $store.getters.EasyDoorCardHolder }}
          </p>
          <p v-if="$store.getters.MifareCards">
            Mifare Cards:
            {{ $store.getters.SMifareCards }}
          </p>
          <p v-if="$store.getters.PaxtonCards">
            Paxton Cards:
            {{ $store.getters.PaxtonCards }}
          </p>
          <p v-if="$store.getters.PVCISOCards">
            PVC ISO Cards:
            {{ $store.getters.PVCISOCards }}
          </p>
          <!-- Lannyards and yoyoys -->
          <p v-if="$store.getters.LanyardBlack">
            Lanyard Black:
            {{ $store.getters.LanyardBlack }}
          </p>
          <p v-if="$store.getters.LanyardDarkGreen">
            Lanyard Dark Green:
            {{ $store.getters.LanyardDarkGreen }}
          </p>
          <p v-if="$store.getters.LanyardGovernor">
            Lanyard Governor:
            {{ $store.getters.LanyardGovernor }}
          </p>
          <p v-if="$store.getters.LanyardGrey">
            Lanyard Grey:
            {{ $store.getters.LanyardGrey }}
          </p>
          <p v-if="$store.getters.LanyardNavy">
            Lanyard Navy:
            {{ $store.getters.LanyardNavy }}
          </p>
          <p v-if="$store.getters.LanyardOrange">
            Lanyard Orange:
            {{ $store.getters.LanyardOrange }}
          </p>
          <p v-if="$store.getters.LanyardRed">
            Lanyard Red:
            {{ $store.getters.LanyardRed }}
          </p>
          <p v-if="$store.getters.LanyardRoyalBlue">
            Lanyard Royal Blue:
            {{ $store.getters.LanyardRoyalBlue }}
          </p>
          <p v-if="$store.getters.LanyardStaff">
            Lanyard Staff:
            {{ $store.getters.LanyardStaff }}
          </p>
          <p v-if="$store.getters.LanyardVisitor">
            Lanyard Visitor:
            {{ $store.getters.LanyardVisitor }}
          </p>
          <p v-if="$store.getters.LanyardYellow">
            Lanyard Yellow:
            {{ $store.getters.LanyardYellow }}
          </p>
          <p v-if="$store.getters.YoYoReelOval">
            Yo-Yo Reel Oval:
            {{ $store.getters.YoYoReelOval }}
          </p>
          <p v-if="$store.getters.YoYoReelRound">
            Yo-Yo Reel Round:
            {{ $store.getters.YoYoReelRound }}
          </p>
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
