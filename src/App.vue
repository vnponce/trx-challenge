<script setup>
import UserList from '@/components/UserList.vue'
import Search from '@/components/Search.vue'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { useFilteredUsers, useUsers } from '@/composables/users.js'

const { data } = useUsers()
const { query, filteredUsers } = useFilteredUsers(data)
</script>

<template>
  <header>
    <Search v-model="query" />
  </header>

  <main>
    <UserList v-if="data" :users="filteredUsers" />
  </main>
  <VueQueryDevtools />
</template>
