<script setup lang="ts">
import { parseDate } from '~/lib/utils'

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
    statusMessage: 'Page Not Found',
  })
}
</script>

<template>
  <div>
    <ArchiveBack />

    <div
      v-if="status === 'success' && data"
      class="prose max-w-none"
    >
      <small v-if="data?.date">
        {{ parseDate(data.date.toString()) }}
      </small>

      <h1>
        {{ data?.title }}
      </h1>

      <ContentRenderer :value="data" />
    </div>
  </div>
</template>
