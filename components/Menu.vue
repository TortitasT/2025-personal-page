<script setup lang="ts">
import { Home, CircleUser, Rss, NotebookPen } from 'lucide-vue-next'
</script>

<template>
  <nav
    class="mt-4 z-20 sticky bottom-10 w-fit mx-auto bg-secondary-100/25 backdrop-filter backdrop-blur-md border-secondary-200 shadow-md rounded-full flex gap-4 px-3 py-2 nav"
  >
    <div class="selected" />

    <NuxtLink
      to="/"
      class="menu-item"
    >
      <Home class="h-4 w-4" />
      <span class="hidden md:inline">Home</span>
    </NuxtLink>

    <NuxtLink
      to="/about"
      class="menu-item"
    >
      <CircleUser class="h-4 w-4" />
      <span class="hidden md:inline">About</span>
    </NuxtLink>

    <NuxtLink
      to="/blog"
      class="menu-item"
    >
      <Rss class="h-4 w-4" />
      <span class="hidden md:inline">Blog</span>
    </NuxtLink>

    <NuxtLink
      to="/archive"
      class="menu-item"
    >
      <NotebookPen class="h-4 w-4" />
      <span class="hidden md:inline">Archive</span>
    </NuxtLink>
  </nav>
</template>
