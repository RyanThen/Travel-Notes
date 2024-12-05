import { useEffect, useContext } from 'react';

import Navigation from './components/Navigation';

import TravelNotesContext from './context/TravelNotes';

function App() {

  const { getCountryCategories } = useContext(TravelNotesContext);

  useEffect(() => {
    getCountryCategories();
  }, []);

  return (    
    <div>

      <Navigation />

    </div>
  )
}

export default App;