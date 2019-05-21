import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import HiComp from "@/components/HiComp.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("HiComp.vue", () => {
  it("renders props.message when passed", () => {
    const message = "hey mannn";
    const wrapper = shallowMount(HiComp, {
      propsData: { message }
    });
    expect(wrapper.text()).toMatch(message);
  });
  it("renders error when message is too short", () => {
    const wrapper = shallowMount(HiComp, {
      propsData: { message: "hi " }
    });
    expect(wrapper.find(".error").exists()).toBe(true);
    wrapper.setProps({ message: "this is a longer message" });
    expect(wrapper.find(".error").exists()).toBe(false);
  });
});
