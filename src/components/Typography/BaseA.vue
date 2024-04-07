<script setup lang="ts">
interface LinkProps {
  href?: string;
  color?: string;
}

const props = withDefaults(defineProps<LinkProps>(), {
  href: "",
  color: "text-primary-600 dark:text-primary-500",
});
</script>

<template>
  <a :href="href" :class="[props.color, 'inline-flex items-center hover:underline']">
    <slot></slot>
  </a>
</template>
