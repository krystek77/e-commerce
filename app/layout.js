import '@styles/globals.css';

export const metadata = {
    title:"E-commerce",
    description:"Industrial Laundry Systems"
}

export default function RootLayout({children}) {
  return (
    <main>{children}</main>
  )
}