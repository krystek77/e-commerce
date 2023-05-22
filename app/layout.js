import '@styles/globals.css';
import {Advantages,Header, ProductCard} from '@components'


export const metadata = {
    title:"E-commerce",
    description:"Industrial Laundry Systems"
}

export default function RootLayout({children}) {

  return (
    <html lang="pl" className="font-html text-black">
      <body>
        <Advantages />
        <Header />
        {children}
      </body>
    </html>
  );
}