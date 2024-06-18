<script setup lang="ts">
const { toggleSideBar } = useSidebar();
</script>

<template>
  <header
    class="bg-gradient-to-r from-black from-30% to-primary-charcoal to-[73%] text-white"
  >
    <div class="container flex items-center justify-between py-3">
      <nav>
        <ul class="flex items-center gap-7.5">
          <li>
            <NuxtLink to="/">
              <svgo-logo :fontControlled="false" filled="false" class="logo" />
            </NuxtLink>
          </li>
          <li class="hidden md:inline-block">
            <NuxtLink to="/tariff">Тарифы</NuxtLink>
          </li>
          <li class="hidden md:inline-block">
            <NuxtLink to="/contacts">Контакты</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-4 md:gap-7.5">
        <a class="hidden sm:inline-block" href="tel:+74051184422">
          +7 405 118-44-22
        </a>
        <NuxtLink to="/login" class="hidden md:inline-block btn">Вход</NuxtLink>
        <NuxtLink to="/signup" class="hidden md:inline-block btn bg-primary">
          Регистрация
        </NuxtLink>

        <a class="sm:hidden" href="tel:+74051184422">
          <NuxtImg
            class="fill-white"
            width="24"
            height="24"
            src="/icons/phone.svg"
          />
        </a>
        <NuxtLink to="/login" class="md:hidden p-2">
          <NuxtImg width="24" height="24" src="/icons/user.svg" />
        </NuxtLink>
        <Button
          class="md:hidden rotate-90 w-12 h-12 text-[21px]"
          :onClick="toggleSideBar"
        >
          <b> ||| </b>
        </Button>
      </div>
    </div>
  </header>
</template>

<style>
.logo {
  width: 119px;
  height: 26px;
}
</style>
