<script setup>
const model = defineModel() // Recommended since Vuejs 3.4
</script>

<template>
  <div class="w-full flex justify-center text-xs font-light">
    <div class="relative w-full md:max-w-[342px]">
      <input
        aria-label="Search"
        type="text"
        placeholder="Search"
        v-model="model"
        class="w-full rounded-full p-3 pl-5 border border-stone-200/90 border-3 mt-4"
      />
      <button
        v-if="model !== ''"
        @click="model = ''"
        aria-label="Clear"
        class="absolute top-1/2 right-5 text-gray-400"
      >
        x
      </button>
    </div>
  </div>
</template>
