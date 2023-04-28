import { mount } from '@vue/test-utils'
import MovieList from '@/components/MovieList.vue'
import MovieItem from '@/components/MovieItem.vue'

describe('MovieList', () => {
    it('renders MovieItems for each movie in the movieList prop', () => {
        const movieList = [
            { id: 1, title: 'Movie 1', year: 2021, genres: ['Action', 'Drama'], posterUrl: 'http://example.com/movie1.jpg' },
            { id: 2, title: 'Movie 2', year: 2022, genres: ['Comedy'], posterUrl: 'http://example.com/movie2.jpg' }
        ]
        const wrapper = mount(MovieList, {
            props: { movieList }
        })
        const movieItems = wrapper.findAllComponents(MovieItem)
        expect(movieItems).toHaveLength(2)
        expect(movieItems[0].props('movie')).toEqual(movieList[0])
        expect(movieItems[1].props('movie')).toEqual(movieList[1])
    })
})