<script setup lang="ts">
type TAdvantage = {
  icon: string;
  title: string;
  description: string;
};

const { data } = await useAsyncData("advantages", () =>
  queryContent<{ body: TAdvantage[] }>("advantages").findOne()
);

const list = data?.value?.body;
</script>
<template>
  <section class="container">
    <h2 class="text-center mb-8">
      Плюсы использования сервиса «Компас» для анализа штрафов
    </h2>
    <ul class="grid grid-cols-3 gap-[35px]">
      <li
        v-for="{ icon, title, description } in list"
        :key="title"
        class="py-6 px-5 border border-gray-300 flex items-center gap-4 rounded-[10px]"
      >
        <div class="w-[59px]">
          <NuxtImg
            class="w-full max-h-[53px]"
            :src="`/icons/advantage/${icon}.svg`"
            :alt="title"
          />
        </div>
        <div class="flex-1">
          <h5 class="text-primary-cobalt mb-[15px]">{{ title }}</h5>
          <p class="text-caption-2">{{ description }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
