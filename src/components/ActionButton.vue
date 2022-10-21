<template>
  <button @click="handleClick" :class="buttonClass">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActionButton",
  props: {
    text: { type: String, required: true },
  },
  data() {
    return {
      primary: true,
    };
  },
  methods: {
    handleClick() {
      console.log("Clicked");
    },
  },
  computed: {
    buttonClass() {
      return {
        primary: this.primary,
      };
    },
  },
});
</script>

<style scoped>
button {
  @apply px-5 py-3 rounded font-medium;
}

.primary {
  @apply text-white border-0 bg-black hover:shadow-white;
}
</style>
