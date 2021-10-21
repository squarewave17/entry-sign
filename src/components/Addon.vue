<template>
  <div class="of-flex of-flex-column addon-item">
    <img class="of-p-8" :src="require(`@/assets/${image}`)" />
    <NumberInput
      :label="label"
      v-model="addon"
      type="number"
      @input="updateAddon($event)"
    />
  </div>
</template>

<script>
import NumberInput from "@/components/NumberInput.vue";
export default {
  name: "Addon",
  components: {
    NumberInput,
  },
  props: {
    label: {
      type: String,
    },
    image: {
      type: String,
    },
    storeItem: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      addon: "",
      storeName: "",
    };
  },
  methods: {
    updateAddon(v) {
      this.addon = v;
    },
  },
  watch: {
    addon() {
      this.$store.commit(this.storeItem, this.addon);
    },
  },
};
</script>

<style scoped>
.addon-item {
  display: flex;
  align-items: center;
}
img {
  user-select: none;
  max-width: 300px;
}
</style>
