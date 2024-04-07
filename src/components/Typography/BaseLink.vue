<script setup lang="ts">
import { RouterLink } from "vue-router";

interface LinkProps {
  to?: string;
  color?: string;
}

const props = withDefaults(defineProps<LinkProps>(), {
  to: "/",
  color: "text-primary-600 dark:text-primary-500",
});
</script>

<template>
  <RouterLink :to="to" :class="[props.color, 'inline-flex items-center hover:underline']">
    <slot></slot>
  </RouterLink>
</template>
