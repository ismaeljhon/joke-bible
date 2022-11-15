import CategoryList from "./components/category-list/category-list.component";
import MainCta from "./components/main-cta/main-cta.component";
import SiteHeader from "./components/site-header/site-header.component";

const App = () => {
  return (
    <div className="App">
      <SiteHeader />

      <main>
        <MainCta />
        <CategoryList />
      </main>
    </div>
  );
}

export default App;
