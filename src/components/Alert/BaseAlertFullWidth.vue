<script setup lang="ts">
import BaseIcon from "../Icons/BaseIcon.vue";
import type { AlertType } from "./types";

interface AlertProps {
  description?: string;
  type?: AlertType;
}

const props = withDefaults(defineProps<AlertProps>(), {
  description: "Place your alert description in here",
  type: "success",
});

const alertBackgroundClases: Record<AlertType, string> = {
  success: "bg-emerald-500",
  info: "bg-blue-500",
  warning: "bg-yellow-400",
  danger: "bg-red-500",
};
</script>

<template>
  <div class="w-full text-white" :class="alertBackgroundClases[props.type]">
    <div class="container flex items-center justify-between px-6 py-4 mx-auto">
      <div class="flex">
        <div class="w-6 h-6 text-white">
          <slot name="icon">
            <BaseIcon name="IconAlertSuccess" v-if="props.type === 'success'" />
            <BaseIcon name="IconAlertInfo" v-if="props.type === 'info'" />
            <BaseIcon name="IconAlertWarning" v-if="props.type === 'warning'" />
            <BaseIcon name="IconAlertDanger" v-if="props.type === 'danger'" />
          </slot>
        </div>

        <p class="mx-3">{{ props.description }}</p>
      </div>

      <button
        class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none"
      >
        <BaseIcon name="IconX" />
      </button>
    </div>
  </div>
</template>
