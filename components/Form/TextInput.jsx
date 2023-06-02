"use client"
import {useState} from 'react';
import PropTypes from 'prop-types';
import {MdErrorOutline} from '@react-icons/all-files/md/MdErrorOutline'
import {AiOutlineEyeInvisible} from '@react-icons/all-files/ai/AiOutlineEyeInvisible';
import {AiOutlineEye} from '@react-icons/all-files/ai/AiOutlineEye'

function TextInput({type="text",id="",label="",name="",value="",handleChange=()=>{}, handleValidation=()=>{},placeholder="",readOnly,disabled,required, error=""}){
    const [clicked,setClicked] = useState(false);
    const [togglePassword,setTogglePassword] = useState(false)
    const [showErrorMessage,setShowErrorMessage] = useState(false);
    const handleClick = () => {setClicked(true)}
    const handleTogglePassword = () => {setTogglePassword((prevTogglePassword)=>!prevTogglePassword)}
    console.log(error)
    const handleErrorMessage = (event)=> {
      if(event.type === "pointerenter"){setShowErrorMessage(true)}
      else if(event.type ==="pointerleave"){setShowErrorMessage(false)}
    }
    return (
      <div className="relative mb-8">
        {error && showErrorMessage ?  <p className='absolute right-0 -top-8 -translate-y-full bg-primary-light border-primary rounded-lg shadow-lg p-4 text-sm text-white font-normal max-w-[180px] tooltip-triangle'><span className='line-clamp-2 text-sm text-white font-normal'>{error}</span></p> : null}
        {required ? <span className='text-black absolute right-4 -top-6 text-xs'>[ <span className='text-primary'>*</span> ]</span> : null}
        <label
          className={`absolute left-4 -translate-y-1/2 bg-white px-2 py-1 text-sm text-black-medium ${
            clicked ? 'top-0  transition-element' : 'top-1/2 -z-10'
          }`}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className={`border border-black-light rounded-full py-2 pl-6 ${
            type === 'password' ? 'pr-[76px]' : 'pr-12'
          } w-full outline-none focus-element`}
          type={type === "password" ? togglePassword ? "text":"password":"text"}
          id={id}
          name={name}
          value={value}
          placeholder={clicked ? '' : placeholder}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={handleValidation}
        />
        <div className="absolute z-[10] right-2 top-1/2 -translate-y-1/2 flex justify-end items-center">
          {type === 'password' ? (
            <button type="button" className="flex justify-end items-center mr-px" onClick={handleTogglePassword}>
              {togglePassword ? <AiOutlineEye className="w-8 h-8 text-black-light" /> :
              <AiOutlineEyeInvisible className="w-8 h-8 text-black-medium" />}
            </button>
          ) : null}
          {error ? <MdErrorOutline onPointerEnter={handleErrorMessage} onPointerLeave={handleErrorMessage} className="w-8 h-8 cursor-pointer text-primary-light" />:null}
        </div>
      </div>
    );
}

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleValidation:PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
};


export default TextInput;