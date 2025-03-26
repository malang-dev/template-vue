<script setup lang="ts">
import { useGlobalStore } from "@/stores/use-global";
import { onMounted } from "vue";
import { RouterView } from "vue-router";

const globalStore = useGlobalStore();
onMounted(function () {
  globalStore.loadLocale();
  globalStore.loadDarkMode();
});
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>
