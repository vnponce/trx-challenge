<script setup>
import UserList from '@/components/UserList.vue'
import Search from '@/components/Search.vue'
import Aside from '@/components/layout/Aside.vue'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { useFilteredUsers, useUsers } from '@/composables/users.js'

const { data } = useUsers()
const { query, filteredUsers } = useFilteredUsers(data)
</script>

<template>
  <div class="min-h-screen">
    <div class="w-full h-1 bg-gradient-to-r from-lime-500 via-emerald-300 to-sky-400"></div>
    <div class="min-h-screen flex flex-col md:flex-row">
      <Aside />
      <div class="flex-1 bg-stone-100/50 pb-5">
        <main
          class="w-full bg-white md:max-w-[620px] m-auto md:mt-10 md:rounded-3xl border border-stone-200/90 border-3"
        >
          <section class="w-full mt-10">
            <h1 class="text-lg text-center font-bold">Users</h1>
            <div class="w-full px-2 flex justify-center">
              <Search
                v-model="query"
                class="w-full rounded-full p-3 pl-5 border border-stone-200/90 border-3 mt-4 text-xs font-light md:max-w-[342px]"
              />
            </div>
          </section>

          <UserList v-if="data" :users="filteredUsers" />
        </main>
      </div>
    </div>
  </div>
  <VueQueryDevtools />
</template>
