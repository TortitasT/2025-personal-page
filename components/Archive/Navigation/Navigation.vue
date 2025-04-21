<script setup lang="ts">
const props = defineProps<{ from: 'media' | 'blog' }>();

const { data, status } = await useAsyncData(async () => {
  return queryCollectionNavigation(props.from)
})
</script>

<template>
  <div v-if="status === 'success' && data" class="prose max-w-none">
    <ul>
      <ArchiveNavigationItem v-for="link of data" :key="link.path" :link="link" />
    </ul>
  </div>
</template>
