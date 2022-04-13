<template>
  <div v-if="loading" class="z-10 bg-white fixed top-0 left-0 w-full min-h-screen flex justify-center items-center pt-28 text-3xl overflow-y-hidden">
    <span class="rotate">
      <font-awesome-icon :icon="['fa', 'spinner']" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'CardLoading',
  data: () => ({
    loading: false
  }),
  transition: 'fade',
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>
<style scoped>
.rotate {
  display: inline-block;
  animation:spin 3s linear infinite;
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform:rotate(360deg);
  }
}
</style>
