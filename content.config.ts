import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: {
        include: 'media/blog/*.md',
      },
      type: 'page',
      schema: z.object({
        date: z.date(),
      })
    }),

    media: defineCollection({
      source: {
        include: '**/*.md',
      },
      type: 'page',
    }),
  }
})
