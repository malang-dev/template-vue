<script setup lang="ts"></script>

<template>
  <div class="greetings">
    <h1>Hello World!</h1>
    <div class="[&>*]:block">
      <RouterLink to="/auth/login">Login</RouterLink>
      <RouterLink to="/auth/register">Register</RouterLink>
      <RouterLink to="/unautorized">Unautorized Page</RouterLink>
    </div>
  </div>
</template>
