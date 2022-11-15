import ChuckNorrisApiService from "./ChuckNorrisApiService";
import LocalStorageService from "./LocalStorageService";
export default class JokesService extends ChuckNorrisApiService {
  constructor() {
    super({
      url: '/search',
      entity: 'jokes'
    })

    this.localStorageService = new LocalStorageService('jokes')
  }

  async index (params = {}) {
    const { limit = 20, offset = 0, categoryName = '', refresh = false } = params

    let data = this.localStorageService.get()

    /** If jokes were not available in local storage fetch from api */
    if (refresh || !data || data?.result?.length <= 0)
      data = await super.index({
        params: {
          query: 'all'
        },
      })

    let { result = [], total } = data

    /** Set uncategorized for the jokes that don't have categories */
    result = result.map(joke => {
      let { categories = [] } = joke

      if (!categories.length)
        categories[0] = 'uncategorized'

      return {
        ...joke,
        categories
      }
    })

    /** Save after updating the category values */
    this.localStorageService.save({
      total,
      result
    })

    /** Get by category name filter */
    if (categoryName)
      result = result.filter(joke => joke.categories.includes(categoryName.toLowerCase()))

    return result.slice(offset, limit)
  }

  async search (searchString = '') {

  }

  /** Save Item to local storage */
  async saveItem (item) {
    const currentJokes = this.localStorageService.get()

    const { result = [], total = 0 } = currentJokes

    // save the item to local storage
    this.localStorageService.save({
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