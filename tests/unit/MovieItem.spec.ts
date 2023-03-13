import { mount } from '@vue/test-utils'
import MovieItem from '@/components/MovieItem.vue'

describe('MovieItem', () => {
    const movie = {
        id: 1,
        title: 'Test Movie',
        year: 2021,
        genres: ['Action', 'Adventure']
    }

    it('renders the component with correct movie props', () => {
        const wrapper = mount(MovieItem, {
            props: {
                movie
            }
        })

        expect(wrapper.find('.movie-title').text()).toBe('Test Movie')
        expect(wrapper.find('.movie-year').text()).toBe('2021')
        expect(wrapper.find('.movie-gengre').text()).toBe('Action, Adventure')
    })

    xit('calls openDetails method on figure click', async () => {
        const wrapper = mount(MovieItem, {
            props: {
                movie
            },
            global: {
                mocks: {
                    $router: {
                        push: jest.fn()
                    },
                    $store: {
                        mutations: {
                            setCurrentMovieId: jest.fn()
                        }
                    }
                }
            }
        })

        await wrapper.find('figure').trigger('click')

        console.log('asdfasd ', wrapper.vm);

        const spyOnSetCurrentMovieId = (wrapper.vm.setCurrentMovieId = jest.fn());
        await wrapper.find('.button').trigger('click');
        expect(spyOnSetCurrentMovieId).toHaveBeenCalledWith(1)

        // expect(wrapper.vm.setCurrentMovieId).toHaveBeenCalledWith(1)
        expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/details/1')
    })
})