<script setup lang="ts">
import type { Experience } from '~/components/About/Experience.vue';

useSeoMeta({
  title: "About me",
  description: "Professional web developer and designer",
});

const experience: Experience[] = [];

experience.push({
  title: "🦉 Senior Vue.js Frontend Developer",
  date: "2025 - Present",
  company: {
    name: "Cycloid.io",
    link: "https://cycloid.io/",
  },
  description: `I fix stuff`,
});

experience.push({
  title: "👨🏻‍💼 Software engineer",
  date: "2024 - 2025",
  company: {
    name: "Minsait",
    link: "https://www.indracompany.com/minsait",
  },
  description: `As a software engineer taking part on the UX team I work with a wide range of technologies such as <b>Vue.js (2 & 3)</b>, <b>SAP</b> and <b>Figma</b>.`,
});

experience.push({
  title: "👨🏻‍💻 Web developer",
  date: "2022 - 2024",
  company: {
    name: "Descom.es",
    link: "https://www.descom.es/",
  },
  description: `I worked as a web developer using <b>Vue.js (2 & 3)</b> and <b>Laravel</b> to help create an E-Commerce platform from scratch.`,
});
</script>

<template>
  <section class="mt-4 mb-16 h-[150px] md:h-[200px] relative rounded-md border-4 border-accent-50">
    <div class="absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-right rounded-md">
    </div>

    <NuxtImg src="/images/profile.jpeg" alt="Profile picture"
      class="rounded-full w-32 h-32 border-4 border-accent-50 absolute -bottom-10 left-4" />
  </section>

  <section class="px-2 prose max-w-none">
    <h1>About me</h1>

    <p>
      I'm Víctor, a professional designer and developer.
    </p>

    <p>
      I started coding when I was 10 years old making desktop applications with Visual Basic. Since then,
      I've been working on a wide range of <a target="_blank"
        href="https://github.com/TortitasT?tab=repositories">projects</a>, from
      websites and mobile apps to <a target="_blank" href="https://tortitas.itch.io/">video games</a>.
    </p>

    <!-- <p> -->
    <!--   I'm currently working as a Software Engineer at <a href="https://www.indracompany.com/minsait" -->
    <!--     target="_blank">Minsait</a>, -->
    <!--   where I help develop the next generation of POS systems for the hospitality industry with a focus on UX/UI -->
    <!--   design. -->
    <!-- </p> -->

    <p>
      I'm currently working as a Senior Vue.js Frontend Developer at <a href="https://cycloid.io/"
        target="_blank">Cycloid</a>, where I help develop the next generation of DevOps tools.
    </p>
  </section>
  <section class="my-8">
    <div class="prose px-2">
      <h2>Experience</h2>
    </div>

    <Enumerate v-for="exp, i in experience" :index="i">
      <AboutExperience :key="exp.title" :value="exp" />
    </Enumerate>
  </section>

  <AboutSkills />
</template>
