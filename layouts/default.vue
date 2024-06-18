<script setup lang="ts">
import { ModalsContainer } from "vue-final-modal";
import Header from "~/components/Header.vue";
import SideBar from "~/components/SideBar.vue";
</script>

<template>
  <SideBar />
  <Header />
  <main>
    <slot />
    <ModalsContainer />
  </main>
</template>
