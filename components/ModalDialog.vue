<script setup lang="ts">
type TProps = {
  id?: string;
};
const { id } = defineProps<TProps>();
</script>
<template>
  <div class="relative">
    <iframe
      width="480"
      height="285"
      class="md-w-[90wv] xl:max-w-[1024px]"
      :src="`https://www.youtube.com/embed/${id}`"
    ></iframe>
  </div>
</template>
