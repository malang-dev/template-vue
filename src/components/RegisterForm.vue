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
            placeholder="name@example.com"
            type="email"
            auto-capitalize="none"
            auto-complete="email"
            auto-correct="off"
            autofocus
            :disabled="isLoading"
          />
        </div>
        <Button :disabled="isLoading">
          <Icon icon="lucide:loader-circle" v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
          Register with Email
        </Button>
      </div>
    </form>
  </div>
</template>
