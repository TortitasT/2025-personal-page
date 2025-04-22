<script setup lang="ts">
import { Linkedin, Github, Mail, Twitter, Rss } from 'lucide-vue-next'
</script>

<template>
  <footer class="border-t border-text-200 py-4 mt-4">
    <div class="flex justify-between">
      <div class="opacity-75 flex items-center gap-2">
        <NuxtImg
          src="images/favicon.png"
          alt="Logo"
          width="48"
          height="48"
          class="rounded-md"
        />

        <div>
          <p>Made by</p>
          <p class="font-semibold">
            Víctor García
          </p>
        </div>
      </div>

      <ThemeSelector />
    </div>

    <div class="my-4 flex justify-end gap-4">
      <a
        href="https://www.linkedin.com/in/vgarciafer/"
        target="_blank"
        class="social"
      >
        <Linkedin />
      </a>

      <a
        href="https://github.com/tortitast"
        target="_blank"
        class="social"
      >
        <Github />
      </a>

      <a
        href="mailto:vgarciaf@hey.com"
        target="_blank"
        class="social"
      >
        <Mail />
      </a>

      <a
        href="https://x.com/tortitas_t"
        target="_blank"
        class="social"
      >
        <Twitter />
      </a>

      <a
        href="/rss.xml"
        target="_blank"
        rel="noopener noreferrer"
        class="social"
      >
        <Rss />
      </a>
    </div>

    <div>
      <p class="text-center mt-4 opacity-75">
        Powered by Nuxt 💚
      </p>
    </div>
  </footer>
</template>
