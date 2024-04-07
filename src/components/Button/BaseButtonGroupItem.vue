<script setup lang="ts">
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  color?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "md",
  color: "text-gray-600 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100",
});

const defaultClasses =
  "flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 sm:text-base sm:px-6";
const componentClasses = twMerge(defaultClasses, props.color);
</script>

<template>
  <button :class="componentClasses">
    <slot></slot>
  </button>
</template>
