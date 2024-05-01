<script setup lang="ts">
import BaseHeading from "./Typography/BaseHeading.vue";
import BaseP from "./Typography/BaseP.vue";

interface WelcomeItemProps {
  title: string;
}

const props = defineProps<WelcomeItemProps>();
</script>

<template>
  <div class="my-6 relative">
    <i
      class="w-12 h-12 border-2 rounded-lg flex place-items-center place-content-center absolute top-7 -left-24 bg-white dark:bg-eerie-black"
    >
      <slot name="icon"></slot>
    </i>
    <div>
      <BaseHeading tag="h5" class="font-semibold text-emerald-500">{{ props.title }}</BaseHeading>
      <BaseP color="dark:text-gray-400">
        <slot></slot>
      </BaseP>
    </div>
  </div>
</template>
