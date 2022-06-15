import Vue from 'vue'
import Vuex from 'vuex'

// I want persistant state, so when you review this, you don't go 'oh man, when I refresh I have no data'.
import createPersistedState from "vuex-persistedstate";

// I prefer breaking my store down into individual modules, easier to maintain and write tests for.
import search from './search'
import favourites from './favourites'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    search,
    favourites
  },
  plugins: [createPersistedState()]
})
