<script setup lang="ts">
definePageMeta({
  layout: 'archive',
})

const route = useRoute()

const { data, status } = await useAsyncData(async () => {
  const slug = typeof route.params.slug === 'string' ? route.params.slug : route.params.slug.join('/')

  return await queryCollection('media')
    .where('path', 'LIKE', `%/${slug}`)
    .first()
})
</script>

<template>
  <ArchiveBack></ArchiveBack>

  <div class="box-content">
    <div class="prose max-w-none" v-if="status === 'success' && data">
      <small v-if="data.date">
        {{ data.date }}
      </small>

      <h1 v-if="data.title">
        {{ data.title }}
      </h1>
      <h1 v-else class="break-all">
        {{ $route.path }}
      </h1>

      <ContentRenderer v-if="data" :value="data" />
      <ArchiveNavigation v-else :from="$route.path.split('/')[0]" />
    </div>
  </div>
</template>
