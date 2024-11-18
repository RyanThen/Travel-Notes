import { useContext } from 'react';
import TravelNotesContext from "../context/TravelNotes";

import WorldMap from '../components/WorldMap';

function CountryPage() {
  const { activeCountry, categoryList } = useContext(TravelNotesContext);

  const renderedCategoryList = categoryList.map((category, index) => {
    return <li key={index}>{category.category_name}</li>;
  });

  // NEXT STEP IMPORT ACCORDION COMPONENT AND SET THAT UP
  console.log(categoryList);

  return (
    <div>
      <WorldMap activeCountry={activeCountry} />

      <div>
        <ul>
          {renderedCategoryList}
        </ul>
      </div>
    </div>
  )
}

export default CountryPage;