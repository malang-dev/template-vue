<script setup lang="ts">
import BaseButton from "../components/Button/BaseButton.vue";
import GuestbookItem from "../components/GuestbookItem.vue";
import BaseInput from "../components/Input/BaseInput.vue";
import BaseTextarea from "../components/Textarea/BaseTextarea.vue";
import BaseHeading from "../components/Typography/BaseHeading.vue";
import BaseP from "../components/Typography/BaseP.vue";
import { storeToRefs } from "pinia";
import { useGuestbookStore } from "../stores/guestbook";
import { reactive } from "vue";

const guestbookStore = useGuestbookStore();
const { getLists } = storeToRefs(guestbookStore);

const formGuestbook = reactive({
  name: "",
  message: "",
});

function onSubmit() {
  guestbookStore.save(formGuestbook.name, formGuestbook.message);
  resetForm();
}

function resetForm() {
  formGuestbook.name = "";
  formGuestbook.message = "";
}
</script>

<template>
  <main class="flex place-items-center">
    <div class="flex-col">
      <BaseHeading tag="h4" class="font-semibold text-white">
        {{ $t("guestbook.name") }}
      </BaseHeading>
      <BaseP>
        Here is an example where I showcase a simple form for guestbook entries. For the code, you
        can see in
        <a
          href="https://github.com/malang-dev/template-vue/blob/master/src/views/GuestbookView.vue"
          target="_blank"
          title="GuestbookView.vue"
          >GuestbookView.vue</a
        >
      </BaseP>

      <form @submit.prevent="onSubmit">
        <BaseInput label="Name" v-model="formGuestbook.name" required />
        <BaseTextarea label="Message" v-model="formGuestbook.message" rows="5" required />
        <BaseButton color="bg-emerald-500 text-white"> Save </BaseButton>
      </form>

      <div class="overflow-y-scroll pr-2 max-h-96">
        <GuestbookItem
          v-for="guest in getLists"
          :key="guest.name"
          :name="guest.name"
          :comment="guest.comment"
        />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
