<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import type { ButtonSize } from "./types";

interface ButtonProps {
  size?: ButtonSize;
  color?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "md",
  color: "dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700",
});

const defaultClasses =
  "flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse";
const componentClasses = twMerge(defaultClasses, props.color);
</script>

<template>
  <div :class="componentClasses">
    <slot></slot>
  </div>
</template>
