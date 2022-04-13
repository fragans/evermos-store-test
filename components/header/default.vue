<template>
  <header class="bg-white flex items-center fixed h-20 w-full shadow-md font-sans z-20">
    <div class="container max-w-8xl mx-auto w-full">
      <div class="flex items-center justify-between">
        <nuxt-link to="/">
          <div ref="logo" class="flex items-center justify-center p-3">
            <img
              src="~/assets/img/logo/icon.png"
              alt="logo"
              height="50"
              width="50"
              class="pt-1"
            >
          </div>
        </nuxt-link>
        <div ref="category-mobile" class="lg:flex h-20 hidden">
          <ul class="flex">
            <nuxt-link v-for="(category, key) in categories" :key="key" class="flex items-center px-4 mb-1" :class="{'border-b border-black': $route.params.slug === category }" :to="`/category/${category}`">
              <span class="capitalize tracking-wider text-lg">{{ category }}</span>
            </nuxt-link>
          </ul>
        </div>
        <div ref="auth-desktop" class="flex justify-center items-center p-3">
          <nuxt-link to="/" class="px-2">
            <font-awesome-icon :icon="['fa', 'shopping-bag']" size="2x" />
          </nuxt-link>
          <nuxt-link to="/" class="px-2">
            <font-awesome-icon :icon="['far', 'heart']" size="2x" />
          </nuxt-link>
          <button @click="$store.commit('header/sidebarVisibility')" class="px-2 lg:hidden">
            <font-awesome-icon :icon="['fas', 'bars']" size="2x" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'HeaderDefault',
  data () {
    return {
      navi: [
        {
          label: 'home',
          url: '/'
        },
        {
          label: 'item #1',
          url: '/item/1'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      categories: state => state.header.categories
    })
  },
  async fetch () {
    const { app } = this.$nuxt.context
    await this.fetchCategories({ app })
  },
  methods: {
    ...mapActions({
      fetchCategories: 'header/fetchCategories'
    })
  }
}
</script>
<style lang="postcss" scoped>
/* .bg-gradient {
  background-color: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 1) 1);
} */
</style>
