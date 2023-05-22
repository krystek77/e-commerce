'use client';
import {useState} from 'react'
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import Links from '@utils/navigation';
import { images } from "@public/assets/images";
import {BsChevronBarLeft} from '@react-icons/all-files/bs/BsChevronBarLeft';
import {BsChevronBarRight} from '@react-icons/all-files/bs/BsChevronBarRight';
import {MdClose } from '@react-icons/all-files/md/MdClose';
import Image from 'next/image';

const Navigation = ({isOpenNavigation,handleCloseNavigation}) => {
const [index,setIndex] = useState("");
const [id,setId] = useState("");
const segments = useSelectedLayoutSegments();

const handleOpenSubmenu = (event) => { setIndex(event.currentTarget.id); };
const handleCloseSubmenu = (event) => {
  if (event.currentTarget.id) {
    const DOMRectLink = event.currentTarget.getBoundingClientRect();
    if (event.clientY < DOMRectLink.bottom) setIndex("");
  } else setIndex("");
};

const handleOpenSmallDevicesSubnavigation = (event) => {
  console.log(event.currentTarget.id)
  console.log()
  setId(event.currentTarget.id)
}

const handleBackToMenu = (event) => {
  event.stopPropagation();
  setId("");
}

  return (
    <>
      {/** small devices navigation */}
      {isOpenNavigation ? (
        <nav className="lg:hidden w-screen h-screen fixed top-0 left-0 z-[100] overflow-x-hidden bg-white">
          <div className="">
            {/** topbar */}
            <div className="flex justify-between items-center border-b border-black-light px-8">
              <Link
                href="/"
                className="block w-20 h-auto"
                onClick={handleCloseNavigation}
              >
                <Image
                  className="object-cover w-full h-full object-center"
                  src={images.LOGO_BLACK_ON_TRANSPARENT_ICON}
                  alt="Części zamienne do przemysłowych urządzeń pralniczych"
                />
              </Link>
              <button type="button" onClick={handleCloseNavigation}>
                <MdClose className="w-10 h-10 text-black" />
              </button>
            </div>
            {/** navigation */}
            <ul className='px-8'>
              {Links.map((item) => (
                <li key={item._id} onClick={handleOpenSmallDevicesSubnavigation} id={item.label} className='flex justify-between items-center py-2 border-b border-black-light' >
                  <span>{item.label}</span>
                  <span><BsChevronBarRight/></span>
                  <div className={id===item.label ? 'px-8 absolute top-[81px] left-0 w-screen h-[calc(100vh_-_81px)] bg-white transition-element':'px-8 absolute translate-x-full top-[81px] w-screen h-[calc(100vh_-_81px)] bg-white transition-element'}>
                    <ul className="px-4">
                      {/** back */}
                      <li
                        onClick={handleBackToMenu}
                        className="flex justify-start items-center py-2 border-b border-black-light"
                      >
                        <span className="mr-2">
                          <BsChevronBarLeft />
                        </span>
                        <span>wróć</span>
                      </li>
                      {/** end back */}
                      {/**  */}
                      <li className="flex justify-start items-center py-2 border-b border-black-light">
                        <Link onClick={handleCloseNavigation} href={item.url}>
                          <b className="mr-2">Wszystkie:</b>{item.label.toLowerCase()}
                        </Link>
                      </li>

                      {item.categories.length ? item.categories.map((cat,index)=>(<li onClick={handleCloseNavigation} className={index === item.categories.length-1 ?'py-2':'py-2 border-b border-black-light'} key={`${item._id}-${cat._id}`}>
                        <Link href={`${item.url}/${cat.url}`}>{cat.label}</Link>
                      </li>)):null}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      ) : null}
      {/** large devices navigation */}
      <nav className="relative border-b border-slate-100 hidden lg:block">
        <ul
          className={`container mx-auto border-t border-slate-100 flex justify-center items-center relative z-10`}
        >
          {Links.map((item) => (
            <li
              key={item._id}
              onPointerEnter={handleOpenSubmenu}
              onPointerLeave={handleCloseSubmenu}
              id={item._id}
            >
              <Link
                className={`py-4 px-4 mx-2 block font-accent font-bold uppercase rounded-tr-md rounded-tl-md transition-element hover-element ${
                  segments[1] === item.url
                    ? 'active-navigation'
                    : 'focus-element'
                } `}
                href={item.url}
              >
                {' '}
                {item.label}{' '}
              </Link>
            </li>
          ))}
        </ul>
        {/** subnavigation */}
        <section
          onClick={handleCloseSubmenu}
          className={
            index !== ''
              ? 'absolute top-full left-0 w-full h-auto transition-element mt-4'
              : 'absolute top-full left-0 w-full h-0 max-h-[1000px] overflow-hidden transition-element'
          }
        >
          {/** urzadzenia-pralnicze */}
          {index === '1' ? (
            <div
              onPointerLeave={handleCloseSubmenu}
              className="container mx-auto px-4 py-8 bg-white shadow-lg rounded-md border border-black-light"
            >
              <div className="grid grid-cols-4 gap-4">
                {/** pralnice */}
                <div className="border p-4 rounded-md border-black-light bg-slate-50">
                  <Link href="urzadzenia-pralnicze/pralnice">
                    <h3 className="">Pralnice</h3>
                  </Link>
                  <div className="flex flex-col justify-center items-start">
                    <Link
                      href="urzadzenia-pralnicze/pralnice?type=pralnice bębnowe o załadunku czołowym"
                      className="block py-1 font-light text-base"
                    >
                      pralnice bębnowe o załadunku czołowym
                    </Link>
                    <Link
                      href="urzadzenia-pralnicze/pralnice?type=pralnice bębnowe o załadunku bocznym"
                      className="block py-1 font-light text-base"
                    >
                      pralnice bębnowe o załadunku bocznym
                    </Link>
                    <Link
                      href="urzadzenia-pralnicze/pralnice?type=pralnice bębnowe specjalne o załadunku czołowym"
                      className="block py-1 font-light text-base"
                    >
                      pralnice bębnowe specjalne o załadunku czołowym
                    </Link>
                    <Link
                      href="urzadzenia-pralnicze/pralnice?type=pralnice bębnowe specjalne o załadunku bocznym"
                      className="block py-1 font-light text-base"
                    >
                      pralnice bębnowe specjalne o załadunku bocznym
                    </Link>
                  </div>
                </div>
                {/** pralnicowirówki */}
                <div className="border col-span-2 p-4 rounded-md border-black-light bg-slate-50">
                  <Link href="">
                    <h3 className="">Pralnicowirówki</h3>
                  </Link>
                  <div className="flex flex-col justify-center items-start">
                    <Link href="" className="block py-1 font-light text-base">
                      pralnicowirówki normalnoobrotowe
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      pralnicowirówki szybkoobrotowe
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      pralnicowirówki wysokoobrotowe
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      pralnicowirówki normalnoobrotowe o załadunku bocznym
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      pralnicowirówki wysokoobrotowe o załadunku bocznym
                    </Link>
                  </div>
                </div>
                {/** Prasownice */}
                <div className="border p-4 rounded-md border-black-light bg-slate-50">
                  <Link href="">
                    <h3 className="">Prasownice</h3>
                  </Link>
                  <div className="flex flex-col justify-center items-start">
                    <Link href="" className="block py-1 font-light text-base">
                      prasownice nieckowe
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      prasownice walcowe
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      prasownice walcowe z przednim lub tylnym wywiezieniem
                      prania
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      prasownice walcowe ze składarką wzdłużną
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      prasownice walcowe ze składarką wzdłużną i podawarką
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      prasownice nieckowe wielowałkowe
                    </Link>
                  </div>
                </div>
                {/** empty */}
                <div className="border p-4 rounded-md border-black-light bg-slate-50"></div>
                {/** Suszarki */}
                <div className="border col-span-3 p-4 rounded-md border-black-light bg-slate-50">
                  <Link href="">
                    <h3 className="">Suszarki</h3>
                  </Link>
                  <div className="flex flex-col justify-center items-start">
                    <Link href="" className="block py-1 font-light text-base">
                      suszarki bębnowe
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      suszarki komorowe
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      suszarki z pompą ciepła
                    </Link>
                  </div>
                </div>
                {/** wirówki */}
                <div className="border p-4 rounded-md border-black-light bg-slate-50">
                  <Link href="">
                    <h3 className="">Wirówki</h3>
                  </Link>
                </div>
                {/** Bariery higieny */}
                <div className="border p-4 rounded-md border-black-light bg-slate-50">
                  <Link href="">
                    <h3 className="">Bariery higieny</h3>
                  </Link>
                  <div className="flex flex-col justify-center items-start">
                    <Link href="" className="block py-1 font-light text-base">
                      pralnicowirówki normalnoobrotowe
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      pralnicowirówki wysokoobrotowe
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      pralnice z barierą higieny
                    </Link>
                  </div>
                </div>
                {/** wózki i regały */}
                <div className="border col-span-2 p-4 rounded-md border-black-light bg-slate-50">
                  <Link href="">
                    <h3 className="">Wózki i Regały</h3>
                  </Link>
                  <div className="flex flex-col justify-center items-start">
                    <Link href="" className="block py-1 font-light text-base">
                      wózki na suche bądź brudne pranie
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      wózki na mokre pranie
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      urządzenia do składowania prania
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      urządzenia do transportu prania - kontenery
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      pozostałe
                    </Link>
                  </div>
                </div>
                {/** małe profesjonalne pralnicowirówki */}
                <div className="border p-4 rounded-md border-black-light bg-slate-50">
                  <Link href="urzadzenia-pralnicze/male-profesjonalne-pralnicowirowki">
                    <h3 className="">
                      Małe, <b>profesjonalne pralnicowirówki</b>, idealne do
                      apartamentów, akademików, domów opiekuńczzych ...
                    </h3>
                  </Link>
                  <p>
                    Pralnicowirówki dostępne z dopasowaną suszarką, tworzą
                    idealny zestaw do niewielkiej pralni przemysłowej.
                  </p>
                </div>
                {/** małe profesjonalne suszarki */}
                <div className="border p-4  rounded-md border-black-light bg-slate-50">
                  <Link href="urzadzenia-pralnicze/male-profesjonalne-suszarki">
                    <h3 className="">
                      Małe, <b>profesjonalne suszarki</b>, idealne do
                      apartamentów, akademików, domów opiekuńczzych ...
                    </h3>
                  </Link>
                  <p>
                    Suszarki dostępne z dopasowaną pralnicowirówką, tworzą
                    idealny zestaw do niewielkiej pralni przemysłowej.
                  </p>
                </div>
                {/** zestaw pralnicowirówka - suszark */}
                <div className="border p-4  rounded-md border-black-light bg-slate-50">
                  <Link href="urzadzenia-pralnicze/male-profesjonalne-zestawy-pralnicowirowka-suszarka">
                    <h3 className="">
                      Małe, <b>profesjonalne zestawy</b>, idealne do obiektów o
                      małej powierzchni pralni użytkowej.{' '}
                    </h3>
                  </Link>
                  <p>
                    Zestaw składający się z pralnicowirówki i dopasowanej,
                    ustawianej na pralnicowirówce, suszarce bębnowej
                  </p>
                </div>
                {/** zestaw suszarka - suszark */}
                <div className="border p-4  rounded-md border-black-light bg-slate-50">
                  <Link href="urzadzenia-pralnicze/male-profesjonalne-zestawy-suszarko-suszarka">
                    <h3 className="">
                      Małe, <b>profesjonalne zestawy</b>, idealne do obiektów o
                      małej powierzchni pralni użytkowej.{' '}
                    </h3>
                  </Link>
                  <p>
                    Zestaw składający się z 2 suszarke bębnowych, tworzących
                    słupek pralniczy
                  </p>
                </div>
                {/** prasowanie fasonowe */}
                <div className="border col-span-4 py-4  rounded-md border-black-light bg-slate-50">
                  <Link href="urzadzenia-pralnicze/prasowanie-fasonowe">
                    <h3 className="">Prasowanie fasonowe</h3>
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
          {/** urzadzenia-pralnicze-samoobslugowe */}
          {index === '2' ? (
            <div
              onPointerLeave={handleCloseSubmenu}
              className="container mx-auto px-4 py-8 bg-white shadow-lg rounded-md border border-black-light"
            >
              <div className="grid grid-cols-3 gap-4">
                {/** Pralnicowirówki samoobsługowe */}
                <div className="border p-4 rounded-md border-accent-dark bg-accent-light bg-opacity-25">
                  <Link href="urzadzenia-pralnicze-samoobslugowe/pralnicowirowki">
                    <h3 className="">Pralnicowirówki</h3>
                  </Link>
                  <div className="flex flex-col justify-center items-start">
                    <Link href="" className="block py-1 font-light text-base">
                      pralnicowirówki normalnoobrotowe
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      pralnicowirówki szybkoobrotowe
                    </Link>
                    <Link href="" className="block py-1 font-light text-base">
                      pralnicowirówki wysokoobrotowe
                    </Link>
                  </div>
                </div>
                {/** Suszarki samoobsługowe */}
                <div className="border  p-4 rounded-md border-accent-dark bg-accent-light bg-opacity-25">
                  <Link href="urzadzenia-pralnicze-samoobslugowe/suszarki">
                    <h3 className="">Suszarki</h3>
                  </Link>
                </div>
                {/** Małe profesjonalne zestawy samoobsługowe pralnicowirówka - suszarka */}
                <div className="border p-4 rounded-md border-accent-dark bg-accent-light bg-opacity-25">
                  <Link href="urzadzenia-pralnicze-samoobslugowe/male-profesjonalne-zestawy-pralko-suszarka">
                    <h3 className="">
                      Małe, <b>profesjonalne zestawy samoobsługowe</b>, idealne
                      do obiektów o małej powierzchni pralni użytkowej.{' '}
                    </h3>
                  </Link>
                  <p>
                    Zestaw samoobsługowy składający się z pralnicowirówki i
                    dopasowanej do niej, ustawianej na pralnicowirówce, suszarce
                    bębnowej.
                  </p>
                </div>
                {/** Prasownice walcowe */}
                <div className="border  p-4 rounded-md border-accent-dark bg-accent-light bg-opacity-25">
                  <Link href="urzadzenia-pralnicze-samoobslugowe/prasownice-walcowe">
                    <h3 className="">Prasownice walcowe</h3>
                  </Link>
                </div>
                {/** Małe profesjonalne pralnicowirówki samoobsługowe */}
                <div className="border p-4 rounded-md border-accent-dark bg-accent-light bg-opacity-25">
                  <Link href="urzadzenia-pralnicze-samoobslugowe/male-profesjonalne-pralnicowirowki">
                    <h3 className="">
                      Małe, <b>profesjonalne pralnicowirówki samoobsługowe</b>,
                      idealne do apartamentów, akademików, domów opiekuńczzych
                      ...
                    </h3>
                  </Link>
                  <p>
                    Pralnicowirówki dostępne z dopasowaną suszarką, tworzą
                    idealny zestaw do pralni samoobsługowej.
                  </p>
                </div>
                {/** Małe profesjonalne suszarki samoobsługowe */}
                <div className="border p-4 rounded-md border-accent-dark bg-accent-light bg-opacity-25">
                  <Link href="urzadzenia-pralnicze-samoobslugowe/male-profesjonalne-suszarki">
                    <h3 className="">
                      Małe, <b>profesjonalne suszarki samoobsługowe</b>, idealne
                      do apartamentów, akademików, domów opiekuńczzych ...
                    </h3>
                  </Link>
                  <p>
                    Suszarki dostępne z dopasowaną pralnicowirówką, tworzą
                    idealny zestaw do pralni samoobsługowej.
                  </p>
                </div>
                {/** Małe profesjonalne zestawy samoobsługowe suszarka - suszarka */}
                <div className="border p-4 rounded-md border-accent-dark bg-accent-light bg-opacity-25">
                  <Link href="urzadzenia-pralnicze-samoobslugowe/male-profesjonalne-zestawy-suszarko-suszarka">
                    <h3 className="">
                      Małe, <b>profesjonalne zestawy samoobsługowe</b>, idealne
                      do obiektów o małej powierzchni pralni użytkowej.{' '}
                    </h3>
                  </Link>
                  <p>
                    Zestaw samoobsługowy składający się z 2 suszarke bębnowych,
                    tworzących słupek pralniczy
                  </p>
                </div>
              </div>
            </div>
          ) : null}
          {/** czesci */}
          {/** warsztat */}
          {/** nowosci */}
          {/** okazje */}
          {/** polecane */}
        </section>
      </nav>
    </>
  );
};

export default Navigation;
