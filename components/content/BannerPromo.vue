<template>
  <div class="w-full px-8 py-4 min-h-screen flex justify-center">
    <div :style="[ backgroundImage ]" class="w-full bg-gray-200 bg-center bg-cover bg-no-repeat mb-20" />
    <div class=" absolute bottom-10 w-full flex flex-col items-center justify-center cursor-pointer" @click="toStore">
      <button class="h-12 w-12  pt-2 rounded-full bg-black bounce-1">
        <font-awesome-icon :icon="['fas','chevron-down']" size="2x" class="text-white "/>
      </button>
      <p class="cursor-pointer select-none">to Store</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentBannerPromo',
  data () {
    return {
      currentBg: 0
    }
  },
  props: {
    items: {
      type: [],
      return: () => { return [] }
    }
  },
  computed: {
    backgroundImage () {
      return {
        backgroundImage: `url(${this.items[this.currentBg]})`
      }
    },
    minHeight () {
      return { minHeight: '100vh' }
    }
  },
  methods: {
    slider () {
      if (this.currentBg === this.items.length) {
        this.currentBg = 0
      }
      setTimeout(() => {
        this.currentBg++
        this.slider()
      }, 1500)
    },
    toStore () {
      const sectionCatalogue = this.$root.$refs['section-catalogue'].$el
      const { top } = sectionCatalogue.getBoundingClientRect()
      const scrollPos = window.scrollY
      return window.scrollTo({ top: top + scrollPos - 80, behavior: 'smooth' })
    }
  },
  mounted () {
    this.currentBg = 0
    this.$nextTick(() => {
      this.slider()
    })
  }
}
</script>
<style lang="css" scoped>
.bounce-1 {
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: bounce-1;
  animation-timing-function: linear;
}
@keyframes bounce-1 {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-50px); }
    100% { transform: translateY(0); }
}
</style>
