<template>
  <header class="w-full text-sm">
    <div class="w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="website" class="flex items-center h-full text-xl">{{
          company
        }}</a>

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              data-test="main-nav-list-item"
              v-for="(menuItem, index) in menuItems"
              :key="index"
              class="flex items-center h-full py-2.5 ml-9 first:ml-0"
            >
              {{ menuItem }}
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <ProfileImage
            data-test="profile-image"
            v-if="isLoggedIn"
            @click="logoutUser"
          />
          <ActionButton
            text="Sign In"
            data-test="login-button"
            v-else
            @click="loginUser"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";

export default defineComponent({
  name: "MainNavigation",
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: "Viewty",
      website: "https://www.breitbart.com/jobs/",
      isLoggedIn: false,
      menuItems: [
        "Teams",
        "Locations",
        "Life At Viewty",
        "How We Hire",
        "Students",
        "Jobs",
      ],
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
    logoutUser() {
      this.isLoggedIn = false;
    },
  },
});
</script>
