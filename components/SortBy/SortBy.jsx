"use client"
import {useEffect, useState} from 'react'
import {BiChevronsDown} from '@react-icons/all-files/bi/BiChevronsDown'
import {BiChevronsUp} from '@react-icons/all-files/bi/BiChevronsUp'
import PropTypes from 'prop-types'

const SORT_VALUES = {
  MOST:"najczęściej kupowane",
  POPULARITY:"popularność",
  PRICE_ASC:"cena - rosnąco",
  PRICE_DESC:"cena - malejąco",
  CATEGORY_ALPABETICALLY:"kategorii alfabetycznie",
  MODEL_ALPABETICALLY:"modelu alfabetycznie"
}

const SortByItem = ({sortValue,handleInput,state,handleCloseOptions}) => {
  return (
    <li className="relative">
      <label
        className={
          state === sortValue
            ? 'cursor-pointer flex justify-start items-center py-1 mb-px bg-gold border border-gold-dark'
            : 'cursor-pointer flex justify-start items-center py-1 mb-px border border-transparent'
        }
      >
        <input
          className="appearance-none absolute inset-x-0 inset-y-0 focus-element"
          type="radio"
          name="sortBy"
          value={sortValue}
          checked={state === sortValue}
          onChange={(event)=>{handleInput(event);handleCloseOptions()}}
        />
        <span className="px-2 relative z-10 block w-full">
          {sortValue}
        </span>
      </label>
    </li>
  );
}

const SortForm = props => {

  const [sortBy,setSortBy] = useState(SORT_VALUES.PRICE_ASC)
  const [openOptions,setOpenOptions] =useState(false)
  const handleRadiobox = (event)=>{ setSortBy(event.target.value) }
  const handleToggleOptions = ()=>setOpenOptions((prevOpenOptions)=>!prevOpenOptions)
  const handleCloseOptions = ()=>setOpenOptions(false);

  useEffect(()=>{
    const handleSubmit = ()=> {
      // console.log("Fetch sorted data",sortBy)
    }
    handleSubmit();
  },[sortBy])

  return (
    <div>
      <div className='relative'>
        <label>
          <span className='text-sm'>szukaj wg: </span>
          <input 
            className='border border-black-light rounded-md py-1 px-2 outline-none' 
            type="text" 
            value={sortBy} 
            id="sortBy" 
            readOnly
          />
        </label>
        <button
          type="button"
          onClick={handleToggleOptions}
          className='
          absolute 
          top-0 
          right-0 
          border
          border-gold-dark
          bg-gold 
          h-full 
          rounded-tr-md 
          rounded-br-md 
          px-2' 
        >
        {openOptions ? <BiChevronsUp className='w-4 h-4 text-black-dark'/>:<BiChevronsDown className='w-4 h-4 text-black-dark'/>}
        </button>
      </div>
      <div className='relative z-10'>
        <div className={openOptions ? 
        'absolute top-full left-0 w-full h-auto transition-element':
        'absolute top-full left-0 w-full h-0 max-h-96 overflow-hidden transition-element'}>
          <ul className='border border-black-light bg-white shadow-md mt-2 rounded-md overflow-hidden py-4 px-1'>
            <SortByItem handleInput={handleRadiobox} handleCloseOptions={handleCloseOptions} sortValue={SORT_VALUES.MOST} state={sortBy}/>
            <SortByItem handleInput={handleRadiobox} handleCloseOptions={handleCloseOptions} sortValue={SORT_VALUES.POPULARITY} state={sortBy}/>
            <SortByItem handleInput={handleRadiobox} handleCloseOptions={handleCloseOptions} sortValue={SORT_VALUES.PRICE_ASC} state={sortBy}/>
            <SortByItem handleInput={handleRadiobox} handleCloseOptions={handleCloseOptions} sortValue={SORT_VALUES.PRICE_DESC} state={sortBy}/>
            <SortByItem handleInput={handleRadiobox} handleCloseOptions={handleCloseOptions} sortValue={SORT_VALUES.CATEGORY_ALPABETICALLY} state={sortBy}/>
            <SortByItem handleInput={handleRadiobox} handleCloseOptions={handleCloseOptions} sortValue={SORT_VALUES.MODEL_ALPABETICALLY} state={sortBy}/>
          </ul>
        </div>
      </div>
    </div>
  )
}

SortForm.propTypes = {}

export default SortForm