<script setup lang="ts">
const props = defineProps<{
  index: number;
}>();
</script>

<template>
  <div class="relative mt-14">
    <div class="absolute -top-9 text-6xl text-text-200/50 font-serif">
      {{ (props.index + 1).toString().padStart(2, '0') }}
    </div>
    <div class="isolate">
      <slot />
    </div>
  </div>
</template>
