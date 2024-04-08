<script setup lang="ts">
import VueMultiselect from "vue-multiselect";
import { useGlobalStore } from "../stores/global";

const globalStore = useGlobalStore();
function onChange({ code }) {
  globalStore.loadLocale(code);
}
</script>

<template>
  <VueMultiselect
    :options="globalStore.localeList"
    :searchable="false"
    :model-value="globalStore.locale"
    :allow-empty="false"
    @update:model-value="onChange"
    label="name"
  >
  </VueMultiselect>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
