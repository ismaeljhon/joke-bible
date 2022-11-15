import axios from 'axios'

export default class ApiService {
  constructor(instanceParams) {
    this.axiosInstance = axios.create(instanceParams)
  }

  async request (requestConfig) {
    return this.axiosInstance.request(requestConfig)
  }
}