import ChuckNorrisApiService from "./ChuckNorrisApiService";
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
}