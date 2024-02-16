<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
})

const avatarImage = (id) => `https://i.pravatar.cc/40?u=${id}`
</script>

<template>
  <img class="w-10 h-10 border border-stone-200 rounded-lg" :src="avatarImage(id)" :alt="name" />
</template>
