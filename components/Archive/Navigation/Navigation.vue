<script setup lang="ts">
const { from } = withDefaults(
  defineProps<{ from: string }>(),
  {
    from: 'archive',
  });

const query = queryContent(from);
</script>

<template>
  <ContentNavigation v-slot="{ navigation }" :query="query">
    <ul>
      <ArchiveNavigationItem v-for="link of navigation" :key="link._path" :link="link" />
    </ul>
  </ContentNavigation>
</template>