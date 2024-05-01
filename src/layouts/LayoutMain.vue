<script setup lang="ts">
import BaseLink from "../components/Typography/BaseLink.vue";
import BaseHeading from "../components/Typography/BaseHeading.vue";
import { RouterView } from "vue-router";
import LanguageToggle from "../components/LanguageToggle.vue";
import DarkLightToggle from "../components/DarkLightToggle.vue";
import { baseURL } from "../utils/baseurl";
</script>

<template>
  <div class="container mx-auto grid grid-cols-2 h-screen">
    <header class="flex place-items-center">
      <img alt="Vue logo" class="logo mr-4" :src="baseURL('logo.svg')" width="100" height="100" />

      <div class="flex flex-col [&>*]:my-2 greetings">
        <BaseHeading tag="h1" class="text-emerald-500 dark:text-emerald-500">
          {{ $t("hello_world.title") }}
        </BaseHeading>
        <BaseHeading tag="h5" class="dark:text-gray-400">
          {{ $t("hello_world.successfully_created") }} <br />
          <a href="https://vitejs.dev/">Vite</a> + <a href="https://vuejs.org/">Vue 3</a>.
          {{ $t("hello_world.whats_next") }}
        </BaseHeading>

        <nav class="-ml-2">
          <BaseLink to="/">{{ $t("menu.home") }}</BaseLink>
          <BaseLink to="/components">{{ $t("menu.components") }}</BaseLink>
          <BaseLink to="/guestbook">{{ $t("menu.guestbook") }}</BaseLink>
        </nav>

        <div class="grid grid-cols-5">
          <LanguageToggle class="col-span-4" />
          <DarkLightToggle />
        </div>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
nav > a {
  @apply px-3;
}

nav > a:not(:last-child) {
  @apply border-r-2;
  @apply border-gray-200;
}
</style>
