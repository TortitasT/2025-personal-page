<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

defineProps<{
  href: string
}>()
</script>

<template>
  <a
    :href="href"
    target="_blank"
    class="not-prose text-text-800 transition-colors hover:text-text-950 underline"
  >
    <slot />
    <ArrowUpRight class="inline-block w-4 h-4" />
  </a>
</template>
