<template>
  <article class="flex flex-col gap-3">
    <header class="grid grid-cols-2 gap-2">
      <h3 class="flex justify-start items-center">
        <span class="text-2xl relative">
          <div class="bg-accent-200 w-full h-1 absolute bottom-1 ml-2 -rotate-2">
          </div>

          <span class="relative ml-4">
            {{ props.project.name }}
          </span>
        </span>
      </h3>

      <SectionsLink :href="props.project.link" class="flex justify-end items-center text-sm">
        Read more
      </SectionsLink>

      <p class="col-span-2 text-text-600 text-sm">
        {{ props.project.description }}
      </p>
    </header>
  </article>
</template>

<script lang="ts" setup>
import type { Project } from '~/utils/types';

const props = defineProps<{
  project: Project,
}>();

const colorMode = useColorMode();

const logo = computed(() => {
  if (typeof props.project.logo === 'string') {
    return props.project.logo;
  }

  return props.project.logo[colorMode.value === 'dark' ? 'dark' : 'light'];
});
</script>
