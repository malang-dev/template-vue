<!-- Reference input wrapper: https://codesandbox.io/p/sandbox/transparent-input-wrapper-in-vuejs-3-ml3hb -->
<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { useAttrs, useSlots } from "vue";
import type { InputSize } from "./types";
import { IsDefined } from "../../utils/is-defined";

defineOptions({
  inheritAttrs: false,
});

defineEmits(["update:modelValue"]);

interface InputProps {
  label: string;
  labelColor?: string;
  size?: InputSize;
  modelValue: string;
}

const slots = useSlots();
const attrs = useAttrs();
const props = withDefaults(defineProps<InputProps>(), {
  label: "",
  labelColor: "text-gray-900 dark:text-white",
  size: "md",
});

const inputSizeClasses: Record<InputSize, string> = {
  sm: "p-2 text-sm",
  md: "p-2.5 text-sm",
  lg: "p-4",
};

const defaultClasses =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const disabledInputClasses = "cursor-not-allowed bg-gray-100";
const componentClasses = twMerge(
  defaultClasses,
  inputSizeClasses[props.size],
  IsDefined(attrs.disabled) ? disabledInputClasses : "",
  slots.prefix ? "pl-10" : "",
);

const defaultLabelClasses = "block mb-2 text-sm font-medium";
const labelClasses = twMerge(defaultLabelClasses, props.labelColor);

const defaultValidationClasses = "mt-2 text-sm text-red-600 dark:text-red-500";
</script>

<template>
  <div class="my-2">
    <label :class="labelClasses">
      {{ props.label }}
      <span v-if="attrs.required" class="text-red-600">*</span>
    </label>

    <div class="flex relative">
      <div
        v-if="slots.prefix"
        class="w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden"
      >
        <slot name="prefix"></slot>
      </div>

      <input
        type="text"
        :class="componentClasses"
        :value="modelValue"
        v-bind="attrs"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />

      <p v-if="slots.suffix" class="absolute right-2.5 bottom-2.5">
        <slot name="suffix"></slot>
      </p>
    </div>

    <p v-if="slots.validationMessage" :class="defaultValidationClasses">
      <slot name="validationMessage" />
    </p>
  </div>
</template>
