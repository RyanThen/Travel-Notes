import { useContext } from 'react';
import classNames from 'classnames';

import NavigationContext from '../context/Navigation';

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useContext(NavigationContext);

  const linkClasses = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (e) => {
    if(e.metaKey || e.ctrlKey) return; // if command or ctrl keys are held down, allow browser to open link in a new tab

    e.preventDefault();

    navigate(to);
  }

  return <a className={linkClasses} href={to} onClick={handleClick}>{children}</a>
}

export default Link;