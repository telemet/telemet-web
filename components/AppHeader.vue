<template>
  <header class="fixed w-full flex flex-col items-center justify-center">
    <app-logotype class="mt-10 mb-10" />
    <app-navbar class="block mt-10" />
  </header>
</template>

<script>
import AppLogotype from '@/components/AppLogotype'
import AppNavbar from '@/components/AppNavbar'

export default {
  components: {
    AppLogotype,
    AppNavbar
  }
}
</script>
