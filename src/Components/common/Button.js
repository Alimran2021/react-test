import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
  const { url, onClick, icon, text, type, outline, size, className, px, py, ...rest } = props;

  const renderChildren = (
    <>
      {text && <span>{text}</span>}
      {icon && <img className="w-6 h-6" src={icon} alt="" />}
    </>
  );

  // button size defintation
  let sizeStyle = `md:rounded-[10px] rounded font-bold text-sm2 md:text-md2 ${
    py ? py : 'py-1 md:py-3'
  } ${px ? px : 'px-2.5 md:px-4'}`;
  if (size === 'large') {
    sizeStyle = `md:rounded-[10px] rounded font-bold text-xs2 md:text-lg2 ${
      py ? py : 'py-1 md:py-4'
    } ${px ? px : 'px-3 md:px-5'}`;
  } else if (size === 'small') {
    sizeStyle = `md:rounded-[10px] rounded font-semibold md:font-normal text-xs2 md:text-lg2 ${
      py ? py : 'py-0.5 md:py-2.5'
    } ${px ? px : 'px-3 md:px-6'}`;
  } else if (size === 'very-small') {
    sizeStyle = `md:rounded-[10px] rounded-[2px] font-semibold md:font-bold text-grey-600 text-xxs2 md:text-lg2 ${
      py ? py : 'py-0 md:py-1'
    } ${px ? px : 'px-2.5 md:px-5'}`;
  }

  // button type defintation
  let variantStyle = 'text-gray-600 bg-primary-700';
  if (outline) {
    variantStyle = 'text-grey-100 bg-[transparent] border md:border-2';
  }

  const finalStyle = `${sizeStyle} hover:no-underline flex gap-3 items-center justify-center ${variantStyle} ${className}`;

  return url ? (
    <Link to={url} className={finalStyle}>
      {renderChildren}
    </Link>
  ) : (
    <button {...rest} className={finalStyle} onClick={onClick}>
      {renderChildren}
    </button>
  );
}

export default Button;
