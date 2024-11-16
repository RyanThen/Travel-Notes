import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

function NavigationProvider({children}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener('popstate', handler);  // even though popstate is automatically triggered when using .pushState() you still have to tell the window object to listen for it

    return () => window.removeEventListener('popstate', handler);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(window.location.pathname);
  }

  return (
    <NavigationContext.Provider value={{currentPath, navigate}}>
      {children}
    </ NavigationContext.Provider>
  )
}

export { NavigationProvider };
export default NavigationContext;