<template>
  <a :href="link" target="_blank" class="w-1/3 p-4">
    <img :src="imageSrc" :alt="altText" class="w-full h-48">
    <p class="text-center mt-2 text-nav-light-blue">{{ description }}</p>
  </a>
</template>

<script>
import defineProps from 'vue'

defineProps({
  link: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
})

</script>

