import Button from "../button/button.component";
import Loading from "../loading/loading.component";
import './category-list-filter.scss'

const CategoryListFilter = ({ isLoading, categories, handleSelectCategory }) => {

  /** Randomize the color of the buttons for now */
  const buttonTypes = ['weird-green', 'weird-green', 'kiwi-green', 'pastel-orange', 'pale-orange', 'sunset-orange', 'turquoise-blue']
  const categoriesComputed = categories.map(category => ({ ...category, buttonType: buttonTypes[Math.floor(Math.random() * 6) + 1] }))

  return (
    <nav className='category-list-filter'>
      <Loading isLoading={isLoading} loadingText='Loading Categories...' />
      <ul>
        {categoriesComputed.map(({ name, buttonType }, index) => {
          return (
            <li key={index}>
              <Button type={buttonType} label={`${name} Jokes`} onClick={() => handleSelectCategory(name)} />
            </li>
          )
        })}

        {categoriesComputed.length ? <li><Button type='primary' label='View All' /></li> : ''}

      </ul>
    </nav>
  )
}

export default CategoryListFilter