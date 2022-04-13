<template>
  <div class="flex max-w-6xl mx-auto">
    <card-product-detail :item="item"/>
  </div>
</template>

<script>
export default {
  name: 'PageAboutIndex',
  async asyncData ({ $axios, error, params }) {
    try {
      const { id } = params
      const response = await $axios.$get(`https://fakestoreapi.com/products/${id}`)
      return {
        item: response
      }
    } catch (err) {
      const { status: statusCode = 500 } = err
      error({
        statusCode,
        message: `Error (${statusCode})`
      })
    }
  }
}
</script>
