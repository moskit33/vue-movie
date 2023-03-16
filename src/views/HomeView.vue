<template>
  <div class="hello">
    <div class="search-section">
      <h1 class="search-title">FIND YOUR MOVIE</h1>
      <div class="search-wrapper">
        <input type="text" :value="searchInput" @input="handleSearchInput" @keyup.enter="getAllMovies">
        <MovieButton @click="getAllMovies" :is-search="true">SEARCH</MovieButton>
      </div>
      <div class="searchBy">
        SEARCH BY
        <MovieButton @click="changeSearchBy('title')" :is-active="searchBy === 'title'">TITLE</MovieButton>
        <MovieButton @click="changeSearchBy('genres')" :is-active="searchBy === 'genres'">GENRE</MovieButton>
      </div>
    </div>
    <div class="sorting-wrap">
      <div class="sorting">
        <span class="sorting-found">{{searchedMovies.length}} was found</span>
        SORT BY
        <MovieButton @click="changeSortBy('year')" :is-active="sortBy === 'year'">Release Date</MovieButton>
        <MovieButton @click="changeSortBy('duration')" :is-active="sortBy === 'duration'">Duration</MovieButton>
      </div>
    </div>
    <div v-if="isLoading" class="loader">
      <img src="../assets/loader.gif" alt="loader">
    </div>
    <MovieList v-else :movieList="searchedMovies" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch, onMounted } from 'vue'
import MovieButton from '../components/MovieButton.vue'
import MovieList from '../components//MovieList.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'HomeView',
  props: {
    searchQuery: {
      type: String,
      default: '',
    },
    searchByParam: {
      type: String,
      default: 'title',
    },
    sortByParam: {
      type: String,
      default: 'year',
    }
  },
  
  setup(props) {
    const store = useStore()
    const router = useRouter()
    store.commit('setSearchInput', props.searchQuery)
    store.commit('setSortBy', props.sortByParam)
    store.commit('setSearchBy', props.searchByParam)
    getAllMovies()
    // onMounted(() => {
      
    // })

    const searchInput = computed(() => store.state.searchInput)
    const sortBy = computed(() => store.state.sortBy)
    const searchBy = computed(() => store.state.searchBy)

    const searchedMovies = computed(() => {
      return store.state.searchedMovieList
    })

    const isLoading = computed(() => {
      return store.state.isLoading
    })

    function changeSortBy(value: string) {
      store.commit('setSortBy', value)
      router.push({ query: { ...router.currentRoute.value.query, sortBy: value } });
      getAllMovies()
    }

    function changeSearchBy(value: string) {
      store.commit('setSearchBy', value)
      router.push({ query: { ...router.currentRoute.value.query, searchBy: value } });
      getAllMovies()
    }

    function handleSearchInput(event: Event) {
      const value = (event.target as HTMLInputElement).value
      store.commit('setSearchInput', value)
      router.push({ query: { ...router.currentRoute.value.query, q: value } });
    }

    function getAllMovies() {
      store.dispatch('getAllMovies')
    }

    return {
      searchInput,
      sortBy,
      searchBy,
      searchedMovies,
      isLoading,
      changeSortBy,
      changeSearchBy,
      handleSearchInput,
      getAllMovies,
    }
  },
  components: { MovieList, MovieButton }
})
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.loader {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader img {
  width: 100px;
  height: 100px;
}

.sorting-wrap{
  display: flex;

  background: #555555;
  padding: 30px 0;
  width: 100%;
}
.sorting-found {
  font-weight: 600;
  margin-right: auto;
  display: block;
}
.sorting {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  color: #fff;
}
.sorting button {
    margin-left: 20px;
  }
.search-section{
  padding: 50px 0;
  position: relative;
  background: url(../assets/bg.jpg);
  
}
.search-section::before{
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  z-index: 0;

}

.search-wrapper, .searchBy, .search-title{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}
.search-wrapper{
  margin-bottom: 20px;
  
}
.search-wrapper input{
  height: 58px;
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 0px 20px;
  font-size: 24px;
  color: #fff;
  background-color: rgb(63 63 63 / 73%);
}
.search-wrapper input:focus, .search-wrapper input:active {
  border: none;
}
.search-title{
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 35px;
  color: #fff;
}
.searchBy{
  color: #fff;
  position: relative;
}
.searchBy .button {
  margin-left: 25px;
}
.searchBy .button:last-child{
  margin: 0;
}
</style>
