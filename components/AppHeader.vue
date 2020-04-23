<template>
  <header
    class="px-0 md:px-8 lg:px-10 w-full flex flex-col items-center relative"
  >
    <!-- Topbar -->
    <div
      class="w-full flex justify-between items-center md:items-start md:pt-2 h-16 border-b md:border-none "
    >
      <!-- Topbar: Menu Icon -->
      <nuxt-link
        :to="localePath('/')"
        class="w-8 h-8 ms-4 md:ms-0 hover:bg-gray-100 flex justify-center items-center transition-colors ease-in-out duration-100"
      >
        <icon
          :icon-color="'transperant'"
          class="text-black fill-current w-4 h-4"
          icon-name="Menu Icon"
        >
          <icon-menu />
        </icon>
      </nuxt-link>

      <!-- Topbar: Logotype -->
      <nuxt-link :to="localePath('/')" class="leading-none">
        <app-logotype class="md:mt-6 md:mb-10 w-32 h-8 md:w-40 md:h-10" />
      </nuxt-link>

      <!-- Topbar: Login -->
      <nuxt-link
        :to="localePath('/')"
        class="w-8 h-8 me-4 md:me-0 hover:bg-gray-100 flex justify-center items-center transition-colors ease-in-out duration-100"
      >
        <icon
          :icon-color="'transperant'"
          class="text-black fill-current w-4 h-4"
          icon-name="Menu Icon"
        >
          <icon-user />
        </icon>
      </nuxt-link>
    </div>

    <!-- Navbar -->
    <app-navbar class="block mt-10" />
  </header>
</template>

<script>
import AppLogotype from '@/components/AppLogotype'
import AppNavbar from '@/components/AppNavbar'
import Icon from '@/components/icons/Icon'
import IconMenu from '@/components/icons/IconMenu'
import IconUser from '@/components/icons/IconUser'

export default {
  components: {
    AppLogotype,
    AppNavbar,
    Icon,
    IconMenu,
    IconUser
  }
}
</script>
