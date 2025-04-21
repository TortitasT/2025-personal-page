<script setup lang="ts">
import { type BlogPost } from './index.vue';

definePageMeta({
  layout: 'archive',
})

const route = useRoute()
const slug = typeof route.params.slug === 'string' ? route.params.slug : route.params.slug.join('/')

const { data, pending, status } = await useAsyncData(async () => {
  return await queryContent<BlogPost>('archive', 'media', 'blog', slug).findOne()
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

  <div class="prose max-w-none" v-if="!pending && status === 'success'">
    <small v-if="data?.date">
      {{ data.date.endsWith('Z') ? new Date(data?.date).toLocaleDateString() : data?.date }}
    </small>

    <h1>
      {{ data?.title }}
    </h1>

    <ContentRenderer :value="data" />
  </div>
</template>