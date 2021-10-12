<template>
  <Header msg="Customiser" />
  <div class="of-container-xlarge customiser-page">
    <div class="of-form-container of-mx-5">
      <form class="of-grid-small" of-grid>
        <div class="of-width-1-1">
          <BaseSelect
            :options="layoutOptions"
            v-model="info.layout"
            label="Layout Orientation"
            @input="updateLayout"
          />
        </div>
        <div class="of-width-1-1">
          <BaseSelect
            :options="buttonFills"
            v-model="info.buttonFill"
            label="Button Fill"
            @input="updateButtonFill"
          />
        </div>
        <div class="of-width-1-1">
          <BaseSelect
            :options="buttonShapes"
            v-model="info.buttonShape"
            label="Button Shape"
            @input="updateButtonShape"
          />
        </div>

        <div class="of-width-1-1">
          <BaseSelect
            :options="themeStyles"
            v-model="info.themeStyle"
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
      </form>
    </div>
    <Customiser :textColor="textColor" />
  </div>
  <PageButtons previousPage="Hardware" nextPage="Additional Entry Points" />
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
      info: {
        layout: "",
        buttonFill: "",
        buttonShape: "",
        themeColour: "",
        themeStyle: "",
        logoUpload: "",
      },
      textColor: "",
    };
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
</style>