<script setup lang="ts">
import UserRegisterForm from "@/components/RegisterForm.vue";
</script>

<template>
  <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">Create an account</h1>
      <p class="text-sm text-muted-foreground">Enter your email below to create your account</p>
    </div>
    <UserRegisterForm />
    <p class="px-8 text-center text-sm text-muted-foreground">
      By clicking continue, you agree to our
      <a href="/terms" class="underline underline-offset-4 hover:text-primary">
        Terms of Service
      </a>
      and
      <a href="/privacy" class="underline underline-offset-4 hover:text-primary">
        Privacy Policy
      </a>
      .
    </p>
    <p class="text-center">
      Already have account ?
      <RouterLink to="/auth/login" class="underline underline-offset-4 hover:text-primary">
        Login
      </RouterLink>
    </p>
  </div>
</template>

<style scoped></style>
