<template>
  <Header msg="Contact Details" />
  <h5 v-if="this.$store.getters.orgSize == 'Single'">
    Last step! How can we contact you?
  </h5>
  <PageButtons
    previousPage="Product Addons"
    nextPage="Summary"
    :nextText="setButtonText"
  />
  <div class="of-container">
    <form class="of-grid-small" of-grid>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="Contact Number"
          v-model="contactNumber"
          type="tel"
          @input="updateContactNumber"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="Email"
          v-model="contactEmail"
          type="email"
          @input="updateContactEmail"
        />
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import BaseInput from "@/components/BaseInput.vue";
import PageButtons from "@/components/PageButtons.vue";

export default {
  name: "Contact Details",
  components: {
    Header,
    BaseInput,
    PageButtons,
  },
  data() {
    return {
      contactNumber: "",
      contactEmail: "",
    };
  },
  mounted() {
    if (this.$store.getters.contactNumber) {
      this.contactNumber = this.$store.getters.contactNumber;
    }
    if (this.$store.getters.contactEmail) {
      this.contactEmail = this.$store.getters.contactEmail;
    }
  },
  methods: {
    updateContactNumber(e) {
      this.$store.commit("updateContactNumber", e.target.value);
    },
    updateContactEmail(e) {
      this.$store.commit("updateContactEmail", e.target.value);
    },
  },
};
</script>
