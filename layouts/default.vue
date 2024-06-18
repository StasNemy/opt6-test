<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal';
</script>

<template>
  <Header />
  <main>
    <slot />
    <ModalsContainer  />
  </main>
</template>
