<script setup lang="ts">
import { parseDate } from '~/lib/utils'

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
  <div>
    <ArchiveBack />

    <div class="box-content">
      <div
        v-if="status === 'success'"
        class="prose max-w-none"
      >
        <small v-if="data && data.date">
          {{ parseDate(data.date.toString()) }}
        </small>

        <h1 v-if="data && data.title">
          {{ data.title }}
        </h1>
        <h1
          v-else
          class="break-all"
        >
          {{ $route.path }}
        </h1>

        <ContentRenderer
          v-if="data"
          :value="data"
        />
        <ArchiveNavigation
          v-else
          from="media"
          :path="$route.path.split('archive/')[1]"
        />
      </div>
    </div>
  </div>
</template>
