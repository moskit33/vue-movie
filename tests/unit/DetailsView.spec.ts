import { shallowMount } from '@vue/test-utils'
import DetailsView from '@/views/DetailsView.vue'

describe('DetailsView.vue', () => {
    it('renders current movie details when currentMovieDetails is truthy', () => {
        const wrapper = shallowMount(DetailsView, {
            computed: {
                currentMovieDetails: () => ({
                    id: '1',
                    title: 'The Matrix',
                    year: '1999',
                    plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
                    posterUrl: 'https://example.com/the-matrix.jpg',
                    genres: ['Action', 'Sci-Fi'],
                    runtime: '136'
                })
            },
            mocks: {
                $route: {
                    params: {
                        id: '1'
                    }
                }
            },
        })

        expect(wrapper.find('.details-section').exists()).toBe(true)
        expect(wrapper.find('.details-title').text()).toBe('The Matrix')
        expect(wrapper.find('.details-year .number').text()).toBe('1999')
        expect(wrapper.find('.details-description').text()).toBe('A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.')
        expect(wrapper.find('.details-img').attributes('src')).toBe('https://example.com/the-matrix.jpg')
        expect(wrapper.find('.details-year__wrapper').html()).toContain('<p class="details-year"><span class="number">136</span> min</p>')
    })

    // it('does not render current movie details when currentMovieDetails is falsy', () => {
    //     const wrapper = shallowMount(DetailsView, {
    //         computed: {
    //             currentMovieDetails: () => null
    //         }
    //     })

    //     expect(wrapper.find('.details-section').exists()).toBe(false)
    // })

    // it('renders movies by genre when getCurrentGenre is truthy', () => {
    //     const wrapper = shallowMount(DetailsView, {
    //         computed: {
    //             getCurrentGenre: () => 'Action',
    //             getMoviesByGenre: () => [
    //                 {
    //                     title: 'The Matrix',
    //                     year: '1999',
    //                     plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    //                     posterUrl: 'https://example.com/the-matrix.jpg',
    //                     genres: ['Action', 'Sci-Fi'],
    //                     runtime: '136'
    //                 }
    //             ]
    //         }
    //     })

    //     expect(wrapper.find('.sorting-wrap').exists()).toBe(true)
    //     expect(wrapper.find('.sorting-found').text()).toBe('Films by Action genre')
    //     expect(wrapper.findComponent({ name: 'MovieList' }).props('movieList')).toEqual([
    //         {
    //             title: 'The Matrix',
    //             year: '1999',
    //             plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    //             posterUrl: 'https://example.com/the-matrix.jpg',
    //             genres: ['Action', 'Sci-Fi'],
    //             runtime: '136'
    //         }
    //     ])
    // })

    // it('does not render movies by genre when getCurrentGenre is falsy', () => {
    //     const wrapper = shallowMount(DetailsView, {
    //         computed: {
    //             getCurrentGenre: () => null
    //         }
    //     })

    //     expect(wrapper.find('.sorting-wrap').exists()).toBe(false)
    //     expect(wrapper.findComponent({ name: 'MovieList' }).exists()).toBe(false)
    // })

    //   it('sets currentMovieId to route param id when it is not equal to currentMovieId', () => {
    //     const setCurrentMovieId = jest.fn()
    //     const wrapper = shallowMount(DetailsView, {
    //       mocks: {
    //         $route: {
    //           params: {
    //             id: '
})