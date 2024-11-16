import { useContext } from "react";
import TravelNotesContext from "../context/TravelNotes";
// import NavigationContext from '../context/Navigation';

import WorldMap from "../components/WorldMap";

function HomePage() {
  
  // const { navigate } = useContext(NavigationContext);
  const { handleCountryClick } = useContext(TravelNotesContext);

  return (
    <div>
      <WorldMap handleCountryClick={handleCountryClick} />
    </div>
  )
}

export default HomePage;