<template>
  <div>
    <breadcrumb-default :label="slug" />
    <section-default title="catalogue">
      <template #default>
        <content-catalogue :items="items" />
      </template>
    </section-default>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $axios, error, store, params }) {
    try {
      const { slug = 'all' } = params
      let url = ''
      if (slug === 'all' || slug === undefined) {
        url = 'https://fakestoreapi.com/products'
      } else {
        url = `https://fakestoreapi.com/products/category/${slug}`
      }
      const response = await $axios.$get(url)
      return {
        slug,
        items: response
      }
    } catch (err) {
      const { status: statusCode = 500 } = err
      error({
        statusCode,
        message: `Error (${status})`
      })
    }
  }
}
</script>
