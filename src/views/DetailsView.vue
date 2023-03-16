<template>
  <div v-if="isLoading" class="loader">
    <img src="../assets/loader.gif" alt="loader">
  </div>
  <div v-else-if="currentMovieDetails">
    <div class="details-section">
      <div class="details-container">
        <img class="details-img" :src="currentMovieDetails.posterurl" @error="handleImgError" />
        <div class="details-wrapper">
          <h2 class="details-title">{{currentMovieDetails.title}}</h2>
          <div class="details-year__wrapper">
            <p class="details-year"><span class="number">{{currentMovieDetails.year}}</span> year</p>
            <div v-html="getDuration"></div>
          </div>
          <p class="details-description">{{currentMovieDetails.storyline}}</p>
        </div>
      </div>
      <RouterLink class="linkToSearch" to="/"><img src="../assets/zoom-icon-svgrepo-com.svg"/></RouterLink>
    </div>
    <div class="sorting-wrap">
      <div class="sorting">
        <span class="sorting-found">Films by {{getCurrentGenre}} genre</span>
      </div>
    </div>
    <MovieList :movieList="movieListByGenre" />
  </div>
  <div v-else class="not-found-movie">MOVIE NOT FOUND :(</div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, onUpdated, watch, ref } from 'vue'
import MovieList from '../components/MovieList.vue'
import { NOT_FOUND_IMAGE } from '../helpers'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'DetailsView',
  components: { MovieList },
  setup() {
    const route = useRoute()
    const store = useStore()
    const isLoading = computed(() => store.state.isLoading)
    const currentMovieDetails = computed(() => store.state.currentMovieDetails)
    const movieListByGenre = computed(() => store.state.movieListByGenre)
    const movieId = ref(route.params.id+'')
    
    const getMovieById = (id: string) => {
      store.dispatch('getMovieById', id)
    }

    const handleImgError = (event: any) => {
      if (event && event.target && event.target.src) {
        event.target.src = NOT_FOUND_IMAGE
      }
    }

    const getCurrentGenre = computed(() => {
      return currentMovieDetails.value?.genres[0]
    })

    const getDuration = computed(() => {
      return `<p class="details-year"><span class="number">${currentMovieDetails.value.duration.slice(2,-1)}</span> min</p>`
    })

    onMounted(() => {
      getMovieById(movieId.value)
    })

    watch(() => route.params.id, (newVal, oldVal) => {
      if(newVal !== oldVal) {
        movieId.value = newVal+''
        getMovieById(movieId.value)
      }
    })

    return {
      isLoading,
      currentMovieDetails,
      movieListByGenre,
      handleImgError,
      getCurrentGenre,
      getDuration
    }
  }
})
</script>
<style>
.details-section{
  padding: 70px 0;
  position: relative;
  background: url(../assets/bg.jpg);

}
.loader{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
.loader img {
  width: 100px;
  height: 100px;
}
.not-found-movie{
  display: flex;
  justify-content: center;
  align-items: center;
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
.details-year .number {
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
