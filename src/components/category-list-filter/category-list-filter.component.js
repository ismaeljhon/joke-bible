import { useEffect, useState } from "react";
import CategoriesService from "../../services/CategoriesService";
import Loading from "../loading/loading.component";

const CategoryListFilter = () => {

  const [isLoadingCategories, setIsLoadingCategories] = useState(false)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    (async () => {
      setIsLoadingCategories(true)
      const result = await new CategoriesService().index()

      setCategories(result)
      setIsLoadingCategories(false)
    })()

  }, [])

  return (
    <nav className='category-filter-list'>
      <Loading isLoading={isLoadingCategories} loadingText='Loading Categories...' />
      <ul>
        {categories.map((categoryName, index) => {
          return (
            <li key={index}>
              <a>{categoryName} Jokes</a>
            </li>
          )
        })}
        <li>
          <a>View All</a>
        </li>
      </ul>
    </nav>
  )
}

export default CategoryListFilter