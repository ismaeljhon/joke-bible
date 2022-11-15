import Loading from "../loading/loading.component";

const CategoryListFilter = ({ isLoading, categories }) => {
  return (
    <nav className='category-filter-list'>
      <Loading isLoading={isLoading} loadingText='Loading Categories...' />
      <ul>
        {categories.map(({ name }, index) => {
          return (
            <li key={index}>
              <a>{name} Jokes</a>
            </li>
          )
        })}

        {categories.length ? <li><a>View All</a></li> : ''}

      </ul>
    </nav>
  )
}

export default CategoryListFilter