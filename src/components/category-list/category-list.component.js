import { useEffect, useState } from "react";
import JokesService from '../../services/JokesService'

import CategoryListFilter from "../category-list-filter/category-list-filter.component";
import Joke from "../joke/joke.component";
import Loading from "../loading/loading.component";

const CategoryList = () => {
  const [isLoadingJokes, setIsLoadingJokes] = useState(false)
  const [jokes, setJokes] = useState([])
  const [jokesLimitPerPage, setJokesLimitPerPage] = useState(20)

  useEffect(() => {
    (async () => {
      setIsLoadingJokes(true)
      const result = await new JokesService().index({ limit: jokesLimitPerPage })

      setJokes(result)
      setIsLoadingJokes(false)
    })()

  }, [jokesLimitPerPage])

  const loadMore = () => {
    setJokesLimitPerPage(jokesLimitPerPage + 20)
  }

  return (
    <section className='joke-list'>
      <CategoryListFilter />

      <aside className='filterSelected'>
        <ul>
          <li>Social Jokes</li>
        </ul>
      </aside>

      <Loading isLoading={isLoadingJokes} loadingText="Loading Jokes..." />

      {jokes.map(joke =>
        <Joke item={joke} key={joke.id} />
      )}

      <button onClick={loadMore}>View More</button>

      <aside>
        <a>View All</a>
      </aside>
    </section>
  )
}

export default CategoryList