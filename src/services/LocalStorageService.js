export default class LocalStorageService {
  constructor(name = '') {
    if (!name)
      console.error('Cannot fetch item in localstorage without name')

    this.name = name
  }
  save (value = '') {
    localStorage.setItem(this.name, JSON.stringify(value))
  }

  get () {
    const item = localStorage.getItem(this.name)

    if (!item)
      return null

    return JSON.parse(item)
  }
}