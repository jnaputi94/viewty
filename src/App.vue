<template>
  <MainNavigation />
  <MainNavigation />
  <MainNavigation />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavigation from "@/components/MainNavigation.vue";

export default defineComponent({
  name: "App",
  components: {
    MainNavigation,
  },
});
</script>
