import Link from 'next/link'
import {MdMenuOpen,MdPerson,MdOutlineShoppingCart} from 'react-icons/md';

const Toolbar = ({handleOpenMenu}) => {
  return (
    <div className="toolbar px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center max-w-lg mx-auto md:max-w-full py-2">
            <div className="text-black">
            <Link href="/">LOGO</Link>
            </div>
            <div className="hidden md:block w-full max-w-2xl px-4 "><label className=""><input className="border border-black-light bg-slate-100 rounded-full w-full px-8 py-2 text-base" type="search"/></label></div>
            <div className="flex justify-end items-center flex-nowrap">
                <button className="flex flex-col flex-center px-2 py-2 mx-1" type="button"><span><MdPerson className="w-6 h-6"/></span><span className="text-[10px] whitespace-nowrap">moje konto</span></button>
                <button className="flex flex-col flex-center px-2 py-2 mx-1 md:mx-0" type="button"><span><MdOutlineShoppingCart className="w-6 h-6"/></span><span className="text-[10px] whitespace-nowrap">koszyk</span></button>
                <button
                    className="md:hidden border rounded-full p-1 bg-black cursor-pointer group hover:bg-black-light"
                    type="button"
                    title="otwórz menu"
                    role="open menu"
                    onClick={handleOpenMenu}
                >
                    <MdMenuOpen className="w-6 h-6 text-white group-hover:text-black" />
                </button>
            </div>
        </div>
        <div className="max-w-lg mx-auto md:hidden">
            <div className="w-full"><label className=""><input className="border border-black-light bg-slate-100 rounded-full w-full px-8 py-2 text-base" type="search"/></label></div>
        </div>
    </div>
  );
}

export default Toolbar;