<template>
  <div>
    <section-default title="promo">
      <template #default>
        <content-banner-promo :items="promo" />
      </template>
    </section-default>
    <breadcrumb-default />
    <section-default title="catalogue" class="px-4">
      <template #default>
        <content-catalogue :items="catalogue" />
      </template>
    </section-default>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $axios, error, store }) {
    try {
      // fetch data product
      const catalogue = await $axios.$get('https://fakestoreapi.com/products')
      // fetch data promo
      const promo = [
        'https://c0wlromt5d4w.cdn.shift8web.com/wp-content/uploads/2020/11/468346bdba371009ce248d9e6f0ba9c4-1.jpg',
        'https://i0.wp.com/suaraislam.id/wp-content/uploads/2021/10/evermos.jpg?w=650&ssl=1'
      ]

      return {
        catalogue,
        promo
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
