<template>
  <div class="movie-item">
    <img class="movie-poster" @click="openDetails" :src="movie.posterUrl" alt="" @error="handleImgError">
    <div class="movie-info">
      <h6 class="movie-title">{{movie.title}}</h6>
      <span class="movie-year">{{movie.year}}</span>
    </div>
    <p class="movie-gengre">{{getGenres}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { MovieObject, NOT_FOUND_IMAGE } from '../helpers'

export default defineComponent({
  name: 'movie-item',
  props: {
    movie: {
      type: Object as PropType<MovieObject>,
      required: true
    }
  },
  computed: {
    getGenres () {
      return this.movie.genres.join(', ')
    }
  },
  methods: {
    handleImgError (event: any) {
      if (event && event.target && event.target.src) {
        event.target.src = NOT_FOUND_IMAGE
      }
    },
    openDetails () {
      window.scrollTo({ top: 0 })
      this.$router.push(`/details/${this.movie.id}`)
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
  height: 455px;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
}
</style>
