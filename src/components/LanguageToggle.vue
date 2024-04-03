<script setup lang="ts">
import { useGlobalStore } from "../stores/global";

const globalStore = useGlobalStore();
function onChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  const locale = target.value;
  globalStore.loadLocale(locale);
}
</script>

<template>
  <select id="language" @change="onChange" v-model="globalStore.locale">
    <option value="en">English</option>
    <option value="id">Indonesia</option>
  </select>
</template>

<style scoped>
select {
  padding: 7px 40px 7px 12px;
  border: 1px solid #e8eaed;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 1px 3px -2px #9098a9;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  transition: all 150ms ease;
}
</style>
