const favourites = {
  namespaced: true,
  state: {
    favourites: [],
    favouritesID: [],
  },
  mutations: {
    addItem(state, payload) {
      state.favourites.push(payload)
      state.favouritesID.push(payload.idDrink)
    },
    removeItem(state, payload) {
      state.favourites.splice(state.favourites.indexOf(payload), 1)
      state.favouritesID.splice(state.favouritesID.indexOf(payload.idDrink), 1)
    },
  },
  actions: {
    addItem({ commit }, { object }) {
      commit('addItem', object)
    },
    removeItem({ commit }, { object }) {
      commit('removeItem', object)
    },
  },
  getters: {
    getFavourites(state) {
      return state.favourites
    },
    getFavouritesIDList(state) {
      return state.favouritesID
    }

  }
}
export default favourites