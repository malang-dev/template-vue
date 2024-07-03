<script setup lang="ts">
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { useGlobalStore } from "@/stores/use-global";

const globalStore = useGlobalStore();
onMounted(function () {
  globalStore.loadLocale();
  globalStore.loadTheme();
});
</script>

<template>
  <RouterView />
</template>
