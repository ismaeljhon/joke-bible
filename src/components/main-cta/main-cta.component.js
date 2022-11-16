import SearchBar from "../search-bar/search-bar.component";
import './main-cta.scss'

const MainCta = () => {
  return (
    <section className='main-banner'>
      <div className="container">
        <h1>The Joke Bible</h1>
        <h5>Daily Laughs for you and yours</h5>
        <SearchBar />
      </div>
    </section>
  )
}

export default MainCta
