<template>
  <img class="w-8 h-8 object-contain rounded-3xl" :src="imageSource" />
</template>

<script lang="ts">
export default {
  name: "ProfileImage",
  data() {
    return {
      imageSource: "https://robohash.org/fjell",
    };
  },
};
</script>
