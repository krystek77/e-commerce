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
      <nav className='relative border-b border-slate-100 hidden lg:block'>
        <ul className={`container mx-auto border-t border-slate-100 flex justify-center items-center relative z-10`}>
          {Links.map((item) => (
            <li key={item._id} onPointerEnter={handleOpenSubmenu} onPointerLeave={handleCloseSubmenu} id={item._id}>
              <Link className={`py-4 px-4 mx-2 block font-accent font-bold uppercase rounded-tr-md rounded-tl-md transition-element hover-element ${ segment === item.url ? "active-navigation" : "focus-element" } `} href={item.url}> {item.label} </Link>
            </li>
          ))}
        </ul>
        {/** subnavigation */}
        <section className={index!=="" ? 'absolute top-full left-0 bg-slate-50 w-full h-auto transition-element':'absolute top-full left-0 bg-slate-50 w-full h-0 max-h-[1000px] overflow-hidden transition-element'}>
          {/** urzadzenia-pralnicze */}
          {index === "1" ? <div onPointerLeave={handleCloseSubmenu} className="container mx-auto px-4 py-8">
            <div className='grid grid-cols-4 gap-4'>
              {/** pralnice */}
              <div className='border p-4'>
                <Link href=""><h3 className=''>Pralnice</h3></Link>
                <div className='flex flex-col justify-center items-start'>
                  <Link href="" className='block py-1 font-light text-base'>pralnice bębnowe o załadunku czołowym</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnice bębnowe o załadunku bocznym</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnice bębnowe specjalne o załadunku czołowym</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnice bębnowe specjalne o załadunku bocznym</Link>
                </div>
              </div>
              {/** pralnicowirówki */}
              <div className='border col-span-2 p-4'>
                <Link href=""><h3 className=''>Pralnicowirówki</h3></Link>
                <div className='flex flex-col justify-center items-start'>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki normalnoobrotowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki szybkoobrotowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki wysokoobrotowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki normalnoobrotowe o załadunku bocznym</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki wysokoobrotowe o załadunku bocznym</Link>
                </div>
              </div>
              {/** Prasownice */}
              <div className='border p-4'>
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
              {/** empty */}
              <div className='border p-4'></div>
              {/** Suszarki */}
              <div className='border col-span-3 p-4'>
                <Link href=""><h3 className=''>Suszarki</h3></Link>
                <div className='flex flex-col justify-center items-start'>
                  <Link href="" className='block py-1 font-light text-base'>suszarki bębnowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>suszarki komorowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>suszarki z pompą ciepła</Link>
                </div>
              </div>
              {/** wirówki */}
              <div className='border p-4'>
                <Link href=""><h3 className=''>Wirówki</h3></Link>
              </div>
              {/** Bariery higieny */}
              <div className='border'>
              <Link href=""><h3 className=''>Bariery higieny</h3></Link>
                <div className='flex flex-col justify-center items-start'>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki normalnoobrotowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki wysokoobrotowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnice z barierą higieny</Link>
                </div>
              </div>
              {/** wózki i regały */}
              <div className='border col-span-2 p-4'>
                <Link href=""><h3 className=''>Wózki i Regały</h3></Link>
                <div className='flex flex-col justify-center items-start'>
                  <Link href="" className='block py-1 font-light text-base'>wózki na suche bądź brudne pranie</Link>
                  <Link href="" className='block py-1 font-light text-base'>wózki na mokre pranie</Link>
                  <Link href="" className='block py-1 font-light text-base'>urządzenia do składowania prania</Link>
                  <Link href="" className='block py-1 font-light text-base'>urządzenia do transportu prania - kontenery</Link>
                  <Link href="" className='block py-1 font-light text-base'>pozostałe</Link>
                </div>
              </div>
              {/** małe profesjonalne pralnicowirówki */}
              <div className='border p-4'>
                <Link href="urzadzenia-pralnicze/male-profesjonalne-pralnicowirowki">
                  <h3 className=''>Małe, <b>profesjonalne pralnicowirówki</b>, idealne do apartamentów, akademików, domów opiekuńczzych ...</h3>
                </Link>
                <p>Pralnicowirówki dostępne z dopasowaną suszarką, tworzą idealny zestaw do niewielkiej pralni przemysłowej.</p>
              </div>
              {/** małe profesjonalne suszarki */}
              <div className='border p-4'>
                <Link href="urzadzenia-pralnicze/male-profesjonalne-suszarki">
                  <h3 className=''>Małe, <b>profesjonalne suszarki</b>, idealne do apartamentów, akademików, domów opiekuńczzych ...</h3>
                </Link>
                <p>Suszarki dostępne z dopasowaną pralnicowirówką, tworzą idealny zestaw do niewielkiej pralni przemysłowej.</p>
              </div>
              {/** zestaw pralnicowirówka - suszark */}
              <div className='border p-4'>
                <Link href="urzadzenia-pralnicze/male-profesjonalne-zestawy-pralnicowirowka-suszarka">
                  <h3 className=''>Małe, <b>profesjonalne zestawy</b>, idealne do obiektów o małej powierzchni pralni użytkowej. </h3>
                </Link>
                <p>Zestaw składający się z pralnicowirówki i dopasowanej, ustawianej na pralnicowirówce, suszarce bębnowej</p>
              </div>    
              {/** zestaw suszarka - suszark */}
              <div className='border p-4'>
                <Link href="urzadzenia-pralnicze/male-profesjonalne-zestawy-suszarko-suszarka">
                  <h3 className=''>Małe, <b>profesjonalne zestawy</b>, idealne do obiektów o małej powierzchni pralni użytkowej. </h3>
                </Link>
                <p>Zestaw składający się z 2 suszarke bębnowych, tworzących słupek pralniczy</p>
              </div>
              {/** prasowanie fasonowe */}
              <div className='border col-span-4 py-4'>
                <Link href=""><h3 className=''>Prasowanie fasonowe</h3></Link>
              </div>

            </div>
          </div> : null}
          {/** urzadzenia-pralnicze-samoobslugowe */}
          {index === "2" ? <div onPointerLeave={handleCloseSubmenu} className="container mx-auto px-4 py-8">
            <div className='grid grid-cols-3 gap-4'>
              {/** Pralnicowirówki samoobsługowe */}
              <div className='border p-4'>
                <Link href="urzadzenia-pralnicze-samoobslugowe/pralnicowirowki"><h3 className=''>Pralnicowirówki</h3></Link>
                <div className='flex flex-col justify-center items-start'>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki normalnoobrotowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki szybkoobrotowe</Link>
                  <Link href="" className='block py-1 font-light text-base'>pralnicowirówki wysokoobrotowe</Link>
                </div>
              </div>
              {/** Suszarki samoobsługowe */}
              <div className='border  p-4'>
                <Link href="urzadzenia-pralnicze-samoobslugowe/suszarki"><h3 className=''>Suszarki</h3></Link>
              </div>
              {/** Małe profesjonalne zestawy samoobsługowe pralnicowirówka - suszarka */}
              <div className='border p-4'>
                <Link href="urzadzenia-pralnicze-samoobslugowe/male-profesjonalne-zestawy-pralko-suszarka">
                  <h3 className=''>Małe, <b>profesjonalne zestawy samoobsługowe</b>, idealne do obiektów o małej powierzchni pralni użytkowej. </h3>
                </Link>
                <p>Zestaw samoobsługowy składający się z pralnicowirówki i dopasowanej do niej, ustawianej na pralnicowirówce, suszarce bębnowej.</p>
              </div>
              {/** Prasownice walcowe */}
              <div className='border  p-4'>
                <Link href="urzadzenia-pralnicze-samoobslugowe/prasownice-walcowe"><h3 className=''>Prasownice walcowe</h3></Link>
              </div>
              {/** Małe profesjonalne pralnicowirówki samoobsługowe */}
              <div className='border p-4'>
                <Link href="urzadzenia-pralnicze-samoobslugowe/male-profesjonalne-pralnicowirowki">
                  <h3 className=''>Małe, <b>profesjonalne pralnicowirówki samoobsługowe</b>, idealne do apartamentów, akademików, domów opiekuńczzych ...</h3>
                </Link>
                <p>Pralnicowirówki dostępne z dopasowaną suszarką, tworzą idealny zestaw do pralni samoobsługowej.</p>
              </div>
              {/** Małe profesjonalne suszarki samoobsługowe */}
              <div className='border p-4'>
                <Link href="urzadzenia-pralnicze-samoobslugowe/male-profesjonalne-suszarki">
                  <h3 className=''>Małe, <b>profesjonalne suszarki samoobsługowe</b>, idealne do apartamentów, akademików, domów opiekuńczzych ...</h3>
                </Link>
                <p>Suszarki dostępne z dopasowaną pralnicowirówką, tworzą idealny zestaw do pralni samoobsługowej.</p>
              </div>
              {/** Małe profesjonalne zestawy samoobsługowe suszarka - suszarka */}
              <div className='border p-4'>
                <Link href="urzadzenia-pralnicze-samoobslugowe/male-profesjonalne-zestawy-suszarko-suszarka">
                  <h3 className=''>Małe, <b>profesjonalne zestawy samoobsługowe</b>, idealne do obiektów o małej powierzchni pralni użytkowej. </h3>
                </Link>
                <p>Zestaw samoobsługowy składający się z 2 suszarke bębnowych, tworzących słupek pralniczy</p>
              </div>

            </div>
          </div>:null}
          {/** czesci */}
          {/** warsztat */}
          {/** nowosci */}
          {/** okazje */}
          {/** polecane */}
        </section>
      </nav>
  );
};

export default Navigation;
