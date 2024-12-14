import { useContext } from 'react';

import Route from './Route';
import Link from './Link';

import HomePage from '../pages/HomePage';
import CountryPage from '../pages/CountryPage';
import CategoryPage from '../pages/CategoryPage';
import CreateUserPage from '../pages/CreateUserPage';
import CreateNotePage from '../pages/CreateNotePage';
import LoginPage from '../pages/LoginPage';

import TravelNotesContext from '../context/TravelNotes';

function Navigation() {
  const { currentUser, setCurrentUser } = useContext(TravelNotesContext);

  return (
    <div className="header-nav-container max-w-screen-xl mx-auto">
      <div className="header-nav flex justify-between">
        <div className="header-nav-links flex gap-4">
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
            to={'/create-note'}
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
          >
            Create Note Page
          </Link>
        </div>

        <div className="header-nav-actions flex gap-4">
          <Link
            to={'/create-user'}
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
          >
            Create User Page
          </Link>

          { 
          // navigation component not re-rendering when I call setCurrentUser() on the Logout button
          !currentUser
            ?
              <Link
              to={'/login'}
              activeClassName="font-bold border-l-4 border-blue-500 pl-2"
              >
                Login Page
              </Link>
            :
              <Link
              to={'/'}
              onClick={() => setCurrentUser(null)}
              >
                Logout
              </Link>  
          }
         
        </div>
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
        <Route path="/login">
          <LoginPage />
        </Route>
      </div>
    </div>
  )
}

export default Navigation;