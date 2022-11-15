import ChuckNorrisApiService from "./ChuckNorrisApiService";

export default class JokesService extends ChuckNorrisApiService {
  constructor() {
    super({
      url: '/search'
    })
  }

  async index (searchString = 'all') {
    return super.index({
      params: {
        query: searchString
      }
    })
  }
}