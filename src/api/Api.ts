import request from "./index";

export default class Api {
    static fetchAllMovies({ searchBy, sortBy, searchQuery }: { searchBy: string, sortBy: string, searchQuery: string }) {
        return request('/movies',
            {
                params:
                {
                    [`${searchBy}_like`]: searchQuery,
                    _sort: sortBy,
                    _order: 'asc'
                }
            })
    }

    static fetchMovieById(id: string) {
        return request(`/movies/${id}`)
    }

    static fetchMovieByGenre(genre: string) {
        return request(`/movies`,
            {
                params:
                {
                    genres_like: genre,
                }
            })
    }
}