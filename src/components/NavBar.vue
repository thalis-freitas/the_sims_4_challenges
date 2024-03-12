<template>
  <nav
    :class="{ '-translate-y-0': !navbarHidden, '-translate-y-full': navbarHidden }"
    class="w-full h-16 bg-nav-light-blue flex items-center justify-between
           px-4 fixed transition-transform duration-300 ease-in-out"
  >
    <a href="/" class="flex items-center">
     <img src="../assets/images/ts4-logo.png" alt="Logo" class="h-14 p-1">
    </a>

    <ul class="flex items-center space-x-6">
      <li>
        <a
          href="#intro"
          class="nav-link p-2 rounded-lg text-secondary hover:shadow-md"
        >
          Introdução
        </a>
      </li>

      <li>
        <a
          href="#challenges"
          class="nav-link p-2 rounded-lg text-secondary hover:shadow-md"
        >
          Desafios
        </a>
      </li>

      <li>
        <a
          href="#gameplay"
          class="nav-link p-2 rounded-lg text-secondary hover:shadow-md"
        >
          Gameplay
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const navbarHidden = ref(false)
const lastScrollTop = ref(0)

const handleScroll = () => {
  const currentScrollTop = window.scrollY || document.documentElement.scrollTop

  if (currentScrollTop > lastScrollTop.value) {
    navbarHidden.value = true
  } else {
    navbarHidden.value = false
  }

  lastScrollTop.value = currentScrollTop <= 0 ? 0 : currentScrollTop
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>
