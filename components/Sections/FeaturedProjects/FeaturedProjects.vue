<template>
  <section class="flex flex-col gap-8">
    <SectionsTitle title="Featured Projects" />

    <Enumerate
      v-for="project, i in projects"
      :key="project.name"
      :index="i"
    >
      <SectionsFeaturedProjectsItem :project="project" />
    </Enumerate>
  </section>
</template>

<script lang="ts" setup>
import type { Project } from '~/utils/types'

const projects: Ref<Array<Project>> = ref([
  {
    logo: {
      light: '/images/logos/shotcraft-light.svg',
      dark: '/images/logos/shotcraft-dark.svg',
    },
    invertLogo: false,
    name: 'Shotcraft',
    description: 'A platform to create beautiful app screenshots.',
    images: [],
    link: 'https://shotcraft.vercel.app/',
  },
  {
    logo: '/images/logos/langkeeper.svg',
    name: 'Langkeeper',
    description: 'Service to store the time you spend programming in each language, inspired by WakaTime.',
    images: [
      '/images/langkeeper/1.png',
      '/images/langkeeper/2.png',
    ],
    link: 'https://langkeeper.tortitas.eu/',
  },
  {
    logo: '/images/logos/missing.png',
    invertLogo: false,
    name: 'ja',
    description: 'Simple java package management made in Golang.',
    images: [
      // "/images/langkeeper/1.png",
    ],
    link: 'https://github.com/TortitasT/ja',
  },
  {
    logo: '/images/logos/benibus.png',
    invertLogo: false,
    name: 'Benibus',
    description: 'Bus lines schedules in my hometown made in Flutter.',
    images: [
      // "/images/langkeeper/1.png",
    ],
    link: 'https://play.google.com/store/apps/details?id=eu.tortitas.benibus',
  },
])
</script>
