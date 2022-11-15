const Joke = ({ item }) => {
  const { id, categories, value } = item
  return (
    <article key={id}>
      <h3>{categories[0] || 'Uncategorized'} Joke</h3>
      <p>{value}</p>
      <a href="#">See More</a>
    </article>
  )
}

export default Joke