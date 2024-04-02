import { config, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HelloWorld from "../HelloWorld.vue";

// References: https://stackoverflow.com/questions/72260793/how-to-mock-stub-vue-i18n#answer-75485837
config.global.mocks = {
  $t: (tKey: string) => tKey,
};

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello World!" } });
    expect(wrapper.text()).toContain("Hello World!");
  });
});
