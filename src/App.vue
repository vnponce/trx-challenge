<script setup>
import UserList from '@/components/UserList.vue'
import { useQuery } from '@tanstack/vue-query'
import { log } from 'node:util'
const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const result = await response.json()
  return result;
}


const { isPending, isFetching, isError, data, error } = useQuery({
  queryKey: ['users'],
  queryFn: getUsers,
})


</script>

<template>
  <header>
    <!--    Create input search user list -->
<!--    <Search />-->
  </header>

  <main>
    <!--    User list -->
    {{ console.log(data) }}
    Name
    <div id="user-list" v-for="user in data" :key="user.id">
      <img
        class="w-10 h-10 m-4 shadow-lg mx-auto border border-neutral-200 rounded-xl"
        :src="user.email"
        :alt="user.name"
      />
      {{ user.name }}
      {{ user.email }}
    </div>
<!--    <UserList v-if="data" :users="data" />-->
  </main>
</template>
