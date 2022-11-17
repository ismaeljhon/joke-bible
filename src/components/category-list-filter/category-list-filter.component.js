import Button from "../button/button.component";
import Loading from "../loading/loading.component";
import './category-list-filter.scss'

const CategoryListFilter = ({ isLoading, categories, handleSelectCategory }) => {

  return (
    <nav className='category-list-filter'>
      <Loading isLoading={isLoading} loadingText='Loading Categories...' />
      <ul>
        {categories.map((category, index) => {
          const { name, type } = category
          return (
            <li key={index}>
              <Button type={type} label={`${name} Jokes`} className='blocked' onClick={() => handleSelectCategory(category)} />
            </li>
          )
        })}

        {categories.length ? <li><Button type='primary' label='View All' className='blocked' onClick={() => handleSelectCategory('')} /></li> : ''}

      </ul>
    </nav>
  )
}

export default CategoryListFilter