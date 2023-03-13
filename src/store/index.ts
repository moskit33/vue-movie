import { createStore } from 'vuex'
import movieDB from '../assets/db.json'

export default createStore({
  state: {
    searchInput: '',
    sortBy: 'date',
    searchBy: 'title',
    currentMovieId: '',
    movieList: movieDB.movies,
    searchedMovieList: movieDB.movies

  },
  getters: {
    currentMovieDetails: (state) => {
      return state.movieList.find((el: any) => +el.id === +state.currentMovieId)!
    },
    getMoviesByGenre: (state, getters) => {
      return state.movieList.filter((el) => el.genres.some((genre) => genre === getters.currentMovieDetails.genres[0])).filter((el) => +el.id !== +state.currentMovieId)
    },
    sortedAndSearchedMovies: (state) => {
      console.log("filtredMovieList", state);
      return state.searchedMovieList.sort((a: any, b: any) => state.sortBy === 'duration' ? +b.runtime - +a.runtime : +b.year - +a.year)
    },
  },
  mutations: {
    setSortBy(state, value) {
      state.sortBy = value
    },
    setSearchBy(state, value) {
      state.searchBy = value
    },
    setSearchInput(state, value) {
      state.searchInput = value
    },
    setSearchedMovieList(state, value) {
      state.searchedMovieList = value
    },
    setCurrentMovieId(state, value) {
      state.currentMovieId = value
    },
  },
  actions: {
    searchHandle({ state, commit }) {
      if (!state.searchInput.length) {
        commit('setSearchedMovieList', state.movieList)
      } else {
        if (state.searchBy === 'genre') {
          commit('setSearchedMovieList',
            state.movieList.filter(
              (el) => el.genres.some(
                (genre) => genre.toLowerCase().includes(state.searchInput.toLowerCase()))))
        } else {
          commit('setSearchedMovieList', state.movieList.filter((el) => el.title.toLowerCase().includes(state.searchInput.toLowerCase())))
        }
      }
    }
  },
  modules: {
  }
})
