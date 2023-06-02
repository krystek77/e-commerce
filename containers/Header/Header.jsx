"use client"
import {useState} from 'react'
import { SearchForm } from "@components";
import { Navigation } from '@containers';
import Image from "next/image";
import Link from "next/link";
import { images } from "@public/assets/images";
import { BsFillPersonFill } from '@react-icons/all-files/bs/BsFillPersonFill';
import {AiOutlineMenu} from '@react-icons/all-files/ai/AiOutlineMenu';
import {MdShoppingCart} from '@react-icons/all-files/md/MdShoppingCart';

const Header = () => {
  const [isOpenNavigation,setIsOpenNavigation] = useState(false);
  const handleOpenNavigation = ()=> { setIsOpenNavigation(true); }
  const handleCloseNavigation =() => { setIsOpenNavigation(false) }
  return (
    <>
      <header className="py-8 lg:px-0">
        <div className="container mx-auto">
          {/** page tool */}
          <div className="flex justify-between items-center flex-nowrap px-4">
            {/** logo type */}
            <div className="hidden lg:block lg:flex-1">
              <Link href="/" className="block w-64 h-auto">
                <Image
                  className="object-cover w-full h-full object-center"
                  src={images.LOGO_BLACK_ON_TRANSPARENT}
                  alt="Części zamienne do przemysłowych urządzeń pralniczych"
                />
              </Link>
            </div>
            {/** logo */}
            <div className="lg:hidden">
              <Link href="/" className="block w-20 h-auto">
                <Image
                  className="object-cover w-full h-full object-center"
                  src={images.LOGO_BLACK_ON_TRANSPARENT_ICON}
                  alt="Części zamienne do przemysłowych urządzeń pralniczych"
                />
              </Link>
            </div>
            {/** hamburger */}
            <button
              onClick={handleOpenNavigation}
              type="button"
              className="justify-self-center mx-4 flex justify-center rounded-md focus-element lg:hidden group"
            >
              <AiOutlineMenu className="w-10 h-10 text-black group-hover:text-black-light transition-element" />
            </button>
            {/** search form */}
            <div className="hidden lg:block flex-1">
              <SearchForm id="searchOnLarge" name="searchOnLarge" />
            </div>
            <div className="flex items-center justify-end lg:flex-1">
              <div className="whitespace-nowrap flex flex-col md:flex-row justify-center items-center pr-4 border-r border-slate-100">
                <div className="border border-accent-dark bg-accent p-1 rounded-full mr-2 mb-1 md:mb-0">
                  <BsFillPersonFill className="w-8 h-8 text-white" />
                </div>
                <p className="whitespace-nowrap  text-sm md:text-base font-semibold">
                  zaloguj się
                </p>
              </div>
              <div className="whitespace-nowrap flex flex-col md:flex-row justify-center items-center pl-4 ">
                <div className="p-1 mr-2 mb-1 md:mb-0">
                  <MdShoppingCart className="w-8 h-8 text-black-medium" />
                </div>
                <p className="whitespace-nowrap  text-sm md:text-base font-semibold">
                  Twój koszyk
                </p>
              </div>
            </div>
          </div>
          {/** search form */}
          <div className="lg:hidden w-full mt-2 lg:mt-0">
            <SearchForm id="searchOnSmall" name="searchOnSmall" />
          </div>
        </div>
      </header>
      <Navigation isOpenNavigation={isOpenNavigation} handleCloseNavigation={handleCloseNavigation} />
    </>
  );
};
export default Header;
