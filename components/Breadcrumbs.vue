<script lang="ts" setup>
type TProps = {
  current?: string;
  overrides?: Record<number, Record<string, string>>;
};
const { current, overrides } = defineProps<TProps>();

const links = useBreadcrumbItems({
  overrides: [
    {
      label: "Главная страница",
    },
  ],
});
</script>

<template>
  <nav aria-label="Breadcrumbs" class="my-5">
    <ul class="flex">
      <li v-for="(item, key) in links" :key="key" class="text-caption">
        <NuxtLink v-bind="item">
          {{
            (item.current && current) ||
            (overrides && overrides[key] && overrides?.[key].label) ||
            item.label
          }}
        </NuxtLink>
        <span v-if="key !== links.length - 1" class="mx-[10px]">•</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a[current="true"] {
  @apply text-gray-600;
}
</style>
