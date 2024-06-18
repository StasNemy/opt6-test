<script setup lang="ts">
type TDoc = {
  _id: string;
  title: string;
  description: string;
  body: string;
};
const { data } = await useAsyncData("documents-6", () =>
  queryContent<TDoc>("documents", "md")
    .limit(6)
    .only(["title", "description", "_id"])
    .find()
);

const list = data?.value || [];
</script>

<template>
  <section class="container">
    <h2 class="text-center">Документы</h2>
    <carousel :items-to-show="3">
      <slide
        class="h-[450px]"
        v-for="{ title, description, _id } in list"
        :key="title"
      >
        <div
          class="rounded-[10px] border h-full border-gray-300 shadow-slide p-[25px] text-left flex flex-col"
        >
          <h3 class="text-primary-cobalt mb-[15px]">{{ title }}</h3>
          <p class="text-p">{{ description }}</p>
          <NuxtLink
            class="block btn bg-primary text-white w-full text-center mt-auto self-end"
            :to="{
              name: 'documents-code',
              params: {
                code: _id.split(/:|\./).at(-2)?.replace(/(\s+)/g, '-'),
              },
            }"
            >Перейти</NuxtLink
          >
        </div>
      </slide>
      <template #addons>
        <Navigation v-if="list.length > 3">
          <template #next>
            <NuxtImg width="40" height="80" src="/icons/next.svg" />
          </template>
          <template #prev>
            <NuxtImg width="40" height="80" src="/icons/prev.svg" />
          </template>
        </Navigation>
        <Pagination v-if="list.length > 3" />
      </template>
    </carousel>
  </section>
</template>

<style lang="scss">
:root {
  --vc-pgn-width: 7px;
  --vc-pgn-height: 7px;
  --vc-pgn-border-radius: 7px;
  --vc-pgn-background-color: #d9d9d9;
  --vc-pgn-active-color: #007aff;
  --vc-pgn-margin: 2.5px;
}
.carousel {
  overflow-x: hidden;
  overflow-y: visible;

  &__viewport {
    overflow: visible !important;
  }
  &__slide {
    padding: 20px 17.5px;
  }
  &__pagination-button {
  }

  &__pagination {
    display: flex;
    align-items: center;
    margin-top: 8px;

    &-button {
      &::after {
        transition-property: width, height;
        transition-duration: 0.15s;
        transition-timing-function: ease-in-out;
      }

      &--active::after {
        width: 10px;
        height: 10px;
      }
    }
  }

  &__prev,
  &__next {
    margin: 0;
  }
}
</style>
