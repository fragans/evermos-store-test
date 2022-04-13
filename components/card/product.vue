<template>
  <nuxt-link :to="`/item/${item.id}`" class="hover:shadow-sm">
    <div class="font-mono">
      <figure class="">
        <!-- <img :src="item.image" :alt="item.title" class="mx-auto"> -->
        <client-only>
          <image-lazyload :img="item.image" ratio="100" />
        </client-only>
      </figure>
      <div class="flex flex-col mt-2">
        <strong>{{ item.title }}</strong>
        <span class="text-gray-500 capitalize">{{ item.category }}</span>
        <span class="pt-3">{{ priceRupiah | rupiahFormat }}</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CardProduct',
  props: {
    item: {
      type: Object,
      default: () => { return {} }
    }
  },
  computed: {
    priceRupiah () {
      return this.item.price * 14000
    }
  }
}
</script>
<style scoped>
img {
  max-height: 150px;
  min-height: 150px;
}
</style>
