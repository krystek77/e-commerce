import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({id,label,name,value,onChange,placeholder,readOnly,disabled,required, error}) => {
  return (
    <div className="px-8 pb-6 mb-2 relative">
      {required ? <span className='text-primary absolute right-8 top-0'>[ * ]</span> : null}
      {label ? (
        <label
          htmlFor={id}
          className="font-semibold text-base block first-letter:uppercase"
        >
          {label}
        </label>
      ) : null}
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        required={required}
        className="mt-2 border border-black-light rounded-md text-md shadow-sm outline-none w-full py-2 px-6 focus-element"
      />
      {error ? (
        <div className="absolute bottom-0 left-8 text-primary text-sm first-letter:uppercase italic line-clamp-1">
          {error}
        </div>
      ) : null}
    </div>
  );
}

TextInput.propTypes = {}

export default TextInput