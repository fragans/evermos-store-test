<template>
  <div class="fixed min-h-screen bg-sidebar w-full z-50 flex inset-0">
    <div class="w-1/5 md:w-3/5" @click="$store.commit('header/sidebarVisibility')" />
    <!-- <transition name="slide-right"> -->
    <div v-if="navIsVisible" class="w-4/5 md:w-2/5 bg-white shadow-md px-8 py-10 min-h-screen slide">
        <ul>
          <li v-for="(item, key) in categories" :key="key" class="py-3 text-2xl">
            <nuxt-link :to="`/category/${item}`" @click="$store.commit('header/sidebarVisibility')">
              <span class="capitalize pb-1">{{item}}</span>
              <font-awesome-icon class="mr-2 float-right pt-3" icon="chevron-right" />
            </nuxt-link>
          </li>
        </ul>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HeaderSidebar',
  data () {
    return {
      nav: [],
      navIsVisible: false
    }
  },
  watch: {
    '$store.header.sidebarVisibility': {
      immediate: true,
      handler: function () {
        if (this.sidebarVisibility) {
          setTimeout(() => {
            this.navIsVisible = true
          }, 500)
        }
      }
    }
  },
  computed: {
    ...mapState({
      categories: state => state.header.categories,
      sidebarVisibility: state => state.header.sidebarIsVisible
    })
  }
}
</script>
<style scoped>
.bg-sidebar{
  background: rgba(18,18,18,0.3);
  backdrop-filter: blur(8px);
}
.slide{
  transform: translateX(-100)
}
</style>
