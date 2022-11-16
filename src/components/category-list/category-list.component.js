import { useEffect, useState } from "react";
import CategoriesService from "../../services/CategoriesService";
import JokesService from '../../services/JokesService'
import LocalStorageService from "../../services/LocalStorageService";

import CategoryListFilter from "../category-list-filter/category-list-filter.component";
import Joke from "../joke/joke.component";
import Loading from "../loading/loading.component";

const CategoryList = () => {
  const [isLoadingJokes, setIsLoadingJokes] = useState(false)
  const [jokes, setJokes] = useState([])
  const [jokesLimitPerPage, setJokesLimitPerPage] = useState(20)
  const [filterCategoryNameSelected, setFilterCategoryNameSelected] = useState('')
  const [isLoadingCategories, setIsLoadingCategories] = useState(false)
  const [categories, setCategories] = useState([])
  const [categoriesComputed, setCategoriesComputed] = useState([])
  const [isAllJokesLoaded, setIsAllJokesLoaded] = useState(false)

  useEffect(() => {
    (async () => {
      setIsLoadingJokes(true)
      const jokeResult = await new JokesService().index({ limit: jokesLimitPerPage, categoryName: filterCategoryNameSelected })

      setJokes(jokeResult)
      setIsLoadingJokes(false)

      setIsLoadingCategories(true)
      const result = await new CategoriesService().index()

      setCategories(result)
      setIsLoadingCategories(false)
    })()

  }, [filterCategoryNameSelected, jokesLimitPerPage])

  /** Compute Expected Total Jokes per categories */
  useEffect(() => {
    (async () => {
      const jokes = new LocalStorageService('jokes').get()

      setCategoriesComputed(categories.map(
        ({ name, type }) => ({
          name,
          type,
          count: jokes.result.filter(jokes => jokes.categories.includes(name.toLowerCase())).length

        })))
    })()
  }, [categories])

  useEffect(() => {
    const categoriesComputedSelected = categoriesComputed.find(category => category.name === filterCategoryNameSelected.toLowerCase())
    setIsAllJokesLoaded(jokesLimitPerPage >= categoriesComputedSelected?.count)

  }, [categoriesComputed, jokesLimitPerPage, filterCategoryNameSelected])

  const loadMore = () => {
    setJokesLimitPerPage(jokesLimitPerPage + 20)
  }

  return (
    <section className='joke-list'>
      <CategoryListFilter categories={categoriesComputed} isLoading={isLoadingCategories} handleSelectCategory={setFilterCategoryNameSelected} />

      {filterCategoryNameSelected ? <aside className='filterSelected'>
        <span>{filterCategoryNameSelected} Joke</span>
      </aside> : ''}

      <Loading isLoading={isLoadingJokes} loadingText="Loading Jokes..." />

      {jokes.map(joke =>
        <Joke item={joke} key={joke.id} />
      )}

      <aside>
        {!isAllJokesLoaded ? <button onClick={loadMore}>View More</button> : ''}
      </aside>
    </section>
  )
}

export default CategoryList