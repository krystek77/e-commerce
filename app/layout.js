import '@styles/globals.css';
import {Advantages} from '@components'

export const metadata = {
    title:"E-commerce",
    description:"Industrial Laundry Systems"
}



export default function RootLayout({children}) {
 
  return (
    <html lang="pl" className="font-html">
      <body>
        <Advantages />
        {children}
      </body>
    </html>
  );
}