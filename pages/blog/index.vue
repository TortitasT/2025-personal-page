<script setup lang="ts">
import type {ContentCollectionItem} from '@nuxt/content';

definePageMeta({
  layout: 'archive'
})

const {data, pending} = await useAsyncData(async () => {
  return await queryCollection('media')
    .where('parent', '=', 'blog')
    .order('date', 'DESC')
    .all()
})

const pathToBlog = (path: string | undefined) => {
  if (!path) return ''

  const parts = path.split('/blog/')
  return parts[1]
}

const parseDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="prose max-w-none">
    <h1>Blog</h1>

    <p>
      Welcome to my blog! Here you'll find all my latest posts. Enjoy!
    </p>

    <p>
      I also have an <a href="/rss.xml" target="_blank" rel="noopener noreferrer">RSS Feed</a> if you prefer to
      follow that way.
    </p>

    <section v-if="!pending">
      <article v-for="post in data" :key="post.slug" class="not-prose my-8 p-4 bg-secondary-100/25 rounded-lg">
        <NuxtLink :to="`/blog/${pathToBlog(post._path)}`">
          <p class="text-text-800/75">{{ parseDate(post.date) }}</p>
          <h2 class="text-xl font-semibold">{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <p>Read more...</p>
        </NuxtLink>
      </article>
    </section>
  </div>
</template>
