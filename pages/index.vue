<script setup lang="ts">
useSeoMeta({
  title: 'Home',
  description: 'Professional designer and developer',
})
</script>

<template>
  <div>
    <section class="min-h-[90vh] flex flex-col gap-2 justify-center px-4">
      <h1 class="text-3xl">
        víctor garcía
      </h1>
      <h2 class="text-xl text-text-900">
        I make websites
      </h2>
    </section>

    <SectionsFeaturedProjects />
    <SectionsContact />
  </div>
</template>
