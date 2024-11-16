import { useContext } from 'react';

import Button from '../components/Button';

import TravelNotesContext from '../context/TravelNotes';

function CategoryPage() {

  const { getCountryCategories } = useContext(TravelNotesContext);

  return (
    <div>
      {/* I need to start looping through links and bring in the categories.  I can remove the button below as well. */}
      <Button primary onClick={() => getCountryCategories()}>Get Categories</Button>
    </div>
  )
}

export default CategoryPage;