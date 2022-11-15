import Loading from "../loading/loading.component";

const CategoryListFilter = ({ isLoading, categories }) => {
  return (
    <nav className='category-filter-list'>
      <Loading isLoading={isLoading} loadingText='Loading Categories...' />
      <ul>
        {categories.map((categoryName, index) => {
          return (
            <li key={index}>
              <a>{categoryName} Jokes</a>
            </li>
          )
        })}

        {categories.length ? <li><a>View All</a></li> : ''}

      </ul>
    </nav>
  )
}

export default CategoryListFilter