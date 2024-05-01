<script setup lang="ts">
import { defineAsyncComponent, ref, computed } from "vue";

interface IconProps {
  name: string;
}

const props = defineProps<IconProps>();
const icons = ref(import.meta.glob("./*.svg"));

const componentTag = computed(() => {
  return defineAsyncComponent(() => icons.value[`./${props.name}.svg`]());
});
</script>

<template>
  <component :is="componentTag" class="fill-current w-5" />
</template>
