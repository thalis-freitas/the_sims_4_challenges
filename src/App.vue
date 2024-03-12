<script setup>
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import Intro from './components/Intro.vue'
import Challenges from './components/Challenges.vue'
import Gameplay from './components/Gameplay.vue'
import Map from './components/Map.vue'
import Form from './components/Form.vue'
</script>

<template>
  <main>
    <NavBar/>
    <Home/>
    <Intro/>
    <Challenges/>
    <Gameplay/>
    <Map/>
    <Form/>

    <footer class="bg-secondary text-center text-white text-2xl p-3">
      Desenvolvido por Thalis Freitas
    </footer>
  </main>
</template>
