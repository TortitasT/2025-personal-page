<script setup lang="ts">
definePageMeta({
  layout: 'archive',
})

const route = useRoute()
const slug = typeof route.params.slug === 'string' ? route.params.slug : route.params.slug.join('/')

const { data, status } = await useAsyncData(async () => {
  return await queryCollection('blog')
    .where('path', 'LIKE', `%/${slug}`)
    .first()
})

if (status.value === 'error') {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}
</script>

<template>
  <ArchiveBack></ArchiveBack>

  <div class="prose max-w-none" v-if="status === 'success' && data">
    <small v-if="data?.date">
      {{ data.date }}
    </small>

    <h1>
      {{ data?.title }}
    </h1>

    <ContentRenderer :value="data" />
  </div>
</template>
