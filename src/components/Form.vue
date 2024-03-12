<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const showToast = ref(false)

const submitForm = () => {
  showToast.value = true

  setTimeout(() => {
    name.value = ''
    email.value = ''
    showToast.value = false
  }, 4000)
}
</script>

<template>
  <section
    class="container mx-auto p-6 flex"
  >
    <div class="w-1/2 p-6">
      <h1 class="p-4 text-3xl font-bold text-white">
        Cadastre-se para receber mais informações
      </h1>

      <form @submit.prevent="submitForm" class="mx-7">
        <div class="mb-4">
          <label for="name" class="block text-white">Nome:</label>
          <input
            type="text"
            id="name"
            v-model="name"
            class="rounded-lg p-2 w-full"
          >
        </div>
        <div class="mb-4">
          <label for="email" class="block text-white">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="rounded-lg p-2 w-full"
          >
        </div>
        <button
          type="submit"
          class="bg-secondary text-white py-2 px-4 rounded-lg"
        >
          Salvar
        </button>

        <div v-if="showToast" class="bg-green-500 text-white px-4 py-2 rounded-lg mt-5">
          Cadastro realizado com sucesso!
        </div>
      </form>
    </div>

    <div class="w-1/2 p-6">
      <img
        src="../assets/images/image_form.jpg"
        alt="The sims 4"
        class="w-full h-auto"
      >
    </div>
  </section>
</template>
