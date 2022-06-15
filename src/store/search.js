import axios from 'axios'

const search = {
  namespaced: true,
  state: {
    results: []
  },
  mutations: {
    updateResults(state, payload) {
      state.results = payload
    },
    clearResults(state) {
      state.results = []
    }
  },
  actions: {
    searchString({ commit }, { searchString }) {
      return axios({
        method: 'get',
        withCredentials: false,
        url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchString}`,
      })
        .then(response => {
          if (response.status === 200) {
            commit('updateResults', response.data.drinks)
          }
        })
    },

    searchRandom() {
      return axios({
        method: 'get',
        withCredentials: false,
        url: `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
      })
        .then(response => {
          if (response.status === 200) {
            return response.data.drinks
          }
        })
    },


    clearSearch({ commit }) {
      commit('clearResults')
    }
  },
  getters: {
    getResults(state) {
      return state.results
    }
  }
}
export default search