import './site-header.scss'
import { Link } from 'react-router-dom'

const SiteHeader = () => {
  const navigation = [
    {
      label: 'So Funktioniert\'s',
      link: '#'
    },
    {
      label: 'Sonderangebote',
      link: '#'
    },
    {
      label: 'Mein Bereich',
      link: '#'
    }
  ]

  return (
    <header className="AppHeader">
      <div className='container'>
        <nav>
          {
            navigation.map((nav, index) => (
              <Link to={nav.link} key={index}>{nav.label}</Link>
            ))
          }
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;