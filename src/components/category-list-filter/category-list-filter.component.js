import Button from "../button/button.component";
import Loading from "../loading/loading.component";
import './category-list-filter.scss'

const CategoryListFilter = ({ isLoading, categories, handleSelectCategory }) => {

  return (
    <nav className='category-list-filter'>
      <Loading isLoading={isLoading} loadingText='Loading Categories...' />
      <ul>
        {categories.map(({ name, type }, index) => {
          return (
            <li key={index}>
              <Button type={type} label={`${name} Jokes`} onClick={() => handleSelectCategory(name)} />
            </li>
          )
        })}

        {categories.length ? <li><Button type='primary' label='View All' onClick={() => handleSelectCategory('')} /></li> : ''}

      </ul>
    </nav>
  )
}

export default CategoryListFilter