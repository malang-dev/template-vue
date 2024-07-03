<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <div
    class="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8"
  >
    <div class="mx-auto max-w-md text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mx-auto h-12 w-12 text-primary"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Unauthorized Access
      </h1>
      <p class="mt-4 text-muted-foreground">
        You are not authorized to view this page. Please log in or contact an administrator to gain
        access.
      </p>
      <div class="mt-6">
        <Button as="RouterLink" to="/auth/login" class="mr-3">Login</Button>
        <Button
          as="RouterLink"
          to="/auth/login"
          class="bg-background hover:bg-accent hover:text-accent-foreground text-primary border border-input"
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
