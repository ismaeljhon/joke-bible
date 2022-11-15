import ChuckNorrisApiService from "./ChuckNorrisApiService";
import LocalStorageService from './LocalStorageService'

export default class JokesService extends ChuckNorrisApiService {
  constructor() {
    super({
      url: '/search',
      entity: 'jokes'
    })
  }

  async index (refresh = false) {
    return super.index({
      params: {
        query: 'all'
      },
      refresh
    }).then(({ result = [] }) => {
      return result
    })
  }

  async search (searchString = '') {

  }
}