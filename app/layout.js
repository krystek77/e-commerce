import {Montserrat} from 'next/font/google'
import {Menu,Header} from '@components'
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
    <html className={montserrat.className} lang="pl">
      <body>
        <Header />
        <Menu />
        <main className="w-full pt-[56px]">{children}</main>
      </body>
    </html>
  );
}