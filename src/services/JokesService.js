import ChuckNorrisApiService from "./ChuckNorrisApiService";
import LocalStorageService from "./LocalStorageService";
export default class JokesService extends ChuckNorrisApiService {
  constructor() {
    super({
      url: '/search',
      entity: 'jokes'
    })
  }

  async index (params = {}) {
    const { limit = 20, offset = 0 } = params

    return super.index({
      params: {
        query: 'all'
      },
    })
      .then(({ result = [] }) => {
        /** This will serve as the pagination for a long collection */
        return result.slice(offset, limit)
      })
  }

  async search (searchString = '') {

  }

  /** Save Item to local storage */
  async saveItem (item) {
    const localStorageService = new LocalStorageService('jokes')
    const currentJokes = localStorageService.get()

    const { result = [], total = 0 } = currentJokes

    // save the item to local storage
    localStorageService.save({
      total,
      result: result.map(joke => {
        if (item.id === joke.id) {
          return {
            ...joke,
            ...item
          }
        }

        return joke
      })
    })
  }
}