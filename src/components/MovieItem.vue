<template>
  <div class="movie-item">
    <figure @click="openDetails" v-lazyload class="movie-poster__wrapper">
      <img class="movie-poster" :data-url="moviePosterUrl" :alt="`${movieTitle} poster`">
    </figure>
    <div class="movie-info">
      <h6 class="movie-title">{{movieTitle}}</h6>
      <span class="movie-year">{{movieYear}}</span>
    </div>
    <p class="movie-gengre">{{genres}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { MovieObject } from '../helpers'
import router from '@/router'

export default defineComponent({
  name: 'movie-item',
  props: {
    movie: Object as PropType<MovieObject>
  },

  setup(props) {
    const movieTitle = computed(() => props.movie?.title)
    const movieYear = computed(() => props.movie?.year)
    const moviePosterUrl = computed(() => props.movie?.posterurl)
    const genres = computed(() => props.movie?.genres.join(', '))

    const openDetails = () => {
      window.scrollTo({ top: 0 })
      router.push(`/details/${props.movie?.id}`)
    }

    return {
      movieTitle,
      movieYear,
      moviePosterUrl,
      genres,
      openDetails,
    }
  },
})
</script>


<style scoped>
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
.movie-info{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.movie-title{
  font-weight: 500;
  font-size: 16px;
  margin: 0;
}
.movie-gengre{
  font-size: 12px;
  margin: 5px 0 0 0;
  text-align: left;
}
.movie-year{
  border: 1px #fff solid;
  border-radius: 5px;
  padding: 2px 10px;
  font-size: 14px;
}
.movie-item{
  width: 324px;
  color: #fff;
  margin-bottom: 30px;
}
.movie-poster{
  height: 100%;
  max-height: 455px;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
}
.movie-poster__wrapper{
  height: 455px;
}
</style>
