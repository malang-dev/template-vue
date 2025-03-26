<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/classname";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const isLoading = ref(false);
async function onSubmit(event: Event) {
  event.preventDefault();
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
}
</script>

<template>
  <div :class="cn('grid gap-3', $attrs.class ?? '')">
    <form @submit="onSubmit">
      <div class="grid gap-3">
        <div class="grid gap-1">
          <Label for="email"> Email </Label>
          <Input
            id="email"
            placeholder="jhon.doe@example.com"
            type="email"
            auto-capitalize="none"
            auto-complete="email"
            auto-correct="off"
            autofocus
            :disabled="isLoading"
          />
        </div>
        <div class="grid gap-1">
          <Label for="password"> Password </Label>
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
            :disabled="isLoading"
          />
        </div>
        <Button :disabled="isLoading">
          <Icon icon="lucide:loader2" v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
          Login with Email
        </Button>
      </div>
    </form>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground"> Or </span>
      </div>
    </div>
    <Button variant="outline" type="button" class="justify-start" :disabled="isLoading">
      <Icon icon="lucide:loader-circle" v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
      <img
        v-else
        src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
        class="mr-3 h-4 w-4"
      />
      Continue with GitHub
    </Button>
    <Button variant="outline" type="button" class="justify-start" :disabled="isLoading">
      <Icon icon="lucide:loader-circle" v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
      <img
        v-else
        src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
        class="mr-3 h-4 w-4"
      />
      Continue with Google
    </Button>
    <Button variant="outline" type="button" class="justify-start" :disabled="isLoading">
      <Icon icon="lucide:loader-circle" v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
      <img
        v-else
        src="https://cdn.worldvectorlogo.com/logos/microsoft-5.svg"
        class="mr-3 h-4 w-4"
      />
      Continue with Microsoft
    </Button>
  </div>
</template>
