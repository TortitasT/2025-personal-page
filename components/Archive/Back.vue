<script setup lang="ts">
const path = useRoute().path

const previousRoute = computed(() => {
  return path.split('/').slice(0, -1).join('/')
})

const previousRoutePretty = computed(() => {
  return previousRoute.value === '' ? '~' : previousRoute.value.replace('/', '~/')
})
</script>

<template>
  <NuxtLink :to="previousRoute" class="back">
    <span>
      ←
    </span>
    <span class="back__path">{{ previousRoutePretty }}</span>
  </NuxtLink>
</template>

<style scoped>
.back {
  @apply flex items-center gap-2 text-text-700 mb-4;
}

.back__path {
  @apply font-semibold md:opacity-0 md:absolute md:-translate-x-2 md:transition-all;
}

.back:hover .back__path {
  @apply md:opacity-100 md:translate-x-4;
}
</style>