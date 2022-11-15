import ApiService from "./ApiService";
import LocalStorageService from './LocalStorageService'
export default class ChuckNorrisApiService {
  constructor(params = {}) {
    const { url = '', entity = '' } = params

    this.apiService = new ApiService({
      baseURL: 'https://api.chucknorris.io/jokes'
    })

    this.url = url
    this.entity = entity

    this.localStorageService = new LocalStorageService(this.entity)
  }

  async index (requestParams = {}, options = {}) {
    const { refresh = false } = options
    let res = this.localStorageService.get()

    if (refresh || !res || typeof res != 'object' || res?.length <= 0) {

      console.info(`No ${this.entity} saved in local storage will fetch from chuck norris API`)
      return this.apiService.request({
        method: 'GET',
        url: this.url,
        ...requestParams
      })
        .then(res => res.data)
        .then(data => {
          this.localStorageService.save(data)
          return data
        })
    }

    return res
  }

  // New Joke
  add () { }

  // Update Joke
  update () { }

  // Delete Joke
  deleteItem () { }
}