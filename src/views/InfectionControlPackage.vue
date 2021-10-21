<template>
  <Header msg="Infection Control Package" />
  <h4 class="of-bolder">
    Would you like to include our infection control package?
  </h4>
  <p>Full Package - All 3 for 10% off.</p>
  <PageButtons previousPage="Access Door Control" nextPage="Product Addons" />
  <div class="of-container">
    <div class="of-grid-3-col">
      <label
        ><div class="of-flex of-flex-column of-flex-between">
          <input
            type="checkbox"
            value="Touch Free Sign In"
            v-model="ICP"
            @change="updateIcp"
          />
          <div class="imgWrap">
            <img src="@/assets/Touch-Free.png" />
            <h4>Touch Free Sign In</h4>
          </div>
        </div>
      </label>

      <label>
        <div class="of-flex of-flex-column of-flex-between">
          <input
            type="checkbox"
            value="Smart Connected Sanitisation"
            v-model="ICP"
            @change="updateIcp"
          />
          <div class="imgWrap">
            <img src="@/assets/Smart-Sanitisation.png" />
            <h4>Smart Connected Sanitisation</h4>
          </div>
        </div>
      </label>
      <label>
        <div class="of-flex of-flex-column of-flex-between">
          <input
            type="checkbox"
            value="Rapid Temperature Screening"
            v-model="ICP"
            @change="updateIcp"
          />
          <div class="imgWrap">
            <img src="@/assets/Temp-Monitor.png" />
            <h4>Rapid Temperature Screening</h4>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import PageButtons from "@/components/PageButtons.vue";
export default {
  name: "Infection Control Package",
  components: {
    Header,
    PageButtons,
  },
  data() {
    return {
      ICP: [
        "Touch Free Sign In",
        "Smart Connected Sanitisation",
        "Rapid Temperature Screening",
      ],
    };
  },
  computed: {},
  methods: {
    updateIcp() {
      console.log("trig");
      this.$store.commit("updateIcp", this.ICP);
    },
  },
};
</script>

<style scoped>
input[type="checkbox"] {
  display: none;
}

.imgWrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: 100%;
  position: relative;
  transition-duration: 0.2s;
  transform-origin: 50% 50%;
  cursor: pointer;
}

.imgWrap:before {
  background-color: white;
  color: white;
  content: " ";
  border-radius: 50%;
  border: 1px solid grey;
  position: absolute;
  top: -5px;
  left: -5px;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 28px;
  transition-duration: 0.4s;
  transform: scale(0);
}

input[type="checkbox"]:checked + .imgWrap {
  border-color: var(--of-light);
  background-color: var(--of-light);
}

input[type="checkbox"]:checked + .imgWrap:before {
  content: "✓";
  background-color: grey;
  transform: scale(1);
}

input[type="checkbox"]:checked + .imgWrap {
  transform: scale(0.9);
  /* box-shadow: 0 0 5px #333; */
  z-index: -1;
}
</style>
