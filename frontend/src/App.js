// import { useContext } from 'react';

import Route from './components/Route';
import Link from './components/Link';

import { useEffect, useContext } from 'react';

import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import CategoryPage from './pages/CategoryPage';
import CreateUserPage from './pages/CreateUserPage';
import CreateNotePage from './pages/CreateNotePage';

// import NavigationContext from './context/Navigation';
import TravelNotesContext from './context/TravelNotes';

function App() {


// const navigationContext = useContext(NavigationContext);
  const { getCountryCategories } = useContext(TravelNotesContext);

  useEffect(() => {
    getCountryCategories();
  }, []);

  return (
    
    <div>

      <div className="flex gap-4">
        <Link
          to={'/'}
          activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
          Homepage
        </Link>

        <Link
          to={'/country-page'}
          activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
          Country Page
        </Link>

        <Link
          to={'/category-page'}
          activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
          Category Page
        </Link>

        <Link
          to={'/create-user'}
          activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
          Create User Page
        </Link>

        <Link
          to={'/create-note'}
          activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
          Create Note Page
        </Link>
      </div>

      <br />

      <div className="page-container">
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/country-page">
          <CountryPage />
        </Route>
        <Route path="/category-page">
          <CategoryPage />
        </Route>
        <Route path="/create-user">
          <CreateUserPage />
        </Route>
        <Route path="/create-note">
          <CreateNotePage />
        </Route>
      </div>

    </div>
  )
}

export default App;