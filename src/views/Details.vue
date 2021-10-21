<template>
  <Header msg="Details" />
  <h5 v-if="this.$store.getters.orgSize == 'Single'">
    To start configuring your solution, tell us about a bit about yourself
  </h5>
  <h5 v-if="this.$store.getters.orgSize == 'Multi'">
    We offer special discounts for multi-academy trusts. Please fill out your
    details below and a product specialist will contact you with more
    information
  </h5>
  <PageButtons
    previousPage="System Type"
    nextPage="Hardware"
    :nextText="setButtonText"
  />
  <div class="of-container">
    <form class="of-grid-small" of-grid>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="First Name"
          v-model="firstName"
          type="text"
          @input="updateFirstName"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="Last Name"
          v-model="lastName"
          type="text"
          @input="updateLastName"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="Organisation"
          v-model="orgName"
          type="text"
          @input="updateOrgName"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="Postcode"
          v-model="postcode"
          type="text"
          @input="updatePostcode"
        />
      </div>
      <div
        class="of-width-1-1 of-width-1-2@l"
        v-if="this.$store.getters.orgSize == 'Multi'"
      >
        <BaseInput
          label="Contact Number"
          v-model="contactNumber"
          type="tel"
          @input="updateContactNumber"
        />
      </div>
      <div
        class="of-width-1-1 of-width-1-2@l"
        v-if="this.$store.getters.orgSize == 'Multi'"
      >
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
  name: "Details",
  components: {
    Header,
    BaseInput,
    PageButtons,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      orgName: "",
      postcode: "",
      contactNumber: "",
      contactEmail: "",
    };
  },
  computed: {
    setButtonText: function () {
      return this.$store.getters.orgSize == "Multi" ? "Submit" : "";
    },
  },
  mounted() {
    if (this.$store.getters.firstName) {
      this.firstName = this.$store.getters.firstName;
    }
    if (this.$store.getters.lastName) {
      this.lastName = this.$store.getters.lastName;
    }
    if (this.$store.getters.orgName) {
      this.orgName = this.$store.getters.orgName;
    }
    if (this.$store.getters.postcode) {
      this.postcode = this.$store.getters.postcode;
    }
    if (this.$store.getters.contactNumber) {
      this.contactNumber = this.$store.getters.contactNumber;
    }
    if (this.$store.getters.contactEmail) {
      this.contactEmail = this.$store.getters.contactEmail;
    }
  },
  methods: {
    updateFirstName(e) {
      this.$store.commit("updateFirstName", e.target.value);
    },
    updateLastName(e) {
      this.$store.commit("updateLastName", e.target.value);
    },
    updateOrgName(e) {
      this.$store.commit("updateOrgName", e.target.value);
    },
    updatePostcode(e) {
      this.$store.commit("updatePostcode", e.target.value);
    },
    updateContactNumber(e) {
      this.$store.commit("updateContactNumber", e.target.value);
    },
    updateContactEmail(e) {
      this.$store.commit("updateContactEmail", e.target.value);
    },
  },
};
</script>
