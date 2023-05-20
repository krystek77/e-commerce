'use client';
import {useState} from 'react'
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import Links from '@utils/navigation';

const Navigation = () => {
const segment = useSelectedLayoutSegment();
const [index,setIndex] = useState("")

const handleOpenSubmenu = (event) => { setIndex(event.currentTarget.id); };
const handleCloseSubmenu = (event) => {
  if (event.currentTarget.id) {
    const DOMRectLink = event.currentTarget.getBoundingClientRect();
    if (event.clientY < DOMRectLink.bottom) setIndex("");
  } else setIndex("");
};

  return (
      <nav className='relative border-b border-slate-100'>
        <ul className={`container mx-auto border-t border-slate-100 flex justify-center items-center relative z-10`}>
          {Links.map((item) => (
            <li key={item._id} onPointerEnter={handleOpenSubmenu} onPointerLeave={handleCloseSubmenu} id={item._id}>
              <Link className={`py-4 px-4 mx-2 block font-accent font-bold uppercase rounded-tr-md rounded-tl-md transition-element hover-element ${ segment === item.url ? "active-navigation" : "focus-element" } `} href={item.url}> {item.label} </Link>
            </li>
          ))}
        </ul>
        {/** subnavigation */}
        <section className={index!=="" ? 'absolute top-full left-0 bg-slate-50 w-full h-auto transition-element':'absolute top-full left-0 bg-slate-50 w-full h-0 max-h-[1000px] overflow-hidden transition-element'}>
          {index === "1" ? <div onPointerLeave={handleCloseSubmenu} className="container mx-auto px-4 py-8 border">
            <div className='grid grid-cols-4 gap-4'>

              <div className='border'>
                <Link href=""><h3 className=''>Pralnice</h3></Link>
                <div className='flex flex-col justify-center items-start'>
                  <Link href="" className='block py-1 font-light text-base'>pralnice bębnowe o załadunku czołowym</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnice bębnowe o załadunku bocznym</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnice bębnowe specjalne o załadunku czołowym</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnice bębnowe specjalne o załadunku bocznym</Link>
                </div>
              </div>

              <div className='border col-span-2'>
                <Link href=""><h3 className=''>Pralnicowirówki</h3></Link>
                <div className='flex flex-col justify-center items-start'>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki normalnoobrotowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki szybkoobrotowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki wysokoobrotowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki normalnoobrotowe o załadunku bocznym</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki wysokoobrotowe o załadunku bocznym</Link>
                </div>
              </div>

              <div className='border'>
                <Link href=""><h3 className=''>Prasownice</h3></Link>
                <div className='flex flex-col justify-center items-start'>
                  <Link href="" className='block py-1 font-light text-base'>prasownice nieckowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>prasownice walcowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>prasownice walcowe z przednim lub tylnym wywiezieniem prania</Link>
                  <Link href="" className='block py-1 font-light text-base'>prasownice walcowe ze składarką wzdłużną</Link>
                  <Link href="" className='block py-1 font-light text-base'>prasownice walcowe ze składarką wzdłużną i podawarką</Link>
                  <Link href="" className='block py-1 font-light text-base'>prasownice nieckowe wielowałkowe</Link>
                </div>
              </div>

              <div className='border'></div>

              <div className='border col-span-3'>
                <Link href=""><h3 className=''>Suszarki</h3></Link>
                <div className='flex flex-col justify-center items-start'>
                  <Link href="" className='block py-1 font-light text-base'>suszarki bębnowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>suszarki komorowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>suszarki z pompą ciepła</Link>
                </div>
              </div>

              <div className='border'>
                <Link href=""><h3 className=''>Wirówki</h3></Link>
              </div>

              <div className='border'>
              <Link href=""><h3 className=''>Bariery higieny</h3></Link>
                <div className='flex flex-col justify-center items-start'>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki normalnoobrotowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki wysokoobrotowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnice z barierą higieny</Link>
                </div>
              </div>

              <div className='border col-span-2'>
                <Link href=""><h3 className=''>Wózki i Regały</h3></Link>
                <div className='flex flex-col justify-center items-start'>
                  <Link href="" className='block py-1 font-light text-base'>wózki na suche bądź brudne pranie</Link>
                  <Link href="" className='block py-1 font-light text-base'>wózki na mokre pranie</Link>
                  <Link href="" className='block py-1 font-light text-base'>urządzenia do składowania prania</Link>
                  <Link href="" className='block py-1 font-light text-base'>urządzenia do transportu prania - kontenery</Link>
                  <Link href="" className='block py-1 font-light text-base'>pozostałe</Link>
                </div>
              </div>

              <div className='border col-span-4'>
                <Link href=""><h3 className=''>Prasowanie fasonowe</h3></Link>
              </div>
            </div>
          </div> : null}
          {index === "2" ? <div onPointerLeave={handleCloseSubmenu} className="container mx-auto px-4 py-8 border">urządzenia samoobsługowe</div>:null}
        </section>
      </nav>
  );
};

export default Navigation;
