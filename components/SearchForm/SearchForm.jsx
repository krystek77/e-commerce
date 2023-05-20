import {BsSearch} from 'react-icons/bs';

export default function SearchForm(){

  return (
    <div className='relative flex-1'>
      <form id='search' name='search' className='mx-4'>
        <div className='absolute flex flex-col flex-center inset-y-0 left-4 rounded-tl-full rounded-bl-full px-4 font-inter text-md'>
          <BsSearch className='w-4 h-4 text-black'/>
        </div>
        <input
          className='border border-black-light rounded-full text-md shadow-sm outline-none w-full py-2 pl-12 pr-20 focus-element'
          type='search'
          placeholder='Wyszukaj częśc zamienną po nazwie'
        />
        <button
          className='absolute inset-y-0 right-4 rounded-full px-4 font-accent text-sm bg-gold outline-none'
          type='submit'>
          szukaj
        </button>
      </form>
    </div>
  );
}