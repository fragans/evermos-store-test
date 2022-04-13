<template>
  <div
    ref="container"
    :style="{backgroundImage,paddingBottom,backgroundColor}"
    :class="[
      'bg-center',
      'bg-cover',
      'bg-no-repeat',
      'flex',
      'overflow-hidden',
      'relative',
      'w-full',
    ]"
  >
    <div v-if="$slots.default" class="h-full w-full absolute" :style="overlay?'background-color:rgba(0, 0, 0, 0.1);z-index:1;':'z-index:1'">
      <slot />
    </div>

    <!-- left,bottom= 50% + h-full : biar ketengah spinnernya -->
    <div class="absolute h-full w-full">
      <img
        v-show="!isLoading"
        ref="img"
        :alt="alt"
        v-on="$nextTick(()=>{return hasIntersect()})"
        @load="imgLoaded"
        @error="imgError"
      >
      <div v-show="isLoading" class="h-full w-full">
        <slot name="loader" />
      </div>

      <div v-show="error && img" class="w-full h-full flex justify-center items-center font-bold text-2xl text-red-thunderbird-600">
        Error
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageLazyload',
  props: {
    lazysrc: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    ratio: {
      type: String,
      default: '56.25'
    },
    overlay: {
      type: Boolean,
      default: false
    },
    alt: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      onscreen: false,
      image: '',
      isLoading: true,
      error: false
    }
  },
  computed: {
    backgroundColor () {
      return this.isLoading || this.error ? '#ccc' : ''
    },
    backgroundImage () {
      return 'url(' + this.lazysrc + ')'
    },
    paddingBottom () {
      let res = 1
      let n = ''
      if (typeof this.ratio === 'string' && this.ratio.includes(':')) {
        n = this.ratio.split(':').map(x => parseInt(x, 10))

        // all array items should be numbers
        if (!n.some(isNaN)) { res = n[1] / n[0] }
      } else if (typeof this.ratio === 'string') {
        n = parseFloat(this.ratio)
        if (!isNaN(n)) { res = n / 100 }
      }

      return (res * 100) + '%'
    }
  },
  mounted () {
    document.addEventListener('scroll', this.hasIntersect)
    document.addEventListener('DOMContentLoaded', this.hasIntersect)
    window.addEventListener('resize', this.responsiveImg)
    // awal2 lsng di init() biar keload gambarnya kalo d dlm viewport
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.hasIntersect)
    document.removeEventListener('DOMContentLoaded', this.hasIntersect)
    window.removeEventListener('resize', this.responsiveImg)
  },
  methods: {
    responsiveImg () {
      if (this.$refs.img) {
        this.$refs.img.style.height = this.$refs.container.clientHeight + 'px'
        this.$refs.img.style.width = this.$refs.container.clientWidth + 'px'
      }
    },
    imgLoaded () {
      this.isLoading = false
    },
    imgError () {
      this.error = true
    },
    hasIntersect () {
      const con = this.$refs.container
      if (con.getBoundingClientRect().top <= window.innerHeight && con.getBoundingClientRect().bottom >= 0 && !this.onscreen) {
        this.onscreen = true // biar ga f() ini hanya jalan sekali
        this.$refs.img.src = this.img
        document.removeEventListener('scroll', this.hasIntersect)
        document.removeEventListener('DOMContentLoaded', this.hasIntersect)
      }
    }
  }
}
</script>
