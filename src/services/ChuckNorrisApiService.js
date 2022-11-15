import ApiService from "./ApiService";

export default class ChuckNorrisApiService {
  constructor(params = {}) {

    this.apiService = new ApiService({
      baseURL: 'https://api.chucknorris.io/jokes'
    })

    this.url = params?.url
  }

  async index (requestParams = {}) {
    return this.apiService.request({
      method: 'GET',
      url: this.url,
      ...requestParams
    }).then(res => res.data)
  }

  // New Joke
  add () { }

  // Update Joke
  update () { }

  // Delete Joke
  deleteItem () { }
}