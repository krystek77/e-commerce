import '@styles/globals.css';
import {Advantages,Header,Navigation} from '@components'

export const metadata = {
    title:"E-commerce",
    description:"Industrial Laundry Systems"
}



export default function RootLayout({children}) {
 
  return (
    <html lang="pl" className="font-html text-black">
      <body>
        <Advantages />
        <Header/>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}