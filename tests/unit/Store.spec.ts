import Store from '@/store/index'

describe('Vuex store', () => {
    it('setSortBy mutation sets sortBy state', () => {
        Store.commit('setSortBy', 'rating');
        expect(Store.state.sortBy).toBe('rating');
    });

    it('setSearchBy mutation sets searchBy state', () => {
        Store.commit('setSearchBy', 'genres');
        expect(Store.state.searchBy).toBe('genres');
    });

    it('setSearchInput mutation sets searchInput state', () => {
        Store.commit('setSearchInput', 'Star Wars');
        expect(Store.state.searchInput).toBe('Star Wars');
    });

    it('setSearchedMovieList mutation sets searchedMovieList state', () => {
        const movies = [{ id: 1, title: 'The Shawshank Redemption' }, { id: 2, title: 'The Godfather' }];
        Store.commit('setSearchedMovieList', movies);
        expect(Store.state.searchedMovieList).toEqual(movies);
    });

    it('setcurrentMovieDetails mutation sets currentMovieDetails state', () => {
        Store.commit('currentMovieDetails', '1');
        expect(Store.state.currentMovieDetails).toBe('1');
    });
});