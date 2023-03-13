import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  xit('renders the current movie details', () => {
    const currentMovieDetails = {
      title: 'The Matrix',
      year: '1999',
      plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      posterUrl: 'https://www.example.com/the-matrix-poster.jpg',
      runtime: 136,
      genres: ['Action', 'Sci-Fi']
    }

    const wrapper = mount(HomeView, {
      data() {
        return {
          currentMovieDetails
        }
      }
    })

    expect(wrapper.find('.details-title').text()).toEqual(currentMovieDetails.title)
    expect(wrapper.find('.details-year__wrapper').text()).toContain(currentMovieDetails.year)
    expect(wrapper.find('.details-description').text()).toEqual(currentMovieDetails.plot)
    expect(wrapper.find('.details-img').attributes('src')).toEqual(currentMovieDetails.posterUrl)
    expect(wrapper.find('.details-year__wrapper').text()).toContain(currentMovieDetails.runtime)
  })

  // it('handles img error', () => {
  //   const wrapper = mount(HomeView)
  //   wrapper.vm.handleImgError({ target: { src: '' } })
  //   expect(wrapper.find('.details-img').attributes('src')).toEqual('https://www.example.com/not-found-image.jpg')
  // })

  // it('sets the movie ID', () => {
  //   const setCurrentMovieIdMock = jest.fn()
  //   const currentMovieId = 1
  //   const $route = {
  //     params: {
  //       id: currentMovieId
  //     }
  //   }
  //   const wrapper = mount(HomeView, {
  //     mocks: {
  //       $route
  //     },
  //     methods: {
  //       setCurrentMovieId: setCurrentMovieIdMock
  //     }
  //   })

  //   expect(setCurrentMovieIdMock).toHaveBeenCalledWith(currentMovieId)
  // })

  // it('gets the current genre', () => {
  //   const currentMovieDetails = {
  //     genres: ['Action', 'Sci-Fi']
  //   }
  //   const wrapper = mount(HomeView, {
  //     data() {
  //       return {
  //         currentMovieDetails
  //       }
  //     }
  //   })

  //   expect(wrapper.vm.getCurrentGenre).toEqual(currentMovieDetails.genres[0])
  // })

  // it('gets the duration', () => {
  //   const currentMovieDetails = {
  //     runtime: 136
  //   }
  //   const wrapper = mount(HomeView, {
  //     data() {
  //       return {
  //         currentMovieDetails
  //       }
  //     }
  //   })

  //   expect(wrapper.vm.getDuration).toContain(currentMovieDetails.runtime)
  // })
})