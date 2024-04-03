<script setup lang="ts">
import { RouterView } from "vue-router";
import { useGlobalStore } from "./stores/global";
import { onMounted } from "vue";

const globalStore = useGlobalStore();
onMounted(function () {
  globalStore.loadLocale();
  globalStore.loadTheme();
});
</script>

<template>
  <RouterView />
</template>
