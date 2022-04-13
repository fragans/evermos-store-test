<template>
  <div class="font-mono flex lg:flex-row flex-col pt-4">
    <div ref="title-mobile" class="block lg:hidden p-8">
        <h1 class="text-2xl">{{ item.title }}</h1>
        <p class="pb-4 pt-2 capitalize text-gray-600 text-sm">{{ item.category }}</p>
        <span class="text-sm pt-6">{{ priceRupiah | rupiahFormat }}</span>
      </div>
    <div ref="product-image" class="lg:w-1/2 px-4 relative group-hover:cursor-zoom-in cursor-zoom-in">
      <img
        ref="image"
        :src="item.image"
        :alt="item.title"
        class="h-80 mx-auto p-4 lg:sticky lg:top-10 lg:mt-10 group-hover:cursor-zoom-in cursor-zoom-in"
        @mousemove="zoomIn"
        @mouseout="zoomOut"
      >
    </div>
    <div class="lg:w-1/2 p-6 relative">
      <div ref="title-desktop" class="hidden lg:block">
        <h1 class="text-2xl">{{ item.title }}</h1>
        <p class="pt-4 capitalize text-gray-500">{{ item.category }}</p>
        <span>{{ priceRupiah | rupiahFormat }}</span>
      </div>
      <div ref="stock-empty" v-if="!isStocked" class="bg-gray-100 p-6 m-0 lg:m-4 border-dashed border border-gray-500 select-none">
        <strong>Sold Out:</strong>
        <span>This item currently unavailable</span>
      </div>
      <div ref="buy-button" v-else class="pt-4 px-4">
        <button class="bg-black text-white py-4 px-5 rounded-full w-full mb-3">Add to Cart</button>
      </div>
      <div ref="wishlist-button" class="pt-4 px-4">
        <button class="border border-gray-500 text-black py-4 px-5 rounded-full w-full">
          Favourite
          <font-awesome-icon :icon="['far', 'heart']" />
        </button>
      </div>
      <div ref="description" class="pt-8 lg:pt-4 lg:pt-0 text-sm lg:text-base" >
        <p class="text-justify">
          {{ item.description }}
        </p>
      </div>
      <transition name="fade">
      <div ref="zoom-viewport" v-if="isZoom" class="hidden lg:flex absolute h-full w-full top-0 mr-4">
        <div class="bg-white shadow-md w-full h-full bg-no-repeat" :style="[backgroundImage,backgroundPosition]"/>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardProductDetail',
  props: {
    item: {
      type: Object,
      default: () => { return {} }
    }
  },
  data () {
    return {
      isZoom: false,
      zoomPosX: 0,
      zoomPosY: 0
    }
  },
  computed: {
    priceRupiah () {
      return this.item.price * 14000
    },
    isStocked () {
      /*
        randomize stock availibilty
      */
      const min = -5
      const max = 5
      const rand = Math.floor(Math.random() * (max - min + 1)) + min
      return rand % 2
    },
    backgroundImage () {
      return { backgroundImage: `url(${this.item.image})` }
    },
    backgroundPosition () {
      return { backgroundPosition: (-this.zoomPosX * 2) + 'px ' + (-this.zoomPosY * 2) + 'px' }
    }
  },
  methods: {
    zoomIn (event) {
      this.isZoom = true
      const img = this.$refs['product-image']
      if (!img) { return }
      this.zoomPosX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft
      this.zoomPosY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop
    },
    zoomOut () {
      this.isZoom = false
      this.zoomPosX = 0
      this.zoomPosY = 0
    }
  }
}
</script>
<style scoped>
@media screen and (min-width: 1024px) {
  .cursor-zoom-in{
    cursor: zoom-in;
  }
}
</style>
