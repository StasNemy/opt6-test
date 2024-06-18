<script setup lang="ts">
import Button from "./shared/Button.vue";

const { sideBar, toggleSideBar } = useSidebar();

const route = useRoute();

watch(
  () => route.path,
  (v) => {
    console.log("🚀 ~ watch ~ v:", v);
    if (sideBar.value) {
      toggleSideBar();
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>

<template>
  <aside
    v-if="sideBar"
    class="text-white z-50 absolute w-96 max-w-full top-0 right-0 bg-gradient-to-r from-black from-30% to-primary-charcoal to-[93%] drop-shadow-2xl md:hidden h-full"
  >
    <header class="flex justify-between py-3 px-5 items-center">
      <NuxtLink class="" to="/">
        <svgo-logo filled="false" class="logo" />
      </NuxtLink>
      <Button :onClick="toggleSideBar" class="w-12 h-12 text-[21px]">
        <span class="w-12 h-12 rotate-45">|</span>
        <span class="w-12 h-12 -rotate-45">|</span>
      </Button>
    </header>
    <nav class="my-5">
      <ul class="flex flex-col items-center gap-2">
        <li class="p-2">
          <NuxtLink to="/tariff">Тарифы</NuxtLink>
        </li>
        <li class="p-2">
          <NuxtLink to="/contacts">Контакты</NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
