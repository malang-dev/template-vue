<script setup lang="ts">
import BaseIcon from "../components/Icons/BaseIcon.vue";
import OnboardItem from "../components/OnboardItem.vue";
</script>

<template>
  <main class="flex place-items-center">
    <div class="welcome flex flex-col relative">
      <OnboardItem title="Documentation">
        <template #icon>
          <BaseIcon name="IconDocumentation" class="text-gray-400" />
        </template>

        Vue’s <a href="https://vuejs.org/">official documentation</a> provides you with all
        information you need to get started.
      </OnboardItem>

      <OnboardItem title="Tooling">
        <template #icon>
          <BaseIcon name="IconTooling" class="text-gray-400 !w-6" />
        </template>

        This project is served and bundled with
        <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>.
        The recommended IDE setup is
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>.
        If you need to test your components and web pages, check out
        <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
        <a href="https://on.cypress.io/component" target="_blank" rel="noopener"
          >Cypress Component Testing</a
        >. <br />
        More instructions are available in <code>README.md</code>.
      </OnboardItem>

      <OnboardItem title="Ecosystem">
        <template #icon>
          <BaseIcon name="IconEcosystem" class="text-gray-400" />
        </template>

        Get official tools and libraries for your project:
        <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
        <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
        <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>,
        and
        <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a
        >. If you need more resources, we suggest paying
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener"
          >Awesome Vue</a
        >
        a visit.
      </OnboardItem>

      <OnboardItem title="Community">
        <template #icon>
          <BaseIcon name="IconCommunity" class="text-gray-400" />
        </template>

        Got stuck? Ask your question on Vue Land, our official Discord server, or StackOverflow. You
        should also subscribe to our mailing list and follow the official @vuejs twitter account for
        latest news in the Vue world.
      </OnboardItem>

      <OnboardItem title="Support Vue">
        <template #icon>
          <BaseIcon name="IconSupport" class="text-gray-400" />
        </template>

        As an independent project, Vue relies on community backing for its sustainability. You can
        help us by becoming a sponsor.
      </OnboardItem>
    </div>
  </main>
</template>

<style scoped>
.welcome::before {
  @apply absolute;
  @apply border-[1px];
  @apply border-gray-200;
  content: "";
  height: 85%;
  left: -4.5rem;
  top: 3.75rem;
}
</style>
