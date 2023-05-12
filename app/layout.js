import '@styles/globals.css';
import {Montserrat} from 'next/font/google'

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
        <main>{children}</main>
      </body>
    </html>
  );
}