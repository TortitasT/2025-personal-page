<template>
  <button
    class="w-12 h-12"
    @click="colorMode.preference = contraryColorModeValue"
  >
    <span class="block -translate-y-[1px]">
      {{ currentColorModeEmoji }}
    </span>
  </button>
</template>

<script setup>
const colorMode = useColorMode()

const currentColorModeEmoji = computed(() => colorMode.value === 'dark'
  ? '🌙'
  : '☀️')
const contraryColorModeValue = computed(() => colorMode.value === 'dark' ? 'light' : 'dark')
</script>
