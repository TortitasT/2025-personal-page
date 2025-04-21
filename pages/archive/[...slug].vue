<script setup lang="ts">
definePageMeta({
  layout: 'archive',
})
</script>

<template>
  <ArchiveBack></ArchiveBack>

  <ContentQuery :path="$route.path" find="one" v-slot="{ data }" class="box-content">
    <div class="prose max-w-none">
      <small v-if="data?.date">
        {{ data?.date.endsWith('Z') ? new Date(data?.date).toLocaleDateString() : data?.date }}
      </small>

      <h1 v-if="data?.title">
        {{ data?.title }}
      </h1>
      <h1 v-else class="break-all">
        {{ $route.path }}
      </h1>

      <ContentRenderer v-if="data" :value="data" />
      <ArchiveNavigation :from="$route.path" v-else />
    </div>
  </ContentQuery>
</template>