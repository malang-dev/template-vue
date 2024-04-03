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
    <h3>GuestBook</h3>
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
        <button type="submit">Save</button>
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
  padding-right: 10px;
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
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  font-size: 15px;
  padding: 6px 25px;
  margin-top: 4px;
  border: 1px solid rgb(0, 136, 91);
  border-radius: 5px;
  word-spacing: 10px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(0, 136, 91);
}
</style>
