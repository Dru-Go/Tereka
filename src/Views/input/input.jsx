import React from 'react';
import Loading from '../loading/loading';

const Input = ({
  title,
  type,
  name,
  placeholder,
  error,
  focused,
  handleChange,
  handleFocus,
  value,
  style,
}) => {
  return (
    <div class=" mx-auto lg:w-1/5 md:w-1/4 py-2">
      <div class=" font-medium  text-sm  color1-text">{title}</div>
      <div
        className={
          error && focused
            ? 'border-b-2 flex items-center border-red-500'
            : 'border-b-2 color1-border flex items-center'
        }
      >
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          class=" pl-2 w-90p text-sm pb-1 outline-none bg-transparent"
          autocomplete="off"
          onChange={handleChange}
          focus={handleFocus}
          value={value}
          style={style}
        />
        {focused ? <Loading /> : ''}
      </div>
    </div>
  );
};

export default Input;
