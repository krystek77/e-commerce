import React from 'react'
import PropTypes from 'prop-types'

const SortForm = props => {
  return (
    <>
      <form action="" method="GET">
        <div className="">
          <label htmlFor="sorting-form">sortuj wg: </label>
          <select id="sorting-form" className="px-4 py-2 border rounded-md">
            <option value="1" selected> najczęściej kupowane </option>
            <option value="2">popularność</option>
            <option value="3"> okazje </option>
            <option value="4">cena - rosnąco</option>
            <option value="5">cena - malejąco</option>
            <option value="6"> kategoria alfabetycznie </option>
            <option value="7"> model alfabetycznie </option>
          </select>
        </div>
      </form>
      {/* <form>
        <div>
            <input type="text" value="" name="search" className='border py-2 px-1 rounded-md mb-2 grid place-content-center before:content-[""] before:w-6 before:h-6 before:block before:bg-black'/>
            <ul className='border rounded-md shadow-md overflow-hidden'>
                <li className=''>
                <label className='relative block py-1 px-2'>
                    <input className='appearance-none absolute inset-x-0 inset-y-0 checked:bg-black' type="radio" value="najczęściej kupowane" name="sortingBy" id="1"/>
                    <span className='text-white relative z-[1]'>najczęściej kupowane</span>
                </label>  
                </li>
                <li className=''>
                <label className='relative block py-1 px-2'>
                    <input className='appearance-none absolute inset-x-0 inset-y-0 checked:bg-black' type="radio" value="popularność" name="sortingBy" id="2"/>
                    <span className='text-white relative z-[1]'>popularność</span>
                </label>
                </li>
                <li className=''>
                <label className='relative block py-1 px-2'>
                    <input className='appearance-none absolute inset-x-0 inset-y-0 checked:bg-black' type="radio" value="okazje" name="sortingBy" id="3"/>
                    <span className='text-white relative z-[1]'>okazje</span>
                </label>
                </li>
                <li className=''>
                <label className='relative block py-1 px-2'>
                    <input className='appearance-none absolute inset-x-0 inset-y-0 checked:bg-black' type="radio" value="cena - rosnąco" name="sortingBy" id="3"/>
                    <span className='text-white relative z-[1]'>cena - rosnąco</span>
                </label>
                </li>
                <li className=''>
                <label className='relative block py-1 px-2'>
                    <input className='appearance-none absolute inset-x-0 inset-y-0 checked:bg-black' type="radio" value="cena - malejąco" name="sortingBy" id="3"/>
                    <span className='text-white relative z-[1]'>cena - malejąco</span>
                </label>
                </li>
                <li className=''>
                <label className='relative block py-1 px-2'>
                    <input className='appearance-none absolute inset-x-0 inset-y-0 checked:bg-black' type="radio" value="kategoria - alfabetycznie" name="sortingBy" id="3"/>
                    <span className='text-white relative z-[1]'>kategoria - alfabetycznie</span>
                </label>
                </li>
                <li className=''>
                <label className='relative block py-1 px-2'>
                    <input className='appearance-none absolute inset-x-0 inset-y-0 checked:bg-black' type="radio" value="model - alfabetycznie" name="sortingBy" id="3"/>
                    <span className='text-white relative z-[1]'>model - alfabetycznie</span>
                </label>
                </li>
            </ul>      
        </div>
      </form> */}
    </>
  );
}

SortForm.propTypes = {}

export default SortForm