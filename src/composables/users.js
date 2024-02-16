import { useQuery } from '@tanstack/vue-query'
import { getUsers } from '@/services/api.js'
import { ref, watchEffect } from 'vue'

export const useUsers = () => useQuery({
  queryKey: ['users'],
  queryFn: getUsers,
})

export const useFilteredUsers = (data) => {
  const query = ref('')
  const filteredUsers = ref([])


  watchEffect(() => {
    if(!data.value) return

    filteredUsers.value = data.value.filter(({ name, email }) => {
      const userByName = name.toLowerCase().includes(query.value.toLowerCase())
      const userByEmail = email.toLowerCase().includes(query.value.toLowerCase())

      return userByName || userByEmail
    })
  })

  return { query, filteredUsers }
}
