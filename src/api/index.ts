const BASE_URL = 'https://tame-erin-pike-toga.cyclic.app'
import axios from 'axios'

export default function request(path: string, options: any = {}) {
    const { method, params } = options

    return axios({
        url: `${BASE_URL}${path}`,
        method,
        params
    })
        .then((response) => response.data)
        .catch((error) => error)
}