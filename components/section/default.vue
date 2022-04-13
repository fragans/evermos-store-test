<template>
  <section :id="title" class="bg-center bg-cover flex items-center" :class="{'min-h-screen': screenHeight}" :style="[background,minHeight]">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'SectionDefault',
  props: {
    title: {
      type: String,
      default: ''
    },
    backgroundSrc: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    screenHeight: {
      type: [Boolean, Number],
      default: true
    }
  },
  computed: {
    background () {
      if (this.backgroundSrc) {
        return { backgroundImage: `url(${this.backgroundSrc})` }
      }
      if (this.backgroundColor) {
        return { backgroundColor: this.backgroundColor }
      }
      return ''
    },
    minHeight () {
      if (isNaN(this.screenHeight)) {
        return { minHeihgt: '100vh' }
      } else {
        return { minHeight: this.screenHeight + 'vh' }
      }
    }
  },
  mounted () {
    this.$root.$refs[`section-${this.title}`] = this
  }
}
</script>
