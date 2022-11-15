import CategoryListFilter from "../category-list-filter/category-list-filter.component";
const CategoryList = () => {
  return (
    <section className='joke-list'>
      <CategoryListFilter />

      <aside className='filterSelected'>
        <ul>
          <li>Social Jokes</li>
        </ul>
      </aside>

      <article>
        <h3>Lawyer Joke</h3>
        <p>Chuck Norris invented the bolt-action rifle, liquor, sexual intercourse, and football-- in that order.</p>
        <a href="">See more</a>
      </article>

      <article>
        <h3>Doctor Joke</h3>
        <p>The Chuck Norris facts game is played out... And we should all stop contributing to this stupid shit! Unless your a dickless gamer that dwells on this Chuck Norris nonsense</p>
        <a href="">See more</a>
      </article>

      <article>
        <h3>Business Joke</h3>
        <p>Chuck Norris invented the bolt-action rifle, liquor, sexual intercourse, and football-- in that order.</p>
        <a href="">See more</a>
      </article>

      <article>
        <h3>Police Joke</h3>
        <p>Chuck Norris invented the bolt-action rifle, liquor, sexual intercourse, and football-- in that order.</p>
        <a href="">See more</a>
      </article>

      <aside>
        <a>View All</a>
      </aside>
    </section>
  )
}

export default CategoryList