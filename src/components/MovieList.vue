<template>
  <div class="movie-list">
    <div class="container">
      <MovieItem v-for="movie in movieList" :movie="movie" :key="movie.id"  />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MovieItem from '../components/MovieItem.vue'
export default defineComponent({
  name: 'movie-list',
  computed: {
  },
  props: {
    movieList: {
      type: Array
    }
  },

  components: { MovieItem }
})
</script>

<style scoped>
.movie-list{
  width: 100%;
  background: #232323;
  padding-top: 30px;
  height: 100%;
    min-height: 60vh;
}
.container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;
}
</style>
