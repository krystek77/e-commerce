'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Checkbox } from '@components';
import PropTypes from 'prop-types';

const MarketingAgreement = ({ color,handleCheckbox=()=>{},stateCheckbox=false,id,name }) => {
  const [toggleCollapse,setToggleCollapse] = useState(false);
  
  return (
    <Checkbox color={color} handleCheckbox={handleCheckbox} stateCheckbox={stateCheckbox} id={id} name={name}>
      <>
        <p className={toggleCollapse ? "ml-4 text-sm line-clamp-2":"ml-4 text-sm"}>
          Wyrażam zgodę na przesyłanie przez
          <Link className="link" href="/"> P.P.U.P Pralma sp. z o.o. </Link>
          na mój <b className="font-bold">email</b> informacji marketingowych i
          handlowych (w tym poprzez używanie telekomunikacyjnych urządzeń
          końcowych i automatycznych systemów wywołujących zgodnie z ustawą z dnia
          16 lipca 2014 roku <b className="font-bold">Prawo telekomunikacyjne</b>)
        </p>
        {toggleCollapse ? (
          <button type="button" onClick={() => {setToggleCollapse((prev)=>!prev)}} className="mt-1 outline-none rounded-sm px-1 ml-4 text-black cursor-pointer hover:text-black-light underline underline-offset-2 transition-all duration-150 ease-in-out focus-element" > więcej... </button>
        ) : (
          <button type="button" onClick={() => {setToggleCollapse((prev)=>!prev)}} className="mt-1 outline-none rounded-sm px-1 ml-4 text-black cursor-pointer hover:text-black-light underline underline-offset-2 transition-all duration-150 ease-in-out focus-element" > zwiń </button>
        )}
      </>
    </Checkbox>
  )
};

MarketingAgreement.propTypes = {
  color: PropTypes.oneOf(['primary', 'accent', 'gold', 'black', 'green']),
  handleCheckbox:PropTypes.func,
  stateCheckbox:PropTypes.bool,
  id:PropTypes.string,
  name:PropTypes.string
};

export default MarketingAgreement;
