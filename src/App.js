const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a>So Funktioniert's</a>
          <a>Sonderangebote</a>
          <a>Mein Bereich</a>
        </nav>
      </header>

      <main>
        <section className='main-banner'>
          <h1>The Joke Bible</h1>
          <h5>Daily Laughs for you and yours</h5>

          <div className='search-bar'>
            <input type="search" placeholder='How can we make you laugh today?' />
          </div>
        </section>

        <section className='category-filter-list'>
          <ul>
            <li>
              <a>Adult Jokes</a>
            </li>
            <li>
              <a>Dad Jokes</a>
            </li>
            <li>
              <a>Christmas Jokes</a>
            </li>
            <li>
              <a>Job Jokes</a>
            </li>
            <li>
              <a>Birthday Jokes</a>
            </li>
            <li>
              <a>Social Jokes</a>
            </li>
            <li>
              <a>Puns Jokes</a>
            </li>
            <li>
              <a>View All</a>
            </li>
          </ul>
        </section>

        <section className='joke-list'>
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
      </main>
    </div>
  );
}

export default App;
