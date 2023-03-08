<template>
  <div class="movie-item">
    <figure @click="openDetails" v-lazyload class="movie-poster__wrapper">
      <img class="movie-poster" :data-url="movie.posterUrl" :alt="`${movie.title} poster`">
    </figure>
    <div class="movie-info">
      <h6 class="movie-title">{{movie.title}}</h6>
      <span class="movie-year">{{movie.year}}</span>
    </div>
    <p class="movie-gengre">{{getGenres}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { mapMutations } from 'vuex'
import { MovieObject } from '../helpers'

export default defineComponent({
  name: 'movie-item',
  props: {
    movie: Object as PropType<MovieObject>
  },

  computed: {
    getGenres () {
      return this.movie?.genres.join(', ')
    }
  },
  methods: {
    ...mapMutations({
      setCurrentMovieId: 'setCurrentMovieId'
    }),
    openDetails () {
      window.scrollTo({ top: 0 })
      this.setCurrentMovieId(this.movie?.id)
      this.$router.push(`/details/${this.movie?.id}`)
    }
  }
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
