<script setup>
import UserList from '@/components/UserList.vue'
import Search from '@/components/Search.vue'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { useFilteredUsers, useUsers } from '@/composables/users.js'

const { data } = useUsers()
const { query, filteredUsers } = useFilteredUsers(data)
</script>

<template>
  <div class="min-h-screen">
    <div class="w-full h-1 bg-gradient-to-r from-lime-500 via-emerald-300 to-sky-400"></div>
    <div class="min-h-screen flex flex-col md:flex-row">
      <div class="md:pt-10 w-full md:w-[95px] max-h-full border-r-gray-100 border-2">
        <img
          src="/traxporta-logo.png"
          alt="Traxporta logo"
          width="50"
          height="50"
          class="m-auto shadow-xl rounded-xl"
        />
      </div>
      <div class="flex-1">
        <header>
          <Search v-model="query" />
        </header>

        <main>
          <UserList v-if="data" :users="filteredUsers" />
        </main>
      </div>
    </div>
  </div>
  <VueQueryDevtools />
</template>
