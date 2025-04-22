<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex items-center gap-4 px-4 not-prose">
    <h2 class="text-primary-600 text-xl font-semibold">
      {{ props.title }}
    </h2>
    <div class="bg-primary-600 h-[1px] flex-1" />
  </div>
</template>
