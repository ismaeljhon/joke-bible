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
      categories.push('uncategorized')
      this.localStorageService.save(categories)
    }

    return categories
  }
}