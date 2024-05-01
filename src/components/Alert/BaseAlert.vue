<script setup lang="ts">
import BaseIcon from "../Icons/BaseIcon.vue";
import type { AlertType } from "./types";

interface AlertProps {
  title?: string;
  description?: string;
  type?: AlertType;
}

const props = withDefaults(defineProps<AlertProps>(), {
  title: "Success",
  description: "Place your alert description in here",
  type: "success",
});

const alertTitle: Record<AlertType, string> = {
  success: "Success",
  info: "Information",
  warning: "Warning",
  danger: "Error",
};

const alertIconClases: Record<AlertType, string> = {
  success: "bg-emerald-500",
  info: "bg-blue-500",
  warning: "bg-yellow-400",
  danger: "bg-red-500",
};

const alertTextClases: Record<AlertType, string> = {
  success: "text-emerald-500 dark:text-emerald-400",
  info: "text-blue-500 dark:text-blue-400",
  warning: "text-yellow-400 dark:text-yellow-300",
  danger: "text-red-500 dark:text-red-400",
};
</script>

<template>
  <div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-center w-12" :class="alertIconClases[props.type]">
      <div class="w-6 h-6 text-white">
        <slot name="icon">
          <BaseIcon name="IconAlertSuccess" v-if="props.type === 'success'" />
          <BaseIcon name="IconAlertInfo" v-if="props.type === 'info'" />
          <BaseIcon name="IconAlertWarning" v-if="props.type === 'warning'" />
          <BaseIcon name="IconAlertDanger" v-if="props.type === 'danger'" />
        </slot>
      </div>
    </div>
    <div class="px-4 py-2 -mx-3">
      <div class="mx-3">
        <slot>
          <span class="font-semibold" :class="alertTextClases[props.type]">
            {{ props.title || alertTitle[props.type] }}
          </span>
          <p class="text-sm text-gray-600 dark:text-gray-200">{{ props.description }}</p>
        </slot>
      </div>
    </div>
  </div>
</template>
