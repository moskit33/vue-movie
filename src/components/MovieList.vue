<template>
  <div class="movie-list">
    <div v-if="moviesExist" class="container">
      <MovieItem v-for="movie in movieList" :movie="movie" :key="movie.id"  />
    </div>
    <div v-else class="not-found">
      No films found
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import MovieItem from '../components/MovieItem.vue'

export default defineComponent({
  name: 'movie-list',
  props: {
    movieList: {
      type: Array,
      default: () => []
    }
  },
  components: { MovieItem },

  setup(props) {
    const moviesExist = computed(() => props.movieList && props.movieList.length > 0)

    return {
      moviesExist
    }
  }
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

.not-found{
  font-size: 50px;
  color: #fff;
  height: 50vh;
  line-height: 50vh;
}
</style>
