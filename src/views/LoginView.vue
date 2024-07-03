<script setup lang="ts">
import UserLoginForm from "@/components/LoginForm.vue";
</script>

<template>
  <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">Welcome to <strong>Microstack</strong></h1>
      <p class="text-sm text-muted-foreground">Please enter your Account details</p>
    </div>

    <UserLoginForm />
    <p class="text-center">
      Don't have account ?
      <RouterLink to="/auth/register" class="underline underline-offset-4 hover:text-primary">
        Create Account
      </RouterLink>
    </p>
  </div>
</template>

<style scoped></style>
