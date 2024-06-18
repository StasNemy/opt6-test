<script setup lang="ts">
import Breadcrumbs from "~/components/Breadcrumbs.vue";

type TDoc = {
  _id: string;
  title: string;
  description: string;
  body: string;
};
const { data } = await useAsyncData("documents-6", () =>
  queryContent<TDoc>("documents", "md").only(["title", "_id"]).find()
);
const list = data?.value;
</script>
<template>
  <section class="container">
    <Breadcrumbs current="Документы" />
    <h1 class="my-10">Документы</h1>
    <ul class="list-disc ml-6">
      <li v-for="{ title, _id } in list" :key="_id">
        <NuxtLink
          :to="{
            name: 'documents-code',
            params: {
              code: _id.split(/:|\./).at(-2)?.replace(/(\s+)/g, '-'),
            },
          }"
        >
          {{ title }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
