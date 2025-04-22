<script setup lang="ts">
const { link } = defineProps<{ link: any }>()

const pathToArchive = (path: string | undefined) => {
  if (!path) return ''

  const parts = path.split('/media/')
  return `/archive/${parts[1]}`
}
</script>

<template>
  <li>
    <NuxtLink :to="pathToArchive(link.path)">{{ link.title }}</NuxtLink>
    <ul v-if="link.children">
      <ArchiveNavigationItem
        v-for="child of link.children"
        :key="child.path"
        :link="child"
      />
    </ul>
  </li>
</template>
