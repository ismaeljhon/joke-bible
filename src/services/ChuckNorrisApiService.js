import ApiService from "./ApiService";
export default class ChuckNorrisApiService {
  constructor(params = {}) {
    const { url = '' } = params

    this.apiService = new ApiService({
      baseURL: 'https://api.chucknorris.io/jokes'
    })

    this.url = url
  }

  async index (requestParams = {}) {
    return this.apiService.request({
      method: 'GET',
      url: this.url,
      ...requestParams
    })
      .then(res => res.data)
  }
}