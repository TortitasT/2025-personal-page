<script setup lang="ts">
useSeoMeta({
  title: 'Archive',
  description: 'A list of notes, writings, and other content that I have created over the years.',
})
</script>

<template>
  <div>
    <Background />

    <div class="px-2 max-w-screen-md mx-auto">
      <main class="min-h-[calc(100dvh_-_75px)] px-2 py-6">
        <slot />
      </main>
      <Menu />
      <Footer />
    </div>
  </div>
</template>
