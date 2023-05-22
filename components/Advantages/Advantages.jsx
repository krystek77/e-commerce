import Link from 'next/link'
import {RiStarSFill} from '@react-icons/all-files/ri/RiStarSFill'
import {GiGoldBar} from '@react-icons/all-files/gi/GiGoldBar'
import {FaTruck} from '@react-icons/all-files/fa/FaTruck'
import {BsPhone} from '@react-icons/all-files/bs/BsPhone'

const Advantages = () => {
  return (
    <div className='bg-slate-200 border-b border-t border-slate-300'>
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center">
        <Link href="/" className='w-full sm:w-1/4 flex sm:flex-row md:flex-col lg:flex-row justify-start px-8 sm:justify-center items-center flex-wrap font-accent text-sm  border-b sm:border-r sm:border-b-0 border-slate-300 py-4'>
        <span className='mr-2'><GiGoldBar className='w-10 h-10 text-gold'/></span>
        <b className='whitespace-nowrap'>Program lojalnościowy</b>
        </Link>
        <Link href="/" className='w-full sm:w-1/4 flex sm:flex-row md:flex-col lg:flex-row justify-start px-8 sm:justify-center items-center flex-wrap font-accent text-sm  border-b sm:border-r sm:border-b-0 border-slate-300 py-4'>
        <span className='mr-2'><RiStarSFill className='w-10 h-10 text-accent-dark'/></span>
        <span className='whitespace-nowrap'>Nasza opinia na Opineo</span>
        </Link>
        <Link href="/" className='w-full sm:w-1/4 flex sm:flex-row md:flex-col lg:flex-row justify-start px-8 sm:justify-center items-center flex-wrap font-accent text-sm  border-b sm:border-r sm:border-b-0 border-slate-300 py-4'>
          <span className='mr-2'><FaTruck className='w-10 h-10 text-primary'/></span>
          <span className='whitespace-nowrap'>dostawa <b>od 0,00 PLN</b></span>
        </Link>
        <div className='w-full sm:w-1/4 flex sm:flex-row md:flex-col lg:flex-row justify-start px-8 sm:justify-center items-center flex-wrap font-accent text-sm py-4'>
          <span className='mr-2'><BsPhone className='h-10 w-10 text-black'/></span>
          <span className='whitespace-nowrap'>tel. <b className='text-lg'>602 191 607</b></span>
        </div>
      </div>
    </div>
  );
}



export default Advantages