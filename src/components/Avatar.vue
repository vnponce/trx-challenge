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
  <img
    class="w-10 h-10 m-4 mx-auto border border-neutral-200 rounded-xl"
    :src="avatarImage(id)"
    :alt="name"
  />
</template>
