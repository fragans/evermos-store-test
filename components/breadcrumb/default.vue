<template>
  <section title="breadcrumb" class="flex items-center justify-start max-w-6xl mx-auto px-8 py-8 text-gray-600">
    <font-awesome-icon :icon="['fa', 'chevron-right']" />
    <h1 class="uppercase text-3xl mx-4">{{ label }}</h1>
  </section>
</template>

<script>
export default {
  name: 'BreadcrumbDefault',
  props: {
    label: {
      type: String,
      default: 'Store'
    }
  }
}
</script>
