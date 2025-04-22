<script setup lang="ts">
const props = defineProps<{ from: 'media' | 'blog', path?: string }>()

const { data, status } = await useAsyncData(async () => {
  const query = queryCollectionNavigation(props.from)

  if (props.path) {
    query.where('path', 'LIKE', `/media/${props.path}/%`)
  }

  return query
})
</script>

<template>
  <div
    v-if="status === 'success' && data"
    class="prose max-w-none"
  >
    <ul>
      <ArchiveNavigationItem
        v-for="link of data"
        :key="link.path"
        :link="link"
      />
    </ul>
  </div>
</template>
