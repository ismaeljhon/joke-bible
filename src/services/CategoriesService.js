import ChuckNorrisApiService from "./ChuckNorrisApiService";

export default class CategoriesService extends ChuckNorrisApiService {
  constructor() {
    super({
      url: '/categories'
    })
  }
}