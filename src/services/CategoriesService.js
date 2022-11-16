import ChuckNorrisApiService from "./ChuckNorrisApiService";
import LocalStorageService from "./LocalStorageService";

export default class CategoriesService extends ChuckNorrisApiService {
  constructor() {
    super({
      url: '/categories',
    })

    this.localStorageService = new LocalStorageService('categories')
  }

  async index (params = {}) {
    const { refresh = false } = params
    let categories = this.localStorageService.get()

    if (refresh || !categories) {
      categories = await super.index()

      /** Randomize the color the type of the categories for now */
      const buttonTypes = ['weird-green', 'weird-green', 'kiwi-green', 'pastel-orange', 'pale-orange', 'sunset-orange', 'turquoise-blue']

      categories = categories.map(
        name => ({
          name,
          type: buttonTypes[Math.floor(Math.random() * 6) + 1]
        })
      )

      categories.push({
        name: 'uncategorized',
        type: 'primary'
      })
      this.localStorageService.save(categories)
    }

    return categories
  }
}