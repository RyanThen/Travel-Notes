import classNames from "classnames";

function Tile({ 
  children,
  ...rest 
}) {
  const tileClasses = classNames(rest.className, 'border rounded p-3 shadow bg-white w-full')

  return (
    <div {...rest} className={tileClasses}>
      {children}
    </div>
  );
}

export default Tile;