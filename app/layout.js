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
        <div className='container mx-auto flex py-8 border justify-center flex-wrap'>
          <ProductCard color="gold"/>
          <ProductCard color="primary"/>
          <ProductCard color="accent"/>
          <ProductCard color="accent"/>
          <ProductCard color="green"/>
          <ProductCard color="green"/>
        </div>
      </body>
    </html>
  );
}