<script setup>
import UserList from '@/components/UserList.vue'
</script>

<template>
  <header>
    <!--    Create input search user list -->
<!--    <Search />-->
  </header>

  <main>
    <!--    User list -->
    <UserList  :users="[{ id: 1, name: 'John Doe', email: 'john@traxporta.com'}]" />
  </main>
</template>
