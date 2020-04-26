<template>
  <nav
    class="h-10 w-full border-t border-b border-grey-100 hidden md:flex justify-around items-center"
  >
    <nuxt-link to="/" class="w-5 h-5">
      <icon class=" w-5 h-5">
        <icon-logomark />
      </icon>
    </nuxt-link>
    <ul class="w-full text-md list-none flex justify-evenly items-center mx-12">
      <li class="mav-item">טלאֱמֶת</li>
      <li class="mav-item">טלאֱמֶת</li>
      <li class="mav-item">טלאֱמֶת</li>
      <li class="mav-item">טלאֱמֶת</li>
      <li class="mav-item">טלאֱמֶת</li>
      <li class="mav-item">טלאֱמֶת</li>
      <li class="mav-item">טלאֱמֶת</li>
      <li class="mav-item">טלאֱמֶת</li>
      <li class="mav-item">טלאֱמֶת</li>
    </ul>
    <!-- <app-lang-switcher class="pt-0" /> -->
  </nav>
</template>

<script>
// import AppLangSwitcher from '@/components/AppLangSwitcher'
import Icon from '~/components/icons/Icon'
import IconLogomark from '~/components/icons/IconLogomark'

export default {
  components: {
    // AppLangSwitcher,
    Icon,
    IconLogomark
    // AppNavbar
  }
}
</script>

<style lang="postcss" scoped>
nav {
  border-bottom-color: black;
}

.mav-item {
  @apply py-01 px-2 rounded-sm transition-colors ease-in-out duration-200;
}
.mav-item:hover {
  @apply bg-gray-100 cursor-pointer;
}
</style>
