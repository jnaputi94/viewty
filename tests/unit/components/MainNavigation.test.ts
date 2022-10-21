import { mount } from "@vue/test-utils";

import MainNavigationVue from "@/components/MainNavigation.vue";

describe("MainNavigation", () => {
  it("displays the company name", () => {
    const wrapper = mount(MainNavigationVue);

    expect(wrapper.text()).toMatch("Viewty");
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNavigationVue);

    const navigationMenuItems = wrapper
      .findAll("[data-test='main-nav-list-item']")
      .map((navigationMenuItem) => navigationMenuItem.text());

    expect(navigationMenuItems).toEqual([
      "Teams",
      "Locations",
      "Life At Viewty",
      "How We Hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("When the user is logged out", () => {
    it("prompts the user to sign in", async () => {
      const wrapper = mount(MainNavigationVue);

      const loginButton = wrapper.find("[data-test='login-button']");
      const profileImage = wrapper.find("[data-test='profile-image']");

      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });

  describe("When the user is logged in", () => {
    it("displays the user profile picture", async () => {
      const wrapper = mount(MainNavigationVue);

      const loginButton = wrapper.find("[data-test='login-button']");
      let profileImage = wrapper.find("[data-test='profile-image']");

      expect(loginButton.exists()).toBe(true);

      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
  });
});
