<script setup lang="ts">
const defaultClasses = "mb-3 last:mb-0 text-gray-900 dark:text-white leading-normal";
</script>

<template>
  <p :class="defaultClasses">
    <slot></slot>
  </p>
</template>
