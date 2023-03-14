export interface MovieObject {
  id: number,
  title: string,
  year: string,
  genres: string[],
  posterurl: string,
  director: string,
  actors: string,
  storyline: string
  runtime: string
}

export const NOT_FOUND_IMAGE = 'https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-600w-744886198.jpg'
