<template>
  <div class="flex items-center justify-start max-w-6xl mx-auto lg:px-8">
    <div class="grid lg:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10">
      <div v-for="(item,key) in items" :key="key" class="p-4">
        <card-product :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentHome',
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
