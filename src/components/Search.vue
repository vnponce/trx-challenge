<script setup>
const model = defineModel() // Recommended since Vuejs 3.4
</script>

<template>
  <input type="text" placeholder="Search" v-model="model" />
</template>
