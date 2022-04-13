<template>
  <div>
    <header-default />
    <transition name="fade">
      <header-sidebar v-if="sidebarVisibility" />
    </transition>
    <main ref="container" class="pt-20">
      <transition name="fade">
        <nuxt />
      </transition>
    </main>
    <footer-default />
  </div>
</template>

<script>
import '~/assets/css/transitions.css'
import { mapState } from 'vuex'
export default {
  name: 'LayoutDefault',
  computed: {
    ...mapState({
      sidebarVisibility: state => state.header.sidebarIsVisible
    })
  }
}
</script>
