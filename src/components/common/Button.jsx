import React from 'react';

const Button = ({ children, onClick, type = 'button', disabled = false, variant = 'primary', className = '' }) => {
  const baseStyles = 'w-full inline-flex justify-center items-center rounded-lg font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#00adbd] text-white hover:bg-[#008a96] focus:ring-[#00adbd]',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400',
    ghost: 'bg-transparent text-gray-500 hover:text-red-600 hover:bg-red-100'
  };

  const sizeStyles = {
    large: 'px-12 py-3 text-lg',
    medium: 'px-4 py-2 text-sm',
    small: 'p-1 text-sm'
  };

  
  const size = className.includes('text-lg') ? 'large' : className.includes('text-sm') ? 'medium' : 'small';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
