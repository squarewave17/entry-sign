<template>
  <Header msg="Customiser" />
  <h4 class="of-text-weight-bold">Customise your screen design</h4>

  <h5>Choose a template to see how it looks</h5>
  <PageButtons previousPage="Hardware" nextPage="Additional Entry Points" />
  <div class="of-container-xlarge customiser-page">
    <div class="of-form-container of-mx-5">
      <form class="of-grid-small" of-grid>
        <div class="of-width-1-1">
          <BaseSelect
            :options="layoutOptions"
            v-model="layout"
            label="Layout Orientation"
            @input="updateLayout"
          />
        </div>
        <div class="of-width-1-1">
          <BaseSelect
            :options="buttonFills"
            v-model="buttonFill"
            label="Button Fill"
            @input="updateButtonFill"
          />
        </div>
        <div class="of-width-1-1">
          <BaseSelect
            :options="buttonShapes"
            v-model="buttonShape"
            label="Button Shape"
            @input="updateButtonShape"
          />
        </div>

        <div class="of-width-1-1">
          <BaseSelect
            :options="themeStyles"
            v-model="themeStyle"
            label="Page Style"
            @input="updateThemeStyle"
          />
        </div>
        <div class="of-width-1-1">
          <BaseInput
            label="Logo URL"
            v-model="logoUpload"
            type="url"
            @input="updatelogo"
          />
        </div>
        <div class="of-width-1-1">
          <BaseInput
            label="Theme Colour"
            v-model="themeColour"
            type="color"
            @input="updateThemeColour"
          />
        </div>
        <div
          class="of-width-1-1"
          v-if="this.$store.getters.hardwareType == 'Kiosk'"
        >
          <BaseSelect
            :options="kioskColors"
            v-model="kioskColor"
            label="Kiosk Colour"
            @input="updateKioskColor"
          />
        </div>
      </form>
    </div>
    <Customiser :textColor="textColor" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import Customiser from "@/components/Customiser.vue";
import chroma from "chroma-js";
export default {
  name: "Customise",
  components: {
    Header,
    PageButtons,
    BaseInput,
    BaseSelect,
    Customiser,
  },
  data() {
    return {
      layoutOptions: ["Vertical", "Horizontal"],
      buttonFills: ["Outline", "Solid"],
      buttonShapes: ["Rectangle", "Rounded", "Square", "Circle"],
      themeStyles: ["Filled", "Light"],
      kioskColors: ["Black", "White"],

      layout: "",
      buttonFill: "",
      buttonShape: "",
      themeColour: "",
      themeStyle: "",
      logoUpload: "",
      kioskColor: "",
      textColor: "",
    };
  },
  mounted() {
    if (this.$store.getters.layout) {
      this.layout = this.$store.getters.layout;
    }
    if (this.$store.getters.buttonFill) {
      this.buttonFill = this.$store.getters.buttonFill;
    }
    if (this.$store.getters.buttonShape) {
      this.buttonShape = this.$store.getters.buttonShape;
    }
    if (this.$store.getters.themeColour) {
      this.themeColour = this.$store.getters.themeColour;
    }
    if (this.$store.getters.themeStyle) {
      this.themeStyle = this.$store.getters.themeStyle;
    }
    if (this.$store.getters.logoUpload) {
      this.logoUpload = this.$store.getters.logoUpload;
    }
    if (this.$store.getters.textColor) {
      this.textColor = this.$store.getters.textColor;
    }
    if (this.$store.getters.kioskColor) {
      this.kioskColor = this.$store.getters.kioskColor;
    }
  },
  methods: {
    updateLayout(e) {
      this.$store.commit("updateLayout", e.target.value);
    },
    updateButtonFill(e) {
      this.$store.commit("updateButtonFill", e.target.value);
    },
    updateButtonShape(e) {
      this.$store.commit("updateButtonShape", e.target.value);
    },
    updateThemeColour(e) {
      this.$store.commit("updateThemeColour", e.target.value);
      const luminance = chroma(e.target.value).luminance();
      if (luminance < 0.3 && this.themeStyle == "Filled") {
        this.textColor = "#fff";
      } else {
        this.textColor = "#141414";
      }
    },
    updateKioskColor(e) {
      this.$store.commit("updateKioskColor", e.target.value);
      this.kioskColor = e.target.value;
    },
    updateThemeStyle(e) {
      this.$store.commit("updateThemeStyle", e.target.value);
      this.themeStyle = e.target.value;
    },
    updatelogo(e) {
      this.$store.commit("updatelogo", e.target.value);
    },
    checkContrast() {},
  },
};
</script>

<style scoped>
.customiser-page {
  margin: auto;
  display: flex;
  flex-direction: row;
}
.of-form-container {
  width: 30%;
}

.kiosk-color {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
