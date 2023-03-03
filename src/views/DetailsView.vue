<template>
  <div v-if="movieDetails">
    <div class="details-section">
      <div class="details-container">
        <img class="details-img" :src="movieDetails.posterUrl" @error="handleImgError" />
        <div class="details-wrapper">
          <h2 class="details-title">{{movieDetails.title}}</h2>
          <div class="details-year__wrapper">
            <p class="details-year"><span>{{movieDetails.year}}</span> year</p>
            <p class="details-year"><span>{{movieDetails.runtime}}</span> min</p>
          </div>
          <p class="details-description">{{movieDetails.plot}}</p>
        </div>
      </div>
      <RouterLink class="linkToSearch" to="/"><img src="../assets/zoom-icon-svgrepo-com.svg"/></RouterLink>
    </div>
    <div v-if="getCurrentGenre" class="sorting-wrap">
      <div class="sorting">
        <span class="sorting-found">Films by {{getCurrentGenre}} genre</span>
      </div>
    </div>
    <MovieList :movieList="getMoviesByGenre()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MovieList from '../components/MovieList.vue'
import movieDB from '../assets/db.json'
import { MovieObject, NOT_FOUND_IMAGE } from '../helpers'

export default defineComponent({
  name: 'HomeView',
  components: { MovieList },
  data: function (): { movieList: MovieObject[], movieDetails: MovieObject} {
    return {
      movieList: movieDB.movies,
      movieDetails: {} as MovieObject
    }
  },
  created: function () {
    this.setMovieDetails()
  },
  updated: function () {
    this.setMovieDetails()
  },
  methods: {
    handleImgError (event: any) {
      if (event && event.target && event.target.src) {
        event.target.src = NOT_FOUND_IMAGE
      }
    },
    getMoviesByGenre () {
      return this.movieList.filter((el) => el.genres.some((genre) => genre === this.getCurrentGenre)).filter((el) => el.id !== this.movieDetails.id)
    },
    setMovieDetails () {
      const movieId = this.$route.params.id
      console.log('movieId', movieId);
      
      this.movieDetails = this.movieList.find((el: MovieObject) => +el.id === +movieId)! as MovieObject
    }
  },
  computed: {
    getCurrentGenre (): string {
      return this.movieDetails.genres[0]
    }
  }
})
</script>
<style scoped>
.details-section{
  padding: 70px 0;
  position: relative;
  background: url(../assets/bg.jpg);

}
.details-section::before{
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
.details-container{
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: nowrap;

}
.details-img {
  display: block;
  object-fit: cover;
  margin-right: 40px;
  width: 100%;
  max-width: 300px;
  height: 400px;
}
.details-wrapper{
  display: flex;
  flex-direction: column;
  color: #fff;
  padding-top: 30px;
}
.details-title{
  font-size: 40px;
  font-weight: normal;
  text-align: left;
  margin-bottom: 20px;
}
.details-year{
  display: inline-block;
  text-align: left;
  margin-bottom: 20px;
  margin-right: 30px;
  
}
.details-year span{
  font-size: 28px;
  color: #f65261;
  font-weight: normal;
}
.details-year__wrapper {
  display: flex;
  justify-content: flex-start;
}
.details-description {
  font-size: 17px;
  text-align: left;
  line-height: 22px;
}
.linkToSearch{
  position: absolute;
  right: 20px;
  top: 20px;
  display: block;
  width: 35px;
  height: 35px;
  
}
.linkToSearch img{
  display: block;
  width: 100%;
  height: 100%;
}
.sorting-wrap{
  display: flex;
  background: #555555;
  padding: 30px 0;
  width: 100%;
}
.sorting {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  color: #fff
}
.sorting-found {
  font-weight: 600;
  margin-right: auto;
  display: block;
}
</style>
