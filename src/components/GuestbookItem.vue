<script setup lang="ts">
interface GuestbookItemProps {
  name: string;
  comment: string;
}

const props = defineProps<GuestbookItemProps>();
</script>

<template>
  <div class="my-4 p-4 bg-white rounded-md">
    <h3>{{ props.name }}</h3>
    <p>{{ props.comment }}</p>
  </div>
</template>

<style scoped></style>
