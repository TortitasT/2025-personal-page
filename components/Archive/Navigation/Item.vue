<script setup lang="ts">
const { link } = defineProps<{ link: any }>();
</script>

<template>
  <li>
    <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
    <ul v-if="link.children">
      <ArchiveNavigationItem v-for="child of link.children" :key="child._path" :link="child" />
    </ul>
  </li>
</template>
