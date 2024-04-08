<script setup lang="ts">
import { twMerge } from "tailwind-merge";

interface PProps {
  color?: string;
}

const props = withDefaults(defineProps<PProps>(), {
  color: "text-gray-900 dark:text-white",
});

const defaultClasses = "mb-3 last:mb-0 leading-normal";
const componentClasses = twMerge(defaultClasses, props.color);
</script>

<template>
  <p :class="componentClasses">
    <slot></slot>
  </p>
</template>
