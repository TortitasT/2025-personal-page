<script setup lang="ts">
import { Home, CircleUser, Rss, NotebookPen } from 'lucide-vue-next';
</script>

<template>
  <nav
    class="mt-4 z-20 sticky bottom-10 w-fit mx-auto bg-secondary-100/25 backdrop-filter backdrop-blur-md border-secondary-200 shadow-md rounded-full flex gap-4 px-3 py-2 nav">
    <div class="selected bg-secondary-300 rounded-full absolute left-3 top-2 bottom-2 transition-transform z-30 hidden">
    </div>

    <NuxtLink to="/" class="px-6 py-2 rounded-full font-semibold flex items-center gap-2 md:bg-secondary-200 transition-colors text-background-950">
      <Home class="h-4 w-4 z-40" />
      <span class="hidden md:inline z-40">Home</span>
    </NuxtLink>

    <NuxtLink to="/about" class="px-6 py-2 rounded-full font-semibold flex items-center gap-2 md:bg-secondary-200 transition-colors">
      <CircleUser class="h-4 w-4 z-40" />
      <span class="hidden md:inline z-40">About</span>
    </NuxtLink>

    <NuxtLink to="/blog" class="px-6 py-2 rounded-full font-semibold flex items-center gap-2 md:bg-secondary-200 transition-colors">
      <Rss class="h-4 w-4 z-40" />
      <span class="hidden md:inline z-40">Blog</span>
    </NuxtLink>

    <NuxtLink to="/archive" class="px-6 py-2 rounded-full font-semibold flex items-center gap-2 md:bg-secondary-200 transition-colors">
      <NotebookPen class="h-4 w-4 z-40" />
      <span class="hidden md:inline z-40">Archive</span>
    </NuxtLink>
  </nav>
</template>

<style scoped>
.nav:has(a.router-link-active[href="/"]) .selected {
  display: block;
  width: 64px;
  transform: translateX(0);

  @media (min-width: 768px) {
    width: 116px;
    transform: translateX(0);
  }
}

.nav:has(a.router-link-active[href="/about"]) .selected {
  display: block;
  width: 64px;
  transform: translateX(80px);

  @media (min-width: 768px) {
    width: 117.06px;
    transform: translateX(132px);
  }
}

.nav:has(a.router-link-active[href="/blog"]) .selected {
  display: block;
  width: 64px;
  transform: translateX(160px);

  @media (min-width: 768px) {
    width: 105.05px;
    transform: translateX(265px);
  }
}

.nav:has(a.router-link-active[href="/archive"]) .selected {
  display: block;
  width: 64px;
  transform: translateX(240px);

  @media (min-width: 768px) {
    width: 126.04px;
    transform: translateX(386px);
  }
}
</style>
