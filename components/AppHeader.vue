<template>
  <header
    class="px-6 md:px-8 lg:px-10 w-full flex flex-col items-center justify-center relative"
  >
    <div class="w-full block flex items-center h-10 ">
      <icon
        :width="16"
        :height="16"
        :icon-color="'transperant'"
        class="logomark text-black fill-current cursor-pointer"
        icon-name="Telemet"
      >
        <icon-menu />
      </icon>
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
