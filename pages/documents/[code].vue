<script setup lang="ts">
import Breadcrumbs from '~/components/Breadcrumbs.vue';

const route = useRoute();
console.log(`documents/md/${route.path.split("/").at(-1)}`);
</script>
<template>
  <ContentDoc
    :path="`documents/md/${$route.path.split('/').at(-1)}`"
    v-slot="{ doc }"
  >
    <section class="container">
      <Breadcrumbs
        :current="doc.title"
        :overrides="{ 1: { label: 'Документы' } }"
      />
      <article class="md my-5">
        <h1 class="mb-10">{{ doc.title }}</h1>
        <ContentRendererMarkdown :value="doc" />
      </article>
    </section>
  </ContentDoc>
</template>

<style lang="scss">
.md {
  h1 {
    margin-bottom: 40px;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1.5rem;
    @apply text-black-300;
  }
  p {
    margin-bottom: 15px;
    @apply text-p;
  }
}
</style>
