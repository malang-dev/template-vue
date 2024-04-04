<script setup lang="ts">
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
  <div class="pages">
    <h3>{{ $t("guestbook.name") }}</h3>
    <p>
      Here is an example where I showcase a simple form for guestbook entries. For the code, you can
      see in
      <a
        href="https://github.com/malang-dev/template-vue/blob/master/src/views/GuestbookView.vue"
        target="_blank"
        title="GuestbookView.vue"
        >GuestbookView.vue</a
      >
    </p>
    <form @submit.prevent="onSubmit">
      <div class="form-input">
        <label for="name">Name</label>
        <input type="text" class="form-control" v-model="formGuestbook.name" autofocus required />
      </div>
      <div class="form-input">
        <label for="roomno">Message</label>
        <textarea rows="3" class="form-control" v-model="formGuestbook.message"></textarea>
      </div>
      <div class="btn">
        <button type="submit">
          <!-- Download SVG icon from http://tabler-icons.io/i/device-floppy -->
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
            class="icon icon-tabler icons-tabler-outline icon-tabler-device-floppy"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
            <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M14 4l0 4l-6 0l0 -4" />
          </svg>
          <span>Save</span>
        </button>
      </div>
    </form>
    <div class="guestbook-list">
      <div v-for="guest in getLists" :key="guest.name" class="card">
        <h3>{{ guest.name }}</h3>
        <p>{{ guest.comment }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pages > h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.form-input {
  padding: 5px 0;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.guestbook-list {
  max-height: 300px;
  overflow-y: auto;
  padding: 0px 5px;
}

.card {
  margin-top: 16px;
  margin-bottom: 16px;
  box-shadow:
    0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 16px 16px;
  background-color: #fff;
  border-radius: 0.25rem;
  color: black;
}

button {
  margin-top: 5px;
}

button > span {
  margin-left: 3px;
  vertical-align: super;
}
</style>
