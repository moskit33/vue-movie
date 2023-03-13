<template>
  <div class="hello">
    <div class="search-section">
      <h1 class="search-title">FIND YOUR MOVIE</h1>
      <div class="search-wrapper">
        <input type="text" :value="searchInput" @input="(event) => setSearchInput((event.target as any).value)" @keyup.enter="searchHandle">
        <MovieButton @click="searchHandle" :is-search="true">SEARCH</MovieButton>
      </div>
      <div class="searchBy">
        SEARCH BY
        <MovieButton @click="changeSearchBy('title')" :is-active="searchBy === 'title'">TITLE</MovieButton>
        <MovieButton @click="changeSearchBy('genre')" :is-active="searchBy === 'genre'">GENRE</MovieButton>
      </div>
    </div>
    <div class="sorting-wrap">
      <div class="sorting">
        <span class="sorting-found">{{sortedAndSearchedMovies.length}} was found</span>
        SORT BY
        <MovieButton @click="setSortBy('date')" :is-active="sortBy === 'date'">Release Date</MovieButton>
        <MovieButton @click="setSortBy('duration')" :is-active="sortBy === 'duration'">Duration</MovieButton>
      </div>
    </div>
    <MovieList :movieList="sortedAndSearchedMovies" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MovieButton from '../components/MovieButton.vue'
import MovieList from '../components//MovieList.vue'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default defineComponent({
  name: 'HomeView',
  props: {
    msg: String
  },
  data: function () {
    return {}
  },
  methods: {
    ...mapMutations({
      setSearchInput: 'setSearchInput',
      setSortBy: 'setSortBy',
      setSearchBy: 'setSearchBy'
    }),
    ...mapActions({
      searchHandle: 'searchHandle'
    }),
    changeSearchBy (value: string) {
      this.setSearchBy(value)
      this.searchHandle()
    },
  },
  computed: {
    ...mapState({
      searchInput: (state: any) => state.searchInput,
      sortBy: (state: any) => state.sortBy,
      searchBy: (state: any) => state.searchBy,
    }),
    ...mapGetters({
      sortedAndSearchedMovies: 'sortedAndSearchedMovies'
    })
  },
  components: { MovieList, MovieButton }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
