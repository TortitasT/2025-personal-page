<script setup lang="ts">
export interface ExperienceCompany {
  name: string;
  link: string;
}

export interface Experience {
  title: string;
  date: string;
  company: ExperienceCompany;
  description: string[] | string;
}

const { value } = defineProps<{
  value: Experience;
}>();
</script>

<template>
  <article class="mb-6">
    <div class="flex items-center gap-2 ml-4">
      <h3 class="text-xl flex-1">
        {{ value.title }}
      </h3>

      <h4>
        {{ value.date }}
      </h4>
    </div>

    <div class="prose max-w-none">
      <small class="text-sm ml-5">
        at <a :href="value.company.link" target="_blank">{{ value.company.name }}</a>
      </small>

      <p v-if="Array.isArray(value.description)">
        <template v-for="(desc, index) in value.description">
          <span v-html="desc" />
          <br v-if="index < value.description.length - 1" />
        </template>
      </p>

      <p v-else>
        <span v-html="value.description" />
      </p>
    </div>
  </article>
</template>
