<template>
  <header
    class="px-8 w-full flex flex-col items-center justify-center relative"
  >
    <app-logotype class="mt-10 mb-10" />
    <app-navbar class="block mt-10" />
    <icon
      :width="16"
      :height="16"
      :icon-color="'transperant'"
      class="logomark text-black fill-current absolute top-0 right-0 mt-2 ms-8"
      icon-name="Telemet"
    >
      <icon-menu />
    </icon>
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
