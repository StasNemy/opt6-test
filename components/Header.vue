<template>
  <header
    class="bg-gradient-to-r from-black from-30% to-primary-charcoal to-[73%] text-white"
  >
    <div class="container flex items-center justify-between py-3">
      <nav>
        <ul class="flex items-center gap-7.5">
          <li>
            <NuxtLink to="/">
              <svgo-logo filled="false" class="logo" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/tariff">Тарифы</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contacts">Контакты</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-7.5">
        <NuxtLink to="tel:+74051184422">+7 405 118-44-22</NuxtLink>
        <NuxtLink to="/login" class="btn">Вход</NuxtLink>
        <NuxtLink to="/signup" class="btn inline-block bg-primary">
          Регистрация
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.logo {
  width: 119px;
  height: 26px;
}
</style>
