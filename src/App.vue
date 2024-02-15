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
    <UserList v-if="data" :users="data" />
  </main>
</template>
