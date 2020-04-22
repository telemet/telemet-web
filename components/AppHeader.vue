<template>
  <header
    class="px-6 md:px-8 lg:px-10 w-full flex flex-col items-center justify-center relative"
  >
    <div class="w-full block flex h-10 ">
      <div
        class="w-8 h-8 mt-1 ms-1 block hover:bg-gray-100 flex justify-center items-center cursor-pointer transition-colors ease-in-out duration-100"
      >
        <icon
          :icon-color="'transperant'"
          class="logomark text-black fill-current w-4 h-4"
          icon-name="Telemet"
        >
          <icon-menu />
        </icon>
      </div>
    </div>
    <nuxt-link :to="localePath('/')">
      <app-logotype class="mt-0 mb-10" />
    </nuxt-link>
    <app-navbar class="block mt-10" />
  </header>
</template>

<script>
import AppLogotype from '@/components/AppLogotype'
import AppNavbar from '@/components/AppNavbar'
import Icon from '@/components/icons/Icon'
import IconMenu from '@/components/icons/IconMenu'

export default {
  components: {
    AppLogotype,
    AppNavbar,
    Icon,
    IconMenu
  }
}
</script>
