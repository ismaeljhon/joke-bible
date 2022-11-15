import ChuckNorrisApiService from "./ChuckNorrisApiService";
export default class JokesService extends ChuckNorrisApiService {
  constructor() {
    super({
      url: '/search',
      entity: 'jokes'
    })
  }

  async index (params = {}) {
    const { refresh = false, limit = 20, offset = 0 } = params

    return super.index({
      params: {
        query: 'all'
      },
      refresh
    })
      .then(({ result = [] }) => {
        /** This will serve as the pagination for a long collection */
        return result.slice(offset, limit)
      })
  }

  async search (searchString = '') {

  }
}