<script setup>
import UserList from '@/components/UserList.vue'
import { useQuery } from '@tanstack/vue-query'
import Search from '@/components/Search.vue'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { ref, watchEffect } from 'vue'


const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return await response.json();
}


const { data } = useQuery({
  queryKey: ['users'],
  queryFn: getUsers,
})

const query = ref('')
const filteredUsers = ref([])

watchEffect(() => {
    if(!data.value) return

    filteredUsers.value = data.value.filter(user => {
      return user.name.toLowerCase().includes(query.value.toLowerCase())
    })
})

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
