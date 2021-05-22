export interface UiState {
  darkTheme: boolean
}

const state = () => ({
  darkTheme: false,
})

const getters = {}

const actions = {}

const mutations = {
  toggleTheme(state: UiState) {
    state.darkTheme = !state.darkTheme
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
