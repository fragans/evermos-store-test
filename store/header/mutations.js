export default {
  sidebarVisibility (state) {
    state.sidebarIsVisible = !state.sidebarIsVisible
  },
  setCategories (state, payload) {
    state.categories = payload
  }
}
