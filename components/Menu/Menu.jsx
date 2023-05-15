
'use client'
import {useState} from 'react';
import {BsChevronBarLeft ,BsChevronBarRight} from 'react-icons/bs';
import {MdClose } from 'react-icons/md';
import Link from 'next/link';
import { Toolbar } from '@components';

const Menu = () => {
  const [idSubmenu,setIdSubmenu] = useState("")
  const [isOpenMenu,setIsOpenMenu] = useState(false);

  const handleCloseMenu = () => setIsOpenMenu(false);
  const handleOpenMenu = () => setIsOpenMenu(true);
  const handleOpenSubmenu = (event) => setIdSubmenu(event.currentTarget.id)
  const handleCloseSubmenu = () => setIdSubmenu("");
  const handleBackToMenu = (event) => {
    event.stopPropagation();
    setIdSubmenu("");
  }

  return (
    <div className="">
      <Toolbar handleOpenMenu={handleOpenMenu}/>
      {isOpenMenu ? (
      <nav className="md:hidden w-screen fixed top-0 left-0 z-[100] h-screen overflow-y-scroll overflow-x-hidden bg-white">
        <div className="">
          <div className="px-4 py-2 flex justify-between items-center bg-black">
            <div className="text-white"><Link href="/">LOGO</Link></div>
            <button type="button" title="zamknij menu" role="close menu" onClick={handleCloseMenu}>
              <MdClose className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-[200%] -translate-x-1/4 h-[35%] bg-gradient-linear-primary rounded-tr-[50%] rounded-tl-[50%]"></div>
          <ul className="px-4 pt-8 text-black bg-white bg-opacity-10 font-medium text-sm h-auto relative">
            <li
              className="flex justify-between items-center py-2 border-b border-black-light"
              id="pralnice"
              onClick={handleOpenSubmenu}
            >
              <span>Pralnice</span>
              <span>
                <BsChevronBarRight />
              </span>
              {/** submenu */}
              <div
                className={
                  idSubmenu === 'pralnice'
                    ? 'absolute top-0 right-0 w-full bg-white h-[calc(100vh_-_40px)] transition-all duration-150'
                    : 'absolute top-0 translate-x-full w-full bg-white h-[calc(100vh_-_40px)] transition-all duration-150'
                }
              >
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
                  <li className="flex justify-start items-center py-2 border-b border-black-light">
                    <Link onClick={handleCloseMenu} href="/urzadzenia-pralnicze/pralnice">
                      <b className="mr-2">Wszystkie:</b>pralnice
                    </Link>
                  </li>
                  <li className="flex justify-start items-center py-2 border-b border-black-light">
                    <Link href="/urzadzenia-pralnicze/pralnice/pralnic-bebnowe-czolowe">
                      bębnowe o załadunku czołowym
                    </Link>
                  </li>
                  <li className="flex justify-start items-center py-2">
                    <Link href="/urzadzenia-pralnicze/pralnice/pralnic-bebnowe-boczne">
                      bębnowe o załadunku bocznym
                    </Link>
                  </li>
                </ul>
              </div>
              {/** end submenu */}
            </li>
            <li
              className="flex justify-between items-center py-2 border-b border-black-light"
              id="wirowki-pralnicze"
              onClick={handleOpenSubmenu}
            >
              <span>Wirówki pralnicze</span>
              <span>
                <BsChevronBarRight />
              </span>
              {/** submenu */}
              <div
                className={
                  idSubmenu === 'wirowki-pralnicze'
                    ? 'absolute top-0 right-0 w-full bg-white h-[calc(100vh_-_40px)] transition-all duration-150'
                    : 'absolute top-0 translate-x-full w-full bg-white h-[calc(100vh_-_40px)] transition-all duration-150'
                }
              >
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
                  <li className="flex justify-start items-center py-2 border-b border-black-light">
                    <Link onClick={handleCloseMenu} href="/urzadzenia-pralnicze/wirowki-pralnicze">
                      <b className="mr-2">Wszystkie:</b>wirówki pralnicze
                    </Link>
                  </li>
                </ul>
              </div>
              {/** end submenu */}
            </li>
            <li className="flex justify-between items-center py-2 border-b border-black-light">
              <span>Pralnicowirówki</span>
              <span>
                {' '}
                <BsChevronBarRight />{' '}
              </span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-black-light">
              <span>Suszarki</span>
              <span>
                {' '}
                <BsChevronBarRight />{' '}
              </span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-black-light">
              <span>Prasownice</span>
              <span>
                <BsChevronBarRight />
              </span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-black-light">
              <span>Bariery Higieny</span>
              <span>
                <BsChevronBarRight />
              </span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-black-light">
              <span>Wózki i Regały</span>
              <span>
                <BsChevronBarRight />
              </span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-black-light">
              <span>Akcesoria</span>
              <span>
                <BsChevronBarRight />
              </span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-black-light">
              <span>Nowości</span>
              <span>
                <BsChevronBarRight />
              </span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-black-light">
              <span>Okazje</span>
              <span>
                <BsChevronBarRight />
              </span>
            </li>
            <li className="flex justify-between items-center py-2">
              <span>Polecane</span>
              <span>
                <BsChevronBarRight />
              </span>
            </li>
          </ul>
        </div>
      </nav>
      ) : null}
      <nav className="hidden md:block border-t border-b border-black-light w-full relative z-[100]">
        <ul className="text-black bg-white font-normal text-sm xl:text-base flex flex-center flex-wrap">
          <li className={`relative px-4 py-2 ${idSubmenu === "pralnice" && "triangle"}`} id="pralnice">
            <Link onPointerEnter={handleOpenSubmenu} onClick={handleCloseSubmenu} id="pralnice" className="whitespace-nowrap" href="/urzadzenia-pralnicze/pralnice">Pralnice</Link>
            <div 
              onPointerLeave={handleCloseSubmenu} 
              className={idSubmenu==="pralnice"?"absolute top-full left-0 p-4 shadow-md rounded-br-sm rounded-bl-sm border-t-4 border-t-primary h-auto transition-all duration-150 ease-in-out bg-white":"absolute top-full left-0 h-0 max-h-[1000px] overflow-hidden"}>
                  <h1 className="border-l-2 border-black pl-2 whitespace-nowrap font-light mb-2">bębnowe o załadunku czołowym</h1>
                  <p className="font-extralight text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt quae maiores, alias architecto at sit deserunt cupiditate reprehenderit impedit voluptatibus exercitationem, rem quasi ipsum, unde aliquam quibusdam sed. Quidem.</p>
                  <h1 className="border-l-2 border-black pl-2 whitespace-nowrap font-light mb-2">bębnowe o załadunku bocznym</h1>
                  <p className="font-extralight text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt quae maiores, alias architecto at sit deserunt cupiditate reprehenderit impedit voluptatibus exercitationem, rem quasi ipsum, unde aliquam quibusdam sed. Quidem.</p>
            </div>
          </li>
          <li className={`relative px-4 py-2 ${idSubmenu === "wirowki-pralnicze" && "triangle"}`} id="wirowki-pralnicze">
            <Link onPointerEnter={handleOpenSubmenu} onClick={handleCloseSubmenu} id="wirowki-pralnicze" className="whitespace-nowrap" href="/urzadzenia-pralnicze/wirowki-pralnicze">Wirówki</Link>
            <div 
              onPointerLeave={handleCloseSubmenu} 
              className={idSubmenu==="wirowki-pralnicze"?"absolute top-full left-0 p-4 shadow-md rounded-br-sm rounded-bl-sm border-t-4 border-t-primary h-auto transition-all duration-150 ease-in-out bg-white":"absolute top-full left-0 h-0 max-h-[1000px] overflow-hidden"}>
              <h1 className="border-l-2 border-black pl-2 whitespace-nowrap font-light">submenu wirówki pralnicze</h1>
              <p className="font-extralight text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt quae maiores, alias architecto at sit deserunt cupiditate reprehenderit impedit voluptatibus exercitationem, rem quasi ipsum, unde aliquam quibusdam sed. Quidem.</p>
            </div>
          </li>
          <li className="relative px-4 py-2" id="pralnicowirowki"> <Link className="whitespace-nowrap" href="/urzadzenia-pralnicze/pralnicowirowki">Pralnicowirówki</Link></li>
          <li className="relative px-4 py-2" id="suszarki"> <Link className="whitespace-nowrap" href="/urzadzenia-pralnicze/suszarki">Suszarki</Link></li>
          <li className="relative px-4 py-2" id="prasownice" > <Link className="whitespace-nowrap" href="/urzadzenia-pralnicze/prasownice">Prasownice</Link></li>
          <li className="relative px-4 py-2" id="bariery-higieny" > <Link className="whitespace-nowrap" href="/urzadzenia-pralnicze/bariery-higieny">Bariery Higieny</Link></li>
          <li className="relative px-4 py-2" id="wozki-i-regaly" > <Link className="whitespace-nowrap" href="/urzadzenia-pralnicze/wozki-i-regaly">Wózki i Regały</Link></li>
          <li className="relative px-4 py-2" id="akcesoria" > <Link className="whitespace-nowrap" href="/urzadzenia-pralnicze/akcesoria">Akcesoria</Link></li>
          <li className="relative px-4 py-2" id="nowosci" > <Link className="whitespace-nowrap" href="/urzadzenia-pralnicze/nowosci">Nowości</Link></li>
          <li className="relative px-4 py-2" id="okazje" > <Link className="whitespace-nowrap" href="/urzadzenia-pralnicze/okazje">Okazje</Link></li>
          <li className="relative px-4 py-2" id="polecane" > <Link className="whitespace-nowrap" href="/urzadzenia-pralnicze/polecane">Polecane</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu