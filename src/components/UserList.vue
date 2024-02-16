<script setup>
import Avatar from '@/components/Avatar.vue'

defineProps({
  users: {
    type: Array,
    required: true
  }
})
</script>

<template>
  Name
  <ul>
    <li v-for="({ name, email, id}) in users" :key="id">
      <Avatar :name="name" :id="id" />
      {{ name }}
      {{ email }}
    </li>
  </ul>
</template>

