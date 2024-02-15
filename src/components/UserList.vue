<script setup>
defineProps({
  users: {
    type: Array,
    required: true
  }
})
const avatar = id => `https://i.pravatar.cc/40?u=${id}`

</script>

<template>
  Name
  <ul>
    <li id="user-list" v-for="user in users" :key="user.id">
      <img
        class="w-10 h-10 m-4 shadow-lg mx-auto border border-neutral-200 rounded-xl"
        :src="avatar(user.email)"
        :alt="user.name"
      />
      {{ user.name }}
      {{ user.email }}
    </li>
  </ul>
</template>

