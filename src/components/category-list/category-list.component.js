import { useEffect, useState } from "react";
import CategoriesService from "../../services/CategoriesService";
import JokesService from '../../services/JokesService'

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

  const loadMore = () => {
    setJokesLimitPerPage(jokesLimitPerPage + 20)
  }

  return (
    <section className='joke-list'>
      <CategoryListFilter categories={categories} isLoading={isLoadingCategories} />

      <aside className='filterSelected'>
        <ul>
          <li>Social Jokes</li>
        </ul>
      </aside>

      <Loading isLoading={isLoadingJokes} loadingText="Loading Jokes..." />

      {jokes.map(joke =>
        <Joke item={joke} key={joke.id} />
      )}

      <aside>
        {jokes.length > 0 ? <button onClick={loadMore}>View More</button> : ''}
      </aside>
    </section>
  )
}

export default CategoryList