<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { useAttrs } from "vue";

defineOptions({
  inheritAttrs: false,
});

interface HeadingProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  customSize?: string;
}

const props = withDefaults(defineProps<HeadingProps>(), {
  tag: "h1",
  color: "text-gray-900 dark:text-white",
  customSize: "",
});

const textSizes: Record<string, string> = {
  h1: "text-5xl",
  h2: "text-4xl",
  h3: "text-3xl",
  h4: "text-2xl",
  h5: "text-xl",
  h6: "text-lg",
};
const attrs = useAttrs();
const headingClasses = twMerge(
  "w-full",
  textSizes[props.tag],
  props.color,
  props.customSize,
  attrs.class as string,
);
const componentTag = props.tag;
</script>

<template>
  <component :is="componentTag" v-bind="$attrs" :class="headingClasses">
    <slot></slot>
  </component>
</template>
