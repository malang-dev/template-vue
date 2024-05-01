<script setup lang="ts">
import { RouterLink } from "vue-router";

interface LinkProps {
  to?: string;
  color?: string;
  underline?: boolean;
}

const props = withDefaults(defineProps<LinkProps>(), {
  to: "/",
  color: "text-primary-600 dark:text-primary-500",
  underline: false,
});

const underlineClases = props.underline ? "hover:underline" : "";
</script>

<template>
  <RouterLink :to="to" :class="[props.color, 'inline-flex items-center', underlineClases]">
    <slot></slot>
  </RouterLink>
</template>
