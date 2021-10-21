<template>
  <div class="number-input">
    <label v-if="label" class="of-form-label">{{ label }}</label>
    <div class="input-container">
      <span class="inc" @click="incrementDecrementNumber('-')">
        <span of-icon="icon: minus-circle"></span>
      </span>

      <input
        v-bind="$attrs"
        type="number"
        ref="input"
        :placeholder="0"
        class="of-input"
        :value="modelValue"
        autofocus="false"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div class="input-group-append">
        <span class="inc" @click="incrementDecrementNumber('+')">
          <span of-icon="icon: plus-circle"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  methods: {
    incrementDecrementNumber(action) {
      switch (action) {
        case "+":
          this.$refs["input"].stepUp();
          break;
        case "-":
          this.$refs["input"].stepDown();
          break;
      }
      /* Need to manually $emit here since the above methods doesn't trigger our computed set method. */
      this.$emit("input", this.$refs["input"].value);
    },
  },
};
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  cursor: pointer;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

input.of-input {
  width: 50px;
  text-align: center;
  border: none;
}

label {
  max-width: 365px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
}

.of-icon {
  color: var(--of-primary);
}
</style>
