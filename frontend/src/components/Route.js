import { useContext } from 'react';
import NavigationContext from '../context/Navigation';

function Route({ path, children }) {
  const {currentPath } = useContext(NavigationContext);

  if(path === currentPath) {
    return children;
  } else {
    return;
  }

}

export default Route;