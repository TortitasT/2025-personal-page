<script setup lang="ts">
const style = ref<string>('')

let interval = null as NodeJS.Timeout | null

onMounted(() => {
  interval = setInterval(() => {
    style.value = `background-position: ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%;`
  }, 100)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<template>
  <div
    class="absolute -z-10 inset-[-200%] h-[400%] w-[400%] bg-[url('/images/framernoise.png')] bg-[length:256px] bg-left-top opacity-[3%]"
    :style="style"
  />
</template>
