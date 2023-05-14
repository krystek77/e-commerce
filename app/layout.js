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
        <Menu/>
        <main className=''>{children}</main>
      </body>
    </html>
  );
}