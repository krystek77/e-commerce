import Link from 'next/link'

const Advantages = () => {
  return (
    <div className='bg-slate-200 border-b border-t border-slate-300'>
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center">
        <Link href="/" className='w-full sm:w-1/4 text-center font-accent text-sm  border-b sm:border-r sm:border-b-0 border-slate-300 py-4 whitespace-nowrap'>Program lojalnościowy</Link>
        <Link href="/" className='w-full sm:w-1/4 text-center font-accent text-sm  border-b sm:border-r sm:border-b-0 border-slate-300 py-4 whitespace-nowrap'>Nasza opinia na Opineo</Link>
        <Link href="/" className='w-full sm:w-1/4 text-center font-accent text-sm  border-b sm:border-r sm:border-b-0 border-slate-300 py-4 whitespace-nowrap'>Dostawa GRATIS</Link>
        <div className='w-full sm:w-1/4 text-center font-accent text-sm py-4 whitespace-nowrap'>tel. 602 191 607</div>
      </div>
    </div>
  );
}



export default Advantages