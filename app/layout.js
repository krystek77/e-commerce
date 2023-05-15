import {Montserrat} from 'next/font/google'
import {Menu} from '@components'
import '@styles/globals.css';

export const metadata = {
    title:"E-commerce",
    description:"Industrial Laundry Systems"
}

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable:"--font-montserrat"
});

export default function RootLayout({children}) {
  return (
    <html className={montserrat.className} lang='pl'>
      <body>
        <div className="h-20 bg-black-light w-full"></div>
        <div className="h-40 bg-white w-full"></div>
        <Menu/>
        <main className='w-full pt-[56px]'>{children}</main>
      </body>
    </html>
  );
}