// import { MovieList } from '@/components/MovieList.vue';
import { MovieObject } from '@/helpers'
import { createStore } from 'vuex'
import Api from '../api/Api'
import router from '../router';
export interface State {
  searchInput: string,
  sortBy: string,
  searchBy: string,
  currentMovieDetails: MovieObject | null,
  searchedMovieList: MovieObject[],
  movieListByGenre: MovieObject[],
  isLoading: boolean
}

export default createStore<State>({
  state: {
    searchInput: '',
    sortBy: 'year',
    searchBy: 'title',
    currentMovieDetails: null,
    searchedMovieList: [],
    movieListByGenre: [],
    isLoading: true,
  },
  getters: {
  },
  mutations: {
    setSortBy(state, value = 'year') {
      state.sortBy = value === 'duration' ? 'duration' : 'year'
    },
    setSearchBy(state, value = 'title') {
      state.searchBy = value === 'genres' ? 'genres' : 'title'
    },
    setSearchInput(state, value) {
      state.searchInput = value
    },
    setSearchedMovieList(state, value) {
      state.searchedMovieList = value
    },
    setCurrentMovieDetails(state, value) {
      state.currentMovieDetails = value
    },
    setIsLoading(state, value) {
      state.isLoading = value
    },
    setMovieListByGenre(state, value) {
      state.movieListByGenre = value
    }
  },
  actions: {
    getAllMovies({ state, commit }) {
      commit('setIsLoading', true)
      Api.fetchAllMovies({ searchBy: state.searchBy, sortBy: state.sortBy, searchQuery: state.searchInput }).then((movieList) =>
        commit('setSearchedMovieList', movieList)
      )
        .catch((error) => console.log(error))
        .finally(() => commit('setIsLoading', false))
    },
    getMovieById({ state, commit }, id: string) {
      commit('setIsLoading', true)
      Api.fetchMovieById(id).then((movieDetails) => {
        if (movieDetails) {
          commit('setCurrentMovieDetails', movieDetails)
          this.dispatch('getMovieByGenre', movieDetails.genres[0])
        }
      })
        .catch((error) => {
          router.push('/notFound')
          console.error("error", error);
        })
        .finally(() => commit('setIsLoading', false))
    },
    getMovieByGenre({ state, commit }, genre: string) {
      commit('setIsLoading', true)
      Api.fetchMovieByGenre(genre).then((movieList) => {
        commit('setMovieListByGenre', movieList)
      })
        .catch((error) => console.log(error))
        .finally(() => commit('setIsLoading', false))
    }
  }
})
