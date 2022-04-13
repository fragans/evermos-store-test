export default {
  async fetchCategories ({ commit, state }, { app }) {
    const unshiftItems = await app.$axios.$get(
      'https://fakestoreapi.com/products/categories/',
      {
        headers: {
          Authorization: `Bearer ${state.jwt}`
        }
      }
    )
    const items = ['all'].concat(unshiftItems)
    commit('setCategories', items)
  }
}
