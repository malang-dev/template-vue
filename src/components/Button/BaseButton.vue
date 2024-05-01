<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import type { ButtonSize } from "./types";

interface ButtonProps {
  size?: ButtonSize;
  color?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "md",
  color:
    "bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-white",
});

const buttonSizeClasses: Record<ButtonSize, string> = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
  xl: "text-base px-6 py-3",
};

const defaultClasses =
  "flex items-center justify-center font-medium tracking-wide capitalize transition-colors duration-300 transform rounded-lg";
const componentClasses = twMerge(defaultClasses, buttonSizeClasses[props.size], props.color);
</script>

<template>
  <button :class="componentClasses">
    <slot></slot>
  </button>
</template>
