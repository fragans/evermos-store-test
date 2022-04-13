<template>
  <div class="px-4">
    {{ item.title }}
    <span class="text-gray-500">
      <img :src="item.image" alt="">
    </span>
  </div>
</template>

<script>
export default {
  name: 'cardPromo',
  props: {
    item: {
      type: Object,
      default: () => { return {} }
    }
  }
}
</script>
