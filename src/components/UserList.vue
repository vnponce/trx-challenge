<script setup>
import Avatar from '@/components/Avatar.vue'

defineProps({
  users: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="px-10 grid grid-cols-[60px_1fr_1fr] font-light text-xs text-stone-400 mt-6 mb-4">
    <div></div>
    <div>Name</div>
    <div>E-mail</div>
  </div>
  <div>
    <div
      v-if="users.length === 0"
      class="border-t border-stone-200/90 divide-y divide-stone-200/90 py-6 px-10 text-xs font-bold"
    >
      No items to match
    </div>
    <div class="border-t border-stone-200/90 divide-y divide-stone-200/90" v-else>
      <div
        v-for="{ name, email, id } in users"
        :key="id"
        class="grid grid-cols-[60px_1fr_1fr] py-6 px-10 text-xs font-bold"
      >
        <Avatar :name="name" :id="id" />
        <div class="flex items-center">
          {{ name }}
        </div>
        <div class="flex items-center">
          {{ email }}
        </div>
      </div>
    </div>
  </div>
</template>
