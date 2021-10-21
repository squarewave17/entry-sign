<template>
  <input
    type="checkbox"
    :checked="modelValue === value"
    v-bind="$attrs"
    @change="$emit('update:modelValue', $event.target.checked)"
    class="of-checkbox"
  />
  <label v-if="label">{{ label }}</label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
