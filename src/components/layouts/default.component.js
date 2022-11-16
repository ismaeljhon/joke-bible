import MainCta from "../main-cta/main-cta.component"
import SiteFooter from "../site-footer/site-footer.component"
import SiteHeader from "../site-header/site-header.component"

const DefaultLayout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <MainCta />
      <main className="container">
        {children}
      </main>
      <SiteFooter />
    </>
  )
}

export default DefaultLayout