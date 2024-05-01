<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { useAttrs } from "vue";
import { useSlots } from "vue";
import { IsDefined } from "../../utils/is-defined";

defineOptions({
  inheritAttrs: false,
});

defineEmits(["update:modelValue"]);

interface TextareaProps {
  label: string;
  labelColor?: string;
  modelValue: string;
}

const slots = useSlots();
const attrs = useAttrs();
const props = withDefaults(defineProps<TextareaProps>(), {
  label: "",
  labelColor: "text-gray-900 dark:text-white",
});

const defaultClasses =
  "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const disabledInputClasses = "cursor-not-allowed bg-gray-100";
const componentClasses = twMerge(
  defaultClasses,
  IsDefined(attrs.disabled) ? disabledInputClasses : "",
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
    <textarea
      :class="componentClasses"
      :value="modelValue"
      v-bind="attrs"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    ></textarea>

    <p v-if="slots.validationMessage" :class="defaultValidationClasses">
      <slot name="validationMessage" />
    </p>
  </div>
</template>
