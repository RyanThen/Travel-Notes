import classNames from 'classnames';

function Button({ 
  primary,
  secondary,
  outline,
  children,
  ...rest
}) {
  const buttonClasses = classNames(rest.className, 'px-3 py-2 border rounded', {
    'bg-blue-500 text-white': primary,
    'bg-gray-200 text-black': secondary,
    'bg-transparent': outline
  });

  return (
    <button {...rest} className={buttonClasses}>
      {children}
    </button>
  );
}

export default Button;