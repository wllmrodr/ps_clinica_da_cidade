import React from 'react';

const Input = ({ id, name, value, onChange, type = 'text', placeholder, error = null }) => {
  const baseStyles = 'w-full px-4 py-2 border rounded-lg transition duration-150 ease-in-out';
  const errorStyles = 'border-red-500';
  const defaultStyles = 'border-gray-300 focus:ring-[#00adbd] focus:border-[#00adbd]';

  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${baseStyles} ${error ? errorStyles : defaultStyles}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;

